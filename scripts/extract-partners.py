import os
import json
import sys
import uuid

import requests
import time


class JsonArray:
    def __init__(self):
        self.data = []
        self.ids = []

    def add(self, data):
        self.data.append(data)

    def remove(self, data):
        self.data.remove(data)

    def toJson(self):
        res = []
        for line in self.data:
            res.append(line.toJson())
        return res

    def createJson(self):
        with open(sys.argv[2], "w") as f:
            f.write(json.JSONEncoder(indent=2, ensure_ascii=False).encode(self.toJson()))

    def findElement(self, name):
        for element in self.data:
            if element.name == name:
                return element
        return None


class JsonData:
    def __init__(self):
        self.id = None
        self.name = None
        self.logo = None
        self.phone = None
        self.website = None
        self.address = None
        self.city = None
        self.postal_code = None
        self.country = None
        self.category = None
        self.members_benefits = None
        self.benefits_conditions = None
        self.latitude = None
        self.longitude = None

    def toJson(self):
        res =  {
                "id" : self.id,
                "name" : self.name,
                "logo" : self.logo,
                "phone" : self.phone,
                "website" : self.website,
                "address" : self.address,
                "city" : self.city,
                "postal_code" : self.postal_code,
                "country" : self.country,
                "category" : self.category,
                "members_benefits" : self.members_benefits,
                "benefits_conditions" : self.benefits_conditions,

            }
        if self.latitude is not None:
            res["latitude"] = self.latitude
        if self.longitude is not None:
            res["longitude"] = self.longitude
        return res;

    def getLatitudeLongitude(self):
        if self.city != '' and self.postal_code != '':
            url = 'https://nominatim.openstreetmap.org/search'
            params = {
                'street' : self.address,
                'city' : self.city,
                'postalcode' : self.postal_code,
                'country' : self.country,
                'format' : 'json',
            }
            response = requests.get(url, params=params, headers={"Content-Type": "application/json", "Accept": "application/json", "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15"})

            results = response.json()  # to extract the detail from response

            if len(results) > 0:
                self.latitude = results[0]['lat']
                self.longitude = results[0]['lon']
            time.sleep(1)
    def importDataFromOldJson(self, data):
        self.id = data['id']
        self.name = data['name']
        self.logo = data['logo']
        self.phone = data['phone']
        self.website = data['website']
        self.address = data['address']
        self.city = data['city']
        self.postal_code = data['postal_code']
        self.country = data['country']
        self.category = data['category']
        self.members_benefits = data['members_benefits']
        self.benefits_conditions = data['benefits_conditions']
        if 'latitude' in data:
            self.latitude = data['latitude']
            self.longitude = data['longitude']

class CsvData:
    def __init__(self, data):
        self.id = data['Id de l’enregistrement']
        self.nom = data['Nom du Compte']
        self.contratUpload = data['contrat uploadé']
        self.contratSigne = data['contrat signé']
        self.logoUpload = data['Logo/PLV uploadé']
        self.typeConvention = data['Type de convention']
        self.url = data['Site Web']
        self.tel = data['Téléphone']
        self.adresse = data['Adresse']
        self.ville = data['Ville']
        self.codePostal = data['Code postal']
        self.pays = data['Pays']
        self.secteurActivite = data["Sécteur d'activité"]
        self.avantageAdherent = data['Avantage(s) adherent']
        self.commentObtenirAvantage = data['Comment obtenir son avantage']

class CsvConverter:
    def __init__(self, file_path, old_json_array : OldJsonData):
        self.file_path = file_path
        self.data =  []
        self.jsonArray = JsonArray()
        self.oldJsonArray = old_json_array

    def importCSV(self):
        import csv
        with open(self.file_path, mode='r') as file:
            csvFile = csv.DictReader(file)
            for lines in csvFile:
                csvData = CsvData(lines)
                self.data.append(csvData)

    def convertToJson(self):
        i = 1
        for lines in self.data:

            print('Traitement : ' + str(i) + '/' + str(len(self.data)))

            name = lines.nom
            if self.oldJsonArray.getElementByName(name) is not None:
                self.jsonArray.add(self.oldJsonArray.getElementByName(name))
            else:
                json : JsonData = JsonData()
                json.id = str(uuid.uuid4())
                json.name = lines.nom
                json.logo =  None;
                json.phone = lines.tel
                json.website = lines.url
                json.address = lines.adresse
                json.city = lines.ville
                json.postal_code = lines.codePostal
                json.country = lines.pays
                json.category = lines.secteurActivite
                json.members_benefits = lines.avantageAdherent
                json.benefits_conditions = lines.commentObtenirAvantage
                json.latitude = None
                json.longitude = None

                json.getLatitudeLongitude()

                self.jsonArray.add(json)
            i += 1
        self.jsonArray.createJson()

    def removeEndContract(self):
        for line in self.data:
            name = line.nom
            if line.typeConvention == 'Perte / fin de contrat':
                self.data.remove(line)

                # Remove in old data
                json_data = self.jsonArray.findElement(name)
                if json_data is not None:
                    self.jsonArray.remove(json_data)


def check_file_exist(file_path):
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"File not found: {file_path}")


class OldJsonData:
    def __init__(self, file_path):
        self.file_path = file_path
        self.data = []
        self.importJSON()

    def importJSON(self):
        with open(sys.argv[2], "r") as f:
            self.data = json.JSONDecoder().decode(f.read())

    def getElementByName(self, name):
        for lines in self.data:
            if lines['name'] == name:
                jsonData = JsonData()
                jsonData.importDataFromOldJson(lines)
                return jsonData
        return None



if __name__ == '__main__':
    csvPath = sys.argv[1]
    jsonActualPath = sys.argv[2]

    check_file_exist(csvPath)
    check_file_exist(jsonActualPath)


    oldJsonData = OldJsonData(jsonActualPath)

    csvConverter = CsvConverter(csvPath, oldJsonData)
    csvConverter.importCSV()
    csvConverter.removeEndContract()
    csvConverter.convertToJson()

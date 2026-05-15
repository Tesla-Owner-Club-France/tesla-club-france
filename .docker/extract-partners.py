import os
import json


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
        print(json.JSONEncoder().encode(self.toJson()))

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
        return {
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
                "latitude" : self.latitude,
                "longitude" : self.longitude,
            }


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
    def __init__(self, file_path):
        self.file_path = file_path
        self.data = []
        self.jsonArray = JsonArray()

    def importCSV(self):
        import csv
        with open(self.file_path, mode='r') as file:
            csvFile = csv.DictReader(file)
            for lines in csvFile:
                csvData = CsvData(lines);
                if (csvData.typeConvention == 'Partenariat basic' or csvData.typeConvention is None):
                    self.data.append(csvData)

    def convertToJson(self):
        for lines in self.data:
            json : JsonData = JsonData()
            json.id = lines.id
            json.name = lines.nom
            json.logo =  None;
            json.phone = lines.tel
            json.website = lines.url
            json.address = lines.adresse
            json.city = lines.ville
            json.postal_code = lines.codePostal
            json.country = lines.pays
            json.category = None
            json.members_benefits = lines.avantageAdherent
            json.benefits_conditions = lines.commentObtenirAvantage
            json.latitude = None
            json.longitude = None
            self.jsonArray.add(json)


def check_file_exist(file_path):
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"File not found: {file_path}")


if __name__ == '__main__':
    csvPath = 'Comptes_2026_05_04.csv'
    jsonActualPath = 'partners-data.json'

    check_file_exist(csvPath)
    check_file_exist(jsonActualPath)

    csvConverter = CsvConverter(csvPath);
    csvConverter.importCSV()
    csvConverter.convertToJson()
    csvConverter.jsonArray.createJson()

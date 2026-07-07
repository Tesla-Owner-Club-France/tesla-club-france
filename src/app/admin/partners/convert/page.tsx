"use client";

import {useState} from "react";
import {convertCsvToPartners, CsvRow, JsonPartners} from "@/lib/utils/partner-converter";
import Papa from "papaparse";

export default function PartnerConvertPage() {
    const [csvFile, setCsvFile] = useState<File | null>(null);
    const [jsonFile, setJsonFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [resultJson, setResultJson] = useState<JsonPartners[] | null>(null);
    const [status, setStatus] = useState<string>("");

    const handleConvert = async () => {
        if (!csvFile) {
            alert("Veuillez sélectionner un fichier CSV.");
            return;
        }

        setIsProcessing(true);
        setStatus("Lecture des fichiers...");

        try {
            let existingPartners: JsonPartners[] = [];
            if (jsonFile) {
                const jsonText = await jsonFile.text();
                existingPartners = JSON.parse(jsonText);
            }

            Papa.parse<CsvRow>(csvFile, {
                header: true,
                skipEmptyLines: true,
                complete: async (results: any) => {
                    setStatus(`Conversion de ${results.data.length} lignes...`);
                    try {
                        const partners = await convertCsvToPartners(results.data, existingPartners);
                        setResultJson(partners);
                        setStatus("Conversion terminée !");
                    } catch (error) {
                        console.error(error);
                        setStatus("Erreur lors de la conversion.");
                    } finally {
                        setIsProcessing(false);
                    }
                },
                error: (error: any) => {
                    console.error(error);
                    setStatus("Erreur lors de la lecture du CSV.");
                    setIsProcessing(false);
                },
            });
        } catch (error) {
            console.error(error);
            setStatus("Erreur lors du traitement du fichier JSON.");
            setIsProcessing(false);
        }
    };

    const downloadJson = () => {
        if (!resultJson) return;
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resultJson, null, 2));
        const downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "partners.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Convertisseur de Partenaires</h1>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Fichier CSV des partenaires (Export Salesforce/Autre)
                        </label>
                        <input
                            type="file"
                            accept=".csv"
                            onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Fichier JSON existant (optionnel, pour conserver IDs et géocodage)
                        </label>
                        <input
                            type="file"
                            accept=".json"
                            onChange={(e) => setJsonFile(e.target.files?.[0] || null)}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={handleConvert}
                        disabled={isProcessing || !csvFile}
                        className={`px-6 py-2 rounded-md font-semibold text-white ${
                            isProcessing || !csvFile ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        {isProcessing ? "Traitement en cours..." : "Convertir"}
                    </button>

                    {status && <span className="text-sm text-gray-600">{status}</span>}
                </div>
            </div>

            {resultJson && (
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h2 className="text-xl font-semibold text-green-800 mb-4">Résultat de la conversion</h2>
                    <p className="mb-4 text-green-700">
                        {resultJson.length} partenaires ont été générés avec succès.
                    </p>
                    <button
                        onClick={downloadJson}
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold"
                    >
                        Télécharger le fichier partners.json
                    </button>

                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Aperçu (5 premiers) :</h3>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-xs max-h-60">
              {JSON.stringify(resultJson.slice(0, 5), null, 2)}
            </pre>
                    </div>
                </div>
            )}
        </div>
    );
}

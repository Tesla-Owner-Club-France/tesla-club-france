import {getCategoryCode} from "@/types";
import {v4 as uuidv4} from "uuid";

export interface CsvRow {
    "Id de l’enregistrement": string;
    "Nom du Compte": string;
    "contrat uploadé": string;
    "contrat signé": string;
    "Logo/PLV uploadé": string;
    "Type de convention": string;
    "Site Web": string;
    "Téléphone": string;
    "Adresse": string;
    "Ville": string;
    "Code postal": string;
    "Pays": string;
    "Sécteur d'activité": string;
    "Avantage(s) adherent": string;
    "Comment obtenir son avantage": string;
}

export interface JsonPartners {
    id: string;
    name: string;
    logo: boolean | null;
    phone: string;
    website: string;
    address: string;
    city: string;
    postal_code: string;
    country: string;
    category: string;
    members_benefits: string;
    benefits_conditions: string;
}

export async function geocode(address: string, city: string, postalCode: string, country: string) {
    try {
        const params = new URLSearchParams({
            street: address,
            city: city,
            postalcode: postalCode,
            country: country,
            format: "json",
        });

        const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36",
            },
        });

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        if (data && data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lon: parseFloat(data[0].lon),
            };
        }
    } catch (error) {
        console.error("Geocoding error:", error);
    }
    return null;
}

export async function convertCsvToPartners(
    csvData: CsvRow[],
    existingPartners: JsonPartners[] = []
): Promise<JsonPartners[]> {
    const partners: JsonPartners[] = [];

    for (const row of csvData) {
        // Skip finished contracts
        if (row["Type de convention"] === "Perte / fin de contrat") {
            continue;
        }

        const name = row["Nom du Compte"];
        const existingPartner = existingPartners.find((p) => p.name === name);
        let partner: JsonPartners;

        if (existingPartner) {
            // Update existing partner but keep ID and geocoding if present
            partner = {
                ...existingPartner
            };
        } else {
            // Create new partner
            const categoryLabel = row["Sécteur d'activité"];
            partner = {
                id: uuidv4(),
                name: name,
                logo: null,
                phone: row["Téléphone"],
                website: row["Site Web"],
                address: row["Adresse"],
                city: row["Ville"],
                postal_code: row["Code postal"],
                country: row["Pays"],
                category: getCategoryCode(categoryLabel),
                members_benefits: row["Avantage(s) adherent"],
                benefits_conditions: row["Comment obtenir son avantage"],
            };

            // Try geocoding for new partners
            if (partner.city && partner.postal_code) {
                const coords = await geocode(partner.address, partner.city, partner.postal_code, partner.country);
                if (coords) {
                    partner.latitude = coords.lat;
                    partner.longitude = coords.lon;
                }
                // Nominatim requires 1 second between requests
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

        }
        partner.phone = numberFormat(partner.phone);
        partners.push(partner);
    }

    return partners;
}

export function numberFormat(number: string): string {

    // Remove all spaces and non-digit characters except +
    let cleaned = number.replace(/[\s\-\.()]/g, "");

    // Remove all non-digit characters except leading +
    cleaned = cleaned.replace(/[^\d+]/g, "");

    // If number starts with 0 and has 10 digits (French format)
    if (cleaned.match(/^0\d{9}$/)) {
        return "+33" + cleaned.substring(1);
    }

    // If number already starts with +33
    if (cleaned.match(/^\+33\d{9}$/)) {
        return cleaned;
    }

    // If number starts with 33 (without +)
    if (cleaned.match(/^33\d{9}$/)) {
        return "+" + cleaned;
    }

    // If number starts with 33 (without +)
    if (cleaned.match(/^\d{9}$/)) {
        return "+33" + cleaned;
    }

    return cleaned;

}

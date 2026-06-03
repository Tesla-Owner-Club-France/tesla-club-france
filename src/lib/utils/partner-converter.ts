import {getCategoryCode, Partner} from "@/types";
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

        if (!response.ok) return null;

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
    existingPartners: Partner[] = []
): Promise<Partner[]> {
    const partners: Partner[] = [];

    for (const row of csvData) {
        // Skip finished contracts
        if (row["Type de convention"] === "Perte / fin de contrat") {
            continue;
        }

        const name = row["Nom du Compte"];
        const existingPartner = existingPartners.find((p) => p.name === name);

        if (existingPartner) {
            // Update existing partner but keep ID and geocoding if present
            partners.push({
                ...existingPartner
            });
        } else {
            // Create new partner
            const categoryLabel = row["Sécteur d'activité"];
            const partner: any = {
                id: uuidv4(),
                name: name,
                address: row["Adresse"],
                city: row["Ville"],
                postal_code: row["Code postal"],
                country: row["Pays"],
                phone: row["Téléphone"],
                website: row["Site Web"],
                category: getCategoryCode(categoryLabel),
                categoryLabel: categoryLabel,
                members_benefits: row["Avantage(s) adherent"],
                benefits_conditions: row["Comment obtenir son avantage"],
                hasLogo: false,
            };

            // Try geocoding for new partners
            if (partner.city && partner.postalCode) {
                const coords = await geocode(partner.address, partner.city, partner.postalCode, partner.country);
                if (coords) {
                    partner.latitude = coords.lat;
                    partner.longitude = coords.lon;
                }
                // Nominatim requires 1 second between requests
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            partners.push(partner);
        }
    }

    return partners;
}

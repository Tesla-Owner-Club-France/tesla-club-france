"use client"

import type {Partner} from "@/types";
import {readRemoteFile, readString} from "react-papaparse";
import {Parser, ParseStepResult} from "papaparse";

/**
 * Mock data for partners across France
 * These will be replaced by Google Sheets data later
 */
export let mockPartners: Partner[] = [];


/**
 * Get all active partners
 */
export async function getActivePartners(): Promise<Partner[]> {
    let url = '/assets/Comptes_2026_01_30.csv';
    let result = readString(await (await fetch(url)).text(), {
        header: true,
    })
    result.data.forEach((csvFile: { [x: string]: any; }) => {
        mockPartners.push({
            id: "P001",
            name: "Drive Elec Paris",
            address: "45 rue de la Pompe",
            city: "Paris",
            postalCode: "75016",
            latitude: 48.8656,
            longitude: 2.2769,
            phone: "01 42 56 78 90",
            email: "contact@driveelec-paris.fr",
            website: "https://www.driveelec.fr",
            services: ["charging", "maintenance"],
            description: "Spécialiste de l'installation de bornes de recharge à domicile et en entreprise. Certifié IRVE.",
            logoUrl: undefined,
            active: true,
        });
        console.log(mockPartners)
    })


    return mockPartners.filter((partner) => partner.active);
}

/**
 * Get a partner by ID
 */
export function getPartnerById(id: string): Partner | undefined {
    return mockPartners.find((partner) => partner.id === id);
}

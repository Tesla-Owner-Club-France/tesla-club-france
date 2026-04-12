import type { Partner } from "@/types";
import { getCategoryCode } from "@/types";
import sponsorsData from "./sponsors.json";

/**
 * Interface pour les données brutes du JSON des sponsors
 */
interface RawSponsor {
  id: string;
  name: string;
  logo: string;
  phone: string;
  website: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  category: string;
  members_benefits: string;
  benefits_conditions: string;
  latitude?: number;
  longitude?: number;
  sponsor_level: string;
  tesla_benefits: string;
  club_benefits: string;
}

/**
 * Transforme un sponsor du JSON vers le format Partner
 */
function transformSponsor(raw: RawSponsor): Partner {
  const categoryCode = getCategoryCode(raw.category);
  
  return {
    id: raw.id,
    name: raw.name,
    address: raw.address || "",
    city: raw.city || "",
    postalCode: raw.postal_code || "",
    country: raw.country || "France",
    phone: raw.phone || undefined,
    website: raw.website || undefined,
    category: categoryCode,
    categoryLabel: raw.category,
    membersBenefits: raw.members_benefits || undefined,
    benefitsConditions: raw.benefits_conditions || undefined,
    hasLogo: raw.logo === "true",
    latitude: raw.latitude,
    longitude: raw.longitude,
    sponsorLevel: (raw.sponsor_level as any) || "None",
    teslaBenefits: raw.tesla_benefits || undefined,
    clubBenefits: raw.club_benefits || undefined,
  };
}

/**
 * Tous les sponsors transformés
 */
const allSponsors: Partner[] = (sponsorsData as RawSponsor[])
  .map(transformSponsor);

/**
 * Retourne tous les sponsors
 */
export function getSponsors(): Partner[] {
  return allSponsors;
}

import {Sponsor} from "@/types";
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
  description?: string;
}

/**
 * Transforme un sponsor du JSON vers le format Partner
 */
function transformSponsor(raw: RawSponsor): Sponsor {
  const categoryCode = getCategoryCode(raw.category);
  
  return {
    id: raw.id,
    name: raw.name,
    website: raw.website || undefined,
    category: categoryCode,
    categoryLabel: raw.category,
    hasLogo: raw.logo === "true",
    sponsorLevel: (raw.sponsor_level as any) || "None",
    teslaBenefits: raw.tesla_benefits || undefined,
    clubBenefits: raw.club_benefits || undefined,
    description: raw.description || undefined,
  };
}

/**
 * Tous les sponsors transformés
 */
const allSponsors: Sponsor[] = (sponsorsData as RawSponsor[])
  .map(transformSponsor);

/**
 * Retourne tous les sponsors
 */
export function getSponsors(): Sponsor[] {
  return allSponsors;
}

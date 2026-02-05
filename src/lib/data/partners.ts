import type { Partner, CategoryType } from "@/types";
import { getCategoryCode } from "@/types";
import partnersData from "./partners-data.json";

/**
 * Interface pour les données brutes du JSON
 */
interface RawPartner {
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
}

/**
 * Transforme un partenaire du JSON vers le format Partner
 */
function transformPartner(raw: RawPartner): Partner {
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
    // Coordonnées GPS (géocodées depuis les adresses)
    latitude: raw.latitude,
    longitude: raw.longitude,
  };
}

/**
 * Tous les partenaires transformés
 */
const allPartners: Partner[] = (partnersData as RawPartner[])
  .map(transformPartner)
  .filter((p) => p.name && p.category); // Filtre les partenaires sans nom ou catégorie

/**
 * Retourne tous les partenaires
 */
export function getPartners(): Partner[] {
  return allPartners;
}

/**
 * Retourne les partenaires filtrés par catégories
 */
export function getPartnersByCategories(categories: CategoryType[]): Partner[] {
  if (categories.length === 0) return allPartners;
  return allPartners.filter((p) => categories.includes(p.category));
}

/**
 * Retourne un partenaire par son ID
 */
export function getPartnerById(id: string): Partner | undefined {
  return allPartners.find((p) => p.id === id);
}

/**
 * Retourne les catégories disponibles avec leur nombre de partenaires
 */
export function getCategoryCounts(): Record<CategoryType, number> {
  const counts = {} as Record<CategoryType, number>;
  
  for (const partner of allPartners) {
    counts[partner.category] = (counts[partner.category] || 0) + 1;
  }
  
  return counts;
}

/**
 * Retourne uniquement les catégories qui ont au moins un partenaire
 */
export function getActiveCategories(): CategoryType[] {
  const counts = getCategoryCounts();
  return Object.keys(counts) as CategoryType[];
}

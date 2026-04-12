// ===== PARTNER TYPES =====

// Catégories basées sur les données réelles du fichier partners.json
export type CategoryType =
  | "detailing"
  | "tourisme"
  | "recharge"
  | "garage"
  | "jantes"
  | "accessoires"
  | "pneumatique"
  | "controle-technique"
  | "transfert"
  | "photovoltaique"
  | "assurance"
  | "carrosserie"
  | "pilotage"
  | "energie"
  | "auto-ecole"
  | "location"
  | "convoyage"
  | "leasing";

export type SponsorLevel = "Standard" | "Advanced" | "None";

export interface Partner {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone?: string;
  website?: string;
  category: CategoryType;
  categoryLabel: string; // Label original du JSON
  membersBenefits?: string;
  benefitsConditions?: string;
  hasLogo: boolean;
  // Coordonnées pour la carte (à géocoder plus tard)
  latitude?: number;
  longitude?: number;
  // Nouveaux champs pour les sponsors
  sponsorLevel?: SponsorLevel;
  teslaBenefits?: string; // Avantage du partenaire par rapport à Tesla
  clubBenefits?: string;  // Avantage que propose le partenaire pour le club
  description?: string;   // Description générale du sponsor
}

// ===== NEWS TYPES =====

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  image?: string;
  excerpt: string;
  content: string;
}

// ===== CATEGORY METADATA =====

export interface CategoryMeta {
  code: CategoryType;
  label: string;
  icon: string;
  aliases: string[]; // Pour mapper les labels du JSON
}

export const CATEGORIES: CategoryMeta[] = [
  { code: "detailing", label: "Detailing", icon: "✨", aliases: ["Detailing"] },
  { code: "tourisme", label: "Tourisme", icon: "🏨", aliases: ["Tourisme"] },
  { code: "recharge", label: "Recharge", icon: "⚡", aliases: ["Recharge"] },
  { code: "garage", label: "Garage", icon: "🔧", aliases: ["Garage"] },
  { code: "jantes", label: "Réparation jantes", icon: "🛞", aliases: ["Réparation jantes"] },
  { code: "accessoires", label: "Accessoires", icon: "🎨", aliases: ["Accessoires auto"] },
  { code: "pneumatique", label: "Pneumatique", icon: "🚗", aliases: ["Pneumatique"] },
  { code: "controle-technique", label: "Contrôle technique", icon: "📋", aliases: ["Contrôle technique"] },
  { code: "transfert", label: "Transfert", icon: "🚐", aliases: ["Transfert"] },
  { code: "photovoltaique", label: "Photovoltaïque", icon: "☀️", aliases: ["Photovoltaique"] },
  { code: "assurance", label: "Assurance", icon: "🛡️", aliases: ["Assurance auto", "Assurance"] },
  { code: "carrosserie", label: "Carrosserie", icon: "🚙", aliases: ["Carrosserie"] },
  { code: "pilotage", label: "Stage pilotage", icon: "🏎️", aliases: ["Pilotage", "Stage de pilotage"] },
  { code: "energie", label: "Économie d'énergie", icon: "💡", aliases: ["Economie d'énergie"] },
  { code: "auto-ecole", label: "Auto-école", icon: "🎓", aliases: ["Auto-école"] },
  { code: "location", label: "Location", icon: "🔑", aliases: ["Location de voiture", "Location voiture"] },
  { code: "convoyage", label: "Convoyage", icon: "🚚", aliases: ["Convoyage de Véhicule"] },
  { code: "leasing", label: "Leasing", icon: "💳", aliases: ["Leasing"] },
];

/**
 * Trouve le code de catégorie à partir du label du JSON
 */
export function getCategoryCode(label: string): CategoryType {
  const category = CATEGORIES.find((c) =>
    c.aliases.some((alias) => alias.toLowerCase() === label.toLowerCase())
  );
  return category?.code ?? "garage"; // Fallback sur garage si non trouvé
}

/**
 * Trouve les métadonnées d'une catégorie par son code
 */
export function getCategoryMeta(code: CategoryType): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.code === code);
}

// ===== SITE CONFIG =====

export const SITE_CONFIG = {
  name: "Tesla Owners Club France",
  description:
    "Le club officiel des propriétaires Tesla en France. Rejoignez la communauté, trouvez des partenaires certifiés et participez à des événements exclusifs.",
  url: "https://www.club-tesla.fr",
  links: {
    membership: "https://www.club-tesla.fr/site/Devenir_membre-7401",
    events: "https://events.club-tesla.fr/events",
    facebook: "https://www.facebook.com/groups/clubteslafrance/",
    instagram: "https://www.instagram.com/teslaclubfrance/",
    youtube: "https://www.youtube.com/channel/UC_S5Lpq9lYrn2rXLMd_ryTw",
    twitter: "https://x.com/TeslaClubFrance",
    shop: "https://www.club-tesla.fr/boutique/"
  },
  contact: {
    email: "contact@club-tesla.fr",
    address: "305, avenue des Templiers - 13400 Aubagne - France",
  },
} as const;

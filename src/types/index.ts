// ===== PARTNER TYPES =====

export type ServiceType =
  | "charging" // Recharge
  | "maintenance" // Entretien
  | "bodywork" // Carrosserie
  | "tires" // Pneumatiques
  | "glass" // Vitrage
  | "accessories" // Accessoires
  | "insurance" // Assurance
  | "leasing" // Leasing
  | "rental" // Location
  | "sales"; // Vente VO

export interface Partner {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  phone?: string;
  email?: string;
  website?: string;
  services: ServiceType[];
  description?: string;
  logoUrl?: string;
  active: boolean;
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

// ===== SERVICE METADATA =====

export interface ServiceMeta {
  code: ServiceType;
  label: string;
  icon: string;
}

export const SERVICES: ServiceMeta[] = [
  { code: "charging", label: "Recharge", icon: "⚡" },
  { code: "maintenance", label: "Entretien", icon: "🔧" },
  { code: "bodywork", label: "Carrosserie", icon: "🚗" },
  { code: "tires", label: "Pneumatiques", icon: "🛞" },
  { code: "glass", label: "Vitrage", icon: "🪟" },
  { code: "accessories", label: "Accessoires", icon: "🎨" },
  { code: "insurance", label: "Assurance", icon: "🛡️" },
  { code: "leasing", label: "Leasing", icon: "💳" },
  { code: "rental", label: "Location", icon: "🔑" },
  { code: "sales", label: "Vente VO", icon: "🏷️" },
];

// ===== SITE CONFIG =====

export const SITE_CONFIG = {
  name: "Tesla Owners Club France",
  description:
    "Le club officiel des propriétaires Tesla en France. Rejoignez la communauté, trouvez des partenaires certifiés et participez à des événements exclusifs.",
  url: "https://www.club-tesla.fr",
  links: {
    membership: "https://www.club-tesla.fr/site/devenir-membre/",
    events: "https://www.club-tesla.fr/site/evenements/",
    facebook: "https://www.facebook.com/TeslaOwnersClubFrance",
    instagram: "https://www.instagram.com/teslaownersclubfrance/",
    youtube: "https://www.youtube.com/c/TeslaOwnersClubFrance",
    twitter: "https://twitter.com/TOC_France",
  },
  contact: {
    email: "contact@club-tesla.fr",
    address: "305, avenue des Templiers - 13400 Aubagne - France",
  },
} as const;

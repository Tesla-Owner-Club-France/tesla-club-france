import { StaffMember } from "@/types";

export const CLUB_STAFF: StaffMember[] = [
  {
    id: "1",
    name: "Quentin",
    role: "Président",
    description: "Passionné par l'écosystème Tesla depuis le premier jour, Quentin veille au développement du club et à la satisfaction des membres."
  },
  {
    id: "2",
    name: "Sébastien",
    role: "Vice-Président",
    description: "Expert technique et organisateur hors pair, Sébastien est le garant de la qualité des événements et des partenariats."
  },
  {
    id: "3",
    name: "Thomas",
    role: "Secrétaire Général",
    description: "Thomas gère l'administration du club et s'assure que tout fonctionne de manière fluide pour nos milliers d'adhérents."
  },
  {
    id: "4",
    name: "Jean-Baptiste",
    role: "Trésorier",
    description: "Fin stratège financier, Jean-Baptiste assure la pérennité économique du club pour financer toujours plus d'activités."
  }
];

export const REGIONAL_REPS: StaffMember[] = [
  {
    id: "r1",
    name: "Cédric",
    role: "Responsable Régional",
    region: "Île-de-France",
    description: "Animateur de la communauté en région parisienne, Cédric organise les rencontres locales et accompagne les nouveaux membres."
  },
  {
    id: "r2",
    name: "Nicolas",
    role: "Responsable Régional",
    region: "Auvergne-Rhône-Alpes",
    description: "Basé à Lyon, Nicolas fait rayonner le club dans le sud-est avec des sorties mémorables dans les Alpes."
  },
  {
    id: "r3",
    name: "Olivier",
    role: "Responsable Régional",
    region: "Nouvelle-Aquitaine",
    description: "Olivier fédère les propriétaires du sud-ouest, de Bordeaux au Pays Basque, autour de la passion Tesla."
  },
  {
    id: "r4",
    name: "Marie",
    role: "Responsable Régionale",
    region: "Hauts-de-France",
    description: "Dynamique et engagée, Marie anime le réseau dans le Nord et facilite les échanges transfrontaliers."
  }
];

export const CLUB_DESCRIPTION = {
  intro: "Le Tesla Owners Club France est le seul club officiel en France reconnu par Tesla.",
  mission: "Notre mission est de rassembler les propriétaires de Tesla, de partager notre passion et de bénéficier d'avantages exclusifs auprès de partenaires sélectionnés.",
  history: "Fondé par des passionnés, le club a grandi pour devenir l'une des plus grandes communautés de propriétaires de véhicules électriques en Europe."
};

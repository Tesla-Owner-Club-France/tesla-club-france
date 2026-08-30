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
  history: "Le Tesla Owners Club France (TOCF) est une association à but non lucratif. Reconnu officiellement par Tesla, notre club est un espace d'échange, d'entraide et de convivialité pour tous les propriétaires et futurs propriétaires de la marque.",
  vision: "Se réunir autour de notre passion et s'entraider : deux axes majeurs pour l'association. C'est dans ce sens que nous avons constitué des groupes régionaux. Ces relais locaux, proches de vous, vous permettront d'échanger les bons plans de votre territoire et de vous entraider.",
  independence: "Le TOCF est indépendant de Tesla Motors et d'autres partenaires, et n'a aucun fondement politique. L'association est engagée contractuellement avec Tesla Inc. afin de garantir à nos membres associatifs que leurs intérêts seront protégés en toutes circonstances."
};

export const CLUB_MISSIONS = [
  "Rassembler les propriétaires et enthousiastes de véhicules électriques Tesla en France.",
  "Créer un lien privilégié entre nos membres et Tesla Inc. au travers d'annonces officielles, de télé-conférences, et de groupes de travail en partenariat direct avec Tesla Inc.",
  "Organiser des événements nationaux et/ou en région, permettant de partager l'enthousiasme de rouler en Tesla et de se rencontrer entre propriétaires.",
  "Promouvoir les véhicules de marque Tesla Inc., organiser la présence du club et/ou de ses membres sur des événements tels que des salons, des rallyes, des œuvres caritatives, etc.",
  "Permettre un dialogue entre les propriétaires et les structures Tesla (France et corporate) afin de mettre en lumière les besoins de la communauté française."
];

export const PRESIDENT_WORD = {
  title: "Le mot du président",
  text: [
    "Tesla, une marque qui fait rêver et possède cette étonnante capacité de générer passion et engouement chez nombre de ses propriétaires, loin de ce champ d'intérêt jusqu’alors ! Ce qui explique la création de toutes ces communautés de passionnés autour de la marque, actives et animées. Le Tesla Owners Club France, issu de ces toutes premières communautés, est l’association officielle en France reconnue par Tesla.",
    "Notre club des propriétaires de Tesla en France, avec ses antennes régionales, vous propose de partager des moments de convivialité et d'échanges lors de plus d'une soixantaine d'événements ou de rassemblements organisés chaque année. Nous avons également mis en place des canaux de communication (forum, Discord, etc.) pour favoriser l'entraide et le partage d'informations entre membres.",
    "Je tiens à remercier chaleureusement les bénévoles de toutes les régions de France ainsi que les membres du bureau associatif qui font vivre le club. Un grand merci également à nos sponsors et partenaires qui nous soutiennent dans la réalisation de nos événements.",
    "Bienvenue à tous et merci à ceux qui nous ont déjà fait confiance."
  ]
};

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Badge } from "@/components/ui";

// Placeholder news data - will be replaced with real data from markdown files
const newsData: Record<string, {
  title: string;
  date: string;
  excerpt: string;
  content: string;
}> = {
  "tesla-owners-day-2025": {
    title: "Tesla Owners Day 2025 - Un succès !",
    date: "2025-07-07",
    excerpt: "Retour sur l'événement phare de l'année qui a rassemblé plus de 500 propriétaires Tesla à Walygator Sud Ouest.",
    content: `
Le Tesla Owners Day 2025 a été un véritable succès ! Plus de 500 propriétaires Tesla se sont réunis le 31 mai 2025 au parc Walygator Sud Ouest pour cette journée exceptionnelle.

## Au programme de cette édition

- **Exposition de véhicules** : Model S, Model 3, Model X, Model Y, Cybertruck... toutes les générations étaient représentées
- **Ateliers et démonstrations** : découverte des nouvelles fonctionnalités, conseils d'entretien
- **Rencontres avec les partenaires** : stands des installateurs de bornes, accessoiristes, assureurs
- **Animations pour toute la famille** : accès au parc d'attractions inclus

## Les temps forts

La journée a commencé par un convoi impressionnant de plus de 200 Tesla rejoignant le parc. L'ambiance était au rendez-vous avec des passionnés venus de toute la France.

Le concours de la plus belle Tesla a été particulièrement apprécié, avec des véhicules customisés rivalisant de créativité.

## Rendez-vous l'année prochaine !

Un grand merci à tous les participants et aux bénévoles qui ont rendu cet événement possible. Rendez-vous en 2026 pour une nouvelle édition !
    `,
  },
  "visite-gigafactory-berlin": {
    title: "Visite de la Gigafactory Berlin",
    date: "2025-07-07",
    excerpt: "Les membres du club ont eu l'opportunité exclusive de visiter les coulisses de la Gigafactory de Berlin.",
    content: `
Une délégation de 50 membres du Tesla Owners Club France a eu le privilège de visiter la Gigafactory Berlin-Brandenburg, l'usine européenne de Tesla.

## Une visite exceptionnelle

Cette visite organisée en partenariat avec Tesla Europe nous a permis de découvrir les coulisses de la production des Model Y européens.

## Ce que nous avons découvert

- Les lignes de production automatisées
- Le processus de fabrication des batteries
- Les zones de contrôle qualité
- Le centre de formation des employés

## Témoignages des participants

> "Une expérience incroyable ! Voir de près comment nos Tesla sont fabriquées, c'est vraiment impressionnant." - Pierre, membre depuis 2021

> "L'automatisation est impressionnante, mais on sent aussi l'attention portée à la qualité à chaque étape." - Marie, propriétaire d'une Model Y

## Prochaine visite

Face au succès de cette initiative, nous organiserons d'autres visites en 2026. Restez connectés !
    `,
  },
  "newsletter-mai-2025": {
    title: "Newsletter Mai 2025",
    date: "2025-05-01",
    excerpt: "Toutes les actualités Tesla du mois de mai : nouvelles fonctionnalités, mises à jour logicielles et événements à venir.",
    content: `
Bienvenue dans la newsletter de mai 2025 ! Voici les actualités du mois pour les membres du Tesla Owners Club France.

## Mises à jour logicielles

La version 2025.16 est en cours de déploiement avec plusieurs améliorations :
- Amélioration de l'Autopilot en conditions de pluie
- Nouvelle interface pour la climatisation
- Jeux supplémentaires dans l'Arcade

## Événements à venir

- **31 mai** : Tesla Owners Day 2025 à Walygator Sud Ouest
- **15 juin** : Rassemblement régional Île-de-France
- **22 juin** : Rassemblement régional PACA

## Nouveaux partenaires

Nous accueillons ce mois-ci 3 nouveaux partenaires :
- AutoCharge (installation bornes - Région parisienne)
- Tesla Repair Center (carrosserie - Lyon)
- EV Accessories (accessoires - Bordeaux)

## Le saviez-vous ?

Votre adhésion vous donne droit à 10% de réduction chez tous nos partenaires bornes de recharge !

À bientôt sur les routes !
    `,
  },
  "newsletter-avril-2025": {
    title: "Newsletter Avril 2025",
    date: "2025-04-01",
    excerpt: "Au programme de ce mois : le bilan du premier trimestre, les nouveaux partenaires et les préparatifs du Tesla Owners Day 2025.",
    content: `
La newsletter d'avril est arrivée ! Découvrez les actualités du club et de l'univers Tesla.

## Bilan du premier trimestre

Le club compte désormais plus de 3000 membres actifs ! Merci à tous pour votre confiance.

## Préparatifs Tesla Owners Day 2025

Les inscriptions pour le Tesla Owners Day 2025 sont ouvertes ! Cette année, rendez-vous au parc Walygator Sud Ouest pour une journée exceptionnelle.

## Actualités Tesla

- Annonce du nouveau Model Y refresh
- Ouverture de nouveaux Superchargeurs en France
- Mise à jour majeure de l'application mobile

Bonne lecture !
    `,
  },
  "nouveau-partenaire-green-drive": {
    title: "Nouveau partenaire : Green Drive",
    date: "2025-03-15",
    excerpt: "Nous sommes ravis d'accueillir Green Drive dans notre réseau de partenaires. Spécialiste de l'installation de bornes de recharge à domicile.",
    content: `
Nous avons le plaisir d'annoncer l'arrivée de Green Drive dans notre réseau de partenaires !

## Qui est Green Drive ?

Green Drive est un installateur certifié spécialisé dans les bornes de recharge pour véhicules électriques. Présent sur toute la France, ils proposent :

- Installation de bornes à domicile
- Bornes pour entreprises et copropriétés
- Maintenance et SAV

## Avantages membres

En tant que membre du Tesla Owners Club France, bénéficiez de :
- **15% de réduction** sur l'installation
- **Diagnostic gratuit** de votre installation électrique
- **Garantie étendue** de 3 ans

## Contact

Retrouvez Green Drive sur notre carte des partenaires ou contactez-les directement sur leur site web.

Bienvenue à Green Drive dans la famille du club !
    `,
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsData[slug];
  
  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export function generateStaticParams() {
  return Object.keys(newsData).map((slug) => ({
    slug,
  }));
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = newsData[slug];

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 lg:py-16">
      <Container size="sm">
        {/* Back link */}
        <Link
          href="/actualites"
          className="inline-flex items-center text-text-secondary hover:text-text-primary mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux actualités
        </Link>

        {/* Header */}
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">
            Actualité
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            {article.title}
          </h1>
          <p className="text-text-muted">
            Publié le {formatDate(article.date)}
          </p>
        </header>

        {/* Featured image placeholder */}
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-8 flex items-center justify-center">
          <span className="text-6xl">📰</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold text-text-primary mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("> ")) {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-primary pl-4 italic text-text-secondary my-4"
                >
                  {paragraph.replace("> ", "")}
                </blockquote>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-text-secondary">
                      {item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.trim()) {
              return (
                <p key={index} className="text-text-secondary my-4">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-text-muted text-sm">
            Partagez cet article avec la communauté !
          </p>
        </div>
      </Container>
    </article>
  );
}

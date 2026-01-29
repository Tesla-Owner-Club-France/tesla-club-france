import type { Metadata } from "next";
import Link from "next/link";
import { Container, Card, CardImage, CardContent, CardTitle, CardDescription } from "@/components/ui";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Toutes les actualités du Tesla Owners Club France : événements, annonces, nouveautés.",
};

// Placeholder news data
const news = [
  {
    slug: "tesla-owners-day-2025",
    title: "Tesla Owners Day 2025 - Un succès !",
    date: "2025-07-07",
    excerpt: "Retour sur l'événement phare de l'année qui a rassemblé plus de 500 propriétaires Tesla à Walygator Sud Ouest. Une journée exceptionnelle riche en rencontres et en découvertes.",
  },
  {
    slug: "visite-gigafactory-berlin",
    title: "Visite de la Gigafactory Berlin",
    date: "2025-07-07",
    excerpt: "Les membres du club ont eu l'opportunité exclusive de visiter les coulisses de la Gigafactory de Berlin. Découvrez les photos et témoignages de cette visite unique.",
  },
  {
    slug: "newsletter-mai-2025",
    title: "Newsletter Mai 2025",
    date: "2025-05-01",
    excerpt: "Toutes les actualités Tesla du mois de mai : nouvelles fonctionnalités, mises à jour logicielles et événements à venir pour les membres du club.",
  },
  {
    slug: "newsletter-avril-2025",
    title: "Newsletter Avril 2025",
    date: "2025-04-01",
    excerpt: "Au programme de ce mois : le bilan du premier trimestre, les nouveaux partenaires et les préparatifs du Tesla Owners Day 2025.",
  },
  {
    slug: "nouveau-partenaire-green-drive",
    title: "Nouveau partenaire : Green Drive",
    date: "2025-03-15",
    excerpt: "Nous sommes ravis d'accueillir Green Drive dans notre réseau de partenaires. Spécialiste de l'installation de bornes de recharge à domicile.",
  },
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
            Actualités
          </h1>
          <p className="text-text-secondary text-lg">
            Les dernières nouvelles du club et de la communauté Tesla
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <Link key={article.slug} href={`/actualites/${article.slug}`}>
              <Card hover className="h-full">
                <CardImage>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-4xl">📰</span>
                  </div>
                </CardImage>
                <CardContent>
                  <p className="text-sm text-text-muted mb-2">
                    {formatDate(article.date)}
                  </p>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

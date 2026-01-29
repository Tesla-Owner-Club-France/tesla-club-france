import Link from "next/link";
import { Container, Button, Card, CardImage, CardContent, CardTitle, CardDescription, Badge } from "@/components/ui";
import { SITE_CONFIG, SERVICES } from "@/types";

// Placeholder news data (will be replaced with real data)
const placeholderNews = [
  {
    slug: "tesla-owners-day-2025",
    title: "Tesla Owners Day 2025 - Un succès !",
    date: "2025-07-07",
    excerpt: "Retour sur l'événement phare de l'année qui a rassemblé plus de 500 propriétaires Tesla à Walygator Sud Ouest.",
    image: null,
  },
  {
    slug: "visite-gigafactory-berlin",
    title: "Visite de la Gigafactory Berlin",
    date: "2025-07-07",
    excerpt: "Les membres du club ont eu l'opportunité exclusive de visiter les coulisses de la Gigafactory de Berlin.",
    image: null,
  },
  {
    slug: "newsletter-mai-2025",
    title: "Newsletter Mai 2025",
    date: "2025-05-01",
    excerpt: "Toutes les actualités Tesla du mois de mai : nouvelles fonctionnalités, mises à jour et événements à venir.",
    image: null,
  },
];

const benefits = [
  {
    icon: "🤝",
    title: "Réseau de partenaires",
    description: "Accédez à des réductions exclusives chez nos partenaires certifiés partout en France.",
  },
  {
    icon: "🎉",
    title: "Événements exclusifs",
    description: "Participez aux Tesla Owners Days et autres rassemblements réservés aux membres.",
  },
  {
    icon: "👥",
    title: "Communauté passionnée",
    description: "Échangez avec d'autres propriétaires Tesla et partagez vos expériences.",
  },
  {
    icon: "🎁",
    title: "Goodies exclusifs",
    description: "Accédez à la boutique officielle avec des produits réservés aux membres CTO.",
  },
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-text-primary via-text-primary to-primary/90 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <Container className="relative">
          <div className="py-20 lg:py-32 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Le club officiel des
              <span className="block text-primary-light">propriétaires Tesla</span>
              en France
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Rejoignez une communauté de passionnés, accédez à des avantages exclusifs 
              et participez à des événements uniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE_CONFIG.links.membership}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-text-primary bg-white hover:bg-white/90 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Devenir membre
              </a>
              <Link
                href="/partenaires"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                Trouver un partenaire
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Pourquoi rejoindre le club ?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              En devenant membre, vous accédez à un ensemble d&apos;avantages exclusifs
              réservés aux propriétaires Tesla certifiés.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/adhesion"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Découvrir tous les avantages
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Partners Map Teaser */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Réseau partenaires
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Trouvez un partenaire près de chez vous
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                Notre réseau de partenaires certifiés couvre toute la France. 
                Recharge, entretien, carrosserie, accessoires... 
                trouvez le professionnel adapté à vos besoins.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {SERVICES.slice(0, 6).map((service) => (
                  <Badge key={service.code} variant="outline">
                    {service.icon} {service.label}
                  </Badge>
                ))}
                <Badge variant="outline">+{SERVICES.length - 6} autres</Badge>
              </div>

              <Link
                href="/partenaires"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Explorer la carte
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-[4/3] bg-surface rounded-2xl overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-text-muted">Carte interactive</p>
                </div>
              </div>
              {/* Fake markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>
        </Container>
      </section>

      {/* News Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                Actualités
              </h2>
              <p className="text-text-secondary">
                Les dernières nouvelles du club et de la communauté Tesla
              </p>
            </div>
            <Link
              href="/actualites"
              className="inline-flex items-center text-primary font-semibold hover:underline whitespace-nowrap"
            >
              Toutes les actualités
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderNews.map((article) => (
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à rejoindre la communauté ?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Devenez membre du Tesla Owners Club France et accédez à tous les avantages 
              réservés aux propriétaires certifiés.
            </p>
            <a
              href={SITE_CONFIG.links.membership}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white hover:bg-white/90 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Devenir membre
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

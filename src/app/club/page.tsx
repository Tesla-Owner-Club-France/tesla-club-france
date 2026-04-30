import { Container } from "@/components/ui";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { CLUB_STAFF, REGIONAL_REPS, CLUB_DESCRIPTION } from "@/lib/data/club";
import { SITE_CONFIG } from "@/types";
import Image from "next/image";

export const metadata = {
  title: "Le Club - Tesla Owners Club France",
  description: "Découvrez le Tesla Owners Club France, son histoire et l'équipe qui anime la communauté officielle des propriétaires Tesla en France.",
};

export default function ClubPage() {
  return (
    <div className="min-h-screen bg-surface pb-12">
      {/* Hero Section */}
      <div className="bg-white border-b border-border mb-12">
        <Container className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Le Tesla Owners Club France
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              {CLUB_DESCRIPTION.intro} {CLUB_DESCRIPTION.mission}
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Presentation Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">Notre Histoire</h2>
              <div className="prose prose-slate max-w-none text-text-secondary">
                <p className="mb-4 leading-relaxed text-lg">
                  {CLUB_DESCRIPTION.history}
                </p>
                <p className="mb-4 leading-relaxed text-lg">
                  Reconnu officiellement par Tesla, notre club est un espace d'échange, d'entraide et de convivialité pour tous les propriétaires et futurs propriétaires de la marque. Nous organisons régulièrement des rencontres, des sorties touristiques et des visites exclusives.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href={SITE_CONFIG.links.membership}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Devenir membre
                </a>
                <a
                  href={SITE_CONFIG.links.events}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border bg-white text-text-primary font-semibold rounded-lg hover:bg-surface transition-colors"
                >
                  Voir nos événements
                </a>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                <span className="text-slate-400 font-medium italic">Image du club Tesla France</span>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Le Staff du Club</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Une équipe de bénévoles passionnés au service de la communauté.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLUB_STAFF.map((member) => (
              <Card key={member.id} hover className="flex flex-col h-full">
                <div className="aspect-square bg-slate-100 relative">
                   {/* Placeholder pour l'image du membre */}
                   <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
                     👤
                   </div>
                </div>
                <CardContent className="flex-grow">
                  <div className="mb-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>
                  <CardTitle className="mb-2 text-xl">{member.name}</CardTitle>
                  <CardDescription className="line-clamp-none">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regional Reps Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Responsables Régionaux</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Vos interlocuteurs de proximité partout en France.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REGIONAL_REPS.map((member) => (
              <Card key={member.id} hover className="flex flex-col h-full">
                <div className="aspect-square bg-slate-100 relative">
                   {/* Placeholder pour l'image du membre */}
                   <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
                     📍
                   </div>
                   <div className="absolute bottom-4 left-4 right-4">
                     <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-text-primary rounded-full shadow-sm">
                       {member.region}
                     </span>
                   </div>
                </div>
                <CardContent className="flex-grow">
                  <div className="mb-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>
                  <CardTitle className="mb-2 text-xl">{member.name}</CardTitle>
                  <CardDescription className="line-clamp-none">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

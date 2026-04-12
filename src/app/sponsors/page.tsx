"use client";

import { useMemo } from "react";
import { Container, Card, CardContent, Badge } from "@/components/ui";
import { getSponsors } from "@/lib/data/sponsors";
import type {Partner, Sponsor, SponsorLevel} from "@/types";
import Image from "next/image";

export default function SponsorsPage() {
  const sponsors = useMemo(() => getSponsors(), []);

  // Group sponsors by level
  const groupedSponsors = useMemo(() => {
    const groups: Record<SponsorLevel, Sponsor[]> = {
      Advanced: [],
      Standard: [],
      None: []
    };
    
    sponsors.forEach(s => {
      if (s.sponsorLevel) {
        groups[s.sponsorLevel].push(s);
      }
    });
    
    return groups;
  }, [sponsors]);

  return (
    <div className="min-h-screen bg-surface py-12">
      <Container>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Nos Sponsors
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Découvrez les partenaires officiels qui soutiennent le Tesla Owners Club France et les avantages qu'ils vous proposent.
          </p>
        </div>

        {/* Standard Sponsors */}
        {groupedSponsors.Standard.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-secondary rounded-full"></span>
              Sponsors Standard
            </h2>
            <div className="grid gap-8">
              {groupedSponsors.Standard.map(sponsor => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </section>
        )}

        {/* Advanced Sponsors */}
        {groupedSponsors.Advanced.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
                <span className="h-8 w-1 bg-primary rounded-full"></span>
                Sponsors Advanced
              </h2>
              <div className="grid gap-8">
                {groupedSponsors.Advanced.map(sponsor => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                ))}
              </div>
            </section>
        )}

        {sponsors.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-border">
            <p className="text-text-secondary">Aucun sponsor n'est configuré pour le moment.</p>
          </div>
        )}
      </Container>
    </div>
  );
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Logo Section */}
          <div className="w-full md:w-80 bg-white p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-border">
            <div className="relative w-full aspect-square max-w-60">
              {sponsor.hasLogo ? (
                <Image
                  src={`/partners/logos/${sponsor.id}.png`}
                  alt={`Logo ${sponsor.name}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 240px, 240px"
                  unoptimized // Souvent nécessaire pour les logos locaux si pas de configuration Image
                />
              ) : (
                <div className="w-full h-full bg-surface rounded-lg flex items-center justify-center text-text-secondary font-bold text-2xl text-center p-4">
                  {sponsor.name}
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-1">{sponsor.name}</h3>
                <Badge variant={sponsor.sponsorLevel === "Advanced" ? "primary" : "secondary"}>
                  Sponsor {sponsor.sponsorLevel}
                </Badge>
              </div>
              {sponsor.website && (
                <a 
                  href={sponsor.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  Visiter le site web →
                </a>
              )}
            </div>

            {sponsor.description && (
              <p className="text-text-secondary mb-6 italic">
                {sponsor.description}
              </p>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {/* Tesla Benefits */}
              <div>
                <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="text-primary">⚡</span> Avantage Tesla
                </h4>
                <p className="text-text-primary leading-relaxed">
                  {sponsor.teslaBenefits || "Expertise et solutions adaptées à l'écosystème Tesla."}
                </p>
              </div>

              {/* Club Benefits */}
              <div>
                <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="text-secondary">🤝</span> Avantage Club
                </h4>
                <p className="text-text-primary leading-relaxed">
                  {sponsor.clubBenefits  || "Soutien privilégié aux activités du club."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { Container, Badge } from "@/components/ui";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { CLUB_STAFF, REGIONAL_REPS, CLUB_DESCRIPTION, CLUB_MISSIONS, PRESIDENT_WORD } from "@/lib/data/club";
import { SITE_CONFIG } from "@/types";
import Image from "next/image";

export const metadata = {
  title: "Le Club - Tesla Owners Club France",
  description: "Découvrez le Tesla Owners Club France, son histoire et l'équipe qui anime la communauté officielle des propriétaires Tesla en France.",
};

export default function ClubPage() {
  return (
    <div className="min-h-screen bg-surface pb-20">
      {/* Hero Section - Plus immersive */}
      <div className="relative bg-text-primary py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/img/hero-pattern.png')] bg-repeat opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/20 text-primary-light border-primary/30 px-4 py-1 text-sm">
              Association Officielle
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Le Tesla Owners <br />
              <span className="text-primary">Club France</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-light">
              {CLUB_DESCRIPTION.intro}
            </p>
          </div>
        </Container>
      </div>

      <Container className="-mt-12 relative z-20">
        {/* Missions & President Word Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Missions Card */}
            <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-3xl border border-border shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl">
                  🎯
                </div>
                <h2 className="text-3xl font-bold text-text-primary">Notre Mission</h2>
              </div>
              
              <div className="prose prose-slate max-w-none text-text-secondary">
                <p className="mb-10 leading-relaxed text-xl text-text-primary font-medium">
                  {CLUB_DESCRIPTION.mission}
                </p>
                <div className="grid gap-6">
                  {CLUB_MISSIONS.map((mission, index) => (
                    <div key={index} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-surface transition-colors border border-transparent hover:border-border">
                      <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary text-xs font-bold">
                        {index + 1}
                      </div>
                      <p className="text-lg leading-relaxed">{mission}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* President Word - Styled as a quote/card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gradient-to-br from-primary to-primary-dark p-1 rounded-3xl shadow-xl">
                <div className="bg-white p-8 lg:p-10 rounded-[1.4rem]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-3xl border-2 border-primary/20">
                      👤
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-text-primary leading-tight">{PRESIDENT_WORD.title}</h2>
                      <p className="text-primary font-medium">Tesla Owners Club France</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-primary/10 font-serif leading-none">"</span>
                    <div className="space-y-4 text-text-secondary leading-relaxed relative z-10 italic">
                      {PRESIDENT_WORD.text.map((paragraph, index) => (
                        <p key={index} className={index === 0 ? "text-lg text-text-primary font-normal not-italic mb-4" : ""}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <span className="absolute -bottom-8 -right-2 text-6xl text-primary/10 font-serif leading-none rotate-180">"</span>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-surface p-8 lg:p-10 rounded-3xl border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm border border-border text-xl">
                    👁️
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary">Notre Vision</h2>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  {CLUB_DESCRIPTION.vision}
                </p>
                <div className="p-5 bg-white rounded-2xl border border-border shadow-sm mb-8">
                  <p className="text-sm text-text-secondary leading-relaxed italic flex gap-3">
                    <span className="text-primary font-bold">ⓘ</span>
                    {CLUB_DESCRIPTION.independence}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={SITE_CONFIG.links.membership}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-4 bg-primary text-white text-center font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98]"
                  >
                    Devenir membre
                  </a>
                  <a
                    href={SITE_CONFIG.links.events}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-4 border border-border bg-white text-center text-text-primary font-bold rounded-xl hover:bg-surface transition-all active:scale-[0.98]"
                  >
                    Nos événements
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section - Modern separator */}
        <section className="mb-24 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-surface px-6 text-sm font-bold text-text-secondary uppercase tracking-[0.2em]">À propos du club</span>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-6 leading-tight">L'histoire d'une passion partagée</h2>
                <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  {CLUB_DESCRIPTION.history}
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <p className="text-lg text-text-secondary leading-relaxed">
                  Notre club vous propose de partager des moments de convivialité et d'échanges lors de plus d'une <span className="text-text-primary font-bold">soixantaine d'événements</span> ou de rassemblements organisés chaque année.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-surface rounded-2xl">
                    <div className="text-2xl font-bold text-primary">60+</div>
                    <div className="text-xs text-text-secondary uppercase font-bold mt-1">Événements / an</div>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-2xl">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-text-secondary uppercase font-bold mt-1">Bénévolat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Le Bureau Associatif</h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                Une équipe de bénévoles passionnés qui œuvrent chaque jour pour faire vivre la communauté.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLUB_STAFF.map((member) => (
              <Card key={member.id} className="group border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden bg-white">
                <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
                   {/* Placeholder pour l'image du membre */}
                   <div className="absolute inset-0 flex items-center justify-center text-5xl grayscale group-hover:grayscale-0 transition-all duration-500 bg-gradient-to-t from-black/20 to-transparent">
                     👤
                   </div>
                   <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-primary border-0 font-bold uppercase tracking-wider text-[10px] px-3">
                        {member.role}
                      </Badge>
                   </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-xl group-hover:text-primary transition-colors">{member.name}</CardTitle>
                  <CardDescription className="line-clamp-none text-text-secondary text-sm leading-relaxed">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regional Reps Section */}
        <section>
          <div className="bg-text-primary rounded-[3rem] p-8 lg:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">Responsables Régionaux</h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                  Vos interlocuteurs de proximité, présents partout en France pour animer votre communauté locale.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {REGIONAL_REPS.map((member) => (
                  <div key={member.id} className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        📍
                      </div>
                      <Badge className="bg-primary/20 text-primary-light border-0 text-[10px] font-bold">
                        {member.region}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light mb-4">
                      {member.description}
                    </p>
                    <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                       <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Actif en {member.region}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

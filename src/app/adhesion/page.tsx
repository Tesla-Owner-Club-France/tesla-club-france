import type { Metadata } from "next";
import Link from "next/link";
import { Container, Badge } from "@/components/ui";
import { SITE_CONFIG } from "@/types";

export const metadata: Metadata = {
  title: "Pourquoi adhérer",
  description: "Découvrez tous les avantages de l'adhésion au Tesla Owners Club France : partenaires, événements, communauté et bien plus.",
};

const benefits = [
  {
    icon: "🤝",
    title: "Réseau de partenaires exclusif",
    description: "Bénéficiez de réductions et d'offres spéciales chez nos partenaires certifiés : installateurs de bornes, garages spécialisés, accessoiristes et bien plus encore.",
    features: ["Réductions exclusives", "Professionnels certifiés", "Réseau national"],
  },
  {
    icon: "🎉",
    title: "Événements uniques",
    description: "Participez aux Tesla Owners Days et autres rassemblements réservés aux membres. Rencontrez d'autres passionnés et vivez des expériences inoubliables.",
    features: ["Tesla Owners Day annuel", "Visites exclusives", "Rassemblements régionaux"],
  },
  {
    icon: "👥",
    title: "Communauté passionnée",
    description: "Rejoignez le portail français unique dédié aux propriétaires Tesla certifiés. Échangez, partagez et apprenez avec d'autres membres.",
    features: ["Forum privé", "Groupes régionaux", "Entraide entre membres"],
  },
  {
    icon: "🎁",
    title: "Goodies exclusifs",
    description: "Accédez à la boutique officielle du club avec des vêtements et accessoires réservés aux membres CTO (Certified Tesla Owners).",
    features: ["Boutique exclusive", "Produits officiels", "Éditions limitées"],
  },
  {
    icon: "📬",
    title: "Information privilégiée",
    description: "Recevez en avant-première les actualités Tesla, les mises à jour importantes et les invitations aux événements via notre newsletter.",
    features: ["Newsletter mensuelle", "Actualités en avant-première", "Alertes événements"],
  },
  {
    icon: "✨",
    title: "Statut CTO",
    description: "Obtenez la reconnaissance officielle de Certified Tesla Owner et faites partie de la communauté des propriétaires Tesla en France.",
    features: ["Certificat membre", "Badge CTO", "Reconnaissance officielle"],
  },
];

const faq = [
  {
    question: "Comment devenir membre ?",
    answer: "L'inscription se fait en ligne via notre plateforme d'adhésion. Vous devrez fournir une preuve de propriété de votre Tesla (carte grise, facture...) pour valider votre statut CTO.",
  },
  {
    question: "Combien coûte l'adhésion ?",
    answer: "Le tarif d'adhésion annuelle est accessible et vous donne accès à l'ensemble des avantages du club. Consultez la page d'inscription pour connaître le montant exact.",
  },
  {
    question: "Puis-je participer aux événements sans être membre ?",
    answer: "Les événements majeurs comme le Tesla Owners Day sont réservés aux membres. Certains événements régionaux peuvent être ouverts aux non-membres sur invitation.",
  },
  {
    question: "Comment accéder aux avantages partenaires ?",
    answer: "Une fois membre, vous recevrez une carte ou un code permettant de justifier votre adhésion auprès de nos partenaires pour bénéficier des réductions.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 lg:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">
              Rejoignez-nous
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Pourquoi devenir membre ?
            </h1>
            <p className="text-xl text-white/80 mb-8">
              En rejoignant le Tesla Owners Club France, vous accédez à une communauté 
              unique de passionnés et à des avantages exclusifs.
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

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Les avantages membres
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Découvrez tout ce que votre adhésion vous apporte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partners Teaser */}
      <section className="py-16 lg:py-24 bg-surface">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Avantage membre
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Un réseau de partenaires à votre service
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                Nos partenaires sont sélectionnés pour leur expertise et leur engagement 
                envers la communauté Tesla. En tant que membre, bénéficiez de tarifs 
                préférentiels et d&apos;un service privilégié.
              </p>
              <Link
                href="/partenaires"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Découvrir nos partenaires
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["⚡ Recharge", "🔧 Entretien", "🚗 Carrosserie", "🎨 Accessoires"].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center border border-border"
                >
                  <span className="text-2xl">{item.split(" ")[0]}</span>
                  <p className="mt-2 font-medium text-text-primary">{item.split(" ")[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.question}
                </h3>
                <p className="text-text-secondary">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à nous rejoindre ?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              L&apos;adhésion ne prend que quelques minutes. 
              Rejoignez dès maintenant la communauté des propriétaires Tesla en France.
            </p>
            <a
              href={SITE_CONFIG.links.membership}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white hover:bg-white/90 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Devenir membre maintenant
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

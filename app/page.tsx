import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-white border-b border-[#e2ddd8]">
        <Container>
          <p className="text-xs uppercase tracking-widest text-[#c8a96e] mb-5">
            Importateur B2B de fils textiles
          </p>
          <h1 className="font-semibold text-[#1e1e1e] max-w-2xl mb-6 leading-tight">
            Tbartex approvisionne les industriels textiles qui exigent
            fiabilité, volume et conseil.
          </h1>
          <p className="text-lg text-[#6b6b6b] max-w-xl mb-10">
            Depuis {siteConfig.anneeCreation}, Tbartex fournit des fils textiles
            en gros à des clients professionnels. Sourcing international,
            gamme large, accompagnement concret.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Parler de votre besoin
            </Button>
            <Button href="/nos-fils" variant="secondary">
              Découvrir nos fils
            </Button>
          </div>
        </Container>
      </section>

      {/* Positionnement — 3 points */}
      <SectionWrapper alternate>
        <Container>
          <h2 className="text-xl font-semibold text-[#1e1e1e] mb-10">
            Pourquoi Tbartex
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {siteConfig.positionnement.map((point) => (
              <div key={point.titre}>
                <h3 className="text-sm font-semibold text-[#1e1e1e] uppercase tracking-wide mb-3">
                  {point.titre}
                </h3>
                <p className="text-sm text-[#6b6b6b]">{point.texte}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Chiffres clés */}
      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-3 gap-8 border-t border-b border-[#e2ddd8] py-12">
            {siteConfig.chiffresCles.map((c) => (
              <div key={c.label} className="text-center">
                <p className="text-3xl font-semibold text-[#1e1e1e] mb-2">{c.valeur}</p>
                <p className="text-xs uppercase tracking-widest text-[#a0a0a0]">{c.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Aperçu valeur ajoutée */}
      <SectionWrapper alternate>
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-[#1e1e1e] mb-4">
              Plus qu’un fournisseur de fil
            </h2>
            <p className="text-[#6b6b6b] mb-6">
              Tbartex conseille ses clients sur le choix des matières, propose des
              alternatives adaptées et aide à préserver la qualité tout en
              optimisant les coûts. Un rôle de partenaire, pas seulement de vendeur.
            </p>
            <Button href="/conseil" variant="ghost">
              Voir notre approche &rarr;
            </Button>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA final */}
      <CtaBanner
        heading="Un besoin spécifique ? Parlons-en."
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

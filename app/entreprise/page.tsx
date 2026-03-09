import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";

export default function EntreprisePage() {
  return (
    <>
      <PageHero
        title="L'entreprise"
        subtitle="Tbartex est une entreprise marocaine spécialisée dans l’importation et la revente B2B de fils textiles, fondée en 2005."
      />

      <SectionWrapper alternate>
        <Container>
          <h2 className="text-2xl font-semibold text-[#1e1e1e] mb-6">Notre activité</h2>
          <p className="text-[#6b6b6b] mb-4">
            Tbartex approvisionne des industriels textiles en fils de qualité, en volumes adaptés
            aux besoins de la production. Notre métier principal : l’importation et la revente
            B2B de fils textiles.
          </p>
          <p className="text-[#6b6b6b]">
            Nous travaillons avec un réseau de sourcing international sélectionné pour sa
            fiabilité et la régularité de ses livraisons.
          </p>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <h2 className="text-2xl font-semibold text-[#1e1e1e] mb-6">Nos engagements</h2>
          <ul className="flex flex-col gap-4">
            {[
              "Approvisionnement régulier en volumes adaptés",
              "Qualité constante et maîtrisée",
              "Réactivité et disponibilité",
              "Conseil personnalisé selon l’usage final",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#c8a96e] shrink-0" />
                <span className="text-[#6b6b6b] text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </SectionWrapper>

      <CtaBanner
        heading="Travaillons ensemble."
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

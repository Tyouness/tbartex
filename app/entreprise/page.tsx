import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/content/site";

export default function EntreprisePage() {
  return (
    <>
      <PageHero
        title="L'entreprise"
        subtitle="Tbartex est une entreprise marocaine spécialisée dans l’importation et la revente B2B de fils textiles, fondée en 2005."
      />

      {/* Activité */}
      <SectionWrapper alternate>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl font-semibold text-[#1e1e1e] mb-5">Notre activité</h2>
              <p className="text-[#6b6b6b] mb-4">
                Tbartex approvisionne des industriels textiles en fils de qualité,
                en volumes adaptés aux besoins de la production. Notre métier :
                l’importation et la revente B2B de fils textiles à des clients
                professionnels exigeants.
              </p>
              <p className="text-[#6b6b6b]">
                Fondée en {siteConfig.anneeCreation}, l’entreprise a développé un
                réseau de sourcing international sélectionné pour sa fiabilité et la
                régularité de ses livraisons.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1e1e1e] mb-5">Notre réseau</h2>
              <p className="text-[#6b6b6b]">
                Tbartex travaille avec un réseau de fournisseurs internationaux
                sélectionnés pour leur sérieux, leurs standards de qualité et leur
                capacité à livrer en volumes réguliers. Ce réseau nous permet de
                répondre à des demandes variées, y compris hors catalogue.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Engagements */}
      <SectionWrapper>
        <Container>
          <h2 className="text-xl font-semibold text-[#1e1e1e] mb-8">Nos engagements</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteConfig.engagements.map((item) => (
              <li key={item} className="flex items-start gap-4 p-5 border border-[#e2ddd8] bg-white">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c8a96e] shrink-0" />
                <span className="text-sm text-[#6b6b6b]">{item}</span>
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

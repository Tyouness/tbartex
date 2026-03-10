import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/content/site";

export default function EntreprisePage() {
  return (
    <>
      <PageHero
        label="L'entreprise"
        title="Un importateur B2B engagé dans la durée."
        subtitle="Tbartex est implantée au Maroc depuis 2005 et approvisionne des professionnels textiles exigeants en volumes réguliers."
      />

      {/* Activité + Réseau */}
      <section className="py-24 bg-[#f9f9f9]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a] mb-8">
                Notre activité
              </p>
              <p className="text-[15px] text-[#5a5a5a] leading-relaxed mb-5">
                Tbartex approvisionne des industriels textiles en fils de qualité,
                en volumes adaptés à la production. Notre métier : l&apos;importation et
                la revente B2B auprès de clients professionnels exigeants.
              </p>
              <p className="text-[15px] text-[#5a5a5a] leading-relaxed">
                Fondée en {siteConfig.anneeCreation}, l&apos;entreprise a développé un
                réseau de sourcing international sélectionné pour sa fiabilité et
                la régularité de ses livraisons.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a] mb-8">
                Notre réseau
              </p>
              <p className="text-[15px] text-[#5a5a5a] leading-relaxed">
                Tbartex travaille avec des fournisseurs internationaux
                sélectionnés pour leur sérieux, leurs standards de qualité et leur
                capacité à livrer en volumes réguliers. Ce réseau permet de
                répondre à des demandes variées, y compris hors catalogue standard.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Engagements */}
      <section className="py-24 bg-white">
        <Container>
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a] mb-16">
            Nos engagements
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
            {siteConfig.engagements.map((item, i) => (
              <li key={item} className="flex items-start gap-6">
                <span className="text-[10px] font-medium tracking-[0.1em] text-[#cccccc] shrink-0 mt-0.5 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] text-[#5a5a5a] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner
        heading="Travaillons ensemble."
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

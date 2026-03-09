import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import { univers } from "@/content/fils";

export default function NosFilsPage() {
  return (
    <>
      <PageHero
        title="Nos fils"
        subtitle="Tbartex propose une gamme de fils textiles organisée par univers de production, adaptée aux besoins industriels en volume."
      />

      <SectionWrapper alternate>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {univers.map((u) => (
              <div
                key={u.id}
                className="border border-[#e2ddd8] p-6 bg-[#f9f7f4]"
              >
                <h3 className="text-base font-semibold text-[#1e1e1e] mb-3">{u.titre}</h3>
                <p className="text-sm text-[#6b6b6b] mb-4">{u.description}</p>
                <p className="text-xs text-[#a0a0a0]">
                  {u.matieres.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <Container>
          <p className="text-[#6b6b6b]">
            Vous recherchez une référence spécifique non listée ci-dessus ?
            Notre réseau de sourcing couvre des besoins hors catalogue standard.
          </p>
        </Container>
      </SectionWrapper>

      <CtaBanner
        heading="Soumettre votre cahier des charges."
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

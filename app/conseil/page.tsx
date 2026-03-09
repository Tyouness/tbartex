import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import { axesValeur } from "@/content/valeurs";

export default function ConseilPage() {
  return (
    <>
      <PageHero
        title="Conseil & accompagnement"
        subtitle="Tbartex ne se limite pas à la fourniture de fils. Nous accompagnons nos clients dans leurs choix techniques et commerciaux."
      />

      <SectionWrapper alternate>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {axesValeur.map((axe) => (
              <div key={axe.id}>
                <h3 className="text-base font-semibold text-[#1e1e1e] mb-3">{axe.titre}</h3>
                <p className="text-sm text-[#6b6b6b]">{axe.corps}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <CtaBanner
        heading="Parlez-nous de votre besoin."
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

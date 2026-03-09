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
        subtitle="Tbartex ne se limite pas à la fourniture de fils. Nous accompagnons nos clients dans leurs choix techniques et commerciaux pour préserver la qualité et améliorer les marges."
      />

      <SectionWrapper alternate>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {axesValeur.map((axe, i) => (
              <div
                key={axe.id}
                className="p-6 border border-[#e2ddd8] bg-[#f9f7f4]"
              >
                <p className="text-xs uppercase tracking-widest text-[#c8a96e] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
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

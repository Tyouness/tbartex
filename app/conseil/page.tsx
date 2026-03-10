import Container from "@/components/ui/Container";
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

      <section className="py-20 bg-[#f5f5f5]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e5e5e5]">
            {axesValeur.map((axe, i) => (
              <div key={axe.id} className="bg-white p-10">
                <p className="text-[10px] text-[#a3a3a3] tracking-[0.2em] uppercase mb-6">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[#0a0a0a] font-medium text-xs uppercase tracking-[0.1em] mb-5">
                  {axe.titre}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed">{axe.corps}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Parlez-nous de votre besoin."
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

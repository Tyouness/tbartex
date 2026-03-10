import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import { axesValeur } from "@/content/valeurs";

export default function ConseilPage() {
  return (
    <>
      <PageHero
        label="Conseil & accompagnement"
        title="Plus qu'un fournisseur de matière."
        subtitle="Tbartex intervient en amont de la commande pour aider ses clients à faire les bons choix — en termes de matière, de qualité et de coût."
      />

      {/* 4 axes */}
      <section className="py-24 bg-[#f9f9f9]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {axesValeur.map((axe, i) => (
              <div
                key={axe.id}
                className="bg-white border border-[#ebebeb] p-12 hover:shadow-[0_4px_32px_rgba(0,0,0,0.05)] transition-shadow duration-300"
              >
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#cccccc] mb-10">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[16px] font-medium text-[#111111] leading-snug mb-5">
                  {axe.titre}
                </h3>
                <p className="text-[14px] text-[#666666] leading-relaxed">{axe.corps}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Parlez-nous de votre besoin."
        buttonLabel="Discutons-en"
        buttonHref="/contact"
      />
    </>
  );
}

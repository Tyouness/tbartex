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
        subtitle="Une gamme organisée par univers de production, adaptée aux besoins industriels en volume. Les fils listés ci-dessous représentent nos familles principales — d’autres références sont disponibles sur demande."
      />

      {/* Grille des univers */}
      <SectionWrapper alternate>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {univers.map((u) => (
              <div
                key={u.id}
                className="flex flex-col border border-[#e2ddd8] p-6 bg-[#f9f7f4]"
              >
                <h3 className="text-sm font-semibold text-[#1e1e1e] uppercase tracking-wide mb-3">
                  {u.titre}
                </h3>
                <p className="text-sm text-[#6b6b6b] mb-5 flex-1">{u.description}</p>
                <div className="pt-4 border-t border-[#e2ddd8]">
                  <p className="text-xs text-[#a0a0a0] leading-relaxed">
                    {u.matieres.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Sourcing sur demande */}
      <SectionWrapper>
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-[#1e1e1e] mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-[#6b6b6b]">
              Notre réseau de sourcing couvre des besoins hors catalogue standard.
              Si votre référence ne figure pas dans les familles ci-dessus,
              contactez-nous avec votre cahier des charges.
            </p>
          </div>
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

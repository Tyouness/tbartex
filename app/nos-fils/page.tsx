import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import Button from "@/components/ui/Button";
import { univers } from "@/content/fils";

export default function NosFilsPage() {
  return (
    <>
      <PageHero
        title="Nos fils"
        subtitle="Une gamme organisée par univers de production, adaptée aux besoins industriels en volume. Les fils listés ci-dessous représentent nos familles principales — d'autres références sont disponibles sur demande."
      />

      {/* ── Grille des univers ── */}
      <section className="py-20 bg-[#f5f5f5]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e5]">
            {univers.map((u, i) => (
              <div
                key={u.id}
                className="flex flex-col bg-white p-8 hover:bg-[#fafafa] transition-colors"
              >
                <p className="text-[10px] text-[#a3a3a3] tracking-widest mb-5">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xs font-medium text-[#0a0a0a] uppercase tracking-[0.1em] mb-4">
                  {u.titre}
                </h3>
                <p className="text-sm text-[#525252] mb-6 flex-1 leading-relaxed">
                  {u.description}
                </p>
                <div className="pt-5 border-t border-[#e5e5e5]">
                  <p className="text-[11px] text-[#a3a3a3] leading-relaxed">
                    {u.matieres.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Sourcing sur demande ── */}
      <section className="py-20 bg-white border-t border-[#e5e5e5]">
        <Container>
          <div className="max-w-xl">
            <h2 className="text-[#0a0a0a] mb-6">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-[#525252] mb-8 leading-relaxed">
              Notre réseau de sourcing couvre des besoins hors catalogue.
              Contactez-nous avec votre cahier des charges.
            </p>
            <Button href="/contact" variant="secondary">
              Nous contacter
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Soumettre votre cahier des charges."
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

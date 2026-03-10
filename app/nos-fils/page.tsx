import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import Button from "@/components/ui/Button";
import { univers } from "@/content/fils";

export default function NosFilsPage() {
  return (
    <>
      <PageHero
        label="Gamme"
        title="Des fils choisis pour l'industrie."
        subtitle="Familles principales disponibles en stock ou à l'ordre. D'autres références sont accessibles sur demande selon votre cahier des charges."
      />

      {/* Grille des univers */}
      <section className="py-24 bg-[#f9f9f9]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {univers.map((u, i) => (
              <div
                key={u.id}
                className="flex flex-col bg-white border border-[#ebebeb] p-10 hover:shadow-[0_4px_32px_rgba(0,0,0,0.05)] hover:border-[#d8d8d8] transition-all duration-300"
              >
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#cccccc] mb-8">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[15px] font-medium text-[#111111] leading-snug mb-4">
                  {u.titre}
                </h3>
                <p className="text-[14px] text-[#666666] leading-relaxed flex-1 mb-8">
                  {u.description}
                </p>
                <div className="pt-6 border-t border-[#f0f0f0]">
                  <p className="text-[11px] text-[#aaaaaa] leading-relaxed tracking-wide">
                    {u.matieres.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sourcing sur demande */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-xl">
            <h2 className="text-[#111111] mb-6">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-[15px] text-[#5a5a5a] leading-relaxed mb-10">
              Notre réseau de sourcing international couvre des besoins hors
              catalogue. Transmettez-nous votre cahier des charges.
            </p>
            <Button href="/contact" variant="secondary">
              Soumettre une demande
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Prêt à travailler ensemble ?"
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

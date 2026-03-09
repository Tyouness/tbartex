import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-white border-b border-[#e2ddd8]">
        <Container>
          <p className="text-xs uppercase tracking-widest text-[#c8a96e] mb-4">
            Importateur B2B de fils textiles
          </p>
          <h1 className="text-5xl font-semibold text-[#1e1e1e] max-w-2xl mb-6 leading-tight">
            Tbartex
          </h1>
          <p className="text-lg text-[#6b6b6b] max-w-xl mb-10">
            Fourniture de fils textiles en volumes industriels.
            Sourcing international, conseil expert, approvisionnement régulier.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Nous contacter
            </Button>
            <Button href="/nos-fils" variant="secondary">
              Découvrir nos fils
            </Button>
          </div>
        </Container>
      </section>

      {/* Positionnement */}
      <SectionWrapper alternate>
        <Container>
          <h2 className="text-2xl font-semibold text-[#1e1e1e] mb-10">
            Pourquoi Tbartex
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { titre: "Sourcing international", texte: "Un réseau d’approvisionnement fiable et sélectionné pour la régularité et la qualité." },
              { titre: "Large gamme de fils", texte: "Chaussettes, bonneterie, tissage, bandes élastiques, fils spéciaux — selon l’usage réel." },
              { titre: "Conseil expert", texte: "Alternatives, optimisation des marges, orientation selon l’usage final." },
            ].map((item) => (
              <div key={item.titre}>
                <h3 className="text-base font-semibold text-[#1e1e1e] mb-2">{item.titre}</h3>
                <p className="text-sm text-[#6b6b6b]">{item.texte}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA final */}
      <CtaBanner
        heading="Un besoin spécifique ? Parlons-en."
        buttonLabel="Parler de votre besoin"
        buttonHref="/contact"
      />
    </>
  );
}

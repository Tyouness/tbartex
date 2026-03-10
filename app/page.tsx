import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="min-h-[calc(100vh-72px)] flex flex-col justify-between bg-white">
        {/* Espace haut */}
        <div />
        {/* Contenu ancré en bas */}
        <Container>
          <div className="pb-20 md:pb-28">
            <p className="flex items-center gap-4 text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a] mb-12">
              <span className="inline-block w-6 h-px bg-[#d0d0d0]" aria-hidden="true" />
              Importateur B2B de fils textiles &mdash; depuis {siteConfig.anneeCreation}
            </p>

            <h1 className="text-[#111111] max-w-[18ch] mb-16">
              Approvisionner l&apos;industrie textile avec rigueur.
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-10 pt-10 border-t border-[#f0f0f0]">
              <p className="text-[15px] text-[#5a5a5a] max-w-[36ch] leading-relaxed">
                Sourcing international, gamme large,<br />
                accompagnement technique concret.
              </p>
              <div className="flex items-center gap-5">
                <Button href="/contact" variant="primary">
                  Parler de votre besoin
                </Button>
                <Button href="/nos-fils" variant="ghost">
                  Nos fils
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Pourquoi Tbartex ─── */}
      <section className="py-28 bg-[#f9f9f9]">
        <Container>
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a] mb-16">
            Pourquoi Tbartex
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {siteConfig.positionnement.map((point, i) => (
              <div key={point.titre}>
                <p className="text-[10px] tracking-[0.2em] text-[#cccccc] mb-8">
                  0{i + 1}
                </p>
                <h3 className="text-[15px] font-medium text-[#111111] leading-snug mb-4">
                  {point.titre}
                </h3>
                <p className="text-[14px] text-[#666666] leading-relaxed">{point.texte}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Chiffres clés ─── */}
      <section className="py-28 bg-white">
        <Container>
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            {siteConfig.chiffresCles.map((c) => (
              <div key={c.label}>
                <p className="text-[clamp(2.75rem,6vw,5.5rem)] font-thin text-[#111111] tracking-tight leading-none mb-4">
                  {c.valeur}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#aaaaaa]">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Plus qu'un fournisseur ─── */}
      <section className="py-28 bg-[#f9f9f9]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-[#111111] mb-8">
                Plus qu&apos;un fournisseur de fil.
              </h2>
              <p className="text-[15px] text-[#5a5a5a] leading-relaxed mb-10">
                Tbartex conseille ses clients sur le choix des matières, propose
                des alternatives adaptées et aide à préserver la qualité tout en
                optimisant les coûts.
              </p>
              <Button href="/conseil" variant="secondary">
                Notre approche
              </Button>
            </div>
            <div className="md:pt-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#aaaaaa] mb-8">
                Ce que ça change
              </p>
              <ul className="flex flex-col gap-6">
                {[
                  "Conseil matière et substitution",
                  "Optimisation des coûts sourcing",
                  "Réactivité sur les délais",
                  "Interlocuteur direct, sans intermédiaire",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[14px] text-[#5a5a5a]">
                    <span className="mt-[7px] w-4 h-px bg-[#cccccc] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Un besoin précis ? Parlons-en directement."
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

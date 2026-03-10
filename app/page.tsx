import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="min-h-[calc(100vh-72px)] flex items-center bg-white">
        <Container>
          <div className="py-24 md:py-32 max-w-[780px]">
            <p className="flex items-center gap-4 text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a] mb-10">
              <span className="inline-block w-6 h-px bg-[#d0d0d0]" aria-hidden="true" />
              Importateur B2B de fils textiles &mdash; depuis {siteConfig.anneeCreation}
            </p>

            <h1 className="text-[#111111] mb-8" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
              Approvisionner l&apos;industrie textile<br />
              avec rigueur et fiabilité.
            </h1>

            <p className="text-[16px] text-[#6a6a6a] max-w-[44ch] leading-relaxed mb-12">
              Tbartex fournit les industriels textiles en fils de qualité,
              en volumes réguliers, avec un accompagnement technique concret.
            </p>

            <div className="flex items-center gap-6">
              <Button href="/contact" variant="primary">
                Parler de votre besoin
              </Button>
              <Button href="/nos-fils" variant="secondary">
                Voir nos fils
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Pourquoi Tbartex ─── */}
      <section className="py-24 bg-[#f9f9f9]">
        <Container>
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a] mb-14">
            Pourquoi Tbartex
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {siteConfig.positionnement.map((point, i) => (
              <div key={point.titre} className="pt-8 border-t border-[#e8e8e8]">
                <p className="text-[11px] font-medium tracking-[0.15em] text-[#bbbbbb] mb-6">
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
      <section className="py-20 bg-white border-y border-[#f0f0f0]">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-[#f0f0f0]">
            {siteConfig.chiffresCles.map((c) => (
              <div key={c.label} className="px-6 md:px-12 first:pl-0 last:pr-0 flex flex-col justify-center py-4">
                <p className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-[#111111] tracking-tight leading-none mb-3">
                  {c.valeur}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#aaaaaa] leading-tight">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Plus qu'un fournisseur ─── */}
      <section className="py-24 bg-[#f9f9f9]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-[#111111] mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}>
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
            <div className="md:pt-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#aaaaaa] mb-8">
                Ce que ça change
              </p>
              <ul className="flex flex-col">
                {[
                  "Conseil matière et substitution",
                  "Optimisation des coûts sourcing",
                  "Réactivité sur les délais",
                  "Interlocuteur direct, sans intermédiaire",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-5 text-[14px] text-[#5a5a5a] py-4 border-b border-[#ebebeb] last:border-0">
                    <span className="w-1 h-1 rounded-full bg-[#aaaaaa] shrink-0" />
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

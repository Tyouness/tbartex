import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-[85vh] flex items-center bg-white border-b border-[#e5e5e5]">
        <Container>
          <div className="py-20 max-w-4xl">
            <p className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#a3a3a3] mb-10">
              <span className="inline-block w-8 h-px bg-[#a3a3a3]" aria-hidden="true" />
              Importateur B2B de fils textiles &mdash; depuis {siteConfig.anneeCreation}
            </p>
            <h1 className="text-[#0a0a0a] mb-8 max-w-3xl">
              Tbartex approvisionne les industriels textiles qui exigent
              fiabilité, volume et conseil.
            </h1>
            <p className="text-lg text-[#525252] max-w-lg mb-12 leading-relaxed">
              Sourcing international, gamme large, accompagnement concret.
              Un fournisseur qui s&apos;engage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Parler de votre besoin
              </Button>
              <Button href="/nos-fils" variant="secondary">
                Découvrir nos fils
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Positionnement ── */}
      <section className="py-20 bg-white border-b border-[#e5e5e5]">
        <Container>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#a3a3a3] mb-12">
            Pourquoi Tbartex
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e5e5e5]">
            {siteConfig.positionnement.map((point, i) => (
              <div key={point.titre} className="bg-white p-8 md:p-10">
                <p className="text-[10px] text-[#a3a3a3] tracking-widest mb-5">
                  0{i + 1}
                </p>
                <h3 className="text-[#0a0a0a] font-medium text-xs uppercase tracking-[0.1em] mb-4">
                  {point.titre}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed">{point.texte}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Chiffres clés ── */}
      <section className="py-20 bg-[#f5f5f5]">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-[#e5e5e5]">
            {siteConfig.chiffresCles.map((c) => (
              <div key={c.label} className="text-center py-10 px-4 md:px-8">
                <p className="text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#0a0a0a] tracking-tight leading-none mb-4">
                  {c.valeur}
                </p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#a3a3a3]">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Valeur ajoutée ── */}
      <section className="py-20 bg-white border-t border-[#e5e5e5]">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-[#0a0a0a] mb-6">
              Plus qu&apos;un fournisseur de fil
            </h2>
            <p className="text-[#525252] mb-8 leading-relaxed">
              Tbartex conseille ses clients sur le choix des matières, propose des
              alternatives adaptées et aide à préserver la qualité tout en
              optimisant les coûts. Un rôle de partenaire, pas seulement de vendeur.
            </p>
            <Button href="/conseil" variant="ghost">
              Voir notre approche
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner
        heading="Un besoin spécifique ? Parlons-en."
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

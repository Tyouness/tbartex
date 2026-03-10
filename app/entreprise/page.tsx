import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/content/site";

export default function EntreprisePage() {
  return (
    <>
      <PageHero
        title="L'entreprise"
        subtitle="Tbartex est une entreprise marocaine spécialisée dans l'importation et la revente B2B de fils textiles, fondée en 2005."
      />

      {/* ── Activité & Réseau ── */}
      <section className="py-20 bg-white border-b border-[#e5e5e5]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#a3a3a3] mb-6">
                Notre activité
              </p>
              <p className="text-[#525252] leading-relaxed mb-5">
                Tbartex approvisionne des industriels textiles en fils de qualité,
                en volumes adaptés aux besoins de la production. Notre métier :
                l'importation et la revente B2B de fils textiles à des clients
                professionnels exigeants.
              </p>
              <p className="text-[#525252] leading-relaxed">
                Fondée en {siteConfig.anneeCreation}, l'entreprise a développé un
                réseau de sourcing international sélectionné pour sa fiabilité et
                la régularité de ses livraisons.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#a3a3a3] mb-6">
                Notre réseau
              </p>
              <p className="text-[#525252] leading-relaxed">
                Tbartex travaille avec un réseau de fournisseurs internationaux
                sélectionnés pour leur sérieux, leurs standards de qualité et leur
                capacité à livrer en volumes réguliers. Ce réseau nous permet de
                répondre à des demandes variées, y compris hors catalogue.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Engagements ── */}
      <section className="py-20 bg-[#f5f5f5]">
        <Container>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#a3a3a3] mb-12">
            Nos engagements
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e5e5e5]">
            {siteConfig.engagements.map((item, i) => (
              <li key={item} className="bg-[#f5f5f5] p-8 flex items-start gap-6">
                <span className="text-[10px] text-[#a3a3a3] tracking-widest shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-[#525252] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner
        heading="Travaillons ensemble."
        buttonLabel="Nous contacter"
        buttonHref="/contact"
      />
    </>
  );
}

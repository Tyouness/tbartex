import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/content/site";

const { legal, email, telephone } = siteConfig;

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        subtitle={`Site ${legal.nomDomaine} — édité par Tbartex`}
      />

      <SectionWrapper alternate>
        <Container>
          <div className="max-w-2xl">

            {/* 1. Éditeur */}
            <section className="py-10 border-b border-[#e2ddd8] first:pt-0">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Éditeur du site
              </h2>
              <div className="flex flex-col gap-2 text-sm text-[#6b6b6b] leading-relaxed">
                <p>
                  Le site <strong className="text-[#1e1e1e]">{legal.nomDomaine}</strong> est
                  édité par :
                </p>
                <p>
                  <strong className="text-[#1e1e1e]">{legal.raisonSociale}</strong>
                  {" — "}{legal.formeJuridique}
                </p>
                <p>Siège social : {legal.siege}</p>
                <p>Registre de Commerce (RC) : {legal.rc}</p>
                <p>Identifiant Commun de l&apos;Entreprise (ICE) : {legal.ice}</p>
                <p>
                  Email :{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                  >
                    {email}
                  </a>
                </p>
                <p>
                  Téléphone :{" "}
                  <a
                    href={`tel:${telephone}`}
                    className="text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                  >
                    {telephone}
                  </a>
                </p>
              </div>
            </section>

            {/* 2. Directeur de la publication */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Directeur de la publication
              </h2>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                {legal.directeurPublication}
              </p>
            </section>

            {/* 3. Hébergement */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Hébergement
              </h2>
              <div className="flex flex-col gap-2 text-sm text-[#6b6b6b] leading-relaxed">
                <p>
                  Ce site est hébergé par{" "}
                  <strong className="text-[#1e1e1e]">{legal.hebergeurNom}</strong>
                </p>
                <p>{legal.hebergeurAdresse}</p>
                <p>
                  <a
                    href={legal.hebergeurSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                  >
                    {legal.hebergeurSite}
                  </a>
                </p>
              </div>
            </section>

            {/* 4. Propriété intellectuelle */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Propriété intellectuelle
              </h2>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                L&apos;ensemble des contenus présents sur ce site — textes, structure et
                organisation — est la propriété exclusive de {legal.raisonSociale}.
                Toute reproduction, même partielle, est interdite sans autorisation
                écrite préalable.
              </p>
            </section>

            {/* 5. Responsabilité */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Responsabilité
              </h2>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Les informations présentées sur ce site ont un caractère informatif
                général et ne constituent pas un engagement contractuel. Tbartex
                s&apos;efforce d&apos;en assurer l&apos;exactitude et la mise à jour régulière,
                sans pouvoir en garantir l&apos;exhaustivité.
              </p>
            </section>

            {/* 6. Contact */}
            <section className="py-10">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Contact
              </h2>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Pour toute question relative à ce site :{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                >
                  {email}
                </a>
              </p>
            </section>

          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}

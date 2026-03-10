import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/content/site";

const { legal, email, telephone } = siteConfig;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-[#f0f0f0] last:border-0">
    <h2 className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a] mb-6">
      {title}
    </h2>
    <div className="text-[14px] text-[#5a5a5a] leading-[1.9] flex flex-col gap-3">
      {children}
    </div>
  </div>
);

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        label="Mentions légales"
        title="Informations légales"
        subtitle={`Site ${legal.nomDomaine} — édité par Tbartex`}
      />

      <section className="py-20 bg-[#f9f9f9]">
        <Container>
          <div className="max-w-[640px]">

            <Section title="Éditeur du site">
              <p>
                Le site <strong className="text-[#111111] font-medium">{legal.nomDomaine}</strong> est
                édité par <strong className="text-[#111111] font-medium">{legal.raisonSociale}</strong>
                {" — "}{legal.formeJuridique}.
              </p>
              <p>Siège social : {legal.siege}</p>
              <p>Registre de Commerce (RC) : {legal.rc}</p>
              <p>Identifiant Commun de l&apos;Entreprise (ICE) : {legal.ice}</p>
              <p>
                Email :{" "}
                <a href={`mailto:${email}`} className="text-[#111111] hover:text-[#555555] transition-colors">
                  {email}
                </a>
              </p>
              <p>
                Téléphone :{" "}
                <a href={`tel:${telephone}`} className="text-[#111111] hover:text-[#555555] transition-colors">
                  {telephone}
                </a>
              </p>
            </Section>

            <Section title="Directeur de la publication">
              <p>{legal.directeurPublication}</p>
            </Section>

            <Section title="Hébergement">
              <p>
                Ce site est hébergé par{" "}
                <strong className="text-[#111111] font-medium">{legal.hebergeurNom}</strong>.
              </p>
              <p>{legal.hebergeurAdresse}</p>
              <p>
                <a
                  href={legal.hebergeurSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] hover:text-[#555555] transition-colors"
                >
                  {legal.hebergeurSite}
                </a>
              </p>
            </Section>

            <Section title="Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus présents sur ce site — textes, structure et
                organisation — est la propriété exclusive de {legal.raisonSociale}.
                Toute reproduction, même partielle, est interdite sans autorisation
                écrite préalable.
              </p>
            </Section>

            <Section title="Responsabilité">
              <p>
                Les informations présentées sur ce site ont un caractère informatif
                général et ne constituent pas un engagement contractuel. Tbartex
                s&apos;efforce d&apos;en assurer l&apos;exactitude et la mise à jour régulière,
                sans pouvoir en garantir l&apos;exhaustivité.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Pour toute question relative à ce site :{" "}
                <a href={`mailto:${email}`} className="text-[#111111] hover:text-[#555555] transition-colors">
                  {email}
                </a>
              </p>
            </Section>

          </div>
        </Container>
      </section>
    </>
  );
}

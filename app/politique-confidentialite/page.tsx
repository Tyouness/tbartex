import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/content/site";

const { legal, email } = siteConfig;
const supabaseRegion = legal.supabaseRegion;

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        subtitle={`Dernière mise à jour : ${legal.dateMaj}`}
      />

      <SectionWrapper alternate>
        <Container>
          <div className="max-w-2xl">

            {/* 1. Responsable du traitement */}
            <section className="py-10 border-b border-[#e2ddd8] first:pt-0">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Responsable du traitement
              </h2>
              <div className="flex flex-col gap-2 text-sm text-[#6b6b6b] leading-relaxed">
                <p>
                  <strong className="text-[#1e1e1e]">{legal.raisonSociale}</strong>
                  {" — "}{legal.formeJuridique}
                </p>
                <p>Siège social : {legal.siege}</p>
                <p>
                  Email :{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                  >
                    {email}
                  </a>
                </p>
              </div>
            </section>

            {/* 2. Données collectées */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Données collectées
              </h2>
              <div className="flex flex-col gap-3 text-sm text-[#6b6b6b] leading-relaxed">
                <p>
                  Lors de l&apos;envoi du formulaire de contact, les données suivantes
                  sont collectées :
                </p>
                <ul className="flex flex-col gap-1 pl-4">
                  {[
                    "Nom et prénom",
                    "Entreprise",
                    "Adresse email",
                    "Numéro de téléphone (optionnel)",
                    "Type de demande",
                    "Message libre",
                    "Consentement explicite au traitement",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#c8a96e] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  Aucune autre donnée n&apos;est collectée. Le site ne dispose pas de
                  compte utilisateur, d&apos;espace client, ni de newsletter.
                </p>
              </div>
            </section>

            {/* 3. Finalité */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Finalité du traitement
              </h2>
              <div className="flex flex-col gap-2 text-sm text-[#6b6b6b] leading-relaxed">
                <p>Les données collectées sont utilisées exclusivement pour :</p>
                <ul className="flex flex-col gap-1 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#c8a96e] shrink-0" />
                    Répondre aux demandes de contact et de devis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#c8a96e] shrink-0" />
                    Assurer le suivi commercial des demandes B2B entrantes
                  </li>
                </ul>
                <p>
                  Elles ne sont utilisées à aucune fin publicitaire, marketing
                  automatisé ou de revente.
                </p>
              </div>
            </section>

            {/* 4. Base légale */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Base légale du traitement
              </h2>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Les données sont traitées dans le cadre de la demande de contact
                initiée par la personne concernée. Le consentement est recueilli
                via la case à cocher du formulaire, dont la validation conditionne
                l&apos;envoi de la demande. Ce consentement peut être retiré à tout
                moment en nous contactant à l&apos;adresse indiquée ci-dessous.
              </p>
            </section>

            {/* 5. Durée de conservation */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Durée de conservation
              </h2>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Les données sont conservées pendant{" "}
                <strong className="text-[#1e1e1e]">{legal.dureeConservation}</strong>{" "}
                à compter de la dernière interaction, conformément aux pratiques
                habituelles en matière de suivi commercial B2B. Passé ce délai,
                elles sont supprimées ou anonymisées.
              </p>
            </section>

            {/* 6. Hébergement et sous-traitance */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Hébergement et sous-traitance
              </h2>
              <div className="flex flex-col gap-3 text-sm text-[#6b6b6b] leading-relaxed">
                <p>
                  Le site est hébergé par{" "}
                  <strong className="text-[#1e1e1e]">{legal.hebergeurNom}</strong>{" "}
                  ({legal.hebergeurAdresse}).
                </p>
                <p>
                  Les données du formulaire de contact sont stockées chez notre
                  sous-traitant technique{" "}
                  <strong className="text-[#1e1e1e]">Supabase Inc.</strong>{" "}
                  (<a
                    href="https://supabase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                  >
                    supabase.com
                  </a>).
                  Région de stockage : <em>{supabaseRegion}</em>.
                </p>
                <p>
                  Si les données sont hébergées en dehors de l&apos;Union européenne,
                  Supabase s&apos;engage contractuellement à respecter les exigences
                  applicables aux transferts de données (clauses contractuelles
                  types de la Commission européenne).
                </p>
              </div>
            </section>

            {/* 7. Sécurité */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Sécurité
              </h2>
              <div className="flex flex-col gap-2 text-sm text-[#6b6b6b] leading-relaxed">
                <p>
                  Les transmissions de données entre votre navigateur et nos
                  serveurs sont chiffrées via HTTPS.
                </p>
                <p>
                  L&apos;accès à la base de données est restreint côté serveur par une
                  clé d&apos;accès privée. Aucune donnée n&apos;est directement accessible
                  depuis le navigateur.
                </p>
              </div>
            </section>

            {/* 8. Vos droits */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Vos droits
              </h2>
              <div className="flex flex-col gap-3 text-sm text-[#6b6b6b] leading-relaxed">
                <p>
                  Conformément au Règlement général sur la protection des données
                  (RGPD), vous disposez des droits suivants sur vos données :
                </p>
                <ul className="flex flex-col gap-1 pl-4">
                  {[
                    "Droit d'accès",
                    "Droit de rectification",
                    "Droit à l'effacement",
                    "Droit à la portabilité",
                    "Droit d'opposition",
                    "Droit de retirer votre consentement à tout moment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#c8a96e] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à :{" "}
                  <a
                    href={`mailto:${legal.emailRgpd}`}
                    className="text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                  >
                    {legal.emailRgpd}
                  </a>
                  . Nous répondons dans un délai de 30 jours.
                </p>
              </div>
            </section>

            {/* 9. Cookies */}
            <section className="py-10 border-b border-[#e2ddd8]">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Cookies
              </h2>
              <div className="flex flex-col gap-2 text-sm text-[#6b6b6b] leading-relaxed">
                <p>
                  Ce site n&apos;utilise pas de cookies publicitaires, de tracking
                  ou d&apos;analyse comportementale.
                </p>
                <p>
                  Seuls des cookies strictement techniques peuvent être utilisés
                  pour le bon fonctionnement du site. Ils ne sont déposés à
                  aucune fin publicitaire ni analytique et ne nécessitent pas de
                  consentement.
                </p>
              </div>
            </section>

            {/* 10. Mise à jour */}
            <section className="py-10">
              <h2 className="text-xs uppercase tracking-widest text-[#1e1e1e] font-semibold mb-5">
                Mise à jour de cette politique
              </h2>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Cette politique peut être mise à jour en cas d&apos;évolution du site
                ou de la réglementation applicable. La date de dernière mise à
                jour est indiquée en haut de cette page.
              </p>
            </section>

          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}

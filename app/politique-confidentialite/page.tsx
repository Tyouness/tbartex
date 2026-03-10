import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/content/site";

const { legal, email } = siteConfig;
const supabaseRegion = legal.supabaseRegion;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-[#f0f0f0] last:border-0">
    <h2 className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a] mb-6">
      {title}
    </h2>
    <div className="text-[14px] text-[#5a5a5a] leading-[1.9] flex flex-col gap-4">
      {children}
    </div>
  </div>
);

const Bullet = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-2 pl-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-[14px] text-[#5a5a5a]">
        <span className="mt-[11px] w-3 h-px bg-[#cccccc] shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        label="Confidentialité"
        title="Politique de confidentialité"
        subtitle={`Dernière mise à jour : ${legal.dateMaj}`}
      />

      <section className="py-20 bg-[#f9f9f9]">
        <Container>
          <div className="max-w-[640px]">

            <Section title="Responsable du traitement">
              <p>
                <strong className="text-[#111111] font-medium">{legal.raisonSociale}</strong>
                {" — "}{legal.formeJuridique}
              </p>
              <p>Siège social : {legal.siege}</p>
              <p>
                Email :{" "}
                <a href={`mailto:${email}`} className="text-[#111111] hover:text-[#555555] transition-colors">
                  {email}
                </a>
              </p>
            </Section>

            <Section title="Données collectées">
              <p>Lors de l&apos;envoi du formulaire de contact, les données suivantes sont collectées :</p>
              <Bullet items={[
                "Nom et prénom",
                "Entreprise",
                "Adresse email",
                "Numéro de téléphone (optionnel)",
                "Type de demande",
                "Message libre",
                "Consentement explicite au traitement",
              ]} />
              <p>
                Aucune autre donnée n&apos;est collectée. Le site ne dispose pas de compte
                utilisateur, d&apos;espace client, ni de newsletter.
              </p>
            </Section>

            <Section title="Finalité du traitement">
              <p>Les données collectées sont utilisées exclusivement pour :</p>
              <Bullet items={[
                "Répondre aux demandes de contact et de devis",
                "Assurer le suivi commercial des demandes B2B entrantes",
              ]} />
              <p>Elles ne sont utilisées à aucune fin publicitaire, marketing automatisé ou de revente.</p>
            </Section>

            <Section title="Base légale du traitement">
              <p>
                Les données sont traitées dans le cadre de la demande de contact initiée par la
                personne concernée. Le consentement est recueilli via la case à cocher du formulaire,
                dont la validation conditionne l&apos;envoi. Ce consentement peut être retiré à tout moment
                en nous contactant.
              </p>
            </Section>

            <Section title="Durée de conservation">
              <p>
                Les données sont conservées pendant{" "}
                <strong className="text-[#111111] font-medium">{legal.dureeConservation}</strong>{" "}
                à compter de la dernière interaction. Passé ce délai, elles sont supprimées ou
                anonymisées.
              </p>
            </Section>

            <Section title="Hébergement et sous-traitance">
              <p>
                Le site est hébergé par{" "}
                <strong className="text-[#111111] font-medium">{legal.hebergeurNom}</strong>{" "}
                ({legal.hebergeurAdresse}).
              </p>
              <p>
                Les données du formulaire sont stockées chez{" "}
                <strong className="text-[#111111] font-medium">Supabase Inc.</strong>{" "}
                (
                <a
                  href="https://supabase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] hover:text-[#555555] transition-colors"
                >
                  supabase.com
                </a>
                ). Région de stockage : <em>{supabaseRegion}</em>.
              </p>
              <p>
                Si les données sont hébergées en dehors de l&apos;Union européenne, Supabase s&apos;engage
                contractuellement à respecter les exigences applicables aux transferts
                (clauses contractuelles types de la Commission européenne).
              </p>
            </Section>

            <Section title="Sécurité">
              <p>Les transmissions sont chiffrées via HTTPS.</p>
              <p>
                L&apos;accès à la base de données est restreint côté serveur par une clé privée.
                Aucune donnée n&apos;est directement accessible depuis le navigateur.
              </p>
            </Section>

            <Section title="Vos droits">
              <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos données :
              </p>
              <Bullet items={[
                "Droit d'accès",
                "Droit de rectification",
                "Droit à l'effacement",
                "Droit à la portabilité",
                "Droit d'opposition",
                "Droit de retirer votre consentement à tout moment",
              ]} />
              <p>
                Pour exercer ces droits, écrivez à :{" "}
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

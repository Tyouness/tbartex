import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/content/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Prenons contact"
        subtitle="Remplissez le formulaire ci-dessous ou contactez-nous directement. Réponse sous 48h ouvrables."
      />

      <SectionWrapper alternate>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">

            {/* Formulaire placeholder — sera connecté à Supabase */}
            <div>
              <p className="text-sm text-[#a0a0a0] mb-6 italic">
                Formulaire — à intégrer (Supabase / API route)
              </p>
              <div className="flex flex-col gap-4">
                {["Nom", "Entreprise", "Email", "Téléphone"].map((field) => (
                  <div key={field}>
                    <label className="block text-xs uppercase tracking-wide text-[#6b6b6b] mb-1">
                      {field}
                    </label>
                    <div className="h-10 border border-[#e2ddd8] rounded-[4px] bg-white" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#6b6b6b] mb-1">
                    Message
                  </label>
                  <div className="h-28 border border-[#e2ddd8] rounded-[4px] bg-white" />
                </div>
              </div>
            </div>

            {/* Coordonnées directes */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#a0a0a0] mb-2">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#a0a0a0] mb-2">Téléphone</p>
                <a
                  href={`tel:${siteConfig.telephone}`}
                  className="text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                >
                  {siteConfig.telephone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#a0a0a0] mb-2">Délai de réponse</p>
                <p className="text-sm text-[#6b6b6b]">{siteConfig.delaiReponse}</p>
              </div>
            </div>

          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}

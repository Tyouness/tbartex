"use client";

import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const inputClass =
  "w-full h-11 px-4 border border-[#e2ddd8] bg-white text-sm text-[#1e1e1e] rounded-[4px] outline-none focus:border-[#c8a96e] transition-colors placeholder:text-[#c0bbb5]";

const labelClass = "block text-xs uppercase tracking-wide text-[#6b6b6b] mb-2";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Prenons contact"
        subtitle={`${siteConfig.delaiReponse}. Remplissez le formulaire ci-dessous ou écrivez-nous directement.`}
      />

      <SectionWrapper alternate>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Formulaire — non fonctionnel, à brancher avec Supabase */}
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Prénom / Nom</label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className={inputClass}
                    disabled
                  />
                </div>
                <div>
                  <label className={labelClass}>Entreprise</label>
                  <input
                    type="text"
                    placeholder="Votre entreprise"
                    className={inputClass}
                    disabled
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  placeholder="email@entreprise.com"
                  className={inputClass}
                  disabled
                />
              </div>
              <div>
                <label className={labelClass}>Téléphone</label>
                <input
                  type="tel"
                  placeholder="+33 6 00 00 00 00"
                  className={inputClass}
                  disabled
                />
              </div>
              <div>
                <label className={labelClass}>Type de demande</label>
                <select className={`${inputClass} cursor-not-allowed`} disabled>
                  <option>Demande de devis</option>
                  <option>Demande d’information</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  placeholder="Décrivez votre besoin…"
                  rows={5}
                  className={`${inputClass} h-auto py-3 resize-none`}
                  disabled
                />
              </div>
              <p className="text-xs text-[#a0a0a0] italic">
                Formulaire en cours d’intégration. En attendant, contactez-nous directement.
              </p>
              <Button type="submit" variant="primary" className="opacity-50 cursor-not-allowed">
                Envoyer ma demande
              </Button>
            </form>

            {/* Coordonnées */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#a0a0a0] mb-3">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-base text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#a0a0a0] mb-3">Téléphone</p>
                <a
                  href={`tel:${siteConfig.telephone}`}
                  className="text-base text-[#1e1e1e] hover:text-[#c8a96e] transition-colors"
                >
                  {siteConfig.telephone}
                </a>
              </div>
              <div className="border-t border-[#e2ddd8] pt-6">
                <p className="text-sm text-[#6b6b6b]">{siteConfig.delaiReponse}.</p>
              </div>
            </div>

          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}

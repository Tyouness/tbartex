"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/content/site";
import type { TypeDemande } from "@/types";

const TYPES_DEMANDE: TypeDemande[] = [
  "Demande de devis",
  "Demande d'information",
  "Partenariat / sourcing",
  "Autre",
];

const inputClass =
  "w-full h-11 px-4 border border-[#e2ddd8] bg-white text-sm text-[#1e1e1e] rounded-[4px] outline-none focus:border-[#c8a96e] transition-colors placeholder:text-[#c0bbb5] disabled:opacity-50 disabled:cursor-not-allowed";

const labelClass = "block text-xs uppercase tracking-wide text-[#6b6b6b] mb-2";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormFields {
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  type_demande: TypeDemande;
  message: string;
  consentement_confidentialite: boolean;
}

const emptyForm: FormFields = {
  nom: "",
  entreprise: "",
  email: "",
  telephone: "",
  type_demande: "Demande de devis",
  message: "",
  consentement_confidentialite: false,
};

function validateClient(fields: FormFields): string | null {
  if (fields.nom.trim().length < 2) return "Le nom est requis (minimum 2 caractères).";
  if (fields.entreprise.trim().length < 2) return "L'entreprise est requise.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim()))
    return "L'adresse email est invalide.";
  if (fields.message.trim().length < 10)
    return "Le message est trop court (minimum 10 caractères).";
  if (!fields.consentement_confidentialite)
    return "Vous devez accepter la politique de confidentialité.";
  return null;
}

export default function ContactPage() {
  const [fields, setFields] = useState<FormFields>(emptyForm);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const clientError = validateClient(fields);
    if (clientError) {
      setStatus("error");
      setErrorMessage(clientError);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, website: honeypot }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Erreur inattendue.");
      }

      setStatus("success");
      setFields(emptyForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Merci de réessayer ou de nous contacter directement."
      );
    }
  }

  const isLoading = status === "loading";

  return (
    <>
      <PageHero
        title="Prenons contact"
        subtitle={`${siteConfig.delaiReponse}. Remplissez le formulaire ci-dessous ou écrivez-nous directement.`}
      />

      <SectionWrapper alternate>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Formulaire */}
            {status === "success" ? (
              <div className="flex flex-col gap-5 justify-center py-8">
                <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center mb-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="#3a7d44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-[#1e1e1e]">Demande envoyée</h2>
                <p className="text-[#6b6b6b]">
                  Nous avons bien reçu votre message. {siteConfig.delaiReponse.toLowerCase()}.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-[#c8a96e] hover:text-[#a88a52] transition-colors text-left"
                >
                  Envoyer une autre demande &rarr;
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
                />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className={labelClass}>
                      Prénom / Nom <span className="text-[#c8a96e]">*</span>
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      placeholder="Jean Dupont"
                      autoComplete="name"
                      className={inputClass}
                      value={fields.nom}
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="entreprise" className={labelClass}>
                      Entreprise <span className="text-[#c8a96e]">*</span>
                    </label>
                    <input
                      id="entreprise"
                      name="entreprise"
                      type="text"
                      placeholder="Votre entreprise"
                      autoComplete="organization"
                      className={inputClass}
                      value={fields.entreprise}
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-[#c8a96e]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@entreprise.com"
                    autoComplete="email"
                    className={inputClass}
                    value={fields.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className={labelClass}>
                    Téléphone{" "}
                    <span className="text-[#a0a0a0] normal-case tracking-normal font-normal">(optionnel)</span>
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="+33 6 00 00 00 00"
                    autoComplete="tel"
                    className={inputClass}
                    value={fields.telephone}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="type_demande" className={labelClass}>
                    Type de demande <span className="text-[#c8a96e]">*</span>
                  </label>
                  <select
                    id="type_demande"
                    name="type_demande"
                    className={`${inputClass} cursor-pointer`}
                    value={fields.type_demande}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    {TYPES_DEMANDE.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message <span className="text-[#c8a96e]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre besoin, les volumes attendus, les matières recherchées…"
                    rows={5}
                    className={`${inputClass} h-auto py-3 resize-none`}
                    value={fields.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    name="consentement_confidentialite"
                    type="checkbox"
                    className="mt-0.5 w-4 h-4 shrink-0 accent-[#c8a96e] cursor-pointer"
                    checked={fields.consentement_confidentialite}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                  <span className="text-xs text-[#6b6b6b] leading-relaxed">
                    J&apos;accepte que mes données soient utilisées pour traiter ma demande,
                    conformément à la{" "}
                    <Link
                      href="/politique-confidentialite"
                      className="text-[#c8a96e] hover:text-[#a88a52] underline underline-offset-2"
                    >
                      politique de confidentialité
                    </Link>
                    . <span className="text-[#c8a96e]">*</span>
                  </span>
                </label>

                {status === "error" && errorMessage && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-[4px] px-4 py-3">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="h-11 px-6 bg-[#1e1e1e] text-white text-sm font-medium rounded-[4px] hover:bg-[#2d2d2d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Envoi en cours…
                    </>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </button>
              </form>
            )}

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

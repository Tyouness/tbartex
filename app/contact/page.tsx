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
  "w-full h-12 px-5 border border-[#ebebeb] bg-white text-[14px] text-[#111111] outline-none focus:border-[#aaaaaa] transition-colors placeholder:text-[#cccccc] disabled:opacity-50 disabled:cursor-not-allowed";

const labelClass = "block text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a9a9a] mb-3";

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
        label="Contact"
        title="Parlons de votre besoin."
        subtitle={`${siteConfig.delaiReponse}. Remplissez le formulaire ou écrivez-nous directement.`}
      />

      <SectionWrapper alternate>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Formulaire */}
            {status === "success" ? (
              <div className="flex flex-col gap-6 justify-center py-12">
                <div className="w-8 h-px bg-[#cccccc] mb-4" />
                  <h2 className="text-[22px] font-light text-[#111111] tracking-tight">Demande bien reçue.</h2>
                <p className="text-[14px] text-[#666666] leading-relaxed">
                  Nous avons bien reçu votre message. {siteConfig.delaiReponse.toLowerCase()}.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#9a9a9a] hover:text-[#111111] transition-colors text-left"
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
                      Prénom / Nom <span className="text-[#cccccc]">*</span>
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
                      Entreprise <span className="text-[#cccccc]">*</span>
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
                    Email <span className="text-[#cccccc]">*</span>
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
                    <span className="text-[#cccccc] normal-case tracking-normal font-normal">(optionnel)</span>
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
                    Type de demande <span className="text-[#cccccc]">*</span>
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
                    Message <span className="text-[#cccccc]">*</span>
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
                    className="mt-0.5 w-4 h-4 shrink-0 accent-[#0a0a0a] cursor-pointer"
                    checked={fields.consentement_confidentialite}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                  <span className="text-[13px] text-[#888888] leading-relaxed">
                    J&apos;accepte que mes données soient utilisées pour traiter ma demande,
                    conformément à la{" "}
                    <Link
                      href="/politique-confidentialite"
                      className="text-[#111111] hover:text-[#555555] underline underline-offset-2"
                    >
                      politique de confidentialité
                    </Link>
                    . <span className="text-[#cccccc]">*</span>
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
                  className="h-12 px-8 bg-[#111111] text-white text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-[#333333] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
            <div className="flex flex-col gap-12 md:pt-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#aaaaaa] mb-4">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[15px] text-[#111111] hover:text-[#555555] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#aaaaaa] mb-4">Téléphone</p>
                <a
                  href={`tel:${siteConfig.telephone}`}
                  className="text-[15px] text-[#111111] hover:text-[#555555] transition-colors"
                >
                  {siteConfig.telephone}
                </a>
              </div>
              <div className="pt-8 border-t border-[#f0f0f0]">
                <p className="text-[13px] text-[#888888] leading-relaxed">{siteConfig.delaiReponse}.</p>
              </div>
            </div>

          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}

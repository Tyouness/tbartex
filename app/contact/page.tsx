"use client";

import { useState } from "react";
import Link from "next/link";
import type { TypeDemande } from "@/types";

const TYPES: TypeDemande[] = [
  "Demande de devis",
  "Demande d'information",
  "Conseil",
  "Partenariat / sourcing",
  "Autre",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  color: "#ece9e3",
  fontSize: 14,
  padding: "14px 16px",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 10,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "#7a7570",
  marginBottom: 8,
};

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    type_demande: "" as TypeDemande | "",
    message: "",
    consentement_confidentialite: false,
    website: "", // honeypot
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Une erreur est survenue.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Impossible d'envoyer le formulaire. Veuillez réessayer.");
      setStatus("error");
    }
  }

  return (
    <main style={{ background: "transparent" }}>

      {/* HERO */}
      <section style={{ padding: "80px 0 64px", background: "#0d0d0d" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 20 }}>
          <div className="tb-rule" />
          <div style={{ display: "grid", gap: 16, paddingTop: 32 }}>
            <p className="tb-eyebrow">Conseil & Contact - Tbartex</p>
            <h1
              className="tb-title-xl"
              style={{
                color: "#ece9e3",
                fontSize: "clamp(22px, 3vw, 40px)",
                maxWidth: 680,
              }}
            >
              Conseil &amp;{" "}
              <span style={{ color: "#CCC4B1", fontStyle: "italic" }}>Contact</span>
            </h1>
            <p className="tb-copy" style={{ maxWidth: 520, fontSize: 14, color: "#a8a5a0" }}>
              Partagez votre besoin. Nous répondons sous 24–48 h avec
              une proposition adaptée à votre production.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section style={{ padding: "72px 0 96px", background: "#0d0d0d" }}>
        <div
          className="tb-shell tb-grid-2-1"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)",
            gap: "40px 80px",
            alignItems: "start",
          }}
        >
          {/* COLONNE GAUCHE — informations */}
          <div className="tb-sticky-none" style={{ display: "grid", gap: 40, position: "sticky", top: 32 }}>

            <div style={{ display: "grid", gap: 20 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 10,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#CCC4B1",
                }}
              >
                Coordonnées
              </p>
              {[
                { label: "Email", value: "contact@tbartex.com" },
                { label: "Téléphone", value: "+212 6 XX XX XX XX" },
                { label: "Adresse", value: "Casablanca, Maroc" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    display: "grid",
                    gap: 4,
                  }}
                >
                  <p style={{ margin: 0, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5a5755" }}>
                    {item.label}
                  </p>
                  <p style={{ margin: 0, fontSize: 14, color: "#ece9e3" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: "24px",
                background: "#322A1D",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p style={{ margin: "0 0 8px", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#CCC4B1" }}>
                Disponibilités
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#a8a5a0", lineHeight: 1.8 }}>
                Lundi – Vendredi<br />
                09h00 – 18h00 (GMT+1)
              </p>
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              <p style={{ margin: 0, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5755" }}>
                Pages utiles
              </p>
              {[
                { href: "/nos-fils", label: "Catalogue des fils" },
                { href: "/conseil", label: "Approche conseil" },
                { href: "/entreprise", label: "L'entreprise" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 13,
                    color: "#CCC4B1",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ display: "block", width: 16, height: 1, background: "#3c1b0a" }} />
                  {link.label}
                </Link>
              ))}
            </div>

          </div>

          {/* COLONNE DROITE — formulaire */}
          <div>
            {status === "success" ? (
              <div
                style={{
                  padding: "48px 40px",
                  background: "#322A1D",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "grid",
                  gap: 16,
                  textAlign: "center",
                }}
              >
                <div className="tb-rule" />
                <p className="tb-eyebrow" style={{ textAlign: "center", paddingTop: 24, color: "#CCC4B1" }}>
                  Message Envoyé
                </p>
                <h2
                  className="tb-title-lg"
                  style={{ color: "#ece9e3", fontSize: "clamp(20px, 2.4vw, 32px)", textAlign: "center" }}
                >
                  Merci, Nous Revenons Vers Vous Sous 48 H.
                </h2>
                <p className="tb-copy" style={{ fontSize: 13, color: "#a8a5a0", textAlign: "center" }}>
                  Votre demande a bien été enregistrée.
                </p>
                <div className="tb-rule" style={{ marginTop: 16 }} />
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: 28 }} noValidate>

                {/* Honeypot — caché */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => set("website", e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  aria-hidden="true"
                  autoComplete="off"
                />

                {/* Ligne Nom + Entreprise */}
                <div className="tb-grid-2-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Nom *</label>
                    <input
                      type="text"
                      required
                      value={form.nom}
                      onChange={(e) => set("nom", e.target.value)}
                      placeholder="Votre nom"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Entreprise *</label>
                    <input
                      type="text"
                      required
                      value={form.entreprise}
                      onChange={(e) => set("entreprise", e.target.value)}
                      placeholder="Nom de l'entreprise"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Ligne Email + Téléphone */}
                <div className="tb-grid-2-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="email@entreprise.com"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      type="tel"
                      value={form.telephone}
                      onChange={(e) => set("telephone", e.target.value)}
                      placeholder="+212 6 XX XX XX XX"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Type de demande */}
                <div>
                  <label style={labelStyle}>Type de demande *</label>
                  <div className="tb-grid-2-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {TYPES.map((type) => {
                      const active = form.type_demande === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => set("type_demande", type)}
                          style={{
                            padding: "12px 14px",
                            fontSize: 11,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            textAlign: "left",
                            background: active ? "#322A1D" : "rgba(255,255,255,0.03)",
                            border: active ? "1px solid #CCC4B1" : "1px solid rgba(255,255,255,0.09)",
                            color: active ? "#CCC4B1" : "#7a7570",
                            cursor: "pointer",
                            transition: "all 0.2s",
                            fontFamily: "inherit",
                          }}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Décrivez votre besoin, vos volumes, vos contraintes techniques…"
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 140,
                    }}
                  />
                </div>

                {/* Consentement */}
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    padding: "16px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <input
                    type="checkbox"
                    id="consentement"
                    required
                    checked={form.consentement_confidentialite}
                    onChange={(e) => set("consentement_confidentialite", e.target.checked)}
                    style={{ marginTop: 2, accentColor: "#CCC4B1", cursor: "pointer" }}
                  />
                  <label
                    htmlFor="consentement"
                    style={{ fontSize: 12, color: "#7a7570", lineHeight: 1.7, cursor: "pointer" }}
                  >
                    J'accepte que Tbartex traite mes données dans le cadre de cette demande,
                    conformément à sa{" "}
                    <Link href="/politique-confidentialite" style={{ color: "#CCC4B1", textDecoration: "underline" }}>
                      politique de confidentialité
                    </Link>
                    . *
                  </label>
                </div>

                {/* Erreur */}
                {status === "error" && (
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: "#e07070",
                      padding: "12px 16px",
                      background: "rgba(220,80,80,0.08)",
                      border: "1px solid rgba(220,80,80,0.2)",
                    }}
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Bouton */}
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="tb-button tb-button--solid"
                    style={{ opacity: status === "sending" ? 0.6 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}
                  >
                    {status === "sending" ? "Envoi en cours…" : "Envoyer La Demande"}
                  </button>
                  <p style={{ margin: 0, fontSize: 11, color: "#5a5755" }}>* champs obligatoires</p>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}

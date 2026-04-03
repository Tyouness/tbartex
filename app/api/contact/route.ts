import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import type { TypeDemande } from "@/types";

const TYPES_DEMANDE_VALIDES: TypeDemande[] = [
  "Demande de devis",
  "Demande d'information",
  "Conseil",
  "Partenariat / sourcing",
  "Autre",
];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: NextRequest) {
  // ── Vérification de la clé Resend ──────────────────────────────────────────────
  if (!process.env.RESEND_API_KEY) {
    console.error("[contact/route] RESEND_API_KEY non configurée.");
    return NextResponse.json(
      { error: "Le formulaire de contact n'est pas encore activé. Merci de nous écrire directement." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de la requête invalide." }, { status: 400 });
  }

  // ── Honeypot anti-spam ──────────────────────────────────────────────────────────────────
  if (sanitize(body.website) !== "") {
    return NextResponse.json({ success: true });
  }

  // ── Extraction & nettoyage ────────────────────────────────────────────────────────
  const nom = sanitize(body.nom);
  const entreprise = sanitize(body.entreprise);
  const email = sanitize(body.email);
  const telephone = sanitize(body.telephone);
  const type_demande = sanitize(body.type_demande) as TypeDemande;
  const message = sanitize(body.message);
  const consentement_confidentialite = body.consentement_confidentialite === true;

  // ── Validation serveur ────────────────────────────────────────────────────────────────
  const errors: string[] = [];

  if (nom.length < 2 || nom.length > 100)
    errors.push("Le nom doit contenir entre 2 et 100 caractères.");
  if (entreprise.length < 2 || entreprise.length > 100)
    errors.push("L'entreprise doit contenir entre 2 et 100 caractères.");
  if (!isValidEmail(email) || email.length > 200)
    errors.push("L'adresse email est invalide.");
  if (telephone && telephone.length > 30)
    errors.push("Le numéro de téléphone est trop long.");
  if (!TYPES_DEMANDE_VALIDES.includes(type_demande))
    errors.push("Type de demande non reconnu.");
  if (message.length < 10 || message.length > 2000)
    errors.push("Le message doit contenir entre 10 et 2000 caractères.");
  if (!consentement_confidentialite)
    errors.push("Le consentement à la politique de confidentialité est requis.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors[0] }, { status: 422 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const maintenant = new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" });

  // ── Email 1 : notification interne à Tbartex ────────────────────────────────────
  const notifHtml = `
    <div style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:600px;margin:0 auto">
      <div style="background:#322A1D;padding:24px 32px">
        <p style="margin:0;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#CCC4B1">Bartex — Nouvelle demande</p>
      </div>
      <div style="padding:32px;border:1px solid #e5e5e5;border-top:none">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#666;width:140px">Type</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:600">${type_demande}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#666">Nom</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px">${nom}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#666">Entreprise</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px">${entreprise}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#666">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px"><a href="mailto:${email}" style="color:#735017">${email}</a></td></tr>
          ${telephone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#666">Téléphone</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px">${telephone}</td></tr>` : ""}
          <tr><td style="padding:10px 0;font-size:12px;color:#666;vertical-align:top">Message</td><td style="padding:10px 0;font-size:14px;line-height:1.7;white-space:pre-wrap">${message}</td></tr>
        </table>
        <p style="margin:24px 0 0;font-size:11px;color:#aaa">${maintenant}</p>
      </div>
    </div>
  `;

  // ── Email 2 : confirmation au client ─────────────────────────────────────────
  const confirmHtml = `
    <div style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:600px;margin:0 auto">
      <div style="background:#322A1D;padding:24px 32px">
        <p style="margin:0;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#CCC4B1">Bartex</p>
      </div>
      <div style="padding:40px 32px;border:1px solid #e5e5e5;border-top:none">
        <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#888">Confirmation de réception</p>
        <h1 style="margin:0 0 24px;font-size:22px;font-weight:300;letter-spacing:-0.02em;color:#1a0d06">Merci, ${nom}.</h1>
        <p style="margin:0 0 16px;font-size:14px;color:#444;line-height:1.8">
          Nous avons bien reçu votre demande <strong>${type_demande.toLowerCase()}</strong>.
          Notre équipe vous répond sous <strong>24–48 h</strong> avec une proposition adaptée à votre besoin.
        </p>
        <p style="margin:0 0 32px;font-size:14px;color:#444;line-height:1.8">
          En attendant, vous pouvez consulter notre catalogue de fils sur
          <a href="https://www.tbartex.com/nos-fils" style="color:#735017;text-decoration:none">www.tbartex.com</a>.
        </p>
        <div style="border-top:1px solid #e5e5e5;padding-top:24px">
          <p style="margin:0;font-size:12px;color:#888;line-height:1.6">
            Bartex — Casablanca, Maroc<br/>
            <a href="mailto:contact@tbartex.com" style="color:#735017;text-decoration:none">contact@tbartex.com</a>
          </p>
        </div>
      </div>
    </div>
  `;

  try {
    await Promise.all([
      resend.emails.send({
        from: "Bartex <noreply@tbartex.com>",
        to: ["contact@tbartex.com"],
        replyTo: email,
        subject: `[${type_demande}] ${nom} — ${entreprise}`,
        html: notifHtml,
      }),
      resend.emails.send({
        from: "Bartex <noreply@tbartex.com>",
        to: [email],
        subject: "Votre demande a bien été reçue — Tbartex",
        html: confirmHtml,
      }),
    ]);
  } catch (err) {
    console.error("[contact/route] Resend error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi. Merci de réessayer." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}

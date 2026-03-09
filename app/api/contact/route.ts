import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { ContactFormData, TypeDemande } from "@/types";

const TYPES_DEMANDE_VALIDES: TypeDemande[] = [
  "Demande de devis",
  "Demande d'information",
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
  // ── Vérification des variables d'environnement ─────────────────────────────
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    console.error("[contact/route] Variables Supabase non configurées.");
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

  // ── Honeypot anti-spam ──────────────────────────────────────────────────────
  // Champ caché, jamais rempli par un humain. Un bot le remplit.
  if (sanitize(body.website) !== "") {
    // On répond 200 pour ne pas signaler aux bots que le filtre a fonctionné.
    return NextResponse.json({ success: true });
  }

  // ── Extraction & nettoyage ──────────────────────────────────────────────────
  const nom = sanitize(body.nom);
  const entreprise = sanitize(body.entreprise);
  const email = sanitize(body.email);
  const telephone = sanitize(body.telephone);
  const type_demande = sanitize(body.type_demande) as TypeDemande;
  const message = sanitize(body.message);
  const consentement_confidentialite = body.consentement_confidentialite === true;

  // ── Validation serveur ──────────────────────────────────────────────────────
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

  // ── Insertion Supabase ──────────────────────────────────────────────────────
  const record: Omit<ContactFormData, "consentement_confidentialite"> & {
    consentement_confidentialite: boolean;
    source_page: string;
    statut: string;
  } = {
    nom,
    entreprise,
    email,
    telephone: telephone || null as unknown as string,
    type_demande,
    message,
    consentement_confidentialite,
    source_page: "/contact",
    statut: "nouveau",
  };

  const { error: dbError } = await getSupabaseAdmin()
    .from("demandes_contact")
    .insert(record);

  if (dbError) {
    console.error("[contact/route] Supabase error:", dbError.message);
    return NextResponse.json(
      { error: "Une erreur est survenue. Merci de réessayer ou de nous contacter directement." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}

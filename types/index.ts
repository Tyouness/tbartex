export interface UniversFils {
  id: string;
  titre: string;
  description: string;
  matieres: string[];
}

export interface AxeValeur {
  id: string;
  titre: string;
  corps: string;
}

export interface ChiffreCle {
  valeur: string;
  label: string;
}

export interface PositionnementPoint {
  titre: string;
  texte: string;
}

export type TypeDemande =
  | "Demande de devis"
  | "Demande d'information"
  | "Conseil"
  | "Partenariat / sourcing"
  | "Autre";

export interface ContactFormData {
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  type_demande: TypeDemande;
  message: string;
  consentement_confidentialite: boolean;
}

/** Correspond exactement à la table Supabase `demandes_contact` */
export interface DemandeContact extends ContactFormData {
  id: string;
  created_at: string;
  source_page: string;
  statut: "nouveau" | "traité" | "archivé";
}

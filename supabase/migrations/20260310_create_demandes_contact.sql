-- ─────────────────────────────────────────────────────────────────────────────
-- Table : demandes_contact
-- Description : Stocke les demandes envoyées via le formulaire /contact
-- ─────────────────────────────────────────────────────────────────────────────

create table public.demandes_contact (
  id                           uuid        primary key default gen_random_uuid(),
  created_at                   timestamptz default now() not null,
  nom                          text        not null,
  entreprise                   text        not null,
  email                        text        not null,
  telephone                    text,
  type_demande                 text        not null,
  message                      text        not null,
  consentement_confidentialite boolean     not null,
  source_page                  text        default '/contact' not null,
  statut                       text        default 'nouveau' not null
);

-- ─── Commentaires ───────────────────────────────────────────────────────────

comment on table  public.demandes_contact is
  'Demandes de contact envoyées depuis le site vitrine Tbartex.';

comment on column public.demandes_contact.telephone is
  'Nullable — champ optionnel côté formulaire.';

comment on column public.demandes_contact.type_demande is
  'Valeurs : Demande de devis | Demande d''information | Partenariat / sourcing | Autre';

comment on column public.demandes_contact.consentement_confidentialite is
  'Doit être true — validé côté serveur avant insertion.';

comment on column public.demandes_contact.source_page is
  'Page d''origine de la demande. Valeur actuelle : /contact.';

comment on column public.demandes_contact.statut is
  'Valeurs : nouveau | traité | archivé';

-- ─── Row Level Security ──────────────────────────────────────────────────────
-- Aucune policy publique. Seul le service role key (API route Next.js) peut
-- lire et écrire. Le service role bypasse RLS nativement.

alter table public.demandes_contact enable row level security;

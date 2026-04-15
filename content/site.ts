export const siteConfig = {
  nom: "Bartex",
  anneeCreation: 2005,
  email: "contact@bartex.fr",
  telephone: "+212661183914",
  telephoneFr: "+33621875448",
  slogan: "Importateur B2B de fils textiles",
  delaiReponse: "Réponse sous 48h ouvrées",

  chiffresCles: [
    { valeur: "2005", label: "Année de création" },
    { valeur: "B2B", label: "Exclusivement professionnel" },
    { valeur: "5", label: "Univers textiles couverts" },
  ],

  positionnement: [
    {
      titre: "Sourcing international",
      texte:
        "Un réseau d'approvisionnement sélectionné pour sa fiabilité et la régularité de ses livraisons en volume.",
    },
    {
      titre: "Large gamme de fils",
      texte:
        "Chaussettes, bonneterie, tissage, bandes élastiques, fils spéciaux — adaptés à l'usage réel de chaque client.",
    },
    {
      titre: "Conseil & expertise",
      texte:
        "Proposition d'alternatives, optimisation des marges, orientation selon l'usage final et les contraintes de production.",
    },
  ],

  engagements: [
    "Approvisionnement régulier en volumes adaptés",
    "Qualité constante et maîtrisée",
    "Réactivité et disponibilité",
    "Conseil personnalisé selon l'usage final",
  ],

  // ── Données légales ─────────────────────────────────────────────────────
  // /!\ Ces champs sont à compléter avec les vraies informations de Tbartex
  //     avant toute mise en production publique.
  legal: {
    raisonSociale:        "[À compléter — ex : Tbartex SARL]",
    formeJuridique:       "[À compléter — ex : SARL, SA, SURL]",
    siege:                "[À compléter — ex : 12 rue de l'Industrie, Casablanca 20000, Maroc]",
    rc:                   "[À compléter — numéro Registre de Commerce]",
    ice:                  "[À compléter — Identifiant Commun de l'Entreprise]",
    directeurPublication: "[À compléter — Nom Prénom du responsable légal]",
    nomDomaine:           "bartex.fr",
    hebergeurNom:         "Vercel Inc.",
    hebergeurAdresse:     "340 Pine Street, Suite 1200, San Francisco, CA 94104, États-Unis",
    hebergeurSite:        "https://vercel.com",
    // Région du projet Supabase — à renseigner après création du projet
    // Exemples : "eu-west-2 (Europe — Irlande)", "us-east-1 (États-Unis)"
    // Cette valeur conditionne la mention transfert hors UE dans la politique de confidentialité.
    supabaseRegion:       "[À compléter — région choisie lors de la création du projet Supabase]",
    emailRgpd:            "contact@bartex.fr",
    dureeConservation:    "3 ans",
    dateMaj:              "10 mars 2026",
  },
} as const;

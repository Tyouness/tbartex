export const siteConfig = {
  nom: "Tbartex",
  anneeCreation: 2005,
  email: "contact@tbartex.com",
  telephone: "+212 5XX XX XX XX",
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
} as const;

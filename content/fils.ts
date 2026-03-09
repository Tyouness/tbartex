import type { UniversFils } from "@/types";

export const univers: UniversFils[] = [
  {
    id: "chaussettes",
    titre: "Chaussettes",
    description:
      "Fils adaptés aux contraintes spécifiques de la fabrication de chaussettes : maintien, élasticité, résistance à l'abrasion et régularité de production.",
    matieres: ["Coton", "Polyamide", "Polyester", "Spandex (ACY/DCY)", "Chenille"],
  },
  {
    id: "bonneterie",
    titre: "Bonneterie",
    description:
      "Sélection de fils adaptée aux machines de bonneterie circulaire et rectiligne : douceur, régularité, comportement à la teinture, tenue du maillé.",
    matieres: ["Coton peigné", "Viscose", "Modal", "Acrylique", "Polyester", "Lurex"],
  },
  {
    id: "tissage",
    titre: "Tissage",
    description:
      "Fils destinés aux métiers à tisser, conçus pour répondre aux exigences de régularité, de résistance à la traction et de comportement en production.",
    matieres: ["Coton", "Polyester (FDY/DTY)", "Viscose", "Lin", "Polyester recyclé"],
  },
  {
    id: "bandes-elastiques",
    titre: "Bandes élastiques",
    description:
      "Fils et matières pour la fabrication de bandes élastiques : résistance, reprise élastique, stabilité dimensionnelle.",
    matieres: ["Spandex", "Polyamide", "Polyester", "ACY", "DCY"],
  },
  {
    id: "fils-fantaisie",
    titre: "Fils fantaisie et spéciaux",
    description:
      "Fils fantaisie et références spéciales pour les articles différenciants. Disponibles selon les saisons et les besoins, sur demande.",
    matieres: ["Lurex", "Chenille", "Rayonne", "Fils métallisés"],
  },
];

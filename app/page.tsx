import Link from "next/link";
import ImageCompare from "@/components/ui/ImageCompare";

/* ── Images Unsplash — univers textile industriel uniquement ─────────────
   Toutes les images évoquent directement fil, bobine, maille, tissage
   ou production textile. Aucune image hors sujet.
────────────────────────────────────────────────────────────────────────── */
const IMAGES = {
  // Hero — bobines colorées premium, texture fil industriel
  hero: "/filebase.jpg?v=3",

  // Panels d'offre — 4 univers textile distincts et cohérents
  socks: "/CHAUSSETTES%20ET%20MAILLE%20FINE.png",
  knit: "/BONNETERIE%20ET%20CIRCULARITE.png",
  weave: "/TISSAGE%20ET%20ELASTIQUES.png",
  special:
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=82&auto=format&fit=crop",

  // Comparaison — fil de base (standard) / bobines premium (optimisé)
  compareBefore:
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1280&q=85&auto=format&fit=crop",
  compareAfter:
    "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=1280&q=85&auto=format&fit=crop",

  // Valeur — atelier de tissage / métier textile
  conseil:
    "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=960&q=85&auto=format&fit=crop",
} as const;

const offerPanels = [
  {
    title: "Chaussettes Et Maille Fine",
    body: "Fils calibres pour regularite machine, tenue de toucher et stabilite coloristique en production de chaussettes.",
    img: IMAGES.socks,
  },
  {
    title: "Bonneterie Et Circularite",
    body: "Fils selectionnes pour confort, elasticite maitrisee et repetition fiable en production de bonneterie circulaire.",
    img: IMAGES.knit,
  },
  {
    title: "Tissage Et Elastiques",
    body: "Fils et gommes adaptes aux contraintes de tension, solidite en usage et comportement matiere pour tissage et bandes elastiques.",
    img: IMAGES.weave,
  },
  {
    title: "Developpements Specifiques",
    body: "Fils hors gamme standard: selectionnes sur mesure selon usage final, machine, cout cible et niveau de qualite attendu.",
    img: IMAGES.special,
  },
];

const pillars = [
  { n: "01", text: "Fabrication de vetements cle-en-main pour marques, distributeurs et acheteurs professionnels." },
  { n: "02", text: "Approvisionnement en fils techniques pour les industriels, fabricants et ateliers du textile." },
  { n: "03", text: "Conseil matiere et production pour securiser qualite, cout et delai." },
];

const valuePoints = [
  "Proposition d alternatives matiere selon contraintes techniques.",
  "Preservation de la qualite finale sans compromis sur la cadence.",
  "Optimisation economique des choix fil pour la marge operationnelle.",
];

const statureItems = [
  { label: "Depuis", value: "2005", detail: "Deux decennies de fabrication textile et de sourcing fil." },
  { label: "Secteur", value: "Pro.", detail: "Marques, distributeurs et professionnels du textile." },
  { label: "Produits", value: "6+", detail: "Chaussettes, pulls, jeans, t-shirts, joggings, sous-vetements." },
  { label: "Reseau", value: "Global", detail: "Acheteurs et partenaires selectionnes a l'international." },
];

export default function HomePage() {
  return (
    <main style={{ background: "transparent" }}>

      {/* ═══════════════════════════════════════════════════════
          HERO — Plein écran cinématographique
          Image bobines premium plein-fond, overlay maîtrisé.
          Titre vertical par accumulation de lignes légères.
          Tag géographique discret pour ancrage de marque.
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {/* Image textile plein-fond — bobines colorées industrielles */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.hero}
          alt=""
          aria-hidden="true"
          loading="eager"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "max(100vh, 100vw)",
            height: "max(100vw, 100vh)",
            objectFit: "contain",
            opacity: 0.50,
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Overlay cinématographique — profondeur sans étouffement */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(148deg, rgba(4,4,5,0.18) 0%, rgba(4,4,5,0.0) 50%, rgba(4,4,5,0.12) 100%)",
          }}
        />
        {/* Fondu bas vers la continuité sombre de la page */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "28%",
            background: "linear-gradient(to top, #040405, transparent)",
            pointerEvents: "none",
          }}
        />
        {/* Accent lumineux discret haut-droit */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "44%",
            height: "54%",
            background:
              "radial-gradient(ellipse at top right, rgba(255,255,255,0.062), transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Ombré gauche → transparent — pleine hauteur section */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "90%",
            background: "linear-gradient(to right, rgba(0, 0, 0, 0.74) 20%, rgba(0, 0, 0, 0.62) 40%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Contenu hero avec shell */}
        <div
          className="tb-shell"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            padding: "clamp(10px, 4vw, 45px) 0",
          }}
        >
          <div className="tb-hero-content" style={{
            position: "relative",
            display: "grid",
            gap: 28,
            maxWidth: "min(720px, 66%)",
            paddingLeft: "clamp(20px, 6vw, 96px)",
            paddingRight: "clamp(20px, 6vw, 96px)",
            paddingTop: "clamp(32px, 4vw, 56px)",
            paddingBottom: "clamp(32px, 4vw, 56px)",
          }}>
            <p className="tb-eyebrow" style={{ color: "#7a7570" }}>
              Bartex - Casablanca, Maroc
            </p>
            <h1 className="tb-title-xl" style={{ color: "#ece9e3", fontSize: "clamp(22px, 3.5vw, 46px)", lineHeight: 1.2 }}>
              Fabricant Textile.
              <br />
              Fournisseur De Fil.
            </h1>
            <p
              className="tb-copy"
              style={{ fontSize: 16, lineHeight: 1.88, color: "#CCC4B1" }}
            >
              Bartex approvisionne les industriels du textile
              en fils techniques selectionnés pour leur regularite et leur
              tenue en production, et fabrique des vetements pour les marques et distributeurs exigeants a la recherche de fiabilite et de qualite.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", paddingTop: 8 }}>
              <Link href="/contact" className="tb-button tb-button--solid">
                Demander Un Devis
              </Link>
              <Link href="/nos-fils" className="tb-button tb-button--line">
                Voir Nos Fils
              </Link>
            </div>
          </div>

        </div>

        {/* Tag géographique - bas de l'image */}
        <div
          style={{
            position: "absolute",
            right: "clamp(12px, 2vw, 28px)",
            bottom: "clamp(12px, 2vw, 24px)",
            display: "flex",
            alignItems: "center",
            gap: 10,
            zIndex: 3,
          }}
        >
          <span style={{ display: "block", width: 20, height: 1, background: "#52504e" }} />
          <span
            style={{
              fontSize: 9,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#52504e",
            }}
          >
            Casablanca - 2005
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MANIFESTE — Composition asymétrique éditoriale
          Titre fort à gauche, 3 piliers numérotés à droite.
          Séparateur horizontal en ouverture de section.
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "32px 0", background: "#CCC4B1" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 20 }}>
          <div
            className="tb-grid-2-1"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)",
              gap: "16px 48px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "grid", gap: 12 }}>
              <p className="tb-eyebrow" style={{ color: "#7a4e2e" }}>Manifeste</p>
              <h2 className="tb-title-lg" style={{ color: "#1a0d06", fontSize: "clamp(16px, 2vw, 26px)", lineHeight: 1.15 }}>
              Fabrication Et Sourcing. Le Meme Niveau D'Exigence Des Deux Cotes.
              </h2>
              <p className="tb-copy" style={{ maxWidth: 540, color: "#3a2010", fontSize: 13 }}>
                Notre valeur ne repose pas sur un discours: elle repose sur la
                regularite de nos productions, la constance de nos lots fil
                et la tenue de nos engagements a chaque commande.
              </p>
            </div>
            <div style={{ display: "grid", gap: 0, paddingTop: 6 }}>
              {pillars.map((p, i) => (
                <div
                  key={p.n}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    gap: 18,
                    padding: "12px 0",
                    borderTop: i === 0 ? "1px solid rgba(0,0,0,0.16)" : "none",
                    borderBottom: "1px solid rgba(0,0,0,0.16)",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      color: "#3c1b0a",
                      paddingTop: 3,
                    }}
                  >
                    {p.n}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      color: "#2a1608",
                      lineHeight: 1.7,
                      fontSize: 12,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OFFRE — Grille 2×2 éditoriale
          Vraies photos textile, hauteur 260px, composition sobre.
          Fond sombre continu entre les sections.
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "76px 0", background: "#322A1D" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 28 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 20,
              flexWrap: "wrap",
              paddingBottom: 4,
            }}
          >
            <div style={{ display: "grid", gap: 14 }}>
              <p className="tb-eyebrow">Fils Par Application</p>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(18px, 2.4vw, 26px)",
                  letterSpacing: "-0.016em",
                  color: "#f0ece6",
                  fontWeight: 300,
                  lineHeight: 1.2,
                }}
              >
                Fils Pour Chaque Application.
              </p>
            </div>
            <span className="tb-pill">Approche Non Cataloguelle</span>
          </div>

          {/* Ligne unique de 4 cartes */}
          <div
            className="tb-grid-4-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {offerPanels.map((panel) => (
              <article
                key={panel.title}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.12)",
                  display: "grid",
                  gridTemplateRows: "180px 1fr",
                  background: "#CCC4B1",
                }}
              >
                {/* Zone image avec étiquette */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={panel.img}
                    alt={panel.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      opacity: 0.72,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 30%, rgba(4,4,5,0.82) 100%)",
                    }}
                  />
                  {/* Étiquette titre sur image */}
                  <div
                    style={{
                      position: "absolute",
                      left: 16,
                      bottom: 16,
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#CCC4B1",
                      background: "#a77729",
                      border: "1px solid rgba(0, 0, 0, 0)",
                      padding: "7px 12px",
                    }}
                  >
                    {panel.title}
                  </div>
                </div>

                {/* Zone texte — corps seul */}
                <div
                  style={{
                    padding: "20px 24px 26px",
                    display: "grid",
                    gap: 0,
                    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
                    background: "#CCC4B1",
                  }}
                >
                  <p className="tb-copy" style={{ fontSize: 13, lineHeight: 1.84, color: "#000000" }}>
                    {panel.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════
          LECTURE MATIÈRE — Slider de comparaison draggable
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "48px 0", background: "#000000" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 20 }}>
          <div style={{ display: "grid", gap: 8 }}>
            <p className="tb-eyebrow">Lecture Matiere</p>
            <h2 className="tb-title-lg" style={{ maxWidth: 680, color: "#f0ece6", fontSize: "clamp(16px, 2vw, 26px)" }}>
              De La Structure Brute Au Rendu Optimise.
            </h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <ImageCompare
              srcBefore={IMAGES.compareBefore}
              srcAfter={IMAGES.compareAfter}
              labelBefore="Fil Standard"
              labelAfter="Solution Optimisee"
              height={320}
            />
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════
          STATURE — Bande de données
          4 chiffres clés, séparateurs fins, typo large 300.
          Grande plage d'air autour des chiffres.
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "40px 0", background: "#EDE5DA" }}>
        <div
          className="tb-shell"
          style={{
                borderTop: "1px solid rgba(0,0,0,0.14)",
                borderBottom: "1px solid rgba(0,0,0,0.14)",
                padding: "36px 0",
          }}
        >
          <div
            className="tb-grid-4-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 0,
            }}
          >
            {statureItems.map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: i === 0 ? "0 24px 0 0" : "0 24px",
                  borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.12)" : "none",
                  display: "grid",
                  gap: 4,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 9,
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: "#7a5e42",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(22px, 2.8vw, 36px)",
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    color: "#3c1b0a",
                    fontWeight: 300,
                    lineHeight: 0.95,
                  }}
                >
                  {item.value}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    color: "#4a3020",
                    lineHeight: 1.5,
                    paddingTop: 2,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA FINAL — Clôture de marque
          Titre fort, centration noble, tag géographique
          de fermeture. Sobre, mémorable, sans gadget.
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "36px 0", background: "#322A1D" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 0 }}>
          <div className="tb-rule" />
          <div
            style={{
              padding: "32px clamp(20px, 8vw, 160px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              textAlign: "center",
            }}
          >
            <p className="tb-eyebrow" style={{ textAlign: "center" }}>Prochain Pas</p>
            <h2
              className="tb-title-lg"
              style={{
                color: "#ece9e3",
                maxWidth: 640,
                margin: 0,
                textAlign: "center",
                lineHeight: 1.1,
                fontSize: "clamp(18px, 2.4vw, 32px)",
              }}
            >
              Vetement Sur Mesure Ou Sourcing Fil - Parlons De Votre Besoin.
            </h2>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/contact" className="tb-button tb-button--solid">
                Demander Un Devis
              </Link>
              <Link href="/entreprise" className="tb-button tb-button--line">
                Decouvrir L Entreprise
              </Link>
            </div>
          </div>
          <div className="tb-rule" />
          <p
            style={{
              margin: 0,
              paddingTop: 20,
              textAlign: "center",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#9a8474",
            }}
          >
            Bartex - Casablanca, Maroc
          </p>
        </div>
      </section>

    </main>
  );
}

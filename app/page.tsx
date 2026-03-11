import Link from "next/link";
import ImageCompare from "@/components/ui/ImageCompare";

/* ── Images Unsplash — univers textile industriel uniquement ─────────────
   Toutes les images évoquent directement fil, bobine, maille, tissage
   ou production textile. Aucune image hors sujet.
────────────────────────────────────────────────────────────────────────── */
const IMAGES = {
  // Hero — bobines colorées premium, texture fil industriel
  hero: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=1600&q=85&auto=format&fit=crop",

  // Panels d'offre — 4 univers textile distincts et cohérents
  socks:
    "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=82&auto=format&fit=crop",
  knit:
    "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?w=800&q=82&auto=format&fit=crop",
  weave:
    "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=82&auto=format&fit=crop",
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
    body: "Fils calibres pour regularite machine, tenue de toucher et stabilite coloristique en cadence industrielle.",
    img: IMAGES.socks,
  },
  {
    title: "Bonneterie Et Circularite",
    body: "Solutions filaires pensees pour confort, elasticite maitrisee et repetition fiable des resultats en production.",
    img: IMAGES.knit,
  },
  {
    title: "Tissage Et Bandes Elastiques",
    body: "Approvisionnements adaptes aux contraintes de tension, solidite d usage et comportement matiere en finition.",
    img: IMAGES.weave,
  },
  {
    title: "Developpements Specifiques",
    body: "References hors standard sur demande, selectionnees selon usage final, cout cible et niveau de qualite attendu.",
    img: IMAGES.special,
  },
];

const pillars = [
  { n: "01", text: "Sourcing international fiable pour rythmes de production continus." },
  { n: "02", text: "Offre construite pour l usage reel des industriels, fabricants et ateliers." },
  { n: "03", text: "Conseil oriente resultat pour securiser qualite, cout et delai." },
];

const valuePoints = [
  "Proposition d alternatives matiere selon contraintes techniques.",
  "Preservation de la qualite finale sans compromis sur la cadence.",
  "Optimisation economique des choix fil pour la marge operationnelle.",
  "Accompagnement selon usage final: produit, machine et finition.",
];

const statureItems = [
  { label: "Depuis", value: "2005", detail: "Presence durable sur le marche textile B2B." },
  { label: "Modele", value: "B2B", detail: "Approche exclusivement professionnelle." },
  { label: "Univers", value: "5+", detail: "Familles filaires couvrees et sur mesure." },
  { label: "Reseau", value: "Global", detail: "Sourcing selectionne pour fiabilite et constance." },
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
          alignItems: "center",
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
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            opacity: 0.52,
          }}
        />
        {/* Overlay cinématographique — profondeur sans étouffement */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(148deg, rgba(4,4,5,0.94) 0%, rgba(4,4,5,0.68) 56%, rgba(4,4,5,0.88) 100%)",
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

        {/* Contenu hero avec shell */}
        <div
          className="tb-shell"
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            padding: "clamp(80px, 10vw, 140px) 0",
          }}
        >
          <div style={{ display: "grid", gap: 28, maxWidth: 1020 }}>
            <p className="tb-eyebrow" style={{ color: "#7a7570" }}>
              Sourcing Textile Premium — Casablanca, Maroc
            </p>
            <h1 className="tb-title-xl" style={{ color: "#ece9e3" }}>
              Maitrise
              <br />
              Matiere.
              <br />
              Exigence
              <br />
              Industrielle.
            </h1>
            <p
              className="tb-copy"
              style={{ maxWidth: 540, fontSize: 16, lineHeight: 1.88, color: "#9a9590" }}
            >
              Tbartex structure des approvisionnements filaires fiables pour industriels,
              fabricants, ateliers et marques B2B qui exigent regularite,
              precision et vision long terme.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", paddingTop: 8 }}>
              <Link href="/contact" className="tb-button tb-button--solid">
                Ouvrir Une Discussion Technique
              </Link>
              <Link href="/nos-fils" className="tb-button tb-button--line">
                Voir Les Univers De Fils
              </Link>
            </div>
          </div>

          {/* Tag géographique — ancrage discret de marque */}
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              gap: 10,
              paddingBottom: "clamp(12px, 2vw, 24px)",
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
              Casablanca — 2005
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MANIFESTE — Composition asymétrique éditoriale
          Titre fort à gauche, 3 piliers numérotés à droite.
          Séparateur horizontal en ouverture de section.
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 0 112px" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 52 }}>
          <div className="tb-rule" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)",
              gap: "36px 72px",
              alignItems: "start",
            }}
          >
            <div style={{ display: "grid", gap: 24 }}>
              <p className="tb-eyebrow">Manifeste</p>
              <h2 className="tb-title-lg" style={{ color: "#e6e3dd" }}>
                Une Maison B2B Construite Pour La Realite Du Textile, Pas Pour Le Decor.
              </h2>
              <p className="tb-copy" style={{ maxWidth: 540 }}>
                Notre valeur ne repose pas sur un discours: elle repose sur la constance des lots,
                la lisibilite des decisions matiere et la tenue des engagements
                en environnement de production.
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
                    padding: "22px 0",
                    borderTop: i === 0 ? "1px solid #1e1e26" : "none",
                    borderBottom: "1px solid #1e1e26",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      color: "#5a5654",
                      paddingTop: 3,
                    }}
                  >
                    {p.n}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      color: "#cac7c1",
                      lineHeight: 1.82,
                      fontSize: 14,
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
      <section style={{ padding: "0 0 112px" }}>
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
              <p className="tb-eyebrow">Offre Et Univers Textile</p>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(18px, 2.4vw, 26px)",
                  letterSpacing: "-0.016em",
                  color: "#d4d0cb",
                  fontWeight: 300,
                  lineHeight: 1.2,
                }}
              >
                Quatre univers filaires. Une seule exigence.
              </p>
            </div>
            <span className="tb-pill">Approche Non Cataloguelle</span>
          </div>

          {/* Grille 2×2 éditoriale */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {offerPanels.map((panel) => (
              <article
                key={panel.title}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid #1c1c22",
                  display: "grid",
                  gridTemplateRows: "260px 1fr",
                  background: "#060609",
                }}
              >
                {/* Zone image */}
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
                      opacity: 0.78,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(4,4,5,0.04) 42%, rgba(4,4,5,0.76) 100%)",
                    }}
                  />
                </div>

                {/* Zone texte */}
                <div
                  style={{
                    padding: "22px 24px 28px",
                    display: "grid",
                    gap: 10,
                    borderTop: "1px solid #1c1c22",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#e8e4de",
                      fontWeight: 400,
                    }}
                  >
                    {panel.title}
                  </h3>
                  <p className="tb-copy" style={{ fontSize: 13, lineHeight: 1.82 }}>
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
          Images strictement textiles : fil de base / bobines premium.
          Hauteur 560px pour un rendu plus immersif.
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "0 0 112px" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 28 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) auto",
              alignItems: "flex-end",
              gap: 24,
            }}
          >
            <div style={{ display: "grid", gap: 14 }}>
              <p className="tb-eyebrow">Lecture Matiere</p>
              <h2 className="tb-title-lg" style={{ maxWidth: 680, color: "#e6e3dd" }}>
                De La Structure Brute Au Rendu Optimise.
              </h2>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#5e5c58",
                whiteSpace: "nowrap",
                paddingBottom: 4,
              }}
            >
              Glisser Pour Comparer
            </p>
          </div>

          {/* Slider draggable — images textile cohérentes */}
          <div style={{ border: "1px solid #1c1c22", overflow: "hidden" }}>
            <ImageCompare
              srcBefore={IMAGES.compareBefore}
              srcAfter={IMAGES.compareAfter}
              labelBefore="Fil Standard"
              labelAfter="Solution Optimisee"
              height={560}
            />
          </div>

          <p className="tb-copy" style={{ fontSize: 13, color: "#6e6c68", maxWidth: 740 }}>
            Le choix du fil conditionne la regularite de production, la tenue du produit final
            et la lisibilite de la decision achat. Tbartex structure cette selection.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          VALEUR AJOUTÉE — Composition éditoriale
          Image atelier textile à gauche. Conseil stratégique à droite.
          Ratio 1:1.35 pour équilibre éditorial et respiration.
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "0 0 112px" }}>
        <div
          className="tb-shell"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.35fr)",
            gap: 0,
            border: "1px solid #1c1c22",
            overflow: "hidden",
          }}
        >
          {/* Colonne image */}
          <div style={{ position: "relative", minHeight: 560, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.conseil}
              alt="Atelier textile"
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.64,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(108deg, rgba(4,4,5,0.16) 0%, rgba(4,4,5,0.52) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 20,
                bottom: 20,
                fontSize: 9,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#d8d4cf",
                background: "rgba(4,4,5,0.72)",
                border: "1px solid #36343a",
                padding: "7px 12px",
              }}
            >
              Atelier Partenaire
            </div>
          </div>

          {/* Colonne texte */}
          <div
            style={{
              padding: "clamp(32px, 4vw, 56px) clamp(24px, 3.2vw, 48px)",
              display: "grid",
              gap: 24,
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.016) 0%, rgba(255,255,255,0.004) 100%)",
              borderLeft: "1px solid #1c1c22",
              alignContent: "center",
            }}
          >
            <p className="tb-eyebrow">Valeur Ajoutee Conseil</p>
            <h2
              className="tb-title-lg"
              style={{
                color: "#e6e3dd",
                fontSize: "clamp(22px, 3.2vw, 40px)",
                lineHeight: 1.06,
              }}
            >
              Tbartex Ne Livre Pas Un Fil.
              <br />
              Il Eclaire Une Decision.
            </h2>
            <p className="tb-copy" style={{ maxWidth: 480, fontSize: 14 }}>
              Chaque recommandation est orientee par l usage final, la contrainte technique
              et la logique economique du client.
            </p>
            <div style={{ display: "grid", gap: 0 }}>
              {valuePoints.map((point, i) => (
                <div
                  key={point}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 14,
                    padding: "14px 0",
                    borderBottom:
                      i < valuePoints.length - 1 ? "1px solid #1e1e26" : "none",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#5a5854",
                      marginTop: 7,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      color: "#c6c3be",
                      fontSize: 14,
                      lineHeight: 1.8,
                    }}
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 6 }}>
              <Link href="/conseil" className="tb-button tb-button--line">
                L Approche Conseil Tbartex
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATURE — Bande de données
          4 chiffres clés, séparateurs fins, typo large 300.
          Grande plage d'air autour des chiffres.
      ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: "0 0 112px" }}>
        <div
          className="tb-shell"
          style={{
            borderTop: "1px solid #1e1e26",
            borderBottom: "1px solid #1e1e26",
            padding: "56px 0",
          }}
        >
          <div
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
                  padding: i === 0 ? "0 36px 0 0" : "0 36px",
                  borderLeft: i > 0 ? "1px solid #1e1e26" : "none",
                  display: "grid",
                  gap: 8,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 9,
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: "#6e6c68",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(32px, 4.2vw, 56px)",
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    color: "#e6e3dd",
                    fontWeight: 300,
                    lineHeight: 0.95,
                  }}
                >
                  {item.value}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: "#7c7a76",
                    lineHeight: 1.68,
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
      <section style={{ padding: "0 0 120px" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 0 }}>
          <div className="tb-rule" />
          <div
            style={{
              padding: "88px clamp(20px, 8vw, 160px)",
              display: "grid",
              gap: 28,
              textAlign: "center",
            }}
          >
            <p className="tb-eyebrow" style={{ textAlign: "center" }}>
              Prochain Pas
            </p>
            <h2
              className="tb-title-lg"
              style={{
                color: "#e6e3dd",
                maxWidth: 760,
                margin: "0 auto",
                textAlign: "center",
                lineHeight: 1.1,
                fontSize: "clamp(28px, 5vw, 62px)",
              }}
            >
              Votre Production
              <br />
              Merite Une Base Matiere
              <br />
              Claire Et Solide.
            </h2>
            <p
              className="tb-copy"
              style={{
                maxWidth: 520,
                margin: "0 auto",
                textAlign: "center",
                fontSize: 15,
              }}
            >
              Parlons de vos volumes, contraintes et objectifs qualite
              pour construire une trajectoire filaire durable.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                justifyContent: "center",
                paddingTop: 8,
              }}
            >
              <Link href="/contact" className="tb-button tb-button--solid">
                Contacter Tbartex
              </Link>
              <Link href="/entreprise" className="tb-button tb-button--line">
                Decouvrir L Entreprise
              </Link>
            </div>
          </div>
          <div className="tb-rule" />
          {/* Tag géographique de clôture */}
          <p
            style={{
              margin: 0,
              paddingTop: 28,
              textAlign: "center",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#4a4846",
            }}
          >
            Tbartex — Casablanca, Maroc
          </p>
        </div>
      </section>

    </main>
  );
}

import Link from "next/link";

/* ─── Données ───────────────────────────────────────────────────────────── */

const categories = [
  {
    id: "chaussettes",
    label: "Univers 01",
    title: "Chaussettes",
    bg: "#0d0d0d",
    textColor: "#f0ece6",
    groups: [
      {
        name: null,
        items: [
          {
            name: "100% Coton Ring Spun",
            refs: ["Nm 1/34", "Nm 1/50"],
          },
          {
            name: "100% Polyester Ring Spun Recyclé",
            refs: ["Nm 1/34", "Nm 1/50"],
          },
          {
            name: "50% Coton / 50% Polyester - vierge ou recyclé, ring ou open end",
            refs: ["Nm 1/34", "Nm 1/50"],
          },
          {
            name: "100% Viscose Ring Spun",
            refs: ["Nm 1/50"],
          },
          {
            name: "100% Modal Ring Spun",
            refs: ["Nm 1/50"],
          },
          {
            name: "100% Polyester Texturé",
            refs: ["DTY 150/72/1 NIM 1H", "DTY 200/96/1 NIM 1H"],
          },
          {
            name: "High Stretch (Copy Nylon)",
            refs: ["DTY 75/36/2"],
          },
          {
            name: "Mink Yarn 1.3 cm",
            refs: ["Polyester", "Polyamide"],
          },
          {
            name: "Autres Fils Fantaisie",
            refs: [],
          },
        ],
      },
      {
        name: "Air Covered Yarn",
        items: [
          { name: "Polyester / Spandex ACY", refs: ["15020", "10020", "10040", "7520", "7530"] },
          { name: "Polyamide / Spandex ACY", refs: ["7020", "7030"] },
        ],
      },
      {
        name: "Double Covered Yarn",
        items: [
          { name: "Polyester / Rubber DCY", refs: ["110-75-75", "110-50-50"] },
          { name: "Polyester / Spandex DCY", refs: ["140-75-75"] },
        ],
      },
    ],
  },
  {
    id: "bonneterie",
    label: "Univers 02",
    title: "Bonneterie",
    bg: "#322A1D",
    textColor: "#f0ece6",
    groups: [
      {
        name: null,
        items: [
          {
            name: "100% Coton Peigné Compact",
            refs: ["Nm 1/34", "Nm 1/40", "Nm 1/50", "Nm 1/60", "Nm 1/68"],
          },
          {
            name: "100% Viscose Ring Spun",
            refs: ["SIRO", "VORTEX"],
          },
          {
            name: "100% Polyamide (Nylon 6 et Nylon 6-6)",
            refs: ["70/68/2"],
          },
          {
            name: "100% Modal / Bamboo",
            refs: [],
          },
          {
            name: "Spandex",
            refs: ["20d", "30d", "40d", "70d"],
          },
        ],
      },
    ],
  },
  {
    id: "tissage",
    label: "Univers 03",
    title: "Tissage",
    bg: "#CCC4B1",
    textColor: "#1a0d06",
    groups: [
      {
        name: null,
        items: [
          {
            name: "100% Polyester Texturé",
            refs: ["DTY 150/48/1", "DTY 150/48/2", "DTY 300/96/1", "DTY 300/96/2 — NIM, SIM, HIM"],
          },
          {
            name: "100% Polyester Plat",
            refs: ["FDY 300/96/1", "FDY 600/192/1"],
          },
          {
            name: "Fils Naturels & Semi-Synthétiques",
            refs: ["Viscose", "Lyocell", "Modal", "Tencel"],
          },
          {
            name: "Fil Chenille",
            refs: ["100% Acrylique", "100% Polyester", "100% Coton"],
          },
          {
            name: "Fil Métallique (Lurex)",
            refs: [],
          },
          {
            name: "Fil Rayonne",
            refs: ["300D"],
          },
          {
            name: "Autres Fils Fantaisies",
            refs: [],
          },
        ],
      },
    ],
  },
  {
    id: "elastiques",
    label: "Univers 04",
    title: "Bandes Élastiques",
    bg: "#322A1D",
    textColor: "#f0ece6",
    groups: [
      {
        name: null,
        items: [
          {
            name: "Gomme - Écru et Noire",
            refs: ["36/40", "38/40", "44/40"],
          },
          {
            name: "Polyester Texturé - Écru et Noir",
            refs: ["150D", "300D"],
          },
        ],
      },
    ],
  },
];

/* ─── Composant ─────────────────────────────────────────────────────────── */

export default function NosFilsPage() {
  return (
    <main style={{ background: "transparent" }}>

      {/* HERO */}
      <section
        style={{
          padding: "80px 0 64px",
          background: "#0d0d0d",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="tb-shell" style={{ display: "grid", gap: 20 }}>
          <div className="tb-rule" />
          <div style={{ display: "grid", gap: 16, paddingTop: 32 }}>
            <p className="tb-eyebrow" style={{ color: "#CCC4B1" }}>
              Catalogue Technique - Tbartex
            </p>
            <h1
              className="tb-title-xl"
              style={{
                color: "#ece9e3",
                fontSize: "clamp(22px, 3vw, 40px)",
                maxWidth: 760,
              }}
            >
              Nos Fils &amp;{" "}
              <span style={{ color: "#CCC4B1", fontStyle: "italic" }}>
                Univers Textiles
              </span>
            </h1>
            <p
              className="tb-copy"
              style={{ maxWidth: 560, fontSize: 14, color: "#a8a5a0" }}
            >
              Quatre familles filaires structurées pour la réalité industrielle.
              Chaque référence est sélectionnée pour sa constance, sa tenue machine
              et sa lisibilité en production.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: 32,
              paddingTop: 8,
              borderTop: "1px solid rgba(255,255,255,0.07)",
              marginTop: 8,
            }}
          >
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                style={{
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#6a6460",
                  transition: "color 0.2s",
                }}
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATÉGORIES */}
      {categories.map((cat) => {
        const isLight = cat.bg === "#CCC4B1" || cat.bg === "#EDE5DA";
        const borderColor = isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.08)";
        const subgroupColor = isLight ? "#7a4e2e" : "#CCC4B1";
        const refTagBg = isLight ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.07)";
        const refTagColor = isLight ? "#5a3a1a" : "#a8a5a0";
        const eyebrowColor = isLight ? "#7a4e2e" : "#CCC4B1";
        const mutedColor = isLight ? "rgba(0,0,0,0.36)" : "rgba(255,255,255,0.28)";

        return (
          <section
            key={cat.id}
            id={cat.id}
            style={{ background: cat.bg, padding: "72px 0" }}
          >
            <div className="tb-shell" style={{ display: "grid", gap: 40 }}>

              {/* En-tête de catégorie */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) auto",
                  alignItems: "flex-end",
                  gap: 20,
                  paddingBottom: 24,
                  borderBottom: `1px solid ${borderColor}`,
                }}
              >
                <div style={{ display: "grid", gap: 10 }}>
                  <h2
                    className="tb-title-lg"
                    style={{
                      color: cat.textColor,
                      fontSize: "clamp(22px, 3.2vw, 44px)",
                    }}
                  >
                    {cat.title}
                  </h2>
                </div>
                <span
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: mutedColor,
                  }}
                >
                  {cat.groups.reduce((a, g) => a + g.items.length, 0)} références
                </span>
              </div>

              {/* Groupes de produits */}
              <div style={{ display: "grid", gap: 40 }}>
                {cat.groups.map((group, gi) => (
                  <div key={gi} style={{ display: "grid", gap: 0 }}>

                    {/* Nom du sous-groupe */}
                    {group.name && (
                      <div
                        style={{
                          paddingBottom: 10,
                          marginBottom: 2,
                          borderBottom: `1px solid ${borderColor}`,
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: 10,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: subgroupColor,
                          }}
                        >
                          {group.name}
                        </p>
                      </div>
                    )}

                    {/* Lignes de produits */}
                    {group.items.map((item, ii) => (
                      <div
                        key={ii}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
                          gap: "12px 32px",
                          alignItems: "center",
                          padding: "16px 0",
                          borderBottom: `1px solid ${borderColor}`,
                        }}
                      >
                        {/* Nom */}
                        <p
                          style={{
                            margin: 0,
                            fontSize: 14,
                            color: cat.textColor,
                            fontWeight: 400,
                            letterSpacing: "0.01em",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.name}
                        </p>

                        {/* Références */}
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 6,
                          }}
                        >
                          {item.refs.length > 0 ? (
                            item.refs.map((ref, ri) => (
                              <span
                                key={ri}
                                style={{
                                  display: "inline-block",
                                  padding: "3px 10px",
                                  fontSize: 10,
                                  letterSpacing: "0.1em",
                                  textTransform: "uppercase",
                                  background: refTagBg,
                                  color: refTagColor,
                                  border: `1px solid ${borderColor}`,
                                }}
                              >
                                {ref}
                              </span>
                            ))
                          ) : (
                            <span
                              style={{
                                fontSize: 11,
                                color: mutedColor,
                                fontStyle: "italic",
                              }}
                            >
                              Sur demande
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

            </div>
          </section>
        );
      })}

      {/* CTA FINAL */}
      <section style={{ padding: "64px 0", background: "#0d0d0d" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 0 }}>
          <div className="tb-rule" />
          <div
            style={{
              padding: "48px clamp(20px, 8vw, 160px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              textAlign: "center",
            }}
          >
            <p className="tb-eyebrow" style={{ color: "#CCC4B1" }}>
              Prochain Pas
            </p>
            <h2
              className="tb-title-lg"
              style={{
                color: "#ece9e3",
                maxWidth: 560,
                margin: 0,
                fontSize: "clamp(20px, 2.8vw, 38px)",
              }}
            >
              Une Reference Ne Se Trouve Pas Dans Ce Catalogue ?
            </h2>
            <p
              className="tb-copy"
              style={{ fontSize: 13, color: "#a8a5a0", maxWidth: 480, textAlign: "center" }}
            >
              Notre offre couvre aussi des développements spécifiques hors catalogue.
              Parlez-nous de votre besoin.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/contact" className="tb-button tb-button--solid">
                Ouvrir Une Discussion
              </Link>
              <Link href="/conseil" className="tb-button tb-button--line">
                Approche Conseil
              </Link>
            </div>
          </div>
          <div className="tb-rule" />
        </div>
      </section>

    </main>
  );
}

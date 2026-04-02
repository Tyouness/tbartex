import Link from "next/link";

const productions = [
  "Chaussettes",
  "Pulls & Tricots",
  "Jeans & Denim",
  "T-Shirts",
  "Joggings & Survêtements",
  "Sous-Vêtements",
];

const valeurs = [
  {
    n: "01",
    titre: "Maîtrise De La Matière",
    texte:
      "Chaque article que nous fabriquons repose sur une sélection rigoureuse des matières premières. La qualité commence avant la machine.",
  },
  {
    n: "02",
    titre: "Régularité En Production",
    texte:
      "Un article conforme ne suffit pas - il doit être identique à chaque commande. Nous calibrons nos productions pour des volumes réguliers et des délais tenus.",
  },
  {
    n: "03",
    titre: "Deux Activités, Un Standard",
    texte:
      "Fabrication de vêtements ou fourniture de fil : le même niveau d'exigence s'applique des deux côtés. Nos clients bénéficient d'un seul interlocuteur pour les deux besoins.",
  },
  {
    n: "04",
    titre: "Catalogue Sur Demande",
    texte:
      "Notre offre évolue avec les saisons. Nous envoyons notre catalogue produits et notre gamme fil sur demande - contactez-nous pour recevoir nos références actuelles.",
  },
];

const chiffres = [
  { value: "2005", label: "Fondée en", detail: "Plus de 20 ans de production textile à Casablanca." },
  { value: "6+", label: "Familles produits", detail: "Chaussettes, pulls, jeans, t-shirts, joggings, sous-vêtements." },
  { value: "Pro.", label: "Clientèle", detail: "Marques, distributeurs et acheteurs professionnels." },
  { value: "Maroc", label: "Siège", detail: "Casablanca, au cœur du textile nord-africain." },
];

export default function EntreprisePage() {
  return (
    <main style={{ background: "transparent" }}>

      {/* HERO */}
      <section style={{ padding: "80px 0 64px", background: "#0d0d0d" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 20 }}>
          <div className="tb-rule" />
          <div style={{ display: "grid", gap: 16, paddingTop: 32, maxWidth: 760 }}>
            <p className="tb-eyebrow">L'Entreprise - Tbartex</p>
            <h1
              className="tb-title-xl"
              style={{
                color: "#ece9e3",
                fontSize: "clamp(22px, 3vw, 40px)",
              }}
            >
              Fabricant Textile{" "}
              <span style={{ color: "#CCC4B1", fontStyle: "italic" }}>
                Et Fournisseur De Fil.
              </span>
            </h1>
            <p className="tb-copy" style={{ fontSize: 14, color: "#a8a5a0", maxWidth: 560 }}>
              Depuis 2005, Tbartex fabrique des vêtements pour des marques et
              acheteurs professionnels, et approvisionne les industriels du textile
              en fils techniques sélectionnés. Deux métiers. Un seul niveau d'exigence.
              Notre catalogue est disponible sur demande.
            </p>
          </div>
        </div>
      </section>

      {/* QUI NOUS SOMMES */}
      <section style={{ padding: "72px 0", background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          className="tb-shell"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)",
            gap: "0 80px",
            alignItems: "start",
          }}
        >
          <div style={{ display: "grid", gap: 20 }}>
            <p className="tb-eyebrow">Qui Nous Sommes</p>
            <h2 className="tb-title-lg" style={{ color: "#ece9e3", fontSize: "clamp(20px, 2.6vw, 34px)" }}>
              Deux Métiers. Un Seul Interlocuteur.
            </h2>
          </div>
          <div style={{ display: "grid", gap: 20 }}>
            <p className="tb-copy" style={{ fontSize: 14, color: "#a8a5a0", lineHeight: 1.9 }}>
              Fondée en 2005 à Casablanca, Tbartex exerce deux activités complémentaires
              dans le secteur textile. Nous fabriquons des vêtements : chaussettes,
              pulls, jeans, t-shirts, joggings, sous-vêtements... pour des marques,
              chaînes de distribution et acheteurs professionnels à l'international.
            </p>
            <p className="tb-copy" style={{ fontSize: 14, color: "#a8a5a0", lineHeight: 1.9 }}>
              Nous approvisionnons également les industriels et ateliers du textile
              en fils techniques sélectionnés pour leur régularité, leur précision
              et leur tenue en production. Que votre besoin soit un article à fabriquer
              ou un fil à sourcer, nous sommes votre interlocuteur direct.
            </p>
            <p className="tb-copy" style={{ fontSize: 14, color: "#a8a5a0", lineHeight: 1.9 }}>
              Les acheteurs professionnels et marques peuvent nous contacter pour
              demander un devis sur leurs articles. Nous envoyons notre catalogue
              complet sur demande.
            </p>
          </div>
        </div>
      </section>

      {/* NOS PRODUCTIONS */}
      <section style={{ padding: "56px 0", background: "#CCC4B1" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 32 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: "1px solid rgba(0,0,0,0.12)", paddingBottom: 16 }}>
            <p className="tb-eyebrow" style={{ color: "#3c1b0a", margin: 0 }}>Ce Que Nous Fabriquons</p>
            <span style={{ fontSize: 11, color: "#7a5e42", letterSpacing: "0.08em" }}>Catalogue disponible sur demande</span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "1px",
              background: "rgba(0,0,0,0.10)",
            }}
          >
            {productions.map((prod) => (
              <div
                key={prod}
                style={{
                  background: "#CCC4B1",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C4831A", flexShrink: 0 }} />
                <span style={{ fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "#3c1b0a", fontWeight: 500 }}>
                  {prod}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
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
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 0,
            }}
          >
            {chiffres.map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: i === 0 ? "0 24px 0 0" : "0 24px",
                  borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.12)" : "none",
                  display: "grid",
                  gap: 4,
                }}
              >
                <p style={{ margin: 0, fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: "#7a5e42" }}>
                  {item.label}
                </p>
                <p style={{ margin: 0, fontSize: "clamp(22px, 2.8vw, 36px)", letterSpacing: "-0.03em", textTransform: "uppercase", color: "#3c1b0a", fontWeight: 300, lineHeight: 0.95 }}>
                  {item.value}
                </p>
                <p style={{ margin: 0, fontSize: 11, color: "#4a3020", lineHeight: 1.5, paddingTop: 4 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section style={{ padding: "72px 0", background: "#322A1D" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 40 }}>
          <div style={{ display: "grid", gap: 12 }}>
            <p className="tb-eyebrow" style={{ color: "#CCC4B1" }}>Notre Approche</p>
            <h2 className="tb-title-lg" style={{ color: "#f0ece6", fontSize: "clamp(20px, 2.6vw, 34px)", maxWidth: 560 }}>
              Quatre Engagements. Un Seul Objectif : Vous Livrer À Temps.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "0 48px",
            }}
          >
            {valeurs.map((v, i) => (
              <div
                key={v.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "28px 1fr",
                  gap: 20,
                  padding: "24px 0",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  alignItems: "start",
                }}
              >
                <span style={{ fontSize: 10, letterSpacing: "0.14em", color: "#CCC4B1", paddingTop: 3 }}>
                  {v.n}
                </span>
                <div style={{ display: "grid", gap: 8 }}>
                  <p style={{ margin: 0, fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase", color: "#f0ece6", fontWeight: 500 }}>
                    {v.titre}
                  </p>
                  <p style={{ margin: 0, fontSize: 13, color: "#a8a5a0", lineHeight: 1.82 }}>
                    {v.texte}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "36px 0", background: "#0d0d0d" }}>
        <div className="tb-shell" style={{ display: "grid", gap: 0 }}>
          <div className="tb-rule" />
          <div
            style={{
              padding: "40px clamp(20px, 8vw, 160px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              textAlign: "center",
            }}
          >
            <p className="tb-eyebrow" style={{ textAlign: "center" }}>Travaillons Ensemble</p>
            <h2
              className="tb-title-lg"
              style={{ color: "#ece9e3", maxWidth: 560, margin: 0, textAlign: "center", fontSize: "clamp(18px, 2.4vw, 32px)" }}
            >
              Recevoir Notre Catalogue.
            </h2>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/contact" className="tb-button tb-button--solid">
                Demander Le Catalogue
              </Link>
              <Link href="/nos-fils" className="tb-button tb-button--line">
                Voir Nos Fils
              </Link>
            </div>
          </div>
          <div className="tb-rule" />
        </div>
      </section>

    </main>
  );
}

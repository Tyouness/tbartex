import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>{siteConfig.nom}</p>
        <p>Importateur B2B de fils textiles depuis {siteConfig.anneeCreation}</p>
      </div>

      <nav aria-label="Navigation secondaire">
        <Link href="/entreprise">L&apos;entreprise</Link>
        <Link href="/nos-fils">Nos fils</Link>
        <Link href="/conseil">Conseil &amp; accompagnement</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <a href={`tel:${siteConfig.telephone}`}>{siteConfig.telephone}</a>
      </div>

      <div>
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/politique-confidentialite">Politique de confidentialité</Link>
      </div>
    </footer>
  );
}

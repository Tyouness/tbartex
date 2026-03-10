import Link from "next/link";
import { siteConfig } from "@/content/site";

const navLinks = [
  { label: "L'entreprise", href: "/entreprise" },
  { label: "Nos fils", href: "/nos-fils" },
  { label: "Conseil", href: "/conseil" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white">

      {/* Bloc principal */}
      <div className="w-full mx-auto px-6 max-w-[1200px] py-16 grid grid-cols-1 sm:grid-cols-3 gap-12">

        {/* Identité */}
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white mb-4">
            {siteConfig.nom}
          </p>
          <p className="text-sm text-[#666666] leading-relaxed">
            Importateur B2B de fils textiles<br />
            depuis {siteConfig.anneeCreation}
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigation pied de page">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#444444] mb-5">
            Navigation
          </p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#888888] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#444444] mb-5">
            Contact
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="block text-sm text-[#888888] hover:text-white transition-colors mb-3"
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.telephone}`}
            className="block text-sm text-[#888888] hover:text-white transition-colors"
          >
            {siteConfig.telephone}
          </a>
        </div>
      </div>

      {/* Barre basse */}
      <div className="border-t border-[#1a1a1a]">
        <div className="w-full mx-auto px-6 max-w-[1200px] py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[11px] text-[#444444]">
            &copy; {siteConfig.anneeCreation}&ndash;{new Date().getFullYear()} {siteConfig.nom}
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-[#444444] hover:text-[#888888] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

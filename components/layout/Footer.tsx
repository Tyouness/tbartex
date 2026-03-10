import Link from "next/link";
import { siteConfig } from "@/content/site";

const nav = [
  { label: "L'entreprise", href: "/entreprise" },
  { label: "Nos fils", href: "/nos-fils" },
  { label: "Conseil", href: "/conseil" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/politique-confidentialite" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111111]">
      <div className="w-full mx-auto px-8 max-w-[1200px] py-20">

        {/* Grille infos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          <div className="col-span-2 md:col-span-1">
            <p className="text-[13px] font-medium tracking-[0.25em] uppercase text-white mb-5">
              {siteConfig.nom}
            </p>
            <p className="text-[13px] text-[#666666] leading-relaxed">
              Importateur B2B<br />de fils textiles
            </p>
          </div>

          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#3a3a3a] mb-5">
              Pages
            </p>
            <ul className="flex flex-col gap-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-[#777777] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#3a3a3a] mb-5">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-[13px] text-[#777777] hover:text-white transition-colors mb-3"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.telephone}`}
              className="block text-[13px] text-[#777777] hover:text-white transition-colors"
            >
              {siteConfig.telephone}
            </a>
          </div>

        </div>

        {/* Bas de footer */}
        <div className="pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[11px] text-[#3a3a3a]">
            &copy; {siteConfig.anneeCreation}&ndash;{year} {siteConfig.nom}
          </p>
          <div className="flex gap-6">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] text-[#3a3a3a] hover:text-[#777777] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

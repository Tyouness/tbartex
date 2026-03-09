import Container from "@/components/ui/Container";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

/**
 * Hero de page intérieure : titre + sous-titre optionnel.
 * Utilisé sur toutes les pages sauf l'Accueil.
 */
export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="py-16 border-b border-[#e2ddd8] bg-white">
      <Container>
        <h1 className="text-4xl font-semibold text-[#1e1e1e] mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-[#6b6b6b] max-w-2xl">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}

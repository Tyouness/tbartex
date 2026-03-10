import Container from "@/components/ui/Container";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="py-20 md:py-28 border-b border-[#e5e5e5] bg-white">
      <Container>
        <h1 className="text-[#0a0a0a] mb-6">{title}</h1>
        {subtitle && (
          <p className="text-base md:text-lg text-[#525252] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}

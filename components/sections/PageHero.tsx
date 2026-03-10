import Container from "@/components/ui/Container";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section className="bg-white pt-20 pb-16 md:pt-28 md:pb-20">
      <Container>
        {label && (
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#9a9a9a] mb-8">
            {label}
          </p>
        )}
        <h1 className="text-[#111111] max-w-3xl mb-6">{title}</h1>
        {subtitle && (
          <p className="text-base text-[#6a6a6a] max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}

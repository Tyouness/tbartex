import Container from "@/components/ui/Container";
import Link from "next/link";

interface CtaBannerProps {
  heading: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CtaBanner({ heading, buttonLabel, buttonHref }: CtaBannerProps) {
  return (
    <section className="py-16 bg-[#000000]">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <p className="text-white text-xl md:text-2xl font-light max-w-xl leading-snug">
            {heading}
          </p>
          <Link
            href={buttonHref}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 text-[11px] font-medium tracking-[0.12em] uppercase border border-white text-white hover:bg-white hover:text-[#000000] transition-colors duration-200"
          >
            {buttonLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import Link from "next/link";

interface CtaBannerProps {
  heading: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CtaBanner({ heading, buttonLabel, buttonHref }: CtaBannerProps) {
  return (
    <section className="bg-[#111111] py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <p className="text-white font-light text-2xl md:text-3xl max-w-lg leading-snug tracking-tight">
            {heading}
          </p>
          <Link
            href={buttonHref}
            className="shrink-0 inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.14em] uppercase text-[#888888] hover:text-white transition-colors group"
          >
            {buttonLabel}
            <span className="inline-block w-8 h-px bg-[#444444] group-hover:bg-white group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface CtaBannerProps {
  heading: string;
  buttonLabel: string;
  buttonHref: string;
}

/**
 * Bande CTA sobre en bas de section ou de page.
 * Fond foncé pour contraster avec le reste du contenu.
 */
export default function CtaBanner({
  heading,
  buttonLabel,
  buttonHref,
}: CtaBannerProps) {
  return (
    <section className="py-14 bg-[#1e1e1e]">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-white text-lg font-medium max-w-xl">{heading}</p>
          <Button href={buttonHref} variant="secondary" className="border-white text-white hover:bg-white hover:text-[#1e1e1e] shrink-0">
            {buttonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}

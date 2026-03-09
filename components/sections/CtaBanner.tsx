import Button from "@/components/ui/Button";

interface CtaBannerProps {
  heading: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CtaBanner({
  heading,
  buttonLabel,
  buttonHref,
}: CtaBannerProps) {
  return (
    <div>
      <p>{heading}</p>
      <Button href={buttonHref} variant="primary">
        {buttonLabel}
      </Button>
    </div>
  );
}

import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/sections/PageHero";

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero title="Mentions légales" />
      <SectionWrapper alternate>
        <Container>
          <p className="text-sm text-[#a0a0a0] italic">
            Contenu à compléter avant mise en production.
          </p>
        </Container>
      </SectionWrapper>
    </>
  );
}

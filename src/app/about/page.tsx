import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader id="about-hero" title="About" subtitle="A foundation you can evolve into a full product site." />
      <Container id="about-content" className="py-10">
        <div className="prose prose-invert max-w-none">
          <p>
            This scaffold is optimized for:
          </p>
          <ul>
            <li>Responsive UI</li>
            <li>Separation of concerns</li>
            <li>Easy content swaps (local vs headless CMS)</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

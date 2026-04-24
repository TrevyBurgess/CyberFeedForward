import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer id="site-footer" className="border-t border-slate-800">
      <Container id="site-footer-container" className="py-8">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Cyber Feed Forward
        </p>
      </Container>
    </footer>
  );
}

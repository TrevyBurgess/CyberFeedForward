import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader id="contact-hero" title="Contact" subtitle="Wire this up to your preferred form backend." />
      <Container id="contact-content" className="py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <section id="contact-card" className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
            <h2 className="text-lg font-semibold">Message</h2>
            <p className="mt-2 text-slate-300">
              This is a placeholder contact page.
            </p>
          </section>

          <section id="contact-details" className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
            <h2 className="text-lg font-semibold">Details</h2>
            <dl className="mt-3 space-y-2 text-slate-300">
              <div>
                <dt className="text-slate-400">Email</dt>
                <dd>hello@example.com</dd>
              </div>
              <div>
                <dt className="text-slate-400">Location</dt>
                <dd>Remote</dd>
              </div>
            </dl>
          </section>
        </div>
      </Container>
    </div>
  );
}

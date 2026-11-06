import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the CyberFeedForward team.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Tell us about your environment and what keeps you up at night.
            We&apos;ll get back to you within one business day.
          </p>
          <dl className="mt-8 space-y-4">
            <div>
              <dt className="text-sm font-semibold">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-cyan-600 hover:underline dark:text-cyan-400"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold">Response time</dt>
              <dd className="mt-1 text-zinc-600 dark:text-zinc-400">
                Within one business day
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}

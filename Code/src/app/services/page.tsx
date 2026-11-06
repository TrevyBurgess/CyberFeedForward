import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Services",
  description: "Threat intelligence, secure architecture, and incident support.",
};

const services = [
  {
    title: "Threat intelligence briefings",
    description:
      "Weekly and monthly analyst briefings tailored to your sector, stack, and risk profile.",
  },
  {
    title: "Architecture security review",
    description:
      "Deep-dive review of your systems and data flows, with a prioritized hardening roadmap.",
  },
  {
    title: "Incident readiness",
    description:
      "Tabletop exercises, playbook development, and escalation path design.",
  },
  {
    title: "Detection engineering",
    description:
      "Custom detection rules and tuning grounded in current adversary tradecraft.",
  },
  {
    title: "Security awareness programs",
    description:
      "Role-based training that measures behavior change, not just completions.",
  },
  {
    title: "Vendor and supply-chain risk",
    description:
      "Assessment of third-party exposure across your software and service dependencies.",
  },
];

export default function ServicesPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight">Services</h1>
      <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
        Every engagement is scoped to your environment — no recycled
        questionnaires, no generic reports.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h2 className="font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-xl bg-cyan-600 px-6 py-10 text-white sm:px-10">
        <h2 className="text-2xl font-bold tracking-tight">
          Not sure where to start?
        </h2>
        <p className="mt-2 max-w-2xl text-cyan-50">
          A short discovery call is usually enough to identify the highest-leverage
          work for your team.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex h-11 items-center rounded-full bg-white px-6 font-medium text-cyan-700 transition-colors hover:bg-cyan-50"
        >
          Book a call
        </Link>
      </div>
    </Container>
  );
}

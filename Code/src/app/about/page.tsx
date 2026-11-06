import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are and why we feed security intelligence forward.",
};

const values = [
  {
    title: "Proactive over reactive",
    description:
      "Alerts tell you what already happened. We focus on what happens next.",
  },
  {
    title: "Signal over noise",
    description:
      "Every insight we publish or deliver is analyst-verified and actionable.",
  },
  {
    title: "Transparent by default",
    description:
      "No fear-mongering, no black boxes. We show our reasoning and sources.",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight">About us</h1>
      <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
        CyberFeedForward was founded on a simple observation: most security
        teams drown in alerts about yesterday&apos;s attacks. We work the other
        direction — analyzing trends, actor behavior, and emerging tooling to
        tell you what&apos;s coming, not just what&apos;s here.
      </p>

      <section aria-labelledby="values-heading" className="mt-14">
        <h2 id="values-heading" className="text-2xl font-bold tracking-tight">
          What we believe
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}

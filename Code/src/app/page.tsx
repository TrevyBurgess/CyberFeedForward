import Link from "next/link";
import { Container } from "@/components/container";
import { cms } from "@/lib/cms";
import { site } from "@/lib/site";

const pillars = [
  {
    title: "Threat intelligence",
    description:
      "Curated, analyst-vetted signals on emerging threats — delivered before they reach your perimeter.",
  },
  {
    title: "Secure by design",
    description:
      "Architecture reviews and hardening guidance that build security into your systems from day one.",
  },
  {
    title: "Rapid response",
    description:
      "Actionable playbooks and forensics support when an incident moves faster than your team can.",
  },
];

export default async function Home() {
  const posts = (await cms.listPosts()).slice(0, 3);

  return (
    <>
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            {site.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Stay ahead of the threat, not behind the alert.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {site.description} We turn raw signals into forward-looking
            intelligence so your team can act before attackers do.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-600 px-6 font-medium text-white transition-colors hover:bg-cyan-700"
            >
              Explore services
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              Talk to us
            </Link>
          </div>
        </Container>
      </section>

      <section aria-labelledby="pillars-heading">
        <Container className="py-16 sm:py-20">
          <h2 id="pillars-heading" className="text-2xl font-bold tracking-tight">
            What we do
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <h3 className="font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="insights-heading"
        className="bg-zinc-50 dark:bg-zinc-900/50"
      >
        <Container className="py-16 sm:py-20">
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="insights-heading"
              className="text-2xl font-bold tracking-tight"
            >
              Latest insights
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400"
            >
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-zinc-200 bg-background p-6 dark:border-zinc-800"
              >
                <time
                  dateTime={post.date}
                  className="text-xs text-zinc-500 dark:text-zinc-500"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3 className="mt-2 font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-cyan-600 dark:hover:text-cyan-400"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

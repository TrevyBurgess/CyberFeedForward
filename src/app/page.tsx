import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export default function HomePage() {
  return (
    <div>
      <PageHeader
        id="home-hero"
        title="Cyber Feed Forward"
        subtitle="A multi-page, responsive Next.js + Tailwind site scaffolded for fast iteration."
      />

      <Container id="home-content" className="py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <section id="home-get-started" className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
            <h2 className="text-lg font-semibold">Get started</h2>
            <p className="mt-2 text-slate-300">
              Edit <code className="rounded bg-slate-900 px-2 py-1">src/app/page.tsx</code> and refresh.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                id="home-blog-link"
                href="/blog"
                className="rounded-md bg-cyan-500 px-4 py-2 text-slate-950 font-medium hover:bg-cyan-400"
              >
                View Blog
              </Link>
              <Link
                id="home-about-link"
                href="/about"
                className="rounded-md border border-slate-700 px-4 py-2 text-slate-100 hover:bg-slate-900"
              >
                About
              </Link>
            </div>
          </section>

          <section id="home-features" className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
            <h2 className="text-lg font-semibold">What’s included</h2>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>App Router multi-page layout</li>
              <li>Tailwind CSS styling</li>
              <li>CMS adapter (local content by default)</li>
              <li>Playwright e2e tests</li>
              <li>Vercel-ready deployment</li>
            </ul>
          </section>
        </div>
      </Container>
    </div>
  );
}

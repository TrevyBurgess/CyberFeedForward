import type { Post } from "@/lib/content/types";

export const posts: Post[] = [
  {
    slug: "welcome-to-cyberfeedforward",
    title: "Welcome to Cyber Feed Forward",
    excerpt: "A starter post to prove out the blog route and CMS adapter.",
    publishedAt: "2026-04-23",
    content:
      "Cyber Feed Forward is scaffolded with Next.js (App Router), TypeScript, Tailwind CSS, and Playwright. Replace this local content with your headless CMS of choice."
  },
  {
    slug: "cms-adapter-pattern",
    title: "CMS Adapter Pattern",
    excerpt: "Keep the UI stable while swapping where content comes from.",
    publishedAt: "2026-04-22",
    content:
      "Use a small ContentClient interface and implement providers (local, Contentful, Sanity, etc.). Pages should depend on the interface, not a specific CMS SDK."
  }
];

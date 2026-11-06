import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { cms } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Insights",
  description: "Analysis and forward-looking security intelligence.",
};

export default async function BlogPage() {
  const posts = await cms.listPosts();

  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight">Insights</h1>
      <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
        Analysis, briefings, and forward-looking security intelligence.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
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
            <h2 className="mt-2 font-semibold">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
            {post.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Container>
  );
}

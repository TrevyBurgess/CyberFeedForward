import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { cms } from "@/lib/cms";

type Params = { slug: string };

// This route may block on params/data so that unknown slugs return a real
// 404 status (notFound() can't set the status once a Suspense boundary
// streams). Listed slugs are still prerendered via generateStaticParams.
export const instant = false;

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await cms.listPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await cms.getPost(slug);
  if (!post) {
    return {};
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await cms.getPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <Container className="py-16 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400"
        >
          &larr; Back to insights
        </Link>
        <time
          dateTime={post.date}
          className="mt-6 block text-sm text-zinc-500 dark:text-zinc-500"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">{post.title}</h1>
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
        <div
          className="prose mt-10 max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </Container>
  );
}

import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { createContentClient } from "@/lib/content/cms";

export const metadata = {
  title: "Blog"
};

export default async function BlogIndexPage() {
  const client = createContentClient();
  const posts = await client.getAllPosts();

  return (
    <div>
      <PageHeader id="blog-hero" title="Blog" subtitle="Content pulled through a CMS adapter (local by default)." />
      <Container id="blog-index" className="py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              id={`post-card-${post.slug}`}
              key={post.slug}
              className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 hover:bg-slate-900/50"
            >
              <h2 className="text-lg font-semibold">
                <Link id={`post-link-${post.slug}`} href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
              <p className="mt-4 text-xs text-slate-400">{new Date(post.publishedAt).toLocaleDateString()}</p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

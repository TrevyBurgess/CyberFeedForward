import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { createContentClient } from "@/lib/content/cms";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const client = createContentClient();
  const posts = await client.getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const client = createContentClient();
  const post = await client.getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <PageHeader id="blog-post-hero" title={post.title} subtitle={post.excerpt} />
      <Container id="blog-post" className="py-10">
        <div className="prose prose-invert max-w-none">
          <p className="text-sm text-slate-400">{new Date(post.publishedAt).toLocaleDateString()}</p>
          <p>{post.content}</p>
        </div>
      </Container>
    </div>
  );
}

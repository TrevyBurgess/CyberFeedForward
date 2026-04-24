import type { ContentClient } from "@/lib/content/cms";
import type { Post } from "@/lib/content/types";

import { posts } from "@/content/posts";

function byPublishedDateDesc(a: Post, b: Post) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

export const getAllPosts: ContentClient["getAllPosts"] = async () => {
  return [...posts].sort(byPublishedDateDesc);
};

export const getPostBySlug: ContentClient["getPostBySlug"] = async (slug) => {
  const post = posts.find((p) => p.slug === slug);
  return post ?? null;
};

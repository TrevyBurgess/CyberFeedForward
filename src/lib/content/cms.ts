import type { Post } from "@/lib/content/types";
import { getAllPosts, getPostBySlug } from "@/lib/content/localClient";

export type ContentClient = {
  getAllPosts: () => Promise<Post[]>;
  getPostBySlug: (slug: string) => Promise<Post | null>;
};

export function createContentClient(): ContentClient {
  const provider = process.env.CMS_PROVIDER ?? "local";

  if (provider === "local") {
    return { getAllPosts, getPostBySlug };
  }

  return { getAllPosts, getPostBySlug };
}

import { LocalCmsClient } from "./local";
import type { CmsClient, Post, PostSummary } from "./types";

export type { CmsClient, Post, PostSummary } from "./types";

/**
 * The single content entry point for the site. To adopt a headless CMS,
 * implement `CmsClient` against Sanity/Contentful/Strapi/etc. and replace the
 * client used here — pages and tests stay unchanged.
 */
const client: CmsClient = new LocalCmsClient();

async function listPosts(): Promise<PostSummary[]> {
  "use cache";
  return client.listPosts();
}

async function getPost(slug: string): Promise<Post | null> {
  "use cache";
  return client.getPost(slug);
}

export const cms: CmsClient = { listPosts, getPost };

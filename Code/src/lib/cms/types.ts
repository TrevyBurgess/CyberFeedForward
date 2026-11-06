export interface PostSummary {
  slug: string;
  title: string;
  /** ISO 8601 date string. */
  date: string;
  excerpt: string;
  tags: string[];
}

export interface Post extends PostSummary {
  /** Rendered HTML, safe to inject into prose containers. */
  contentHtml: string;
}

/**
 * Content source abstraction. Implement this interface to plug in a headless
 * CMS (Sanity, Contentful, Strapi, Payload, ...) — the pages never touch the
 * backing store directly.
 */
export interface CmsClient {
  listPosts(): Promise<PostSummary[]>;
  getPost(slug: string): Promise<Post | null>;
}

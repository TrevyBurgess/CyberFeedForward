import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { CmsClient, Post, PostSummary } from "./types";

const postsDirectory = path.join(process.cwd(), "content", "posts");

marked.use({ gfm: true });

interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  draft?: boolean;
}

/**
 * File-backed CMS implementation. Posts are Markdown files with frontmatter
 * in `content/posts/`. Swap `cms` in `./index.ts` for a headless CMS client
 * without changing any page code.
 */
export class LocalCmsClient implements CmsClient {
  async listPosts(): Promise<PostSummary[]> {
    const files = fs
      .readdirSync(postsDirectory)
      .filter((file) => file.endsWith(".md"));

    return files
      .map((file) => this.parse(file).summary)
      .filter((summary): summary is PostSummary => summary !== null)
      .sort((a, b) => b.date.localeCompare(a.date));
  }

  async getPost(slug: string): Promise<Post | null> {
    const file = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(file)) {
      return null;
    }

    const parsed = this.parse(`${slug}.md`);
    if (!parsed.summary) {
      return null;
    }

    return {
      ...parsed.summary,
      contentHtml: marked.parse(parsed.body) as string,
    };
  }

  private parse(fileName: string): { summary: PostSummary | null; body: string } {
    const slug = fileName.replace(/\.md$/, "");
    const { data, content } = matter(
      fs.readFileSync(path.join(postsDirectory, fileName), "utf8"),
    );
    const frontmatter = data as PostFrontmatter;

    if (frontmatter.draft) {
      return { summary: null, body: content };
    }

    return {
      summary: {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        excerpt: frontmatter.excerpt,
        tags: frontmatter.tags ?? [],
      },
      body: content,
    };
  }
}

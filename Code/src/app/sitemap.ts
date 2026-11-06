import type { MetadataRoute } from "next";
import { cms } from "@/lib/cms";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await cms.listPosts();

  const staticRoutes = ["", "/about", "/services", "/contact", "/blog"].map(
    (route) => ({
      url: `${site.url}${route}`,
    }),
  );

  const postRoutes = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...postRoutes];
}

import type { MetadataRoute } from "next";
import { getBlogPosts, getHelpArticles } from "@/lib/content";
import { siteUrl } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/features", "/blog", "/help"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
  }));

  const helpRoutes: MetadataRoute.Sitemap = getHelpArticles().map((article) => ({
    url: `${siteUrl}/help/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...postRoutes, ...helpRoutes];
}

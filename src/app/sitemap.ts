import type { MetadataRoute } from "next";
import { getBlogPosts, getGuideArticles, getHelpArticles } from "@/lib/content";
import { GUIDE_CHAPTERS } from "@/lib/guide-structure";
import { siteUrl } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/features", "/blog", "/guide", "/help"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    }),
  );

  const postRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
  }));

  const helpRoutes: MetadataRoute.Sitemap = getHelpArticles().map((article) => ({
    url: `${siteUrl}/help/${article.slug}`,
    lastModified: new Date(),
  }));

  const guideChapterRoutes: MetadataRoute.Sitemap = GUIDE_CHAPTERS.map((chapter) => ({
    url: `${siteUrl}/guide/${chapter.slug}`,
    lastModified: new Date(),
  }));

  const guideArticleRoutes: MetadataRoute.Sitemap = getGuideArticles().map((article) => ({
    url: `${siteUrl}/guide/${article.chapter}/${article.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...postRoutes,
    ...helpRoutes,
    ...guideChapterRoutes,
    ...guideArticleRoutes,
  ];
}

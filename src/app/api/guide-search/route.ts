import { NextResponse } from "next/server";
import { getGuideArticles, getHelpArticles } from "@/lib/content";
import { getGuideChapterMeta } from "@/lib/guide-structure";

export type GuideSearchItem = {
  url: string;
  title: string;
  description: string;
  section: string;
  body: string;
};

// A hand-rolled ranked-substring index rather than a fuzzy-search library —
// USER_GUIDE_PLAN.md §7 flags minisearch/fuse.js as an open decision, so
// this ships dependency-free until that's confirmed; swapping the scoring
// in guide-search.tsx for a real library later doesn't require touching
// this route's shape. Recomputed per request rather than cached: content
// is a handful of markdown files read from disk, cheap enough that a cache
// layer would be premature.
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function GET() {
  const guideItems: GuideSearchItem[] = getGuideArticles().map((article) => ({
    url: `/guide/${article.chapter}/${article.slug}`,
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    section: getGuideChapterMeta(article.chapter)?.title ?? article.chapter,
    body: stripHtml(article.html).slice(0, 4000),
  }));

  const helpItems: GuideSearchItem[] = getHelpArticles().map((article) => ({
    url: `/help/${article.slug}`,
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    section: `Help centre — ${article.frontmatter.category}`,
    body: stripHtml(article.html).slice(0, 4000),
  }));

  return NextResponse.json([...guideItems, ...helpItems]);
}

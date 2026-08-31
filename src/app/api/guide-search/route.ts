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

// This route just serves the raw combined Guide + Help corpus as JSON;
// the fuzzy index is built client-side with minisearch in guide-search.tsx
// (USER_GUIDE_PLAN.md §7.4 — decision made: minisearch, the one
// client-side search dependency this repo takes on). Recomputed per
// request rather than cached: content is a handful of markdown files read
// from disk, cheap enough that a cache layer would be premature.
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

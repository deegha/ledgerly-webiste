import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { GuideShell } from "@/components/guide-shell";
import { GuideOnThisPage } from "@/components/guide-on-this-page";
import { GuideScreenshotLightbox } from "@/components/guide-screenshot-lightbox";
import {
  getAdjacentGuideArticles,
  getGuideArticle,
  getGuideArticles,
  getGuideNavChapters,
} from "@/lib/content";
import { getGuideChapterMeta } from "@/lib/guide-structure";
import { siteUrl } from "@/lib/env";

export function generateStaticParams() {
  return getGuideArticles().map((article) => ({ chapter: article.chapter, slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string; slug: string }>;
}): Promise<Metadata> {
  const { chapter, slug } = await params;
  const article = getGuideArticle(chapter, slug);
  if (!article) return {};
  const url = `${siteUrl}/guide/${chapter}/${slug}`;
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      url,
    },
    twitter: { title: article.frontmatter.title, description: article.frontmatter.description },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ chapter: string; slug: string }>;
}) {
  const { chapter: chapterSlug, slug } = await params;
  const article = getGuideArticle(chapterSlug, slug);
  const chapter = getGuideChapterMeta(chapterSlug);
  if (!article || !chapter) notFound();

  const chapters = getGuideNavChapters();
  const { prev, next } = getAdjacentGuideArticles(chapterSlug, slug);
  const url = `${siteUrl}/guide/${chapterSlug}/${slug}`;

  return (
    <GuideShell chapters={chapters} aside={<GuideOnThisPage headings={article.headings} />}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: article.frontmatter.title,
          description: article.frontmatter.description,
          url,
          author: { "@type": "Organization", name: "Ledgerly.lk" },
          publisher: { "@type": "Organization", name: "Ledgerly.lk" },
        }}
      />
      <GuideScreenshotLightbox />

      <nav aria-label="Breadcrumb" className="text-ink-faint flex items-center gap-1.5 text-sm">
        <Link href="/guide" className="hover:text-ink">
          Guide
        </Link>
        <span>/</span>
        <Link href={`/guide/${chapterSlug}`} className="hover:text-ink">
          {chapter.title}
        </Link>
      </nav>

      <article className="mt-4">
        <h1 className="text-3xl sm:text-4xl">{article.frontmatter.title}</h1>
        <div className="prose prose-neutral mt-8 max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.html }} />
        </div>

        {article.frontmatter.related && article.frontmatter.related.length > 0 && (
          <div className="border-rule mt-10 border-t pt-6">
            <p className="text-ink-faint text-xs font-semibold tracking-[0.08em] uppercase">
              See also
            </p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {article.frontmatter.related.map((href) => (
                <li key={href}>
                  <Link href={href} className="text-brand-ink text-sm font-medium">
                    {href}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <div className="border-rule mt-12 grid grid-cols-1 gap-3 border-t pt-6 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/guide/${prev.chapter}/${prev.slug}`}
            className="border-rule hover:border-rule-strong rounded-lg border p-4 transition-colors"
          >
            <span className="text-ink-faint text-xs">← Previous</span>
            <p className="text-ink mt-1 text-sm font-medium">{prev.frontmatter.title}</p>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/guide/${next.chapter}/${next.slug}`}
            className="border-rule hover:border-rule-strong rounded-lg border p-4 text-right transition-colors sm:col-start-2"
          >
            <span className="text-ink-faint text-xs">Next →</span>
            <p className="text-ink mt-1 text-sm font-medium">{next.frontmatter.title}</p>
          </Link>
        )}
      </div>
    </GuideShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideShell } from "@/components/guide-shell";
import { getGuideArticlesByChapter, getGuideNavChapters } from "@/lib/content";
import { GUIDE_CHAPTERS, getGuideChapterMeta } from "@/lib/guide-structure";
import { siteUrl } from "@/lib/env";

export function generateStaticParams() {
  return GUIDE_CHAPTERS.map((chapter) => ({ chapter: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string }>;
}): Promise<Metadata> {
  const { chapter: chapterSlug } = await params;
  const chapter = getGuideChapterMeta(chapterSlug);
  if (!chapter) return {};
  const url = `${siteUrl}/guide/${chapterSlug}`;
  const description = `${chapter.description} Part of the Ledgerly.lk user guide.`;
  return {
    title: chapter.title,
    description,
    alternates: { canonical: url },
    openGraph: { title: chapter.title, description, url },
    twitter: { title: chapter.title, description },
  };
}

export default async function GuideChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: chapterSlug } = await params;
  const chapter = getGuideChapterMeta(chapterSlug);
  if (!chapter) notFound();

  const chapters = getGuideNavChapters();
  const articles = getGuideArticlesByChapter(chapterSlug);

  return (
    <GuideShell chapters={chapters}>
      <Link href="/guide" className="text-brand-ink text-sm font-medium">
        ← User guide
      </Link>
      <span className="text-brand-ink mt-6 block font-mono text-xs font-semibold tracking-[0.14em] uppercase">
        Chapter
      </span>
      <h1 className="mt-2 text-3xl sm:text-4xl">{chapter.title}</h1>
      <p className="text-ink-soft mt-4 max-w-2xl text-lg leading-relaxed">{chapter.description}</p>

      {articles.length > 0 ? (
        <div className="mt-10 flex flex-col gap-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/guide/${chapterSlug}/${article.slug}`}
              className="group border-rule bg-paper-raised hover:border-rule-strong rounded-lg border p-5 transition-colors"
            >
              <h2 className="text-ink group-hover:text-brand-ink font-medium transition-colors">
                {article.frontmatter.title}
              </h2>
              <p className="text-ink-soft mt-1.5 text-sm leading-relaxed">
                {article.frontmatter.description}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-ink-faint border-rule mt-10 rounded-lg border border-dashed p-6 text-sm italic">
          This chapter hasn&rsquo;t been written yet — check back soon.
        </p>
      )}
    </GuideShell>
  );
}

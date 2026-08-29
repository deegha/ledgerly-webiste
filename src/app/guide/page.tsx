import type { Metadata } from "next";
import Link from "next/link";
import { GuideShell } from "@/components/guide-shell";
import { getGuideNavChapters } from "@/lib/content";
import { siteUrl } from "@/lib/env";

const title = "User guide";
const description =
  "The full manual for Ledgerly.lk — every screen, every report, and the bookkeeping logic underneath, organized the way the app itself is.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/guide` },
  openGraph: { title, description, url: `${siteUrl}/guide` },
  twitter: { title, description },
};

export default function GuideIndexPage() {
  const chapters = getGuideNavChapters();

  return (
    <GuideShell chapters={chapters}>
      <div className="mb-10">
        <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
          User guide
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl">Read this before you dive in</h1>
        <p className="text-ink-soft mt-5 max-w-2xl text-lg leading-relaxed">
          Ledgerly is a general ledger with documents that post into it, not an invoicing app with
          reports bolted on. This guide walks every screen in the order you&rsquo;ll actually use
          them, and explains what&rsquo;s happening in your books each time you click Save.
        </p>
        <p className="text-ink-faint mt-3 text-sm">
          Looking for a quick answer instead?{" "}
          <Link href="/help" className="text-brand-ink font-medium">
            Try the Help centre
          </Link>
          .
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {chapters.map((chapter, index) => (
          <Link
            key={chapter.slug}
            href={`/guide/${chapter.slug}`}
            className="group border-rule bg-paper-raised hover:border-rule-strong rounded-lg border p-5 transition-colors"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-ink-faint font-mono text-xs">
                {String(index).padStart(2, "0")}
              </span>
              <h2 className="text-ink group-hover:text-brand-ink font-medium transition-colors">
                {chapter.title}
              </h2>
            </div>
            <p className="text-ink-soft mt-1.5 text-sm leading-relaxed">{chapter.description}</p>
            {chapter.articles.length > 0 ? (
              <p className="text-ink-faint mt-3 text-xs">
                {chapter.articles.length} article{chapter.articles.length === 1 ? "" : "s"}
              </p>
            ) : (
              <p className="text-ink-faint mt-3 text-xs italic">Coming soon</p>
            )}
          </Link>
        ))}
      </div>
    </GuideShell>
  );
}

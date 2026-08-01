import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FeatureSection } from "@/components/feature-section";
import { Hero } from "@/components/hero";
import { InvariantsGrid } from "@/components/invariants-grid";
import { JsonLd } from "@/components/json-ld";
import { ProblemSection } from "@/components/problem-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/env";
import { featureChapters, invariants } from "@/lib/site-content";

const highlightedChapters = featureChapters.filter((chapter) => chapter.highlight);

const title = "Ledgerly.lk — Double-entry bookkeeping, built for Sri Lanka";
const description =
  "A general ledger with documents that post into it — not an invoicing app with reports bolted on. Every number on every screen traces back to a journal line.";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
  openGraph: { title, description, url: siteUrl },
  twitter: { title, description },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ledgerly.lk",
          url: siteUrl,
          description,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Ledgerly.lk",
          url: siteUrl,
        }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        {highlightedChapters.map((chapter) => (
          <FeatureSection key={chapter.id} chapter={chapter} />
        ))}
        <section className="bg-mist">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl">That&apos;s four. There are ten.</h3>
              <p className="text-ink-soft mt-1">
                Inventory, fixed assets, budgets, banking, receivables, and team governance — see
                the whole ledger.
              </p>
            </div>
            <Link
              href="/features"
              className="border-rule-strong text-ink hover:bg-paper-raised shrink-0 rounded-md border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              See all features
            </Link>
          </div>
        </section>
        <section id="trust" className="bg-mist">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
              What &quot;audited&quot; actually rests on
            </span>
            <div className="bg-brand mt-4 mb-5 h-[3px] w-11 rounded-full" />
            <h2 className="max-w-[26ch] text-3xl sm:text-4xl">
              Ten rules the database enforces — not just the app.
            </h2>
            <p className="text-ink-soft mt-4 max-w-2xl text-lg leading-relaxed">
              Application code is bypassable. A trigger, a constraint, and a revoked database
              privilege are not.
            </p>
            <div className="mt-12">
              <InvariantsGrid invariants={invariants} />
            </div>
          </div>
        </section>
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}

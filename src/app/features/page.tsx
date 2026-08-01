import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FeatureSection } from "@/components/feature-section";
import { LedgerTexture } from "@/components/ledger-texture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/env";
import { featureChapters } from "@/lib/site-content";

const title = "Features";
const description =
  "Every part of the ledger: sales, purchases, inventory, fixed assets, budgets, banking, receivables, Sri Lankan compliance, and team governance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/features` },
  openGraph: { title, description, url: `${siteUrl}/features` },
  twitter: { title, description },
};

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-rule relative overflow-hidden border-b">
          <LedgerTexture opacity={0.4} />
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
              Everything, ledger-first
            </span>
            <h1 className="mt-4 max-w-[22ch] text-4xl sm:text-5xl">
              Ten features. One ledger underneath every one of them.
            </h1>
            <p className="text-ink-soft mt-5 max-w-2xl text-lg leading-relaxed">
              Sales, purchases, inventory, fixed assets, budgets, banking, receivables, compliance,
              and your team — nothing here is a separate module bolted onto reports. Every screen
              reads posted journal lines.
            </p>
          </div>
        </section>
        {featureChapters.map((chapter) => (
          <FeatureSection key={chapter.id} chapter={chapter} />
        ))}
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}

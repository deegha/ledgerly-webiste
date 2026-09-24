import type { Metadata } from "next";
import { FeatureSection } from "@/components/feature-section";
import { Hero } from "@/components/hero";
import { HomeClose } from "@/components/home-close";
import { InvariantsGrid } from "@/components/invariants-grid";
import { JsonLd } from "@/components/json-ld";
import { ProblemSection } from "@/components/problem-section";
import { ReviewsSectionPlaceholder } from "@/components/reviews-section-placeholder";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/env";
import { featureChapters, invariants, type FeatureChapter } from "@/lib/site-content";

// Reuse existing screenshots + their metadata from the /features content —
// see HOMEPAGE-REVAMP.md §3: these three images are existing site assets,
// not regenerated or re-sourced for the homepage.
const salesChapter = featureChapters.find((chapter) => chapter.id === "sales")!;
const productChapter = featureChapters.find((chapter) => chapter.id === "product")!;
const complianceChapter = featureChapters.find((chapter) => chapter.id === "compliance")!;

const invoiceDetailImage = salesChapter.images.find(
  (image) => image.src === "/images/invoice-detail.jpg",
)!;
const dashboardImage = productChapter.images[0];
const vatReturnImage = complianceChapter.images[0];

// Section 3 — "What actually changes" (HOMEPAGE-REVAMP.md §2).
const understandingSection: FeatureChapter = {
  id: "understanding",
  eyebrow: "The one idea worth understanding",
  title: "Nothing gets edited. It gets corrected — on the record.",
  body: "In Ledgerly, once an invoice, bill, or payment is posted, it's locked. Not by a setting you have to remember to turn on — by the database itself. A mistake doesn't get quietly fixed; it gets a credit note, a reversal, a new entry that explains what changed and why. Your books don't just look right today. They can be checked, line by line, on any day you've ever posted to them.",
  tinted: true,
  images: [invoiceDetailImage],
};

// Section 5 — "One proof screenshot" (HOMEPAGE-REVAMP.md §2).
const proofSection: FeatureChapter = {
  id: "proof",
  eyebrow: "See it for yourself",
  title: "One screen, the whole business.",
  body: "Revenue, expenses, net profit, cash position, and what's outstanding — computed fresh from posted entries every time the page loads, not summed from a spreadsheet of invoices.",
  tinted: true,
  images: [dashboardImage],
};

// Section 6 — "The Sri Lanka-specific stakes" (HOMEPAGE-REVAMP.md §2).
const stakesSection: FeatureChapter = {
  id: "stakes",
  eyebrow: "Built for Sri Lanka, not adapted to it",
  title: "Gazette-format invoices. VAT returns. RAMIS-ready.",
  body: "Tax invoices carry the supply date as its own field, separate from the invoice date, per Gazette 2481/22. VAT returns total output tax, input tax, and credit/debit note adjustments by schedule number, straight from posted entries. As real-time e-invoicing rolls out sector by sector, your submission history is already there — not something you'll have to reconstruct later.",
  images: [vatReturnImage],
};

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
        <FeatureSection chapter={understandingSection} />
        <ReviewsSectionPlaceholder />
        <FeatureSection chapter={proofSection} />
        <FeatureSection chapter={stakesSection} />
        <section id="trust" className="bg-mist">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
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
            <div className="mt-8">
              <InvariantsGrid invariants={invariants} compact />
            </div>
          </div>
        </section>
        <HomeClose />
      </main>
      <SiteFooter />
    </>
  );
}

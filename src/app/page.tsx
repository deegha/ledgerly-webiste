import type { Metadata } from "next";
import { FeatureSection } from "@/components/feature-section";
import { Hero } from "@/components/hero";
import { HomeClose } from "@/components/home-close";
import { JsonLd } from "@/components/json-ld";
import { PricingSection } from "@/components/pricing-section";
import { ProblemSection } from "@/components/problem-section";
import { ReviewsSectionPlaceholder } from "@/components/reviews-section-placeholder";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/env";
import { featureChapters, type FeatureChapter } from "@/lib/site-content";

// Reuse existing screenshots + their metadata from the /features content —
// see HOMEPAGE-REVAMP-V2.md §3: these three images are existing site assets,
// not regenerated or re-sourced for the homepage.
const salesChapter = featureChapters.find((chapter) => chapter.id === "sales")!;
const productChapter = featureChapters.find((chapter) => chapter.id === "product")!;
const complianceChapter = featureChapters.find((chapter) => chapter.id === "compliance")!;

const invoiceDetailImage = salesChapter.images.find(
  (image) => image.src === "/images/invoice-detail.jpg",
)!;
const dashboardImage = productChapter.images[0];
const vatReturnImage = complianceChapter.images[0];

// Section 3 — Insight (HOMEPAGE-REVAMP-V2.md §3). Same invoice screenshot the
// previous version used, but framed as proof of traceability rather than as a
// defence against an auditor.
const insightSection: FeatureChapter = {
  id: "insight",
  eyebrow: "Why a spreadsheet can't fix this",
  title: "A number is only trustworthy if you can see where it came from.",
  body: "A spreadsheet total is just a total — it doesn't show you which entry it came from, or whether someone changed a formula last month without telling you. Ledgerly keeps every transaction as a real, traceable record: every sale, every cost, every payment — posted once, correct, and impossible to quietly change. So when you ask \"are we making money,\" the answer isn't a feeling. It's a number you can trace, line by line, back to what actually happened.",
  tinted: true,
  images: [invoiceDetailImage],
};

// Section 4a — One real screen. First of the three trust-cluster parts.
const proofSection: FeatureChapter = {
  id: "proof",
  eyebrow: "See it for yourself",
  title: "One screen. What you actually own, what you're owed, what it cost you to get here.",
  body: "Revenue, expenses, net profit, cash position, and what's outstanding — computed fresh from posted entries every time the page loads, not summed from a spreadsheet of invoices.",
  images: [dashboardImage],
};

// Section 4c — Built for Sri Lanka. Deliberately calmer than the previous
// version's "this is coming for you" urgency framing — see V2 §3.
const localSection: FeatureChapter = {
  id: "sri-lanka",
  eyebrow: "Built for Sri Lanka, not adapted to it",
  title: "Gazette-format invoices. VAT returns. RAMIS-ready.",
  body: "Tax invoices carry the supply date as its own field, separate from the invoice date, per Gazette 2481/22. VAT returns total output tax, input tax, and credit/debit note adjustments by schedule number, straight from posted entries. And when real-time e-invoicing rolls out to your sector, your submission history is already there — not something you'll have to reconstruct later.",
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
        <FeatureSection chapter={insightSection} />
        {/* Trust cluster (V2 §3, Section 4) — three parts, tightened so they read
            as one pass through trust rather than three separate stops. */}
        <FeatureSection chapter={proofSection} compact />
        <ReviewsSectionPlaceholder />
        <FeatureSection chapter={localSection} compact />
        <PricingSection />
        <HomeClose />
      </main>
      <SiteFooter />
    </>
  );
}

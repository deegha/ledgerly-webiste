import type { Metadata } from "next";
import { FeatureSection } from "@/components/feature-section";
import { Hero } from "@/components/hero";
import { HomeClose } from "@/components/home-close";
import { InsightSection } from "@/components/insight-section";
import { JsonLd } from "@/components/json-ld";
import { PricingSection } from "@/components/pricing-section";
import { ProblemSection } from "@/components/problem-section";
import { ProofSection } from "@/components/proof-section";
import { ReviewsSectionPlaceholder } from "@/components/reviews-section-placeholder";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/env";
import { featureChapters, type FeatureChapter } from "@/lib/site-content";

// Reuse existing screenshot + its metadata from the /features content — see
// HOMEPAGE-REVAMP-V2.md §3: this image is an existing site asset, not
// regenerated or re-sourced for the homepage. (Sections 3 and 4a used to
// reuse invoice-detail.jpg and dashboard.jpg here too; both are now native
// diagrams instead — see InsightSection, ProofSection, and §6.)
const complianceChapter = featureChapters.find((chapter) => chapter.id === "compliance")!;

const vatReturnImage = complianceChapter.images[0];

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
        <InsightSection />
        {/* Trust cluster (V2 §3, Section 4) — three parts, tightened so they read
            as one pass through trust rather than three separate stops. */}
        <ProofSection />
        <ReviewsSectionPlaceholder />
        <FeatureSection chapter={localSection} compact />
        <PricingSection />
        <HomeClose />
      </main>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LedgerTexture } from "@/components/ledger-texture";
import { GetStartedForm } from "@/components/get-started-form";
import { siteUrl } from "@/lib/env";

const title = "Get started";
const description = "Tell us about your organization and we'll set you up with an onboarding link.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/get-started` },
  openGraph: { title, description, url: `${siteUrl}/get-started` },
  twitter: { title, description },
};

export default function GetStartedPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-rule relative overflow-hidden border-b">
          <LedgerTexture opacity={0.4} />
          <div className="relative mx-auto max-w-xl px-6 py-20 md:py-28">
            <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
              Get started
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl">Let&apos;s set up your ledger.</h1>
            <p className="text-ink-soft mt-5 text-lg leading-relaxed">
              Tell us a bit about your organization. We&apos;ll follow up with an onboarding link to
              create your account.
            </p>

            <div className="mt-10">
              <GetStartedForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

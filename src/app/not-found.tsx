import type { Metadata } from "next";
import Link from "next/link";
import { LedgerTexture } from "@/components/ledger-texture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-rule relative overflow-hidden border-b">
          <LedgerTexture />
          <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
            <span className="text-gold font-mono text-xs font-semibold tracking-[0.14em] uppercase">
              Error 404
            </span>
            <h1 className="font-display mt-4 text-5xl leading-[1.02] font-semibold sm:text-6xl">
              This page isn&apos;t in the ledger<span className="text-brand">.</span>
            </h1>
            <p className="text-ink-soft mx-auto mt-6 max-w-xl text-lg leading-relaxed">
              Every number on every screen traces back to a journal line — this URL doesn&apos;t
              trace back to anything.
            </p>

            <div className="border-rule-strong bg-paper-raised mx-auto mt-10 max-w-md overflow-hidden rounded-[10px] border text-left shadow-lg">
              <div className="border-rule bg-mist-strong flex items-center justify-between border-b px-4 py-2.5">
                <span className="text-ink-faint font-mono text-[0.68rem] tracking-[0.08em] uppercase">
                  Journal entry — unposted
                </span>
                <span className="bg-gold-soft text-gold rounded-full px-2 py-0.5 font-mono text-[0.65rem]">
                  flagged
                </span>
              </div>
              <div className="px-4 py-4">
                <div className="flex items-center justify-between py-2 text-sm">
                  <span className="text-ink">Dr — the page you requested</span>
                  <span className="tabular text-ink font-mono">404.00</span>
                </div>
                <div className="border-rule flex items-center justify-between border-t py-2 text-sm">
                  <span className="text-ink-soft">Cr — pages that actually exist</span>
                  <span className="tabular text-ink-soft font-mono">0.00</span>
                </div>
                <div className="border-rule mt-2 flex items-center justify-between border-t pt-3 text-sm font-semibold">
                  <span className="text-gold">Out of balance</span>
                  <span className="tabular text-gold font-mono">404.00</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="bg-brand rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
              >
                Back to home
              </Link>
              <Link
                href="/help"
                className="border-rule-strong text-ink hover:bg-mist rounded-md border px-6 py-3 text-sm font-medium transition-colors"
              >
                Visit help centre
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

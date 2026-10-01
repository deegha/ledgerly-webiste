"use client";

import { useEffect, useState } from "react";
import { CtaLink } from "@/components/cta-link";
import { trackEvent } from "@/lib/analytics";
import { LedgerTexture } from "@/components/ledger-texture";

const TARGET = 4210875.6;

function formatLkr(n: number) {
  return `LKR ${n.toLocaleString("en-LK", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function Hero() {
  const [value, setValue] = useState(0);
  const [balanced, setBalanced] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const raf = requestAnimationFrame(() => {
        setValue(TARGET);
        setBalanced(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    let start: number | null = null;
    const duration = 1400;
    let raf = 0;

    function step(ts: number) {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(TARGET * eased);
      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setValue(TARGET);
        setBalanced(true);
      }
    }

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, 400);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="border-rule relative overflow-hidden border-b">
      <LedgerTexture />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:items-start lg:gap-16">
          <div>
            <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
              For businesses that outgrew the exercise book — or the spreadsheet
            </span>
            <h1 className="font-display mt-4 max-w-[18ch] text-4xl leading-[1.08] font-semibold sm:text-5xl md:text-6xl">
              Know your numbers. Not just remember them.
            </h1>
            <p className="text-ink-soft mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
              Whether it&apos;s still in your head, in an inherited notebook, or spread across a
              dozen tabs your accountant fights every month — at some point, &quot;roughly, I
              think&quot; stops being good enough. Ledgerly is bookkeeping that keeps up with a
              business that&apos;s actually growing.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CtaLink
                location="hero"
                href="/get-started"
                className="bg-brand rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
              >
                Get started
              </CtaLink>
              <a
                href="#insight"
                onClick={() =>
                  trackEvent("cta_click", { cta: "see_how_it_works", location: "hero" })
                }
                className="border-rule-strong text-ink hover:bg-mist rounded-md border px-6 py-3 text-sm font-medium transition-colors"
              >
                See how it works
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3 font-mono text-sm">
              <span className="text-ink font-semibold">{formatLkr(value)}</span>
              <span className="text-ink-faint">debits</span>
              <span className="text-rule-strong">—</span>
              <span className="text-ink font-semibold">{formatLkr(value)}</span>
              <span className="text-ink-faint">credits</span>
              <span
                className={`bg-balance-soft rounded-full px-2.5 py-1 text-xs text-balance transition-opacity duration-500 ${
                  balanced ? "opacity-100" : "opacity-0"
                }`}
              >
                ✓ balanced
              </span>
            </div>
          </div>

          {/*
            EXPERIMENTAL — not in HOMEPAGE-REVAMP-V2.md §3 (Hero spec says
            typographic-only). Prototype requested after the Section 2 diagram
            landed well: same native, token-built approach, no image asset.
            Reuses the exact figures shown later in Section 4a's real dashboard
            screenshot, so the hero's "known number" card and the actual product
            screenshot agree with each other.
          */}
          <div className="border-rule-strong bg-paper-raised mx-auto mt-14 w-full max-w-xs rounded-[10px] border p-6 shadow-lg lg:mx-0 lg:mt-0">
            <div className="flex items-center justify-between">
              <p className="text-ink-faint font-mono text-[0.65rem] tracking-wide uppercase">
                This month
              </p>
              <span className="bg-balance-soft inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[0.65rem] text-balance">
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8.5L6.5 12L13 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Up to date
              </span>
            </div>

            <dl className="border-rule mt-4 flex flex-col gap-3 border-t pt-4">
              <div className="flex items-center justify-between text-sm">
                <dt className="text-ink-soft">Revenue</dt>
                <dd className="text-ink tabular font-mono">LKR 102,500.00</dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-ink-soft">Expenses</dt>
                <dd className="text-ink tabular font-mono">− LKR 60,452.65</dd>
              </div>
            </dl>

            <div className="border-rule mt-4 flex items-center justify-between border-t pt-4">
              <p className="text-ink font-medium">Net profit</p>
              <p className="text-ink tabular font-mono text-xl font-semibold">LKR 42,047.35</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

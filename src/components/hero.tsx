"use client";

import { useEffect, useState } from "react";
import { LedgerTexture } from "@/components/ledger-texture";
import { StatRow } from "@/components/stat-row";
import { heroStats } from "@/lib/site-content";
import { onboardingUrl } from "@/lib/env";

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
        <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
          Double-entry bookkeeping, built for Sri Lanka
        </span>
        <h1 className="font-display mt-4 text-5xl leading-[1.02] font-semibold sm:text-6xl md:text-7xl">
          Ledgerly<span className="text-brand">.</span>lk
        </h1>
        <p className="text-ink-soft mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
          A general ledger with documents that post into it — not an invoicing app with reports
          bolted on. Every number on every screen traces back to a journal line.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={onboardingUrl}
            className="bg-brand rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Get started
          </a>
          <a
            href="#product"
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

        <div className="border-rule mt-14 border-t pt-10">
          <StatRow stats={heroStats} />
        </div>
      </div>
    </section>
  );
}

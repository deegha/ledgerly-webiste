import { CtaLink } from "@/components/cta-link";

// ============================================================================
// PRICING TERMS — confirmed with the founder 2026-09-25. See HOMEPAGE-REVAMP.md
// §2 (Section 8) for the full note. These are billing facts, not copywriting —
// don't loosen the wording without re-confirming the terms still hold:
//
//   - "Valid until December 2026" gates SIGNUP, not billing. Start the
//     subscription (trial) before December 2026 and LKR 2,500/month is
//     locked in for as long as the account stays subscribed, even after
//     that date passes.
//   - Signups on/after January 2027 pay the regular LKR 3,000/month — not
//     stated on the page yet, since that isn't live.
//   - The 1-month trial is unconditional: no charge at all for the first
//     month, then LKR 2,500/month billing begins automatically.
// ============================================================================

const INCLUSIONS = [
  "Every feature Ledgerly has, and every one it ships next",
  "1 month free before billing starts",
  "LKR 2,500/month, locked in for as long as you stay subscribed",
  "No add-ons, no tiers, no per-feature upsells",
];

export function PricingSection() {
  return (
    <section id="pricing" className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
          Pricing
        </span>
        <div className="bg-brand mt-4 mb-5 h-[3px] w-11 rounded-full" />
        <h2 className="max-w-[22ch] text-3xl sm:text-4xl">
          One plan. Every feature, now and later.
        </h2>
        <p className="text-ink-soft mt-4 max-w-2xl text-lg leading-relaxed">
          One month free, then LKR 2,500 a month — a limited-time rate for anyone who starts before
          December 2026 (regularly LKR 3,000). One subscription covers everything Ledgerly does
          today and everything it does next, with no add-ons, no tiers, and no per-feature upsells.
        </p>

        <div className="border-rule-strong bg-paper-raised mx-auto mt-10 max-w-md rounded-[10px] border p-8 shadow-sm">
          <span className="bg-brand-soft text-brand-ink inline-block rounded-full px-3 py-1 font-mono text-xs font-medium">
            Limited-time — locked in if you start before Dec 2026
          </span>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-ink tabular font-mono text-4xl font-semibold tracking-tight sm:text-5xl">
              LKR 2,500
            </span>
            <span className="text-ink-faint text-sm">/month</span>
          </div>
          <p className="text-ink-faint mt-1.5 text-sm">
            <span className="line-through">LKR 3,000/month</span> regular price
          </p>
          <p className="text-ink-soft mt-3 text-sm font-medium">
            First month free — no charge until month 2
          </p>

          <ul className="border-rule mt-6 flex flex-col gap-3 border-t pt-6">
            {INCLUSIONS.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5 shrink-0 text-balance"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5L6.5 12L13 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-ink-soft leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <CtaLink
            location="pricing"
            href="/get-started"
            className="bg-brand mt-8 block w-full rounded-md px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Get started
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

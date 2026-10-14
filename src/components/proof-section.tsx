const STATS = [
  { label: "Revenue", value: "LKR 102,500.00" },
  { label: "Expenses", value: "LKR 60,452.65" },
  { label: "Net profit", value: "LKR 42,047.35" },
  { label: "Cash position", value: "LKR 10,300.00" },
  { label: "AR outstanding", value: "LKR 71,000.00" },
  { label: "AP outstanding", value: "LKR 22,000.00" },
];

// Illustrative bar heights only (percent of the chart's height) — not real
// data, just a shape that echoes the real dashboard.jpg screenshot this
// replaced: mostly flat, then a sharp step up in the most recent period.
const TREND_BARS = [
  { income: 5, expense: 4 },
  { income: 4, expense: 5 },
  { income: 6, expense: 4 },
  { income: 5, expense: 7 },
  { income: 9, expense: 12 },
  { income: 92, expense: 63 },
];

const AGEING_BUCKETS = [
  { label: "Current", height: 90 },
  { label: "1-30", height: 3 },
  { label: "31-60", height: 8 },
  { label: "61-90", height: 2 },
  { label: "90+", height: 0 },
];

const ATTENTION_ITEMS = ["1 invoice overdue", "1 stock movement posted at negative stock"];

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper-raised p-4 sm:p-5">
      <p className="text-ink-faint font-mono text-[0.62rem] tracking-wide uppercase sm:text-[0.65rem]">
        {label}
      </p>
      <p className="text-ink tabular mt-1.5 font-mono text-base font-semibold sm:text-lg">
        {value}
      </p>
    </div>
  );
}

function LegendDot({ className }: { className: string }) {
  return <span className={`inline-block size-2 rounded-sm ${className}`} aria-hidden="true" />;
}

export function ProofSection() {
  return (
    <section id="proof" className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-[62ch]">
          <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
            See it for yourself
          </span>
          <div className="bg-brand mt-4 mb-5 h-[3px] w-11 rounded-full" />
          <h2 className="text-2xl sm:text-3xl">
            One screen. What you actually own, what you&apos;re owed, what it cost you to get here.
          </h2>
          <p className="text-ink-soft mt-4 text-base leading-relaxed">
            Revenue, expenses, net profit, cash position, and what&apos;s outstanding — computed
            fresh from posted entries every time the page loads, not summed from a spreadsheet of
            invoices.
          </p>
        </div>

        {/*
          Built from the site's own tokens, same approach as Sections 2 and 3
          — not a screenshot. This replaced the real dashboard.jpg screenshot
          previously reused here (see HOMEPAGE-REVAMP-V2.md §6): that
          screenshot was low-resolution once scaled into this layout, and a
          static image can't show what the headline actually claims — that
          these figures are live and recomputed, not stale. This version
          covers the same ground the real dashboard did (all six stat tiles,
          both charts, the "needs attention" list) and reflows at each
          breakpoint instead of shrinking a fixed image: 2-column stats on
          mobile, 3-column on tablet, a single row of 6 on desktop; the two
          charts stack on narrow screens and sit side by side from `lg:` up.
          Every figure is the real one from the dashboard.jpg screenshot this
          replaced, continuing the same thread as the hero's card and Section
          3's diagram.
        */}
        <div className="mt-10 w-full">
          <div className="border-rule-strong bg-paper-raised overflow-hidden rounded-[10px] border shadow-lg">
            <div className="border-rule flex flex-wrap items-center justify-between gap-2 border-b px-5 py-4">
              <div>
                <p className="text-ink text-sm font-semibold">Dashboard</p>
                <p className="text-ink-faint text-xs">Ledger position and recent activity</p>
              </div>
              <span className="bg-balance-soft inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs text-balance">
                <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
                  <circle cx="4" cy="4" r="4" fill="currentColor" />
                </svg>
                Always current
              </span>
            </div>

            <div className="bg-rule grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6">
              {STATS.map((stat) => (
                <StatTile key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>

            <div className="border-rule grid grid-cols-1 gap-5 border-t p-5 lg:grid-cols-2">
              <div className="border-rule rounded-lg border p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-ink text-sm font-medium">Income vs expenses</p>
                  <div className="text-ink-faint flex items-center gap-3 font-mono text-[0.65rem]">
                    <span className="flex items-center gap-1">
                      <LegendDot className="bg-brand" />
                      Income
                    </span>
                    <span className="flex items-center gap-1">
                      <LegendDot className="bg-gold" />
                      Expenses
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex h-20 items-end gap-2">
                  {TREND_BARS.map((bar, i) => (
                    <div
                      key={i}
                      className="flex flex-1 items-end justify-center gap-0.5"
                      aria-hidden="true"
                    >
                      <div
                        className="bg-brand w-2 rounded-t-sm"
                        style={{ height: `${Math.max(3, (bar.income / 100) * 72)}px` }}
                      />
                      <div
                        className="bg-gold w-2 rounded-t-sm"
                        style={{ height: `${Math.max(3, (bar.expense / 100) * 72)}px` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-rule rounded-lg border p-4">
                <p className="text-ink text-sm font-medium">AR ageing</p>
                <div className="mt-4 flex h-20 items-end gap-3">
                  {AGEING_BUCKETS.map((bucket) => (
                    <div
                      key={bucket.label}
                      className="flex flex-1 flex-col items-center justify-end gap-1.5"
                    >
                      <div
                        className="bg-brand w-full max-w-6 rounded-t-sm"
                        style={{ height: `${Math.max(2, (bucket.height / 100) * 56)}px` }}
                        aria-hidden="true"
                      />
                      <span className="text-ink-faint font-mono text-[0.6rem]">{bucket.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-rule border-t px-5 py-4">
              <p className="text-ink text-sm font-medium">Needs attention</p>
              <div className="mt-2.5 flex flex-col gap-2">
                {ATTENTION_ITEMS.map((item) => (
                  <div key={item} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-ink-soft">{item}</span>
                    <span className="text-brand-ink shrink-0 text-xs font-medium">Review</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-ink-faint mx-auto mt-3 max-w-md text-center text-xs">
            Every figure recalculated from posted entries — nothing stored, nothing summed by hand.
          </p>
        </div>
      </div>
    </section>
  );
}

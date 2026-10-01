function ScatteredTile({
  label,
  value,
  rotate,
  offset,
  flagged,
}: {
  label: string;
  value: string;
  rotate: string;
  offset: string;
  flagged?: boolean;
}) {
  return (
    <div
      className={`w-36 shrink-0 rounded-lg border p-3 shadow-sm ${offset} ${
        flagged ? "border-rule-strong bg-gold-soft" : "border-rule bg-paper-raised"
      }`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <p
        className={`font-mono text-[0.65rem] tracking-wide uppercase ${
          flagged ? "text-gold" : "text-ink-faint"
        }`}
      >
        {label}
      </p>
      <p className="text-ink tabular mt-1.5 font-mono text-lg font-semibold">{value}</p>
    </div>
  );
}

export function ProblemSection() {
  return (
    <section className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
          The question that&apos;s hard to answer
        </span>
        <div className="bg-brand mt-4 mb-5 h-[3px] w-11 rounded-full" />
        <h2 className="max-w-[26ch] text-3xl sm:text-4xl">
          &ldquo;Are we actually making money on this?&rdquo;
        </h2>
        <p className="text-ink-soft mt-6 max-w-2xl text-lg leading-relaxed">
          It&apos;s the simplest question a business owner can ask — and often the hardest one to
          answer honestly. Not because the business is doing badly, but because the answer is
          scattered: a spreadsheet here, a notebook there, a number your accountant quoted three
          weeks ago that may or may not still be true. By the time you piece it together,
          you&apos;re guessing with more confidence than you should have.
        </p>

        {/*
          Built from the site's own tokens rather than an illustration asset — see
          HOMEPAGE-REVAMP-V2.md §6. A supplied stock illustration was tried and
          rejected (off-palette, generic isometric style that didn't match the
          rest of the page) and removed. This diagram literalises the exact
          three sources named in the copy above (notebook, spreadsheet,
          accountant's quote), each showing a different number, resolving into
          one reconciled figure — echoing the hero's own "✓ balanced" badge.
        */}
        <div className="mt-14 flex flex-col items-center gap-10 sm:flex-row sm:justify-center sm:gap-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ScatteredTile
              label="Notebook"
              value="~40,000"
              rotate="-6deg"
              offset="-translate-y-2"
            />
            <ScatteredTile
              label="Spreadsheet"
              value="42,650.00"
              rotate="5deg"
              offset="translate-y-3"
            />
            <ScatteredTile
              label="Accountant, 3 wks ago"
              value="38,900?"
              rotate="-3deg"
              offset="translate-y-1"
              flagged
            />
          </div>

          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            className="text-ink-faint shrink-0 rotate-90 sm:rotate-0"
            aria-hidden="true"
          >
            <path
              d="M4 16H26M26 16L18 8M26 16L18 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="border-rule-strong bg-paper-raised w-44 shrink-0 rounded-lg border p-5 shadow-lg">
            <p className="text-ink-faint font-mono text-[0.65rem] tracking-wide uppercase">
              Ledgerly
            </p>
            <p className="text-ink tabular mt-2 font-mono text-2xl font-semibold">41,275.60</p>
            <span className="bg-balance-soft mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs text-balance">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8.5L6.5 12L13 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Reconciled
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

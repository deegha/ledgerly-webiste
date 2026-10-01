function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5.5 7V4.8a2.5 2.5 0 0 1 5 0V7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TraceRow({
  kind,
  reference,
  journalRef,
  amount,
}: {
  kind: string;
  reference: string;
  journalRef: string;
  amount: string;
}) {
  return (
    <div className="border-rule flex items-center justify-between gap-4 border-t py-3 first:border-t-0">
      <div className="flex items-center gap-2.5">
        <span className="shrink-0 text-balance">
          <LockIcon />
        </span>
        <div>
          <p className="text-sm">
            <span className="text-ink-faint">{kind} · </span>
            <span className="text-ink font-mono">{reference}</span>
          </p>
          <p className="text-ink-faint mt-0.5 font-mono text-[0.68rem]">{journalRef}</p>
        </div>
      </div>
      <span className="text-ink tabular font-mono text-sm font-medium">{amount}</span>
    </div>
  );
}

export function InsightSection() {
  return (
    <section id="insight" className="border-rule bg-mist border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-[62ch]">
          <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
            Why a spreadsheet can&apos;t fix this
          </span>
          <div className="bg-brand mt-4 mb-5 h-[3px] w-11 rounded-full" />
          <h2 className="text-2xl sm:text-3xl">
            A number is only trustworthy if you can see where it came from.
          </h2>
          <p className="text-ink-soft mt-4 text-base leading-relaxed">
            A spreadsheet total is just a total — it doesn&apos;t show you which entry it came from,
            or whether someone changed a formula last month without telling you. Ledgerly keeps
            every transaction as a real, traceable record: every sale, every cost, every payment —
            posted once, correct, and impossible to quietly change. So when you ask &quot;are we
            making money,&quot; the answer isn&apos;t a feeling. It&apos;s a number you can trace,
            line by line, back to what actually happened.
          </p>
        </div>

        {/*
          Built from the site's own tokens, same approach as the Section 2
          diagram and the hero's "known number" card — not a screenshot. This
          replaced the real invoice-detail.jpg screenshot previously reused
          here (see HOMEPAGE-REVAMP-V2.md §6). The screenshot showed a single
          posted invoice; it couldn't show the thing this section is actually
          about — that one trustworthy number is built from MANY posted
          records. This diagram draws that drill-down directly: one figure at
          the top, the real entries underneath it.

          The invoice reference (INV-2026-000010, JE-2026-000031, LKR
          60,000.00) and the net profit figure (LKR 42,047.35) are the same
          ones used elsewhere on this page (the removed invoice-detail.jpg
          screenshot and the hero's "known number" card, respectively) — so
          this isn't a disconnected mockup, it's the same illustrative
          business reappearing.
        */}
        <div className="mx-auto mt-10 flex max-w-md flex-col items-center">
          <div className="border-rule-strong bg-paper-raised w-full rounded-[10px] border p-5 text-center shadow-lg">
            <p className="text-ink-faint font-mono text-[0.65rem] tracking-wide uppercase">
              Net profit
            </p>
            <p className="text-ink tabular mt-1.5 font-mono text-2xl font-semibold">
              LKR 42,047.35
            </p>
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
              Fully traceable
            </span>
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            className="text-ink-faint my-3 rotate-90"
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

          <div className="border-rule-strong bg-paper-raised w-full rounded-[10px] border p-5 shadow-lg">
            <TraceRow
              kind="Sale"
              reference="INV-2026-000010"
              journalRef="JE-2026-000031"
              amount="LKR 60,000.00"
            />
            <TraceRow
              kind="Cost"
              reference="BILL-2026-000007"
              journalRef="JE-2026-000042"
              amount="LKR 12,500.00"
            />
            <TraceRow
              kind="Payment"
              reference="PMT-2026-000014"
              journalRef="JE-2026-000048"
              amount="LKR 18,000.00"
            />
          </div>
          <p className="text-ink-faint mt-3 text-center text-xs">
            …and every other posted entry behind this number.
          </p>
        </div>
      </div>
    </section>
  );
}

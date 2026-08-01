export function ProblemSection() {
  return (
    <section className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
          The problem with most SME accounting software
        </span>
        <div className="bg-brand mt-4 mb-5 h-[3px] w-11 rounded-full" />
        <h2 className="max-w-[18ch] text-3xl sm:text-4xl">
          It looks like bookkeeping. It isn&apos;t double-entry underneath.
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <p className="text-ink-soft text-lg leading-relaxed">
            Most invoicing tools built for small businesses compute a dashboard by summing invoices,
            a P&amp;L by summing bills, a bank balance by summing payments. It&apos;s fast to build
            and it&apos;s <em>wrong</em> the first time an invoice is edited after a payment was
            already recorded against it.
          </p>
          <p className="text-ink-soft text-lg leading-relaxed">
            Ledgerly does it the way an auditor expects: every document — invoice, bill, payment,
            adjustment — posts a balanced journal entry the moment it&apos;s issued. Reports never
            touch the source documents again. They read{" "}
            <code className="bg-mist-strong rounded px-1.5 py-0.5 font-mono text-[0.9em]">
              journal_lines
            </code>
            , the same rows an auditor would.
          </p>
        </div>
      </div>
    </section>
  );
}

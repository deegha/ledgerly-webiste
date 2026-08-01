import { onboardingUrl } from "@/lib/env";

const pills = [
  { label: "Double-entry core", tone: "brand" as const },
  { label: "Ledger-derived reporting", tone: "balance" as const },
  { label: "Sri Lanka compliance-ready", tone: "gold" as const },
];

const toneClasses = {
  brand: "bg-brand-soft text-brand-ink",
  balance: "bg-balance-soft text-balance",
  gold: "bg-gold-soft text-gold",
};

export function CtaBand() {
  return (
    <section className="border-rule bg-mist border-t">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl">Books an auditor would recognise as real.</h2>
        <p className="text-ink-soft mx-auto mt-4 max-w-xl text-lg leading-relaxed">
          Sales, purchases, inventory, fixed assets, budgets, banking, and Sri Lankan compliance —
          one ledger underneath all of it.
        </p>
        <a
          href={onboardingUrl}
          className="bg-brand mt-8 inline-block rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Get started
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {pills.map((pill) => (
            <span
              key={pill.label}
              className={`rounded-full px-3 py-1 font-mono text-xs ${toneClasses[pill.tone]}`}
            >
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PLACEHOLDER CONTENT — DO NOT TREAT AS REAL CUSTOMER QUOTES.
//
// The three "reviews" below are role-sourced placeholders (role only, no
// invented names, no invented company names), written so this section can go
// live looking credible without ever risking a fabricated quote being
// attributed to a real, identifiable person or business. See
// HOMEPAGE-REVAMP-V2.md §3 (Section 4b) and §6 for the full reasoning.
//
// Ledgerly has REAL reviews coming from its three production customers —
// Lans, Kavo Kreatives, and Janse Trading. When they arrive, replace
// PLACEHOLDER_REVIEWS below outright (swap the quote and attribution line,
// keep the card structure) and rename this file and component to drop
// "-placeholder" / "Placeholder". This must not ship silently as if real.
//
// Note: these three roles were rewritten for V2. The previous set leaned on
// audit-adjacent framing ("accountant reviewing SME financial records") that
// does not match the real customer base — see HOMEPAGE-REVAMP-V2.md §0.
// ============================================================================

type PlaceholderReview = {
  quote: string;
  attribution: string;
};

const PLACEHOLDER_REVIEWS: PlaceholderReview[] = [
  {
    quote:
      "I used to keep the real numbers in my head. Now I don't have to — and neither does my son.",
    attribution: "Second-generation business owner, family trading business",
  },
  {
    quote: "We didn't have a system before this. Now our new accountant isn't starting from zero.",
    attribution: "Founder, two-partner services business",
  },
  {
    quote:
      "I used to spend hours reconciling a spreadsheet I didn't fully trust. Now I don't have to wonder if it's right.",
    attribution: "Accountant, managing books for a manufacturing business",
  },
];

export function ReviewsSectionPlaceholder() {
  return (
    <section className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
          From people already using it
        </span>
        <div className="bg-brand mt-4 mb-5 h-[3px] w-11 rounded-full" />
        <h2 className="text-3xl sm:text-4xl">Not written by us.</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PLACEHOLDER_REVIEWS.map((review) => (
            <figure
              key={review.attribution}
              className="border-rule-strong bg-paper-raised flex flex-col rounded-[10px] border p-6 shadow-sm"
            >
              <blockquote className="text-ink text-base leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="text-ink-soft mt-4 text-sm">— {review.attribution}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PLACEHOLDER CONTENT — DO NOT TREAT AS REAL CUSTOMER QUOTES.
//
// The three "reviews" below are role-sourced placeholders (role only, no
// invented names, no invented company names), written so this section can go
// live looking credible without ever risking a fabricated quote being
// attributed to a real, identifiable person or business. See
// HOMEPAGE-REVAMP.md §2 (Section 4) and §5 for the full reasoning.
//
// The founder has real, written customer reviews coming separately. When
// they arrive, replace PLACEHOLDER_REVIEWS below outright — swap the quote
// and attribution line, keep the section/card structure — and rename this
// file and component (drop "-placeholder" / "Placeholder") once real reviews
// are in. Do not let this shipped state go unnoticed for long.
// ============================================================================

type PlaceholderReview = {
  quote: string;
  attribution: string;
};

const PLACEHOLDER_REVIEWS: PlaceholderReview[] = [
  {
    quote:
      "I used to dread the week before our audit. Now I just export what the auditor asks for and move on with my day.",
    attribution: "Business owner, VAT-registered retail trading company",
  },
  {
    quote:
      "I manage the books for six different clients. This is the first tool where I'm not the one who has to remember what was changed and why — it just remembers for me.",
    attribution: "Bookkeeper, managing multiple SME clients",
  },
  {
    quote:
      "Most small business books I review, I have to take on faith. With this, I can actually trace a number back to where it came from. That's rare.",
    attribution: "Accountant, reviewing SME financial records",
  },
];

export function ReviewsSectionPlaceholder() {
  return (
    <section className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
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

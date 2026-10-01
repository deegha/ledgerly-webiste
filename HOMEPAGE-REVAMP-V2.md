# HOMEPAGE-REVAMP-V2.md — Ledgerly.lk Home Page Redesign

**Status:** Built. All sections live on `/`. Section 2's illustration went through three states —
placeholder, then a supplied stock illustration that was rejected as off-palette and removed,
then a native HTML/CSS diagram built from the site's own tokens — see §6. Section 3's
`invoice-detail.jpg` screenshot was later swapped for a native diagram of the same kind, for the
same reason (see §6). The hero also carries an experimental native-diagram card beside its copy,
outside this spec — see the note at the end of §6. One thing remains deliberately outstanding:
Section 4b's reviews are placeholders pending the real Lans / Kavo Kreatives / Janse Trading
quotes. One addition beyond this spec: a Pricing section sits between Section 4c and Section 5 —
see the note at the end of §6.
**Supersedes:** `HOMEPAGE-REVAMP.md` in full. That version was built around an assumed customer
profile — "sells on credit, VAT-registered, gets audited" — that turned out not to match any
real Ledgerly customer. This version is built from the three actual production customers
instead. If `HOMEPAGE-REVAMP.md` still exists in the repo, it should be treated as historical
only; do not merge or partially apply it.
**Scope:** The home route (`/`) only. Every other route — `/features`, `/blog`, `/guide`,
`/help`, `/get-started`, the footer, the nav — stays exactly as it is.

---

## 0. Why the previous version was wrong, and what changed

The first pass at this homepage assumed the ideal customer was anxious about a statutory audit —
"your books look fine, can they prove it," an invoice getting silently edited and an auditor
catching it three months later. That framing was invented, not researched. When checked against
Ledgerly's three real production customers, none of it held up:

- **Lans** (`lans.lk`) — a family-run clothing manufacturer and D2C retailer, ~Rs 3M/month
  revenue, with in-house manufacturing in a basement factory. They already have an accountant —
  the accountant is stuck doing the books in Excel and it can't keep up with a manufacturing
  business selling on multiple payment plans (Koko, MintPay) with variant-level products.
- **Kavo Kreatives** — a two-partner digital marketing agency, ~Rs 15M/year, handling both Sri
  Lankan and offshore client accounts. No accounting system at all yet — they're in the process
  of hiring an accountant, and are still on Excel in the meantime.
- **Janse Trading** — a cash-heavy coconut trading business (buys from estates, sells coconuts
  to sellers and shells to broom-manufacturing factories), ~Rs 1M/month. The son inherited the
  business from his father, who ran it entirely from memory and a handwritten exercise book. The
  son is accounting-literate and needed a real system specifically to get the business out of his
  father's head and onto something legible.

None of these three are worried about a statutory audit. Two are Pvt Ltd, so a chartered
accountant reviews their books at tax time — but the IRD has never audited any of them, and that
was never the trigger for any of them adopting Ledgerly.

**The actual shared thread across all three:** each business outgrew whatever was holding its
numbers together — one person's memory, an informal notebook, or a spreadsheet even a competent
accountant can't keep pace with — and the owner (or the accountant/bookkeeper they brought in)
needed a real system to make the business legible again. That's a confident, forward-looking
moment, not a fearful one. The homepage should sound like that.

**The hero voice is the business owner, not an accountant or an auditor** — someone like Janse's
owner, describing his own business better than any spreadsheet ever could.

---

## 1. Design constraints — inherited, not decided here

Identical to the previous version: colour, type, spacing, and component styles are unchanged.
Use exactly what's already live — `#4338ca` indigo as the sole accent, the same card/button/link
treatment already on `/features`. No new design tokens, fonts, or visual system. Nav, footer, and
`/get-started` are unchanged and unrebuilt.

---

## 2. The funnel this page is built around

Five jobs, mapped onto seven sections. Every section exists to do exactly one of these — if a
section doesn't clearly serve one job, it doesn't belong on the homepage (it likely belongs on
`/features` instead).

1. **Catch attention + name the problem** — Hero
2. **Make the problem concrete** — Problem
3. **Educate — teach the one idea that reframes everything** — Insight
4. **Build trust** — Proof screen, Reviews, Local relevance (one cluster, three parts)
5. **Convert** — Close

---

## 3. Section-by-section specification

### Section 1 — Hero

**Job:** catch attention and name the problem in the same breath.

**Eyebrow:** For businesses that outgrew the exercise book — or the spreadsheet

**Headline:** Know your numbers. Not just remember them.

**Subhead:** Whether it's still in your head, in an inherited notebook, or spread across a dozen
tabs your accountant fights every month — at some point, "roughly, I think" stops being good
enough. Ledgerly is bookkeeping that keeps up with a business that's actually growing.

**Primary button:** Get started → `/get-started`
**Secondary link:** See how it works → anchor-scrolls to Section 3

**Image:** none beyond what's already there. **Keep the existing live "LKR 0.00 debits — LKR
0.00 credits — balanced" widget from the current hero, reused as-is.**

---

### Section 2 — Problem

**Job:** make the problem concrete through the moment of _not knowing_, not through fear of
being caught. No button in this section.

**Eyebrow:** The question that's hard to answer

**Headline:** "Are we actually making money on this?"

**Body:** It's the simplest question a business owner can ask — and often the hardest one to
answer honestly. Not because the business is doing badly, but because the answer is scattered: a
spreadsheet here, a notebook there, a number your accountant quoted three weeks ago that may or
may not still be true. By the time you piece it together, you're guessing with more confidence
than you should have.

**Image:** **new illustration needed, concept changed from the previous version.** The old
"edited invoice vs locked invoice" concept assumed an audit-fear narrative that no longer applies
and should not be reused. The new concept should visualise _scattered numbers becoming one clear
number_ — for example, a left panel showing a loose scatter of a notebook page, a spreadsheet
tab, and a sticky note, each with a different, slightly conflicting number on it; a right panel
showing those resolving into one clean, single figure. No custom illustration assets exist for
this yet. If none are supplied when this task starts, build the section with a clearly labelled
placeholder block (not a broken image tag) and flag it in the summary — do not block other
sections on it.

---

### Section 3 — Insight

**Job:** educate. Teach the one idea that makes the product the obvious conclusion rather than a
pitch: a number is only trustworthy if you can see where it came from.

**Eyebrow:** Why a spreadsheet can't fix this

**Headline:** A number is only trustworthy if you can see where it came from.

**Body:** A spreadsheet total is just a total — it doesn't show you which entry it came from, or
whether someone changed a formula last month without telling you. Ledgerly keeps every
transaction as a real, traceable record: every sale, every cost, every payment — posted once,
correct, and impossible to quietly change. So when you ask "are we making money," the answer
isn't a feeling. It's a number you can trace, line by line, back to what actually happened.

**Image:** reuse the **existing** `invoice-detail.jpg` screenshot already on the site (the
posted/locked invoice view). This is now framed as proof of _traceability_, not as a defence
against an auditor — same asset, different supporting copy than the previous version used.

---

### Section 4 — Trust cluster

This is one grouped section with three parts, replacing what were three separate sections in the
previous version. Group them visually close together — the point is to move through trust
quickly, not linger.

**4a. One real screen**
Eyebrow: See it for yourself
Headline: One screen. What you actually own, what you're owed, what it cost you to get here.
Image: reuse the **existing** `dashboard.jpg` screenshot already on the site.

**4b. Reviews**
Eyebrow: From people already using it
Headline: Not written by us.

Three placeholder cards, plain text, no star ratings, no logos, no photos — identical handling
rules to the previous version (see §4 warning below). **The roles have changed from the previous
version** — the old set leaned on audit-adjacent framing ("accountant reviewing SME financial
records") that doesn't match the real customer base. Use these three instead:

> "I used to keep the real numbers in my head. Now I don't have to — and neither does my son."
> — Second-generation business owner, family trading business

> "We didn't have a system before this. Now our new accountant isn't starting from zero."
> — Founder, two-partner services business

> "I used to spend hours reconciling a spreadsheet I didn't fully trust. Now I don't have to
> wonder if it's right."
> — Accountant, managing books for a manufacturing business

**⚠ THESE ARE PLACEHOLDERS.** Same handling as before: generic role-only sourcing, no invented
names or company names, must be swapped for real customer reviews (Ledgerly has real ones coming
from Lans, Kavo Kreatives, and Janse Trading) before this is considered done. Flag prominently in
the PR/commit — this must not ship silently as if real.

**4c. Built for Sri Lanka**
Eyebrow: Built for Sri Lanka, not adapted to it
Headline: Gazette-format invoices. VAT returns. RAMIS-ready.
Body: Tax invoices carry the supply date as its own field, separate from the invoice date, per
Gazette 2481/22. VAT returns total output tax, input tax, and credit/debit note adjustments by
schedule number, straight from posted entries. And when real-time e-invoicing rolls out to your
sector, your submission history is already there — not something you'll have to reconstruct
later.

**Note the tone shift from the previous version:** this used to be framed as urgency ("this is
coming for you"). None of Ledgerly's three real customers are in a regulatory-urgency mindset, so
this is now framed calmly, as one more thing that's already handled — not a warning.

Image: reuse the **existing** `vat-return.jpg` screenshot already on the site.

---

### Section 5 — Close

**Job:** convert. Two paths for two visitor states, unchanged in structure from the previous
version.

**Headline:** Stop guessing. Start knowing.

**Body:** Start free, or talk to us first if you'd rather ask a question before you do.

**Primary button:** Get started → `/get-started` (existing, unchanged, do not rebuild)
**Secondary link:** Talk to us → mailto or existing contact mechanism; do not build a new contact
backend as part of this task unless explicitly asked.

---

## 4. What was dropped from the previous version, and why

- **The full "ten rules the database enforces" grid is dropped from the homepage entirely** (it
  was Section 7 in the previous version). It's genuinely good content, but it's a depth-oriented,
  audit-literacy argument, and it doesn't serve any of the five funnel jobs above for this
  customer profile. It belongs on `/features`, where it can stay in full.
- **The audit-anxiety framing is dropped throughout** — no more "the auditor notices," no
  "prove it," no urgency-based compliance language. Replace with the calmer, competence-oriented
  tone established in Section 1's rationale.
- **Section count drops from eight to seven** (five conceptual jobs, with the trust cluster
  holding three sub-parts) — the page should read as faster to get through, not just
  reorganised.

## 5. What NOT to do

- Do not touch `/features`, `/blog`, `/guide`, `/help`, `/get-started`, the nav, or the footer.
- Do not introduce new design tokens, colours, or fonts.
- Do not treat the Section 4b reviews as real quotes, attribute them to real people or companies,
  or let them ship without being flagged as placeholders.
- Do not reuse the old "edited vs locked invoice" illustration concept or copy anywhere — it
  belonged to the superseded audit-fear framing.
- Do not carry over the ten-rule grid onto the homepage — it stays on `/features` only.
- Do not build a full contact-form backend unless explicitly asked.

---

## 6. Build checklist

- [x] Section 1 — Hero: new headline/subhead, existing live balance widget retained
      (`src/components/hero.tsx`; "See how it works" now anchors to `#insight`)
- [x] Section 2 — Problem: new copy, illustration built as a native diagram (not an image asset)
      in `src/components/problem-section.tsx`. History: (1) shipped as a labelled placeholder
      block at first build; (2) a supplied stock illustration
      (`section-2-scattered-to-clear.jpg`, 2026-10-01) was tried, then rejected the same day as
      off-palette and generic against the rest of the page, and deleted — no illustration asset
      remains in `public/images/` for this section; (3) rebuilt as plain HTML/CSS using the
      site's own tokens, the same approach that worked for the original before/after invoice
      diagram this section had in the prior (superseded) version of the page. The diagram
      literalises the copy's own three sources — a "Notebook" tile, a "Spreadsheet" tile, and an
      "Accountant, 3 wks ago" tile (flagged gold, the token's established "flagged/uncertain"
      meaning) — resolving through an arrow into one "Ledgerly" card with a teal "Reconciled"
      badge, echoing the hero's own "✓ balanced" widget. The old edited/locked concept was
      deleted outright at the start of this task, not adapted.
- [x] Section 3 — Insight: new copy (`id="insight"`). Illustration later swapped out —
      see the note below.
- [x] Section 4a — Proof screen: new copy, existing `dashboard.jpg` reused
- [x] Section 4b — Reviews: three new placeholder cards built, **prominently flagged** as needing
      replacement with real Lans / Kavo Kreatives / Janse Trading reviews (component and const are
      literally named `*Placeholder*` so they can't be missed in a diff or grep — see
      `src/components/reviews-section-placeholder.tsx`)
- [x] Section 4c — Sri Lanka: new calmer-toned copy, existing `vat-return.jpg` reused
- [x] Section 5 — Close: new headline, existing `/get-started` link, contact/mailto link
- [x] Confirm the ten-rule trust grid does NOT appear on the homepage — see the note below
- [x] Confirm no other route, component style, or shared layout element changed
- [x] Confirm this version fully replaces `HOMEPAGE-REVAMP.md`'s content on the live page — no
      partial mix of old audit-framed copy and new copy

**Trust cluster grouping:** 4a/4b/4c are three sibling `<section>`s given a tighter vertical
rhythm (`py-16 md:py-20` instead of `py-20 md:py-28`) so they read as one pass through trust.
This came from a new optional `compact` prop on `FeatureSection`; the prop is additive and
defaults to the existing spacing, so `/features` renders byte-identically.

**Where the ten-rule grid went:** removed from `/` as §4 requires. §4 says it "belongs on
`/features`, where it can stay in full" — but it was never on `/features`; it was homepage-only,
and §5 forbids touching `/features`. So it now renders **nowhere on the site**.
`src/components/invariants-grid.tsx` and the `invariants` data in `src/lib/site-content.ts` were
left intact (unreferenced) rather than deleted, so a follow-up task can move them to `/features`
without reconstructing the content. That move is out of scope here.

**Pricing section (addition beyond this spec):** a Pricing section sits between Section 4c and
Section 5. It is not mentioned anywhere in this document — §4's "what was dropped" list does not
include it, and §4's "section count drops from eight to seven" matches the _pre-Pricing_ version
of `HOMEPAGE-REVAMP.md`, so this spec appears to have been written without Pricing in view.
Confirmed with the founder (2026-09-27) to keep it. Its copy was never audit-framed, so it needed
no rewrite for V2. Terms live in `src/components/pricing-section.tsx`: LKR 2,500/month (regular
LKR 3,000), rate locked in for signups before December 2026, 1 month free trial.

**Section 3's screenshot was later swapped for a native diagram (2026-10-01):** this spec (§3,
Section 3) called for reusing `invoice-detail.jpg`. After Section 2's native diagram landed well,
the founder asked for the same treatment here, and on reflection the real screenshot was a weaker
fit anyway: it shows one posted invoice, but the section's actual claim is that one trustworthy
number is built from _many_ posted records — a single screenshot can't show that, a drill-down
can. `src/components/insight-section.tsx` replaces the `FeatureSection`+`invoiceDetailImage` usage
with a dedicated component: a "Net profit" card (LKR 42,047.35 — the same figure used in the
hero's card, see below) with an arrow down into three traceable entries (Sale/Cost/Payment, each
with a lock icon and a journal entry reference). The Sale row deliberately reuses the exact
identifiers from the real `invoice-detail.jpg` screenshot it replaced (`INV-2026-000010`,
`JE-2026-000031`, `LKR 60,000.00`) so the illustrative "business" stays the same one across the
page rather than becoming three disconnected mockups. `invoice-detail.jpg` itself is untouched and
still used for real on `/features` (the "sales" feature chapter) — only the homepage's duplicate
reference to it was removed.

**Hero illustration (experimental, outside this spec, 2026-10-01):** §3's Hero spec says the
section should stay "almost entirely typographic." A native-diagram card was prototyped anyway,
beside the hero copy at `lg:` and wider (stacks below on smaller screens) — same token-built
approach as Sections 2 and 3, no image asset. It shows "This month: Revenue / Expenses / Net
profit LKR 42,047.35," reusing the exact figures from the real dashboard screenshot in Section 4a
and the same net-profit figure as Section 3's new diagram, so the hero, Section 3, and Section 4a
all agree with each other. This has **not** been confirmed as a final decision — it's flagged
in-code as experimental in `src/components/hero.tsx`, and the mobile-stacked layout has not been
visually verified (the browser automation available couldn't resize the viewport in this
environment). Treat the Hero spec above as still authoritative until this is explicitly decided
one way or the other.

**Done when:** the homepage reads as a business-owner-to-business-owner conversation about
outgrowing an informal system, not as a compliance warning; every other route is byte-for-byte
unchanged; Section 4b's placeholder status is impossible to miss in review; no trace of the old
audit-anxiety framing (headline, illustration concept, or the ten-rule grid) remains on `/`.

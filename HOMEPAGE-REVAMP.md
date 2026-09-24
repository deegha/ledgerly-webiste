# HOMEPAGE-REVAMP.md — Ledgerly.lk Home Page Redesign

**Status:** Not started
**Scope:** The home route (`/`) only. Every other route — `/features`, `/blog`, `/guide`,
`/help`, `/get-started`, the footer, the nav — stays exactly as it is. Do not touch shared
layout, shared components' visual style, or any other page's content.
**Companion:** none of the other product docs (PHASE2.md, SCHEMA.md, SCREENS.md, AGENTS.md)
govern this — this document is self-contained for the marketing site.

---

## 0. Why this exists

The current homepage and `/features` are, content-wise, almost the same page: same headline
pattern, same ten feature blocks, same screenshots, in the same order. That's the actual
diagnosis behind "the homepage is too much to read" — it isn't that the words are bad, it's
that the homepage has never had a different job from Features.

**Features' job:** prove the product in depth, for a visitor already convinced enough to check
details.
**Homepage's job:** make a visitor who has never thought about double-entry bookkeeping feel
understood, then earn the right to show one proof point, then get them to act.

Every decision below follows from keeping those two jobs separate. The homepage should end up
shorter than Features, not the same length with nicer pictures.

---

## 1. Design constraints — inherited, not decided here

**Colour, type, spacing, component styles:** unchanged. Use exactly what's already live —
`#4338ca` indigo as the sole accent, the same card/button/link treatment already on Features and
the rest of the site. Do not introduce new tokens, new fonts, or a new visual system for this
page. If a component this spec calls for (e.g. a testimonial card) doesn't exist yet, build it
in the same visual language as the existing cards on Features — border, radius, spacing should
match what's already there, not invent a new look.

**Nav, footer, get-started flow:** unchanged. `/get-started` already works — link to it, don't
rebuild it.

**What's allowed to change on this page:** section content, section order, section count, and
the two new illustration images (below). Nothing else on the site.

---

## 2. Section-by-section specification

Eight sections, in this order. Each entry gives: the section's one job, the actual copy to use,
and what image (if any) goes with it.

### Section 1 — Hero

**Job:** name the actual visitor and the actual problem, in their language, not the product's.

**Eyebrow:** Built for businesses that get audited

**Headline:** Your books look fine. Can they prove it?

**Subhead:** If you sell on credit, file VAT, or answer to an auditor every year, "it balances
in Excel" isn't the same as "it's correct." Ledgerly is bookkeeping software that can't quietly
go wrong — because nothing in it can be quietly edited.

**Primary button:** Get started → `/get-started`
**Secondary link:** See how it works → anchor-scrolls to Section 3

**Image:** none. Keep this section almost entirely typographic. **Keep the existing live
"LKR 0.00 debits — LKR 0.00 credits — balanced" widget from the current hero** — reuse it as-is,
don't rebuild it, it doesn't need explanation and costs nothing to carry over.

---

### Section 2 — The moment this goes wrong

**Job:** make the abstract problem concrete and slightly uncomfortable, before any resolution is
offered. No button in this section — its job is discomfort, not conversion.

**Eyebrow:** How this usually happens

**Headline:** An invoice gets edited. Nobody notices. Then the auditor does.

**Body:** Someone corrects a mistake on an invoice that's already been paid against. It feels
harmless — the total's still right. Three months later, your accountant can't explain why the
numbers in two reports don't agree, and now every figure you've filed is in question. This isn't
a hypothetical. It's the single most common reason small business books don't hold up.

**Image:** **`section-2-edited-vs-locked.png`** — the two-panel illustration (pasted in by the
person running this task; see §3 for exact placement and handling if it's not yet supplied).

---

### Section 3 — What actually changes

**Job:** deliver the single mental shift the whole product rests on, in plain language. This is
the one idea a visitor needs to leave with even if they read nothing else.

**Eyebrow:** The one idea worth understanding

**Headline:** Nothing gets edited. It gets corrected — on the record.

**Body:** In Ledgerly, once an invoice, bill, or payment is posted, it's locked. Not by a setting
you have to remember to turn on — by the database itself. A mistake doesn't get quietly fixed;
it gets a credit note, a reversal, a new entry that explains what changed and why. Your books
don't just look right today. They can be checked, line by line, on any day you've ever posted to
them.

**Image:** reuse the **existing** `invoice-detail.jpg` screenshot already on the site (the one
showing the posted/locked banner on a real invoice). Do not create a new image for this section
— this is the one screenshot the homepage keeps, because it's the real proof of the claim just
made in the copy.

---

### Section 4 — What real customers say

**Job:** trust-building from voices other than the founder's. Answers three different unspoken
visitor questions, one per card — deliberately different voices, not three similar quotes.

**Eyebrow:** From people already using it

**Headline:** Not written by us.

Three cards, plain text, no star ratings, no logos, no photos (a stock headshot next to an
anonymous quote reads worse than no photo — don't add one). Same card visual treatment as
existing cards on Features.

**Card 1 — business owner:**

> "I used to dread the week before our audit. Now I just export what the auditor asks for and
> move on with my day."
> — Business owner, VAT-registered retail trading company

**Card 2 — bookkeeper:**

> "I manage the books for six different clients. This is the first tool where I'm not the one who
> has to remember what was changed and why — it just remembers for me."
> — Bookkeeper, managing multiple SME clients

**Card 3 — accountant / audit-adjacent:**

> "Most small business books I review, I have to take on faith. With this, I can actually trace a
> number back to where it came from. That's rare."
> — Accountant, reviewing SME financial records

**⚠ THESE ARE PLACEHOLDERS — DO NOT TREAT AS REAL CUSTOMER QUOTES.** The founder has real,
written reviews from actual customers coming separately. These three are deliberately
generic-sourced (role only, no invented names, no invented company names) so they can go live
looking credible without ever risking a fabricated quote being attributed to a real, identifiable
person or business. **When real reviews arrive, they replace these three outright — swap the
quote and the attribution line, keep the section structure.** Flag this prominently in the PR /
commit message so whoever reviews it knows these need replacing, and do not let this shipped
state go unnoticed for long.

**Image:** none. Reviews should read as reading, not as something to look at — an illustration
here competes with the words for attention.

---

### Section 5 — One proof screenshot

**Job:** having built trust and explained the concept, now actually show the product, once,
briefly. This is deliberately the only "here's our UI" moment on the whole homepage.

**Eyebrow:** See it for yourself

**Headline:** One screen, the whole business.

**Body:** Revenue, expenses, net profit, cash position, and what's outstanding — computed fresh
from posted entries every time the page loads, not summed from a spreadsheet of invoices.

**Image:** reuse the **existing** `dashboard.jpg` screenshot already on the site.

---

### Section 6 — The Sri Lanka-specific stakes

**Job:** name the local regulatory reality as "this is coming for you," not as a feature list.
Framing matters here — this should read as relevant urgency, not a spec sheet.

**Eyebrow:** Built for Sri Lanka, not adapted to it

**Headline:** Gazette-format invoices. VAT returns. RAMIS-ready.

**Body:** Tax invoices carry the supply date as its own field, separate from the invoice date,
per Gazette 2481/22. VAT returns total output tax, input tax, and credit/debit note adjustments
by schedule number, straight from posted entries. As real-time e-invoicing rolls out sector by
sector, your submission history is already there — not something you'll have to reconstruct
later.

**Image:** reuse the **existing** `vat-return.jpg` screenshot already on the site.

---

### Section 7 — Quiet trust signal

**Job:** a fast, scannable pass through the "why this is structurally different" argument, for
the visitor who wants proof but won't read ten paragraphs. Radically compressed compared to how
this appears on Features — a glance, not a read.

**Eyebrow:** What "audited" actually rests on

**Headline:** Ten rules the database enforces — not just the app.

Compress the existing ten-rule grid from the current homepage/Features into a tighter, smaller
presentation than it has today — smaller type, tighter grid, maybe 2 columns × 5 rows instead of
the current full-width cards. The ten rules and their one-line descriptions are unchanged, reuse
them verbatim from the current site content. The point of this section on the homepage is
breadth at a glance, not depth — depth is what Features is for.

**Image:** none.

---

### Section 8 — Close

**Job:** convert. Two paths, for two different visitor states — ready now, versus not ready yet
but not a no either.

**Headline:** See if your books hold up.

**Body:** Start free, or talk to us first if you'd rather ask a question before you do.

**Primary button:** Get started → `/get-started` (existing, unchanged, do not rebuild)
**Secondary link:** Talk to us → simple mailto or contact form; if no contact mechanism exists
yet, a `mailto:` link to the existing site contact address is sufficient for this pass — do not
build a full contact-form backend as part of this task unless explicitly asked.

**Image:** none.

---

## 3. Images

Two new illustrations were generated (Leonardo AI, prompts on file with the founder) and will be
pasted into this conversation as files: `section-2-edited-vs-locked-left.png` (the "most
software" panel — coral background, document with a pencil mid-edit and faint disturbance lines)
and `section-2-edited-vs-locked-right.png` (the "Ledgerly" panel — teal background, undisturbed
document with a padlock and a small attached correction note).

**If both images are supplied in this conversation:** place them side by side as a single
composed section-2 visual — left panel labelled "Most software", right panel labelled
"Ledgerly", with a light divider between them, matching the two-panel comparison structure
described in Section 2's job above. Add the two caption lines beneath each panel:

- Left: "Line quietly edited after it was posted" / "Other totals no longer explain themselves"
- Right: "Invoice stays exactly as it was posted" / "Credit note explains what changed, and why"

**If the images are not supplied, or only one is supplied:** do not block on this. Build
Section 2 with a simple text-only placeholder area sized for where the image will go (labelled
clearly in code as a placeholder, e.g. an HTML comment or a visibly labelled placeholder block —
not a broken image tag), and flag in your summary that the image needs to be dropped in before
this section is complete. Every other section can and should proceed regardless.

All other images used on this page (`invoice-detail.jpg`, `dashboard.jpg`, `vat-return.jpg`) are
**existing site assets already in use on Features — reuse the same files, do not regenerate or
re-source them.**

---

## 4. What NOT to do

- Do not touch `/features`, `/blog`, `/guide`, `/help`, `/get-started`, the nav, or the footer.
- Do not introduce new design tokens, colours, or fonts. Everything here uses what's already
  live on the site.
- Do not treat the Section 4 reviews as real quotes, attribute them to real people or companies,
  or let them ship silently without flagging that they're placeholders.
- Do not rebuild `/get-started` — it already works, link to it.
- Do not build a full contact-form backend unless explicitly asked — a mailto link satisfies
  Section 8 for this pass.
- Do not carry over the current homepage's full ten-feature-block content — that content stays
  on `/features`, where it already lives properly. The homepage's job is narrower than that now.

---

## 5. Build checklist

- [ ] Section 1 — Hero: new headline/subhead copy, existing live balance widget retained
- [ ] Section 2 — Problem: new copy, two-panel image placed (or placeholder + flag, per §3)
- [ ] Section 3 — Resolution: new copy, existing `invoice-detail.jpg` reused
- [ ] Section 4 — Reviews: three placeholder cards built, **prominently flagged as placeholders**
      needing real-review replacement
- [ ] Section 5 — Product proof: new copy, existing `dashboard.jpg` reused
- [ ] Section 6 — Sri Lanka stakes: new copy, existing `vat-return.jpg` reused
- [ ] Section 7 — Trust signal: existing ten-rule content, compressed layout
- [ ] Section 8 — Close: new copy, existing `/get-started` link, new contact/mailto link
- [ ] Confirm no other route, component style, or shared layout element changed
- [ ] Confirm total homepage length is visibly shorter than `/features`, not comparable to it

**Done when:** the homepage reads as a distinct, shorter page with its own arc — problem, meaning,
proof, trust, action — rather than a shorter version of the Features page; every other route is
byte-for-byte unchanged; the Section 4 placeholder status is impossible to miss in review.

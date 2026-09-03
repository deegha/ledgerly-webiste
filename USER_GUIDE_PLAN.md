# Ledgerly.lk User Guide — Build Plan

This is the spec for a new **User Guide** section on the marketing site (`~/projects/Ledgerly`),
sitting alongside the existing Help Centre (`/help`). Read this before writing a single guide
article. It defines what the guide covers, how it's structured, how search works, and the order
to build it in. Nothing gets written until this plan is agreed.

---

## 1. Why this is a separate thing from `/help`

`/help` already exists and does its job well: short, task-focused "how do I…" recipes (issue an
invoice, record a payment, close a period), organized as a card grid, one task per article. Keep
it exactly as it is — it's the fast answer for someone already using the product who's stuck on
one step.

The **User Guide** is a different shape of content for a different moment: someone who hasn't
used Ledgerly yet, or is using it for the first time, and wants to understand _the whole system_
before they touch it — every menu item, every screen, every report, and the bookkeeping logic
underneath. It's read front-to-back or dipped into like a manual, not landed on from a Google
search for one task. Think GitBook/Stripe-docs, not a FAQ.

They stay linked to each other: a User Guide chapter on invoices links out to the matching `/help`
quick-recipe for "issue an invoice," and vice versa. Neither replaces the other.

---

## 2. Principles

1. **Document the real app, not the spec.** Ledgerly the product is built from `PHASE2.md` /
   `SCHEMA.md` / `SCREENS.md` in the `invoicegen` repo, but those are internal build docs, not
   user-facing truth, and a few things they mention were explicitly deferred or never built
   (general ledger with a running balance, customer/supplier statements, WHT summary report —
   see the Reports table in §3.2). Every guide page must be checked against the **actual running screens**, not
   against what the spec says should exist. If a feature isn't live, it doesn't get a guide page
   — or it gets a short "not yet available" note if users are likely to go looking for it.
2. **Mirror the app's own navigation.** The guide's chapter structure follows the left sidebar's
   groups (Accounting, Sales, Purchases, Inventory, Banking, Reports, Settings) in the order they
   appear in the product, plus two chapters the nav doesn't have: **Getting started** and
   **Bookkeeping basics**. A user should be able to look at the sidebar in the app, look at the
   guide's sidebar, and see the same shape.
3. **Explain the ledger, not just the click-path.** This is the one thing a generic invoicing
   tutorial can't give a Sri Lankan bookkeeper: every document-entry article should say, briefly,
   what journal entry posts when you save it. That's the core value of a system built as "a
   general ledger with documents that post into it" rather than "an invoicing app with reports
   bolted on" (`AGENTS.md`) — the guide should teach that mental model, not hide it.
   accountants and auditors are named as this app's actual users; write for that reader, not a
   consumer-app audience.
4. **Every claim is checked against a live screen before publishing.** No describing a field,
   button label, or report column from memory or from the spec docs. Walk the actual screen,
   confirm the label, then write the sentence.
5. **Versioned, not evergreen-by-assumption.** The product is mid-build (Phase 2.13 of 2.13 is
   done as of this writing, but it keeps changing). Each guide page carries a "last verified
   against build" note in frontmatter so a future pass can tell what's stale.

---

## 3. Information architecture

### 3.1 URL and navigation shape

- Base path: **`/guide`** (short, distinct from `/help`, reads as "the manual").
- Layout: persistent left-hand chapter sidebar (unlike `/help`'s card grid) — this is read as a
  book, so it needs a spine. Collapses to a drawer on mobile, same pattern the in-app
  `AppShell`/`Sidebar` already uses in `invoicegen`, so returning users get a visually familiar
  shape.
- Each article gets a right-hand "On this page" anchor nav for its own headings (long articles —
  e.g. Reports — will have several).
- Prev/next chapter links at the bottom of each article for linear reading.
- Breadcrumb: `Guide / <Chapter> / <Article>`.
- Global search box in the guide header (see §4) — also embeddable on `/help` later if it proves
  out.

### 3.2 Chapters and topics

Status column: **Build** = confirmed live in the product today; **Gap** = named in the spec but
not built — do not write a how-to page, only a short note if users would plausibly look for it.

#### Chapter 0 — Getting started

| Topic                                                                                              | Status |
| -------------------------------------------------------------------------------------------------- | ------ |
| What Ledgerly is: a ledger with documents that post into it, not an invoicing app                  | —      |
| Signing up and onboarding: organization profile, base currency, fiscal year (default 1 Apr–31 Mar) | Build  |
| Understanding your dashboard                                                                       | Build  |
| Users, roles, and permissions overview (Owner/Accountant/Bookkeeper/…)                             | Build  |
| Inviting your team (`/settings/team`)                                                              | Build  |
| A first-week checklist: what to set up before you send your first invoice                          | —      |

#### Chapter 1 — Bookkeeping basics (the "why," not just the "how")

Written for a small-business owner with no accounting background, since `AGENTS.md` names both
accountants _and_ business owners as users.

| Topic                                                                   | Status |
| ----------------------------------------------------------------------- | ------ |
| What double-entry bookkeeping is, in plain language                     | —      |
| Debits and credits: why they're not "good" and "bad"                    | —      |
| What a chart of accounts is and why yours is organized the way it is    | —      |
| What a journal entry is, and what "posting" means                       | —      |
| Why a posted entry can't be edited — only reversed                      | —      |
| Accounting periods, and why you "close" one                             | —      |
| What a fiscal year is, and why it doesn't have to start in January      | —      |
| Reading a Trial Balance, a P&L, and a Balance Sheet for the first time  | —      |
| Why every report in Ledgerly ultimately traces back to the same entries | —      |

#### Chapter 2 — Accounting

| Topic                                                                         | Status |
| ----------------------------------------------------------------------------- | ------ |
| Chart of accounts: structure, hierarchy, adding your own accounts             | Build  |
| Journals: what's here, manual journal entries, when you'd need one            | Build  |
| Accounting periods: soft close vs. hard close, reopening, year-end close      | Build  |
| Exchange rates: adding dated rates, how multi-currency documents use them     | Build  |
| Tax codes: VAT/SSCL/WHT codes, rates, output vs. input accounts               | Build  |
| Fixed assets: registering an asset, depreciation schedules, posting, disposal | Build  |
| Budgets: setting an annual budget per account, reading the variance report    | Build  |

#### Chapter 3 — Items

| Topic                                                                           | Status |
| ------------------------------------------------------------------------------- | ------ |
| Adding an item, and choosing Inventory vs. Service                              | Build  |
| Default price, tax code, and income/expense account mapping                     | Build  |
| Valuation method per item: weighted average vs. FIFO                            | Build  |
| How stock movements work (and why there's no editable "quantity on hand" field) | Build  |

#### Chapter 4 — Sales

| Topic                                                                         | Status                                                              |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Customers: adding one, quick-create from an invoice                           | Build                                                               |
| Quotes: creating, sending, converting to an invoice, expiry                   | Build                                                               |
| Creating and issuing an invoice, incl. invoice date vs. supply date           | Build                                                               |
| What happens when you issue an invoice (the posting, immutability, numbering) | Build                                                               |
| Correcting an issued invoice with a credit note (full or partial)             | Build                                                               |
| Recording a customer payment, multi-invoice allocation, unallocated receipts  | Build                                                               |
| Foreign-currency invoices and settlement FX gain/loss                         | Build                                                               |
| Automatic overdue-invoice reminders                                           | Build                                                               |
| Customer statements                                                           | Gap — not built; omit or add a short "not currently available" note |

#### Chapter 5 — Purchases

| Topic                                                                     | Status                            |
| ------------------------------------------------------------------------- | --------------------------------- |
| Suppliers: adding one, TIN, VAT registration status                       | Build                             |
| Recording a bill, and how input VAT recoverability is decided             | Build                             |
| Debit notes against a bill                                                | Build                             |
| Recording a supplier payment, multi-bill allocation, unallocated payments | Build                             |
| Recording a direct expense (no bill)                                      | Build                             |
| Supplier statements                                                       | Gap — same as customer statements |

#### Chapter 5A — Manufacturing (optional module)

Sits between Purchases and Inventory in reading order — you buy materials, you manufacture, you
see the finished stock. Only orgs with the manufacturing entitlement see this module, so the
chapter opens by saying so. Directory: `content/guide/manufacturing/`.

| Topic                                                                            | Status             |
| -------------------------------------------------------------------------------- | ------------------ |
| How manufacturing works: the module, enabling it, the two documents, how it fits | Built (2026-09-03) |
| Bills of materials: components, quantities, wastage, estimated cost, cycle guard | Built (2026-09-03) |
| Production orders: creating, the posting preview, issuing, what posts, void      | Built (2026-09-03) |
| Voiding a production order: draft discard vs. issued reversal, the block         | Built (2026-09-03) |

#### Chapter 6 — Inventory

| Topic                                                    | Status |
| -------------------------------------------------------- | ------ |
| Stock adjustments: adjustment in/out, when you'd use one | Build  |
| Inventory valuation report and its reconciliation banner | Build  |

#### Chapter 7 — Banking

| Topic                                                                            | Status                            |
| -------------------------------------------------------------------------------- | --------------------------------- |
| Linking a bank/cash GL account to real bank details                              | Build                             |
| Importing a bank statement (CSV)                                                 | Build                             |
| Reconciling: the two-pane matcher, what "difference = 0" means                   | Build                             |
| What reconciliation does _not_ cover yet (expenses paid directly, no auto-match) | Build (documenting a known limit) |

#### Chapter 8 — Reports

One article per report: what it shows, how to read it, **what it tells you about your business**,
and where its numbers come from (always: journal lines, never a source-document sum — this is the
one place the guide should say that explicitly, since it's the product's core differentiator).

| Report                                                   | Status                                                                                                                                                                                            |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Trial Balance (as-at-date, pre/post adjustment)          | Build                                                                                                                                                                                             |
| Profit & Loss (period, comparative, budget variance)     | Build                                                                                                                                                                                             |
| Balance Sheet (as-at-date, comparative)                  | Build                                                                                                                                                                                             |
| Cash Flow Statement (indirect method)                    | Build                                                                                                                                                                                             |
| Statement of Changes in Equity                           | Build                                                                                                                                                                                             |
| AR Ageing                                                | Build                                                                                                                                                                                             |
| AP Ageing                                                | Build                                                                                                                                                                                             |
| VAT Return (Schedules 01/04/07) + VAT transaction detail | Build                                                                                                                                                                                             |
| Audit Trail Report                                       | Build                                                                                                                                                                                             |
| Document Sequence Integrity                              | Build                                                                                                                                                                                             |
| Period Close History                                     | Build                                                                                                                                                                                             |
| User Access Report                                       | Build                                                                                                                                                                                             |
| Budget variance                                          | Build                                                                                                                                                                                             |
| General Ledger with running balance per account          | Gap — deferred; the real substitute is drilling from any report figure into filtered Journals, then into the source document. **Document the drill-down path, not a GL page that doesn't exist.** |
| WHT summary                                              | Gap — named in spec, not built                                                                                                                                                                    |
| RAMIS reconciliation report                              | Build (lives under `/settings/compliance`, not `/reports` — note this)                                                                                                                            |

#### Chapter 9 — Compliance (Sri Lanka–specific)

| Topic                                                                              | Status |
| ---------------------------------------------------------------------------------- | ------ |
| The gazette tax invoice format (Gazette 2481/22) and what changes on your invoices | Build  |
| RAMIS submission status and the reconciliation queue                               | Build  |
| Data protection: retention policies, handling an erasure request                   | Build  |

#### Chapter 10 — Settings

| Topic                                                                                | Status |
| ------------------------------------------------------------------------------------ | ------ |
| Organization profile                                                                 | Build  |
| Base currency and currencies                                                         | Build  |
| Fiscal years                                                                         | Build  |
| Document numbering (why numbers are gapless, what a sequence is)                     | Build  |
| Invoice template, incl. logo, footer text, and bank details for payment instructions | Build  |
| Roles and permissions                                                                | Build  |
| Team members and invitations                                                         | Build  |
| Active sessions / security                                                           | Build  |
| Your profile                                                                         | Build  |
| Compliance settings (see Chapter 9)                                                  | Build  |
| Data protection settings (see Chapter 9)                                             | Build  |

---

## 4. Search

The site currently has no search of any kind and a deliberately small dependency footprint
(`gray-matter` + `marked`, no client framework beyond React/Next). Recommendation: keep it that
way — a static, client-side search index, not a hosted search service (no Algolia account, no
backend to run).

**Approach:**

1. At build time, generate one JSON index from every `content/guide/**/*.md` file (and, so one
   search box covers both sections, `content/help/**/*.md` too): slug, title, description,
   chapter, and a plain-text-stripped body for full-text matching.
2. Ship that index as a static asset; load it lazily when the search box is first focused, not on
   every page load.
3. Search client-side with a small (~5–10 KB) fuzzy-match library — e.g. `minisearch` or `fuse.js`
   — the first real client-side dependency this site takes on, and worth calling out as such when
   it's added.
4. Surface a search box in the guide's header, and a `⌘K` / `Ctrl+K` shortcut that opens a command
   palette from anywhere on the site — result rows grouped by "Guide" vs "Help," each linking
   straight to the matching in-page heading, not just the article top.
5. This scales fine at documentation size (tens to low hundreds of articles); revisit only if the
   guide grows far beyond that.

---

## 5. Content model

### 5.1 File layout

Follows the existing `content/help/*.md` convention, one level deeper for chapters:

```
content/
  guide/
    getting-started/
      what-is-ledgerly.md
      onboarding.md
      dashboard.md
      ...
    bookkeeping-basics/
      double-entry.md
      debits-and-credits.md
      ...
    accounting/
    items/
    sales/
    purchases/
    inventory/
    banking/
    reports/
    compliance/
    settings/
```

### 5.2 Frontmatter schema

```yaml
---
title: "How invoices post to the ledger"
description: "One sentence, shown in search results and chapter listings."
chapter: "Sales"
order: 3
verifiedAgainst: "invoicegen @ 2026-08-29" # commit or date the screen was last checked
related:
  - /help/create-an-invoice
  - /guide/reports/ar-ageing
---
```

`chapter` groups articles for the sidebar; `order` controls position within the chapter;
`verifiedAgainst` is the staleness flag from Principle 5 (§2); `related` links back to `/help` and
sideways to other guide articles.

### 5.3 Article template

Every "how a document/screen works" article follows the same shape, so a reader learns the
rhythm once and can skim any article after that:

1. **What this is** — one or two sentences.
2. **Where to find it** — the exact nav path (e.g. "Sales → Invoices → New invoice"), paired with
   a screenshot of that part of the sidebar/nav so the reader can match it visually, not just by
   name.
3. **Walkthrough** — numbered steps, actual field labels, actual button text, each non-trivial
   step accompanied by a screenshot of that exact screen/state (see §5.4). Text and image stay in
   lockstep — if a step doesn't need its own screenshot because nothing changed on screen since
   the last one, skip it rather than repeating the same image.
4. **What happens behind the scenes** — the journal entry it posts, if any; what becomes
   immutable; what status changes. A screenshot of the PostingPreview panel belongs here where
   the screen has one.
5. **Common questions** — the 2–4 things people actually get confused about (e.g. "why can't I
   edit an issued invoice?").
6. **See also** — links to `/help` and related guide articles.

Report articles (Chapter 8) use a lighter shape: what it answers, how to read it, a worked
one-line example (screenshot of the report with sample data), what it reconciles to.

### 5.4 Screenshots

Screenshots are **required**, not a nice-to-have — every walkthrough step and every report gets
one showing the actual screen, not a description of it. This is a financial system with dense,
specific UI; "click Save" means less than a picture of the button.

**Capture rules — every screenshot must be clean before it goes in:**

- **No Next.js dev indicator.** The dev-mode badge Next.js overlays on the page must not appear.
  Capture against a production build (`next build && next start`) of `invoicegen`, or disable it
  for capture sessions via `devIndicators: false` in `next.config.ts` — production build is
  preferred since it also matches what real users actually see.
- **No browser chrome, no URL bar, no bookmarks bar.** Capture only the page viewport — either a
  headless-browser screenshot clipped to the app's root element, or a full-window capture cropped
  down to just the content. Nothing in frame should reveal a URL, a tab title, or any browser UI.
- **No real customer data.** Use the seeded demo organizations from `invoicegen`'s
  `prisma/seed.ts` (e.g. "Acme Trading") — realistic numbers, never a real business's figures.
- **Consistent viewport size** across every screenshot in the guide (e.g. 1440×900 for full-screen
  captures), so images sit at a uniform scale wherever they're placed in an article. Use a
  narrower, separate viewport only for the handful of screens worth showing in a mobile context.
- **Crop tight to the relevant region** for a single-field or single-panel callout (e.g. just the
  Notes field, just the PostingPreview panel) rather than a full-page screenshot when the article
  is only talking about one part of the screen.

**Presentation — how a screenshot looks once it's placed in an article:**

Screenshots are framed as a self-contained card, not a bare `<img>` dropped into text — a
consistent, editorial look across every article, closer to a Pinterest pin than a raw screen
capture pasted into a doc:

- Rounded corners (matching the site's existing card radius token, not a new one-off value).
- A subtle drop shadow and a 1px border in the site's `rule` colour, so the image reads as an
  object sitting on the page rather than bleeding into it.
- Consistent outer padding/background behind the image so screenshots of the app's own (dark)
  theme don't collide directly with the marketing site's light `paper` background — a neutral
  mat framing the image, the way a photo sits inside a border on a printed card.
- An optional one-line caption below the image, in the same muted style already used for help
  article descriptions.
- Build this as one shared component (e.g. `<Screenshot src="..." alt="..." caption="..." />` in
  `src/components/`) used everywhere in guide content, never a hand-rolled `<img>` per article —
  one place to adjust the frame styling later.
- Images are real files, checked into the repo — but under `public/guide/<chapter>/<slug>.jpg`,
  not alongside their markdown source under `content/`, since Next.js only serves static assets
  out of `public/`. Markdown references the public URL directly:
  `![Dashboard with stat cards and AR ageing chart](/guide/getting-started/dashboard-overview.jpg "The Dashboard, showing Acme Trading's live position")`.
  (Revised from an earlier draft of this plan that colocated images with content — corrected once
  the scaffold was actually built and that path proved unservable.) WebP is the eventual target
  for file size; the first real screenshots shipped as JPEG because this machine has no WebP
  encoder installed — swap the format once one's available, it's a mechanical change, not a
  structural one.

---

## 6. Build order

Sequential, matching how a new user actually needs the information — setup and mental model
first, then the transaction cycle in the order money actually flows, then reporting, then
reference/settings material:

1. **Scaffold**: `/guide` route, layout with sidebar + search shell, content-loading lib
   (extend `src/lib/content.ts` rather than duplicating it), search index generation.
2. **Chapter 0 — Getting started**
3. **Chapter 1 — Bookkeeping basics**
4. **Chapter 4 — Sales** (the cycle most users touch first and most often)
5. **Chapter 5 — Purchases**
6. **Chapter 3 — Items** (referenced by both Sales and Purchases, but simple enough to slot after)
7. **Chapter 6 — Inventory**
8. **Chapter 7 — Banking**
9. **Chapter 2 — Accounting**
10. **Chapter 8 — Reports**
11. **Chapter 9 — Compliance**
12. **Chapter 10 — Settings**
13. **Search polish + cross-linking pass**: go back through every `/help` article and add a
    "Read the full guide" link to its guide counterpart, and vice versa.

Each chapter ships as its own small set of commits (one article or a tight handful per commit,
matching the working-style note in `invoicegen/AGENTS.md` about small, single-concern commits) and
gets checked off here before moving to the next. Screenshots are captured as part of writing each
article, not deferred to a later pass — an article isn't done until its walkthrough steps have
their images, framed per §5.4.

---

## 7. Open decisions before we start building

These need a call from you, not an assumed default:

1. **Public or gated?** Assumed **public**, same as `/help` — a prospective user should be able to
   read the whole manual before signing up. Confirm, since "gated, in-app only" is a real
   alternative if this should read as customer-only documentation.
2. ~~Screenshots/GIFs or text-only for v1?~~ **Decided: screenshots are required** for every
   walkthrough step and report (§5.4) — clean of Next.js dev indicators and browser
   chrome/URL bars, presented in a consistent rounded, shadowed, matted frame via a shared
   `<Screenshot>` component. This does mean each article takes longer to produce and needs
   re-capturing when a screen's styling changes materially — an accepted cost given how dense and
   unfamiliar this UI is to a first-time reader.
3. **Does this need its own top-level nav link**, or does it live as a tab/section inside `/help`
   (e.g. `/help` gets a "Quick answers" / "Full guide" toggle)? Plan above assumes a **separate
   top-level `/guide` nav link** next to Help.
4. **Add `minisearch`/`fuse.js` as a new dependency** — small, but it's the first client-side
   search dependency this repo has taken on. Confirm that's acceptable versus, say, a
   simpler no-dependency substring search (weaker matching, zero new deps).

---

**Once these are confirmed, the next step is scaffolding §6 item 1 and writing Chapter 0.**

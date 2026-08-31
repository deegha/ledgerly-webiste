---
title: "A first-week checklist"
description: "What to set up, and in what order, before you send your first invoice or record your first bill."
order: 6
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/getting-started/onboarding
  - /guide/getting-started/inviting-your-team
---

## What this is

Onboarding gets your organization to a working state. This checklist is what to do in the
first few days after that — the settings that are much easier to get right before there are
transactions in the ledger than after.

Work down it in order. Each item links to the full article.

## 1. Confirm what onboarding created

Onboarding set your **base currency**, your **fiscal year** (1 April – 31 March unless you
changed it), and seeded a **chart of accounts** and a set of **tax codes**. Open
[Settings](/guide/settings) and check each one reads the way you expect before you build on
top of it. Changing the fiscal year or base currency after you've posted entries is
disruptive; changing it now is free.

## 2. Adjust the chart of accounts

The seeded [chart of accounts](/guide/accounting) is a standard Sri Lankan SME tree. Rename
accounts to match how you talk about your business, and add the ones you know you'll need —
but resist rebuilding it from scratch. You can add accounts any time; you can't merge two
accounts once both have postings.

## 3. Check your tax codes

Onboarding seeded VAT, SSCL, and WHT codes at current rates. If you're VAT-registered,
confirm your registration number is on the organization profile and that the default codes
match how you invoice. Rates are dated — a future rate change is a new dated rate, never an
edit — so you don't need to pre-empt those.

## 4. Set your document numbering

Decide your invoice, bill, and credit-note **number formats** now, in
[Settings → Numbering](/guide/settings). Numbers are gapless and can't be back-filled, so the
prefix and starting number you pick are the ones you live with. If you're moving from another
system mid-year, set the next number to continue your existing sequence.

## 5. Set up your invoice template

Add your **logo**, your **footer text**, and the **bank details** customers should pay into,
in [Settings → Invoice template](/guide/settings). The template is gazette-compliant out of
the box; this is just making it yours. Preview it before you issue anything.

## 6. Enter opening balances

If you're not starting from zero — you have money in the bank, customers who owe you,
suppliers you owe — you need an **opening balances** entry so your first reports are right.
This posts a single balanced journal dated the day before your first period starts. It's
skippable during onboarding and resumable from Settings; don't skip it permanently.

## 7. Add exchange rates (if you deal in foreign currency)

If you'll raise or receive foreign-currency documents, add a dated **exchange rate** for each
currency in [Settings → Currencies](/guide/settings) and [Accounting → Exchange
rates](/guide/accounting). A document with no rate on its date can't be posted.

## 8. Set up items

Add the products and services you sell as [items](/guide/items), each with its default price,
tax code, and the income and expense accounts it should post to. For anything you hold as
stock, choose its valuation method now — it's fixed once the item has movements.

## 9. Invite your team

Add the people who'll be working in the books, each with the narrowest role that lets them do
their job. See [Inviting your team](/guide/getting-started/inviting-your-team).

## 10. Do one full dry run

Before you rely on it: raise one invoice to a real customer, issue it, record the payment,
and open the Trial Balance and the P&L. Follow the numbers from the reports back to the
entries and back to the invoice. If that chain makes sense, you're ready.

## See also

- [Signing up and onboarding](/guide/getting-started/onboarding)
- [Understanding your dashboard](/guide/getting-started/dashboard-overview)

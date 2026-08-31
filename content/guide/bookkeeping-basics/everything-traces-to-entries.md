---
title: "Why every report traces back to the same entries"
description: "No report in Ledgerly is a separate tally. Each one is computed from journal lines, and every figure drills back to the document behind it."
order: 9
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/reading-the-core-reports
  - /guide/bookkeeping-basics/journal-entries-and-posting
  - /guide/getting-started/what-is-ledgerly
---

## One source, many views

It would be easy to build an invoicing tool where the sales report adds up invoices, the tax
report adds up tax lines, and the P&L adds up something else again — three tallies that drift
apart the first time one of them misses a case.

Ledgerly doesn't work that way. **Every report is computed from `journal_lines`** — the posted
entries and nothing else. The Trial Balance, the P&L, the Balance Sheet, the VAT Return, the
AR Ageing: all of them are just different questions asked of the same table of entries.

That's why the checks in [the previous article](/guide/bookkeeping-basics/reading-the-core-reports)
always pass — the P&L's net profit _is_ the Balance Sheet's Current Year Earnings, because
both are reading the same lines. They can't disagree.

## Every figure drills back

Because reports are built from entries, you can always go the other way: from a number on a
report, to the entries that produced it, to the document behind each entry.

Click an account on the Balance Sheet — say **Cash in Hand** — and Ledgerly opens the Journals
list filtered to exactly the entries that make up that balance:

![The Journals list filtered to "1000 — Cash in Hand", showing five posted entries from sources PAYMENT_MADE, EXPENSE, PAYMENT_RECEIVED and MANUAL, each linking to the entry behind it](/guide/bookkeeping-basics/drill-to-entries.jpg "A Balance Sheet figure, opened up: the exact entries that sum to it, each traceable to its source document")

From here, open any entry to see its lines, and from the entry, open the **source document** —
the payment, the expense, the invoice — that created it. The chain runs:

> **report figure → the entries behind it → the source document behind each entry**

It's never broken, and it works from any report.

## Why this matters to you

- **You can answer "why is this number what it is?"** every time, without a spreadsheet or a
  call to your accountant. Follow the drill.
- **An auditor can do the same.** Every figure they question leads them straight to evidence.
- **There's nothing to reconcile between reports.** They're not separate records that need to
  be kept in step — they're one record, shown different ways.

This is the whole idea behind [what Ledgerly
is](/guide/getting-started/what-is-ledgerly): a ledger first, with every screen and every
report reading from it.

## See also

- [Reading a Trial Balance, a P&L, and a Balance Sheet](/guide/bookkeeping-basics/reading-the-core-reports)
- [Journal entries and posting](/guide/bookkeeping-basics/journal-entries-and-posting)
- [What Ledgerly is](/guide/getting-started/what-is-ledgerly)

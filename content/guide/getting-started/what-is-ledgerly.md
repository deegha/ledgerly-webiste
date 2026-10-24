---
title: "What Ledgerly is"
description: "Ledgerly is a general ledger that documents post into — not an invoicing app with reports bolted on. Here's why that distinction matters for your books."
order: 1
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
related:
  - /guide/bookkeeping-basics/double-entry
  - /guide/getting-started/onboarding
---

## What this is

Most small-business tools are an invoicing app with some reports added later. Ledgerly is
built the other way around: at its centre is a **general ledger** — the double-entry record
every accountant and auditor already knows — and every screen you'll use is a way of putting
entries into that ledger or reading them back out.

When you issue an invoice, record a bill or a payment, or run depreciation, you're not updating
a standalone list. You're **posting a journal entry**. The invoice is the
document; the journal entry is what it does to your books.

## Everything is a document that posts

Here is the journal entry Ledgerly posted when Lanka Spice Traders, our demo company, issued a
single invoice:

![A posted journal entry, JE-2026-000024: status Posted, source INVOICE, dated 10/21/2026, with the note "Posted on Oct 24, 2026 by Demo Owner. JE-2026-000024 was posted by a document, so it can't be reversed here — void the invoice, or issue a credit note against it instead."; narration "Invoice INV-2026-000005"; four lines — 1200 Trade Receivables debit 4,500.00, 4000 Sales Revenue credit 4,500.00, 5000 Cost of Sales debit 1,750.00, 1500 Inventory credit 1,750.00 — totalling 6,250.00 on each side](/guide/bookkeeping-basics/journal-entry-invoice.webp "One invoice, four ledger lines — receivable, revenue, cost of sales, and the stock that left the warehouse")

Four lines, debits equal to credits, posted and stamped with who did it and when. The invoice
screen hid all of this behind its **Issue** button, but this entry is the real effect. Sell
something and Ledgerly records the money you're owed, the revenue you earned, and — because
this item is tracked stock — the cost of the goods and the inventory that left the building,
all in one balanced entry.

Every document type works this way. The Journals screen lists them side by side, each tagged
with the kind of document that produced it:

![The Journals list showing entries from invoices, bills, payments, stock adjustments, depreciation, an asset disposal, a year-end closing entry and a manual entry — every one marked Posted](/guide/getting-started/how-documents-post.jpg "Invoices, bills, payments, stock moves, depreciation, year-end close — every document lands in the same ledger")

## Three rules that follow from this

**A posted entry is never edited.** Once an entry is posted it cannot be changed or deleted —
only reversed with an equal-and-opposite entry. That's why an issued invoice becomes
read-only: editing it would mean editing history. [Why posted entries are
immutable](/guide/bookkeeping-basics/why-posted-entries-are-immutable) covers the reasoning.

**Every report is built from journal lines, never from a list of documents.** Your Profit &
Loss doesn't add up your invoices — it reads the ledger. This is what lets the Trial Balance,
the Balance Sheet, and the VAT Return always agree with each other: they're all reading the
same entries.

**Every figure drills back to its source.** Start at a number on a report, open the entries
behind it, open the document behind an entry. The chain from a summary total to the original
invoice is never broken.

## Who this is for

Ledgerly is written for Sri Lankan bookkeeping done properly — business owners keeping their
own books, the accountants who prepare the accounts, and the auditors who sign them off. It
assumes you want the ledger to be correct, not hidden. If you've never done double-entry
before, start with [Bookkeeping basics](/guide/bookkeeping-basics/double-entry); if you have,
the rest of this guide walks every screen in the order you'll use it.

## See also

- [What double-entry bookkeeping is](/guide/bookkeeping-basics/double-entry)
- [Signing up and onboarding](/guide/getting-started/onboarding)
- [Understanding your dashboard](/guide/getting-started/dashboard-overview)

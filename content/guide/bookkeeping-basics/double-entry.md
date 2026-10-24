---
title: "What double-entry bookkeeping is"
description: "Every transaction affects at least two accounts, and the two sides always match. That single rule is what makes the books trustworthy."
order: 1
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
related:
  - /guide/bookkeeping-basics/debits-and-credits
  - /guide/bookkeeping-basics/journal-entries-and-posting
  - /guide/getting-started/what-is-ledgerly
---

## The one idea

Money never appears or disappears — it moves. If cash comes into your business, it came
_from_ somewhere: a customer paying an invoice, a loan, an owner's investment. If cash goes
out, it went _to_ something: a supplier, a wage, a piece of equipment.

Double-entry bookkeeping just insists that you record **both ends of every movement**. Each
transaction touches **at least two accounts**, and the amount added to one side always equals
the amount taken from the other. Nothing is ever recorded once and left dangling.

## What it looks like in Ledgerly

Here is a single sale — five tins of cinnamon, invoiced as INV-2026-000005 — as Ledgerly
recorded it:

![A posted journal entry, JE-2026-000024: status Posted, source INVOICE, dated 10/21/2026, with the note "Posted on Oct 24, 2026 by Demo Owner. JE-2026-000024 was posted by a document, so it can't be reversed here — void the invoice, or issue a credit note against it instead."; narration "Invoice INV-2026-000005"; four lines — 1200 Trade Receivables debit 4,500.00, 4000 Sales Revenue credit 4,500.00, 5000 Cost of Sales debit 1,750.00, 1500 Inventory credit 1,750.00 — totalling 6,250.00 on each side](/guide/bookkeeping-basics/journal-entry-invoice.webp "One sale, recorded against four accounts, with the two sides equal")

Read it as two linked statements:

- The customer now **owes us 4,500** (Trade Receivables up) **because we earned 4,500 of
  revenue** (Sales Revenue up).
- **Stock worth 1,750 left the warehouse** (Inventory down) and **became a cost** (Cost of
  Sales up).

Add up each column: **6,250 on the left, 6,250 on the right.** That equality isn't a
coincidence you check for — it's a rule the system won't let you break.

## Why it's worth the trouble

A single-entry list — just "money in, money out" — can't tell you what you're owed, what you
owe, what your stock is worth, or whether you're actually profitable. Double-entry tracks all
of those at once, as a side effect of recording transactions properly.

And because the two sides must always match, the books have a **built-in error check**. If
your accounts don't balance, something was entered wrong, and you know it immediately —
before it reaches a report or a tax return. This is the check you see as the
[Trial Balance](/guide/bookkeeping-basics/reading-the-core-reports).

## The accounting equation

Everything above is one equation, always true:

> **Assets = Liabilities + Equity**

What you own equals what you owe plus what's left over for the owners. Every journal entry
keeps this equation balanced. That's all "the books balance" means.

## See also

- [Debits and credits](/guide/bookkeeping-basics/debits-and-credits)
- [What a journal entry is, and what "posting" means](/guide/bookkeeping-basics/journal-entries-and-posting)
- [What Ledgerly is](/guide/getting-started/what-is-ledgerly)

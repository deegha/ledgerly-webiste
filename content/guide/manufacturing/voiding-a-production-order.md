---
title: "Voiding a production order"
description: "Undoing a build that was wrong — a reversing entry and compensating stock movements that put every item back exactly where it was."
order: 4
verifiedAgainst: "invoicegen @ 2026-09-03, Ceylon Spice Traders"
related:
  - /guide/manufacturing/production-orders
  - /guide/sales/credit-notes
  - /guide/bookkeeping-basics/why-posted-entries-are-immutable
---

## A draft vs. an issued order

An issued production order is a posted document, so — like an issued invoice — it is never
edited or deleted. It is corrected.

- **A draft** you got wrong: just **Discard** it. Nothing posted, nothing to reverse.
- **An issued order** you got wrong: **Void** it.

## What void does

On the issued order's detail page, **Void** asks for a **reversal date**, then:

1. **Posts the exact mirror** of the original journal entry — every debit becomes a credit and
   vice versa, at the original amounts — dated to the reversal date. The original entry stays
   on record, now linked to its reversal.
2. **Writes compensating stock movements at the original costs** — each component goes back
   **in**, the finished units come back **out**. Every affected item's quantity and value
   return to exactly what they were before the build.
3. **Marks the original order VOID** and links it to a reversing order, so the audit trail
   shows a build and its reversal rather than a gap.

The net effect on your books and your stock is zero, which is the point.

## When void is blocked

If some of the finished units this order produced have **already been sold or consumed** —
so there aren't enough on hand to take back out — Ledgerly blocks the void and tells you the
shortfall. Reverse or correct the downstream document first (the invoice that sold them, or
the production order that used them), then void this one.

## After voiding

Create a fresh production order with the right quantities and issue that. It gets its own
`MFG-` number; the two voided documents remain visible for anyone tracing the history.

## See also

- [Production orders](/guide/manufacturing/production-orders)
- [Correcting an issued invoice with a credit note](/guide/sales/credit-notes)
- [Why posted entries are immutable](/guide/bookkeeping-basics/why-posted-entries-are-immutable)

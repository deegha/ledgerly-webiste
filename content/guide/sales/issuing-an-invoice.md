---
title: "What happens when you issue an invoice"
description: "Issuing posts the journal entry, allocates the number, and makes the invoice permanent. Here's each of those, on a real issued invoice."
order: 4
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/sales/creating-an-invoice
  - /guide/sales/credit-notes
  - /guide/bookkeeping-basics/why-posted-entries-are-immutable
---

## The moment of issuing

A draft invoice is a work in progress. **Issue** is the button that makes it real. Three
things happen, all in one transaction:

1. **The journal entry posts.** Trade Receivables is debited, Sales Revenue (and Output VAT,
   and cost of sales for stock items) credited — exactly the
   [posting preview](/guide/sales/creating-an-invoice) you saw on the form.
2. **The invoice number is allocated.** It takes the next number from the `INV-` sequence for
   that fiscal year, inside the same transaction, so the run stays
   [gapless](/guide/settings/document-numbering).
3. **The invoice becomes read-only.** No more edits.

## The issued invoice

![An issued invoice, INV-2026-000010: a "Download PDF" button, a notice reading "Posted on Jul 26, 2026 by Test Owner. Issue a credit note to correct.", the customer's name and TIN, invoice date, supply date and due date, a linked journal entry JE-2026-000031, the line, and a summary showing Total, Amount paid and Balance due](/guide/sales/issued-invoice-detail.jpg "An issued invoice — immutable, numbered, and linked to the journal entry it posted")

What the screen shows:

- **The immutability notice** — "Posted on … by …. Issue a credit note to correct." There's
  no Edit button. The `/edit` route for an issued invoice redirects with an explanation.
- **Journal entry** — a link straight to the entry this invoice posted (`JE-2026-000031`).
  Open it to see the debit and credit lines.
- **Amount paid** and **Balance due** — updated as
  [payments](/guide/sales/customer-payments) are allocated to it.
- **Download PDF** — the gazette-compliant tax invoice to send to the customer.

## Why it can't be edited

An issued invoice has already changed your Sales Revenue, your VAT liability, and your
receivables. Editing it would silently rewrite those. Instead, you correct it with a
[credit note](/guide/sales/credit-notes) — a dated, visible reversal. The reasoning is in
[Why a posted entry can't be edited](/guide/bookkeeping-basics/why-posted-entries-are-immutable).

## Common questions

**I issued an invoice with the wrong amount.** Raise a credit note for the difference (or the
whole invoice, then re-issue). Don't look for an edit — there isn't one, by design.

**Can I un-issue it back to a draft?** No. Issuing is one-way. A credit note is the route
back.

## See also

- [Correcting an issued invoice with a credit note](/guide/sales/credit-notes)
- [Recording a customer payment](/guide/sales/customer-payments)

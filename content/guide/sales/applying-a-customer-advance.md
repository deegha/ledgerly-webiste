---
title: "Applying a customer advance to an invoice"
description: "A customer paid before you invoiced. The receipt sits in Customer Advances until you apply it to the invoice — no new money, one click, and the invoice settles."
order: 7
verifiedAgainst: "invoicegen @ 2026-09-07, Ceylon Spice Traders"
related:
  - /guide/sales/customer-payments
  - /guide/sales/issuing-an-invoice
  - /guide/accounting/journals
---

## What this is

When a customer pays for work you haven't invoiced yet — a deposit on a project, an advance
against future supply — you [record the receipt](/guide/sales/customer-payments) with nothing
allocated. The money increases your bank balance and lands in **2400 Customer Advances**, a
liability: you've been paid, and you now owe the customer the work.

Once you've done the work and [issued the invoice](/guide/sales/issuing-an-invoice), you
**apply** the advance to it. That moves the amount out of Customer Advances and onto the
invoice's receivable — the invoice settles, and no fresh money changes hands.

## The two stages

**1 — Record the advance.** Sales → Customer payments → Record payment. Pick the customer, the
deposit account and the amount, and leave every invoice **unallocated**. The form confirms:
_"Held as a customer advance (2400) — you can apply it to an invoice later."_

**2 — Apply it.** Done from the invoice, once that invoice exists and is issued.

## Where to find it

Open an **issued** or **partially paid** invoice for that customer. If they have an unapplied
advance in the same currency, an **Apply customer advance** panel appears above the invoice
totals.

![An issued invoice for Ceylon Spice Traders showing an "Apply customer advance" panel: the note "This customer has LKR 30,000.00 in unapplied advances", a dropdown to pick which receipt, an "Amount to apply" box pre-filled with 30,000.00, and an Apply button; a caption explains it posts Dr 2400 Customer Advances / Cr Trade Receivables](/guide/sales/apply-advance-panel.jpg "The Apply customer advance panel — it only shows when the customer has a same-currency advance to draw on")

## Applying one

1. **Advance** — if the customer has more than one unapplied receipt, pick which to draw from.
2. **Amount to apply** — pre-filled to the smaller of the invoice's balance due and the
   advance's remaining balance. Lower it if you only want to apply part.
3. **Apply** — posts an entry (`Dr 2400 Customer Advances / Cr Trade Receivables`), tagged to
   the original receipt so it's traceable. The invoice moves to `PARTIALLY PAID` or `PAID`,
   and the receipt's **unallocated** figure drops by what you applied.

One advance can be spread across several invoices — apply part of it to each until it's used
up. Anything left over stays available for the next invoice.

## On the documents

- The **invoice** shows an updated _Amount paid_ and _Balance due_, and the applied advance in
  its payment history.
- The **invoice PDF** gains a _Payments & credits_ block under the total —
  `Advance applied · RCP-2026-000020 · −30,000.00` and a `Balance due` line — so the copy the
  customer receives reflects the deposit they've already sent.
- The **receipt** shows how much of it is now allocated and to which invoice.

## Worked example

A LKR 30,000 advance against a LKR 100,000 job:

| Step                                 | Entry                                                     | Invoice status               |
| ------------------------------------ | --------------------------------------------------------- | ---------------------------- |
| Advance received (`RCP-2026-000020`) | Dr Bank 30,000 / Cr Customer Advances 30,000              | — no invoice yet             |
| Invoice issued (`INV-2026-000030`)   | Dr Trade Receivables 100,000 / Cr Income 100,000          | `ISSUED`, 100,000 due        |
| Advance applied                      | Dr Customer Advances 30,000 / Cr Trade Receivables 30,000 | `PARTIALLY PAID`, 70,000 due |
| Balance paid (`RCP-2026-000021`)     | Dr Bank 70,000 / Cr Trade Receivables 70,000              | `PAID`, 0 due                |

At the end, Customer Advances is back to zero, Trade Receivables is clear, and the invoice is
`PAID` — with two receipts and one advance-application entry behind it.

## Common questions

**Does applying an advance move any money?** No. The money arrived when you recorded the
receipt. Applying it just moves the amount from "advance held" to "this invoice settled".

**The advance is bigger than the invoice.** Apply what the invoice needs; the remainder stays
in Customer Advances for the next invoice.

**The advance and the invoice are in different currencies.** The panel handles same-currency,
same-rate advances only — a rate difference would leave a residual in Trade Receivables. For
those, post a [manual journal entry](/guide/accounting/journals) (`Dr 2400 / Cr 1200`) instead.

**I applied the wrong amount.** There's no one-click undo yet. Reverse the effect with a manual
journal entry (`Dr Trade Receivables / Cr Customer Advances`); note that the invoice's status
won't roll back on its own.

**Nothing to apply?** No panel appears if the customer has no unapplied advance, if the invoice
is a draft, or if the only advances are in a different currency.

## See also

- [Recording a customer payment](/guide/sales/customer-payments)
- [What happens when you issue an invoice](/guide/sales/issuing-an-invoice)
- [Journal entries and manual adjustments](/guide/accounting/journals)

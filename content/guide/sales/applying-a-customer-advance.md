---
title: "Applying a customer advance to an invoice"
description: "A customer paid before you invoiced. The receipt sits in Customer Advances until you apply it to the invoice — no new money, one click, and the invoice settles."
order: 7
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
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
advance in the same currency, at the same exchange rate, a panel appears on the invoice:
"This customer has LKR 250,000.00 in unapplied advances." It shows nothing if there's no such
advance.

![Issued invoice INV-2026-000003 for Island Flavours Exports (Pvt) Ltd, LKR 2,100,000.00 for 300 units of cinnamon quills: below the line table, a blue panel reads "This customer has LKR 250,000.00 in unapplied advances.", with an Amount to apply box pre-filled with LKR 250,000.00, an Apply button, and the note "Applying RCP-2026-000003 posts Dr 2400 Customer Advances / Cr Trade Receivables and settles this invoice — no new payment is recorded."; under it, Amount paid 0.00 and Balance due 2,100,000.00](/guide/sales/apply-advance-panel.webp "The advance panel on an issued invoice — it only shows when the customer has an advance in the same currency, at the same rate")

## Applying one

1. **Advance** — if the customer has more than one unapplied receipt, pick which to draw from.
2. **Amount to apply** — pre-filled to the smaller of the invoice's balance due and the
   advance's remaining balance. Lower it if you only want to apply part.
3. **Apply** — posts an entry (`Dr 2400 Customer Advances / Cr Trade Receivables`), tagged to
   the original receipt so it's traceable. The panel says so before you click: "Applying
   RCP-… posts Dr 2400 Customer Advances / Cr Trade Receivables and settles this invoice — no
   new payment is recorded." The invoice moves to **Partially paid** or **Paid**, and the
   receipt's **unallocated** figure drops by what you applied.

One advance can be spread across several invoices — apply part of it to each until it's used
up. Anything left over stays available for the next invoice.

## On the documents

- The **invoice** shows an updated **Amount paid** and **Balance due**.
- The **invoice PDF** lists the applied receipt under the total — its number (here
  `RCP-2026-000003`), its date and the amount as a minus — followed by a **Balance due** line,
  so the copy the customer receives reflects the deposit they've already sent.
- The **receipt** (Sales → Customer payments) shows its **Allocated** and **Unallocated**
  amounts, and the invoice it was applied to.

## Worked example

The advance in the screenshot above — LKR 250,000 against a LKR 2,100,000 zero-rated export
invoice (no VAT):

| Step                                         | Entry                                                       | Invoice status                    |
| -------------------------------------------- | ----------------------------------------------------------- | --------------------------------- |
| Advance received (`RCP-2026-000003`, 12 Oct) | Dr Bank 250,000 / Cr Customer Advances 250,000              | — no invoice yet                  |
| Invoice issued (`INV-2026-000003`, 16 Oct)   | Dr Trade Receivables 2,100,000 / Cr Sales Revenue 2,100,000 | **Issued**, 2,100,000 due         |
| Advance applied                              | Dr Customer Advances 250,000 / Cr Trade Receivables 250,000 | **Partially paid**, 1,850,000 due |
| Balance paid (a second receipt)              | Dr Bank 1,850,000 / Cr Trade Receivables 1,850,000          | **Paid**, 0 due                   |

At the end, Customer Advances is back to zero, Trade Receivables is clear, and the invoice is
**Paid** — with two receipts and one advance-application entry behind it.

## Common questions

**Does applying an advance move any money?** No. The money arrived when you recorded the
receipt. Applying it just moves the amount from "advance held" to "this invoice settled".

**The advance is bigger than the invoice.** Apply what the invoice needs; the remainder stays
in Customer Advances for the next invoice.

**The advance and the invoice are in different currencies.** The panel handles same-currency,
same-rate advances only — a rate difference would leave a residual in Trade Receivables. For
those, post a [manual journal entry](/guide/accounting/journals) (`Dr 2400 / Cr 1200`) instead.

**I applied the wrong amount.** An application can't be edited. An Owner or Accountant can
**Void** the receipt: that reverses the receipt and every advance applied from it, and re-opens
the invoices it settled. Then record the receipt again and apply the right amount. Ledgerly
refuses the void if the receipt is matched to a bank statement line (unmatch it first) or is
part of a completed bank reconciliation. Voiding the invoice also undoes an advance applied to
it.

**Nothing to apply?** No panel appears if the customer has no unapplied advance, if the invoice
is a draft, or if the only advances are in a different currency or at a different rate.

## See also

- [Recording a customer payment](/guide/sales/customer-payments)
- [What happens when you issue an invoice](/guide/sales/issuing-an-invoice)
- [Journal entries and manual adjustments](/guide/accounting/journals)

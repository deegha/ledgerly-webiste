---
title: "Recording a bill"
description: "Entering a supplier bill, the supplier reference versus your own number, and how Ledgerly decides whether the input VAT is recoverable."
order: 2
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
related:
  - /guide/purchases/suppliers
  - /guide/purchases/debit-notes
  - /guide/purchases/supplier-payments
---

## What this is

A **bill** is a purchase you owe for but haven't paid yet — the supplier's invoice to you.
Recording it posts an entry that increases an expense (or an asset, for stock) and increases
**Trade Payables**. Paying it is a [separate step](/guide/purchases/supplier-payments).

## Where to find it

**Purchases → Bills → New bill.**

![The New bill form: Supplier Ceylon Packaging Solutions (Pvt) Ltd and "Supplier invoice #" CP-4519 ("The supplier's own reference, not ours"); Currency; Bill date, Supply date ("Date the goods/services were received") and Due date; Lines with Item, Description, Account, Qty, Unit price, Tax code and Line total — printed spice pouches to 5000 Cost of Sales and courier charges to 6260 Travel & Transport, both VAT18; Reference, Notes and Attachments; totals of LKR 341,610.00; a balanced preview of the entry; and Cancel, Save draft and Issue buttons](/guide/purchases/new-bill-form.webp "The new bill form — note the supplier's reference is recorded separately from your own bill number")

- **Supplier invoice #** — the supplier's _own_ reference (their invoice number). Yours is the
  gapless `BIL-` number Ledgerly assigns when you issue the bill.
- **Bill date** — the date on the supplier's invoice. **Supply date** — when you actually
  received the goods or service.
- **Lines** — each takes an item or free text, a description, the **Account** it's charged to,
  quantity, unit price, and a **tax code**.
- **Attachments** — optional; the supplier's invoice or receipt.

Before you commit, the form previews the entry the bill will post. **Save draft** keeps it
editable; **Issue** posts it.

## How input VAT recoverability is decided

The bill records whether its VAT is **recoverable** — reclaimable from the tax authority, so
booked to the _Input VAT (Recoverable)_ asset — or not, in which case it's absorbed into the
expense.

![An issued bill, BIL-2026-000001: supplier, supplier ref, the three dates, a field reading "Input VAT recoverable: No", a linked journal entry, a line for A4 paper reams with 9,000.00 tax, and a summary showing Total 59,000.00](/guide/purchases/bill-detail.jpg "The issued bill records the recoverability decision — here, No")

Ledgerly decides it for you, from four facts:

1. **Your organization** is VAT-registered, **and**
2. **The supplier** is VAT-registered, **and**
3. **The supplier has a valid TIN**, **and**
4. the **line's tax code** is a recoverable one (VAT18, VAT18S, VAT0 — not SSCL, VATEX or
   NOVAT).

All four true → the tax posts to the recoverable asset and feeds your
[VAT Return](/guide/reports/vat-return). Any one false → the tax is expensed. In the example
above, the field reads **No** because Acme Trading is not VAT-registered, so _no_ input VAT is
recoverable for them.

## What posts

- **Dr** the expense (or inventory) account for the net amount
- **Dr** _Input VAT (Recoverable)_ for the tax — _only_ if the bill is recoverable; otherwise
  the tax is added to the expense line above
- **Cr** _Trade Payables_ for the gross total (what you actually owe, tax included, either way)

On a **VAT18S** line the supplier has charged SSCL as well: SSCL on the net, then 18% VAT on
the net plus SSCL. The SSCL part isn't recoverable, so it's added to the expense; the VAT part
follows the recoverability decision above.

## After it's posted

Like an invoice, an issued bill is **immutable**. Correct it with a
[debit note](/guide/purchases/debit-notes), or, if the whole bill was a mistake, an Owner or
Accountant can **Void** it — that posts the exact reverse of its entry. A bill with payments or
notes applied has to have those voided first. _(Note: the on-screen notice on an issued bill
currently says "Issue a credit note to correct" — for a bill the instrument is a debit note.)_

## See also

- [Suppliers](/guide/purchases/suppliers)
- [Debit notes against a bill](/guide/purchases/debit-notes)
- [Recording a supplier payment](/guide/purchases/supplier-payments)

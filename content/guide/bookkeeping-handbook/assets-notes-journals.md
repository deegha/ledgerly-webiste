---
title: "Assets, debit notes and journals"
description: "Buying equipment and registering it, correcting a bill with a debit note, the manual journals a bookkeeper actually needs, and customer receipts."
order: 6
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/accounting/fixed-assets
  - /guide/purchases/debit-notes
  - /guide/accounting/journals
---

## Buy an asset (equipment, a laptop, furniture)

Capitalise only items above your business's **capitalisation threshold** (agree the figure, and
the useful life for each kind of asset, with your accountant). Below it, expense the item, for
example to a Small Equipment account.

### a) Post the purchase

Registering an asset doesn't post anything, so the purchase has to be posted by a document:

- **Already paid:** **Record expense** with the line **Account = 1700 Fixed Assets — Cost**,
  Amount = net, and the VAT code as usual. Attach the invoice.
- **On credit:** a **bill** with the line **Account = 1700 Fixed Assets — Cost**. Bill lines can
  take the fixed-asset account directly, so no reclass journal is needed.

### b) Register it

**Accounting → Fixed assets → Register asset.**

| Field                                | What to enter                                                                       |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| **Asset name**                       | e.g. "Dell laptop – Accounts"                                                       |
| **Category**                         | e.g. "Computer equipment"                                                           |
| **Acquisition date**                 | the date on the invoice                                                             |
| **Acquisition cost**                 | the same amount posted to 1700: the net, or the gross if the VAT wasn't recoverable |
| **Salvage value**                    | 0 unless your accountant says otherwise                                             |
| **Useful life (months)**             | per your policy, e.g. 36 for computers                                              |
| **Depreciation method**              | Straight line (Reducing balance also needs **Annual rate %**)                       |
| **Cost account**                     | **1700 Fixed Assets — Cost**                                                        |
| **Depreciation expense account**     | **6900 Depreciation Expense** (the default)                                         |
| **Accumulated depreciation account** | **1750 Accumulated Depreciation**                                                   |

Then click **Register asset**. Ledgerly checks that the cost account is a fixed-asset account, the
accumulated account is an accumulated-depreciation account, and the depreciation account is an
expense account.

### c) Depreciation and disposal

Nothing posts automatically. At each month end, open the asset and click **Post depreciation**.
It posts the oldest unposted month: Dr **6900** / Cr **1750**. Disposal (disposal date, proceeds
received, and the account they were deposited to) is permanent, so do it only when the owner or
your accountant asks.

## Correct an issued bill: debit note

**Purchases → Debit notes → New debit note.**

1. Pick the supplier, then link the **bill**.
2. Add lines for the amount to reverse, on the same account and with the same tax code as the
   original line.
3. Attach the supplier's credit note.
4. **Issue.** It posts Dr **2000** / Cr the line account / Cr **1300** if the original VAT was
   recoverable, and reduces the bill's balance due.

**The note can't exceed what the bill still owes.** The form shows "Up to LKR … (BIL-…'s open
balance, VAT included) can be debited against this bill" and won't issue above it. The note must
also be in the bill's currency.

**If the bill is already paid in full**, its open balance is 0, so a linked debit note can't be
issued. Void the supplier payment, issue the debit note, then record the payment again. Anything
paid over the reduced bill becomes a prepayment you can apply later.

Use a debit note for over-billing, returns and a wrong amount. For a wrong **account** on a bill
that's already issued, use a reclass journal (below).

## Manual journals

**Accounting → Journals → New journal entry.** Fields: **Date**, **Narration**, lines (Account,
Description, Debit, Credit) and **Supporting documents**. Debits must equal credits, and it posts
immediately. Only Owners and Accountants can post one.

The journals a bookkeeper typically needs:

- **Reclass a line on an issued bill:** Dr the correct account / Cr the account it was posted to.
  Narration `Reclass BIL-… to <account>`.
- **Bank charges found on the statement:** better as **Record expense**, Paid from = that bank.
- **Interest received:** Dr the bank / Cr **4100 Other Income**.
- **Transfer between your own bank accounts:** Dr the receiving bank / Cr the paying bank.
- **Paying VAT, SSCL or WHT over to the IRD:** Dr **2100**, **2210** or **2200** / Cr the bank.
  See [Month end](/guide/bookkeeping-handbook/month-end).
- **Expenses the owner paid personally:** Dr the expense account / Cr the director's current
  account, if that's the treatment you've agreed.

A manual journal is the one posted document that accepts attachments after posting.

**Reverse entry** appears only on manual journals. It posts an opposite entry dated today
(Colombo time), marks the original **Void**, and can't be undone. You can't reverse a reversal.
Entries posted by documents (bills, expenses, payments, invoices, notes) and by the system
(depreciation, FX, year-end, opening balances) don't offer it; the page tells you the right
correction instead, such as voiding the bill or recording a debit note.

## Customer payments

**Sales → Customer payments → Record payment**, if you also record money received: pick the
customer and the **deposit** bank account, enter the amount, and allocate it to their invoices.
Any unallocated amount goes to **2400 Customer Advances**. The customer's invoice page then shows
their unapplied advances, and you apply one with **Apply**.

- A credit note linked to an invoice can't exceed what the invoice still owes, the same as debit
  notes on bills.
- An invoice whose journal entry was reversed by hand (older data) can't receive a payment or a
  credit note until it's voided.
- WHT that a customer deducts from what they pay you isn't recorded on the customer payment.
  Agree the treatment with your accountant.

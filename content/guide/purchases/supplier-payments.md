---
title: "Recording a supplier payment"
description: "Logging money paid out, splitting it across several bills, withholding WHT, and what happens to an unallocated amount."
order: 4
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
related:
  - /guide/purchases/recording-a-bill
  - /guide/sales/customer-payments
  - /help/record-a-bill-payment
---

## What this is

When you pay a supplier, you record a **payment**. It gets a gapless `PAY-` number, posts an
entry that moves money **out** of a bank or cash account and **reduces Trade Payables**, and
is **allocated** against one or more of the supplier's open bills.

It's the mirror image of a [customer payment](/guide/sales/customer-payments) — same screen
shape, opposite direction.

## Where to find it

**Purchases → Supplier payments → Record payment.**

![The Record payment form: Supplier Colombo Freight & Logistics (Pvt) Ltd, Currency LKR, Payment date, Method BANK TRANSFER, Reference TRF-CFL-1024, Pay from 1100 — Bank Accounts and Amount paid LKR 208,710; an Apply to bills grid with Bill, Balance due, Clear (gross), WHT, WHT withheld and Cash columns, where BIL-2026-000006 clears LKR 217,710 with WHT5 (5%) withholding LKR 9,000 for LKR 208,710.00 cash; a "WHT withheld (to WHT Payable, remit to the IRD)" total and Unallocated LKR 0.00; then Notes, Attachments, and a balanced preview — Dr 2000 Trade Payables, Cr 2200 WHT Payable and Cr 1100 Bank Accounts](/guide/purchases/supplier-payment-allocation.webp "Pick the supplier and the account you're paying from, then split the payment across their open bills, withholding WHT where it applies")

1. **Supplier** — choosing them loads their open bills into the grid.
2. **Currency**, **Payment date**, **Method**, **Reference** — the bank reference or cheque
   number.
3. **Pay from** — the bank or cash account this payment leaves from.
4. **Amount paid** — the cash leaving the bank.
5. **Apply to bills** — tick each bill this payment covers and enter the amount it clears in
   **Clear (gross)**. The **Unallocated** figure updates as you go.
6. **Notes** and **Attachments** — optional; a payment confirmation, a receipt.

Before you record it, the form previews the entry it will post, and shows **Balanced**.

## Withholding tax (WHT)

If you withhold tax from the supplier — 5% on services, 14% on rent — pick the code in the
bill's **WHT** column (**No WHT** by default). Ledgerly works out **WHT withheld** and the
**Cash** you actually pay. The bill is cleared by the cash plus the WHT withheld, so **Amount
paid** is the cash figure, not the bill's gross amount.

The total withheld posts to **2200 WHT Payable** ("WHT withheld (to WHT Payable, remit to the
IRD)") until you pay it over. WHT is applied only here, on the payment — never on a bill line.
See [Tax codes](/guide/accounting/tax-codes).

## Multi-bill allocation and unallocated amounts

One payment can clear several bills, or partly pay one (which stays open as **Partially
paid**). If you don't allocate all of it — you paid a supplier in advance, or aren't sure which
bill it covers — the remainder is held as a **prepayment** in **1400 Prepayments**. The money
has already left your bank; it just isn't tied to a specific bill yet.

To use it later, open the supplier's bill: it shows "This supplier has … in unapplied
prepayments." Enter the **Amount to apply** and click **Apply**. That posts Dr Trade Payables /
Cr 1400 Prepayments and settles the bill — no new payment is recorded, and no WHT is withheld.
The prepayment and the bill have to be in the same currency.

## Correcting a payment

A recorded payment can't be edited. An Owner or Accountant can **Void** it: that reverses its
entry, including any WHT withheld and any prepayment applied from it, and re-opens every bill
it paid. Then record it again correctly. Ledgerly refuses the void if the payment is matched to
a bank statement line (unmatch it first), is part of a completed bank reconciliation, or
withheld WHT that may already have been paid over to the IRD.

## See also

- [Recording a bill](/guide/purchases/recording-a-bill)
- [Recording a customer payment](/guide/sales/customer-payments)
- [Record a bill payment (quick recipe)](/help/record-a-bill-payment)

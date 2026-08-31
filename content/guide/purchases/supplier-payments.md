---
title: "Recording a supplier payment"
description: "Logging money paid out, splitting it across several bills, and what an unallocated payment is."
order: 4
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
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

![The Record payment form for a supplier: Supplier, Currency, Payment date, Method, Reference, a "Pay from" account selector; below, an "Apply to bills" grid listing the supplier's open bills with their balance due and an Allocate box each, and a running "Unallocated" total](/guide/purchases/supplier-payment-allocation.jpg "Pick the supplier and the account you're paying from, then split the amount across their open bills")

1. **Supplier** — choosing them loads their open bills into the grid.
2. **Payment date**, **Method**, **Reference** — the bank reference or cheque number.
3. **Pay from** — the bank or cash GL account the money leaves.
4. **Amount** — the total paid.
5. **Apply to bills** — enter an amount against each bill this payment covers. The
   **Unallocated** figure updates as you go.

## Multi-bill allocation and unallocated payments

One payment can clear several bills, or partly pay one (which stays open as `PARTIALLY PAID`).
If you don't allocate all of it — you paid a supplier on account, or aren't sure which bill it
covers — the remainder sits as **unallocated** on the payment. The money has already left your
bank and reduced the supplier's net balance; it just isn't tied to a specific bill yet.
Allocate it later.

## See also

- [Recording a bill](/guide/purchases/recording-a-bill)
- [Recording a customer payment](/guide/sales/customer-payments)
- [Record a bill payment (quick recipe)](/help/record-a-bill-payment)

---
title: "Recording a customer payment"
description: "Logging money received, splitting it across several invoices, and what an unallocated receipt is."
order: 6
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/sales/issuing-an-invoice
  - /help/record-a-payment
---

## What this is

When a customer pays, you record a **receipt**. It gets a gapless `RCP-` number, posts an
entry that moves money into your bank (or cash) account and reduces what the customer owes,
and is **allocated** against one or more of their open invoices.

## Where to find it

**Sales → Customer payments → Record payment.**

![The Customer payments list: Number, Date, Customer, Method, Amount and Unallocated columns; some rows show an unallocated balance](/guide/sales/customer-payments-list.jpg "Sales → Customer payments — the Unallocated column flags money not yet applied to an invoice")

## Recording one

![The Record payment form for Colombo Traders: Customer, Currency, Payment date, Method (Bank transfer), Reference, a "Deposit to" account selector, Amount; below, an "Apply to invoices" grid listing the customer's open invoices with their balance due and an Allocate box each, and a running "Unallocated" total of 0.00](/guide/sales/payment-allocation.jpg "Pick the customer, the bank account, the amount — then split it across their open invoices")

1. **Customer** — choosing them loads their open invoices into the grid.
2. **Payment date**, **Method**, **Reference** — the reference is the bank reference or cheque
   number.
3. **Deposit to** — the bank or cash GL account the money actually lands in.
4. **Amount** — the total received.
5. **Apply to invoices** — type an amount into the **Allocate** box on each invoice the
   payment covers. The **Unallocated** figure at the bottom shows how much of the payment is
   not yet applied; it updates as you allocate.

## Multi-invoice allocation

One payment can settle several invoices — allocate part of it to each. It can also **partly**
pay one invoice; that invoice stays open with a reduced balance due, and shows as
`PARTIALLY PAID`.

## Unallocated receipts

If you record a payment and don't allocate all of it — a customer paid in advance, or you're
not yet sure which invoice it's for — the remainder sits as an **unallocated** amount on the
receipt. It has still increased your bank balance and reduced the customer's net balance; it
just isn't tied to a specific invoice yet. Come back and allocate it later. The
**Unallocated** report lists every such amount across all customers.

## See also

- [What happens when you issue an invoice](/guide/sales/issuing-an-invoice)
- [Record a payment (quick recipe)](/help/record-a-payment)

---
title: "Debit notes against a bill"
description: "The purchase-side reversal — how you correct an issued bill when goods are returned or the supplier over-charged."
order: 3
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/purchases/recording-a-bill
  - /guide/sales/credit-notes
---

## What this is

A **debit note** is to a bill what a [credit note](/guide/sales/credit-notes) is to an
invoice: the way you correct an [issued bill](/guide/purchases/recording-a-bill) without
editing it. You raise one when you return goods to a supplier, they over-charged you, or a
line shouldn't have been on the bill.

It posts an entry that **reduces Trade Payables** (you owe the supplier less) and reverses the
expense — and the input VAT, using the **same recoverable / non-recoverable split** as the
original bill.

## Where to find it

**Purchases → Debit notes.**

![The Debit notes list: Number, Date, Supplier, Origin bill, Total and Status columns; each issued row names the origin bill it corrects](/guide/purchases/debit-notes-list.jpg "Purchases → Debit notes — each one is tied to the bill it corrects")

Every debit note is **linked to an origin bill** and carries a **reason**. Like a bill, it's
**final once issued** and has its own journal entry.

## Full or partial

- **Partial** — credit back specific lines or quantities (e.g. 5 of 20 units returned).
- **Full** — reverse the whole bill, e.g. to cancel it and re-enter a correct one.

## Common questions

**We'd already paid the bill before returning the goods.** The debit note leaves the supplier
owing _you_ — a debit balance on their account you can net against a future bill or collect as
a refund.

**Does a debit note move money?** No. It adjusts what you _owe_. A refund received is a
separate transaction.

## See also

- [Recording a bill](/guide/purchases/recording-a-bill)
- [Correcting an issued invoice with a credit note](/guide/sales/credit-notes)

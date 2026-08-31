---
title: "Recording a direct expense (no bill)"
description: "For spending you paid on the spot — a taxi, petty cash, a card payment — with no supplier account and no bill to track."
order: 5
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/purchases/recording-a-bill
  - /guide/banking/reconciling
---

## Bill or expense?

- A **[bill](/guide/purchases/recording-a-bill)** is something you owe and will pay later. It
  goes through Trade Payables and needs a
  [supplier payment](/guide/purchases/supplier-payments) to clear.
- An **expense** is something already paid — cash, petty cash, a company card, a bank
  transfer done there and then. No payable, no payment step. One document, one entry.

Use an expense for the taxi fare, the tea money, the courier you paid at the door.

## Where to find it

**Purchases → Expenses → Record expense.**

![The Record expense form: an optional Vendor contact or free-text vendor name, Expense date, a "Paid from" account selector ("Bank or cash account this spend left from"), Currency, and a line editor where each line maps to an expense Account with an Amount and a Tax code](/guide/purchases/record-expense-form.jpg "The record expense form — each line goes straight to an expense account, and 'Paid from' is the account the money left")

- **Vendor** — optional. Pick a contact, or just type a name ("PickMe Taxi"). An expense
  doesn't need a supplier record.
- **Paid from** — the bank or cash account the money actually left. This is what makes it a
  direct expense rather than a bill.
- **Lines** — each has a **description**, an **expense account** (defaults to Operating
  Expenses), an **amount**, and a **tax code**. There's no item picker — you're categorising
  spend, not buying catalogue items.
- **Attachments** — the receipt.

## The recorded expense

![A recorded expense, EXP-2026-000001: "Posted on … Expenses are final once recorded.", vendor "PickMe Taxi" with "Paid from 1000 — Cash in Hand", a linked journal entry, and a single line "Client site visit taxi fare" for 1,500.00](/guide/purchases/expense-detail.jpg "A recorded expense — paid from a named account, with its own journal entry, and final once recorded")

What posts:

- **Dr** the expense account(s) on the lines
- **Dr** _Input VAT (Recoverable)_ for any recoverable tax (same rule as a
  [bill](/guide/purchases/recording-a-bill))
- **Cr** the **Paid from** account for the total

It's **final once recorded**. There's no separate payment to make and none to reconcile
against later — though the entry does show up when you
[reconcile that bank account](/guide/banking/reconciling).

## See also

- [Recording a bill](/guide/purchases/recording-a-bill)
- [Reconciling a bank account](/guide/banking/reconciling)

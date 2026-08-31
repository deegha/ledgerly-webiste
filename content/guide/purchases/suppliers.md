---
title: "Suppliers"
description: "Adding a supplier, and why their TIN and VAT-registration status change how your bills post."
order: 1
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/purchases/recording-a-bill
  - /guide/sales/customers
---

## What this is

A supplier is a contact you buy from. Every bill, debit note, and supplier payment is tied to
one. Suppliers get a gapless **`SUP-` number**.

## Where to find it

**Purchases → Suppliers.**

![The Suppliers list: Number, Name, TIN and Credit limit columns, with a "New supplier" button](/guide/purchases/suppliers-list.jpg "Purchases → Suppliers")

The form mirrors the [customer form](/guide/sales/customers) — name, legal name, TIN, VAT
registration number, a **VAT registered** toggle, contact details, default currency, and
payment terms.

## Why the tax fields matter more here

On the sales side, a customer's VAT status affects what prints on their invoice. On the
**purchase** side, a supplier's tax details change **how your bill posts to the ledger**.

Input VAT on a bill is only **recoverable** — booked as an asset you'll reclaim rather than a
cost you absorb — when **all** of these hold:

1. **Your organization** is VAT-registered, and
2. **The supplier** is VAT-registered, and
3. **The supplier has a valid TIN**, and
4. the **tax code on the line** is itself a recoverable one (VAT18, VAT0).

If any is missing, the tax is folded into the expense. So a supplier's **VAT registered**
toggle and **TIN** aren't just record-keeping — get them wrong and your input VAT lands in the
wrong place. This is covered in full in [Recording a
bill](/guide/purchases/recording-a-bill).

## Common questions

**A supplier gave us a VAT invoice but we haven't set them as VAT-registered.** Update their
record before you post the bill, or the VAT won't be treated as recoverable.

**Can I delete a supplier?** Not once they have documents. Mark them inactive instead.

## See also

- [Recording a bill](/guide/purchases/recording-a-bill)
- [Customers](/guide/sales/customers)

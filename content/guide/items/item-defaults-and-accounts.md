---
title: "Default price, tax code, and account mapping"
description: "The defaults an item carries onto a document, and the accounts each item type posts to."
order: 2
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/items/adding-an-item
  - /guide/bookkeeping-basics/chart-of-accounts
---

## Defaults save you typing

When you pick an item on an invoice or a bill, Ledgerly fills in:

- **Unit price** — from the item's **Selling price** (on a sale) or **Purchase price** (on a
  bill).
- **Tax code** — from the item's **Sales tax code** (invoice lines) or **Purchase tax code**
  (bill lines).

Both are just defaults — you can override either on any individual line. Set them to whatever
you use _most often_.

## Account mapping — where the money lands

This is the part that matters for your ledger. Each item names the accounts its postings go
to:

![The account mapping section of an inventory item: Income account (4000 — Sales Revenue), Cost of sales account (5000 — Cost of Sales), Inventory account (1500 — Inventory), a Valuation method of Weighted average, an optional Reorder level, and Sales / Purchase tax code defaults](/guide/items/valuation-method.jpg "An inventory item's account mapping — income, cost of sales, and where stock value is carried")

- **Income account** _(all items)_ — where **revenue** posts when the item is sold. Usually a
  4000-band [income account](/guide/bookkeeping-basics/chart-of-accounts).
- **Cost of sales account** _(inventory only)_ — where the **cost of the goods** posts when
  stock is sold.
- **Inventory account** _(inventory only)_ — where the **value of stock on hand** is carried,
  as an asset. Usually 1500 — Inventory.

Ledgerly only lets you pick accounts of the right type for each slot, so you can't
accidentally map revenue to an expense account.

## Reorder level

An optional figure for a future low-stock alert. It has no accounting effect today.

## Common questions

**Two products should hit different revenue accounts.** Give each item its own income account
— that's exactly what the mapping is for. Your P&L then splits revenue the way you set it up.

**Can I change an item's accounts later?** Yes. New postings use the new accounts; entries
already posted keep the accounts they used. History doesn't move.

## See also

- [Adding an item, and Inventory vs. Service](/guide/items/adding-an-item)
- [What a chart of accounts is](/guide/bookkeeping-basics/chart-of-accounts)

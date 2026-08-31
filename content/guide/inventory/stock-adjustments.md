---
title: "Stock adjustments"
description: "Correcting stock quantities when reality and the ledger disagree — a count discrepancy, breakage, or an opening balance you missed."
order: 1
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/items/stock-movements
  - /guide/inventory/inventory-valuation-report
---

## When you'd use one

Stock quantities normally change through [bills, invoices, and their
returns](/guide/items/stock-movements). A **stock adjustment** is for the times something
moved stock that _wasn't_ a sale or a purchase:

- a **physical count** came out different from the system
- units were **damaged, lost, or expired** (a write-off)
- you're **entering opening stock** you didn't set when the item was created
- a **correction** to a mistake

It's the only way to change a quantity directly — and even then it's a dated, reasoned
document, not a free edit of a number.

## Where to find it

**Inventory → Stock adjustments → New adjustment.**

![The Stock adjustments list: Number, Date, Item, Type (Increase / Decrease / Write-off), Quantity and Status columns](/guide/inventory/stock-adjustments-list.jpg "Inventory → Stock adjustments — each one names an item, a type, and a quantity")

![The new stock adjustment form: Item, Adjustment date, Adjustment type ("Stock increase (found stock, correction)"), Quantity, an Offset account ("The other side of this adjustment's entry"), and a required Reason; a note reads "Costed at the item's standard purchase price when posted"](/guide/inventory/new-stock-adjustment.jpg "The adjustment form — item, direction, quantity, the offsetting account, and a reason you must give")

## Filling it in

- **Item** and **Quantity** — which item, and how many units.
- **Adjustment type** — _stock increase_ (found stock / correction) or _decrease / write-off_.
- **Offset account** — the _other_ side of the journal entry. An increase debits Inventory and
  credits this account; a write-off debits this account (usually a loss or expense account)
  and credits Inventory. Choosing it deliberately is what keeps the adjustment honest.
- **Reason** — required. This is the audit note; "stocktake variance, warehouse B" beats a
  blank.

Adjustments are **costed at the item's standard purchase price** at the moment they post.

## What posts

Issuing the adjustment posts a journal entry and a
[stock movement](/guide/items/stock-movements) on the item's ledger, tagged `STOCK
ADJUSTMENT`. Like every posted document, it's immutable — a wrong adjustment is fixed with an
opposite adjustment, not an edit.

## See also

- [How stock movements work](/guide/items/stock-movements)
- [Inventory valuation report](/guide/inventory/inventory-valuation-report)

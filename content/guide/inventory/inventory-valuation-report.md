---
title: "Inventory valuation report and its reconciliation banner"
description: "What your stock is worth, item by item, as at a date — and the banner that confirms it agrees with the ledger."
order: 2
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/items/valuation-methods
  - /guide/inventory/stock-adjustments
  - /guide/bookkeeping-basics/reading-the-core-reports
  - /guide/manufacturing/production-orders
---

## What it answers

_"What is my stock worth right now, and which items make up that value?"_ The inventory
valuation report lists every stock item with its quantity on hand, its unit cost, and the
resulting value, as at a date you choose.

## Where to find it

**Inventory → Inventory valuation.**

![The Inventory Valuation report "as at 8/31/2026": a green banner reading "Reconciles to account 1500 (Inventory) in the trial balance.", then a table with Item, Quantity, Unit cost and Value columns — INV-002 Cables, 5 units at 1,049.47 = 5,247.35 — and a Total row of 5,247.35](/guide/inventory/inventory-valuation-report.jpg "The valuation report — per-item stock value, with a banner confirming it ties to the ledger")

- **Quantity** — units on hand, derived from the item's
  [stock movements](/guide/items/stock-movements).
- **Unit cost** — per the item's [valuation method](/guide/items/valuation-methods) (weighted
  average or FIFO).
- **Value** — quantity × unit cost. The **Total** is your whole stock value.

## The reconciliation banner

The green banner — _"Reconciles to account 1500 (Inventory) in the trial balance"_ — is the
report checking itself against the ledger.

The valuation report adds up **stock movements**. The Inventory line on the
[Trial Balance](/guide/bookkeeping-basics/reading-the-core-reports) is the balance of **GL
account 1500**, built from journal entries. Those are two different paths to the same number,
and in the example both come to **LKR 5,247.35**. The banner says they match.

**If they ever didn't**, the banner turns into a warning with the difference — a signal that a
stock movement posted without its matching ledger entry, or vice versa, which should never
happen but is exactly the kind of thing you want caught immediately rather than at year-end.

If you use the [manufacturing module](/guide/manufacturing/overview) and split stock across
separate **Raw Materials** and **Finished Goods** inventory accounts, the banner reconciles the
report against **all** of your inventory accounts together — its wording is
_"Reconciles to the inventory accounts in the trial balance"_. Nothing else about the check
changes.

## Common questions

**The report value looks high/low.** Check the _as-at date_ — it's a point-in-time snapshot.
Then drill into an item's ledger to see the movements behind its quantity and cost.

**An item shows negative stock.** A sale posted the item below zero (see
[stock movements](/guide/items/stock-movements)). The valuation still ties to the ledger; the
negative quantity is the thing to fix, usually with a purchase or an adjustment.

## See also

- [Valuation method: weighted average vs. FIFO](/guide/items/valuation-methods)
- [Stock adjustments](/guide/inventory/stock-adjustments)
- [Reading a Trial Balance, a P&L, and a Balance Sheet](/guide/bookkeeping-basics/reading-the-core-reports)

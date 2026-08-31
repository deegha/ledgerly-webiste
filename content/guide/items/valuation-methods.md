---
title: "Valuation method: weighted average vs. FIFO"
description: "How Ledgerly decides what a unit costs when you sell it — set per item, fixed once the item has movements."
order: 3
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/items/stock-movements
  - /guide/inventory/inventory-valuation-report
---

## The problem it solves

You bought Cables at LKR 800 each in April and LKR 1,000 each in July. In August you sell one.
**What did that one cost you?** The answer changes your cost of sales, your gross profit, and
the value of the stock still on the shelf — so Ledgerly needs a consistent rule. That rule is
the item's **valuation method**, chosen on the item form:

![An inventory item's account mapping showing a "Valuation method" field set to Weighted average](/guide/items/valuation-method.jpg "Valuation method is a per-item setting — Weighted average or FIFO")

## Weighted average (the default)

Every unit on hand is valued at the **running average cost** of everything currently in stock.
Buy more at a different price and the average shifts; sell some and it stays the same.

You can watch this on an item's ledger. After Cables were bought at 800 and then at 1,000, and
some were adjusted out, the running unit cost had settled around **LKR 858–1,049** — a blend,
never exactly either purchase price:

![An item ledger for Cables showing purchases at 800 and 1,000, and later movements valued at blended unit costs like 858.33, 884.57 and 1,049.47](/guide/items/item-ledger.jpg "Weighted average — each movement's unit cost is the running blend, not a specific purchase")

Simple, smooth, and the common choice for interchangeable goods.

## FIFO (first in, first out)

Units are consumed **in the order they arrived** — the oldest cost first. Sell one Cable and
it costs 800 (April stock) until the April stock runs out, then it costs 1,000. Stock on hand
is always valued at the most recent purchase costs.

FIFO tracks closer to physical reality for perishable or batch-tracked goods, at the cost of a
little more complexity in the ledger.

## The rule: fixed once it moves

A valuation method is **locked as soon as the item has any stock movement**. Switching it
mid-life would re-value history and make the cost-of-sales already posted wrong. Decide it
when you create the item; if you must change it, retire the item and start a new one.

## See also

- [How stock movements work](/guide/items/stock-movements)
- [Inventory valuation report](/guide/inventory/inventory-valuation-report)

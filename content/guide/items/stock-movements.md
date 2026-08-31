---
title: "How stock movements work"
description: "Every change to a stock item's quantity is a dated movement tied to a document — which is why there's no field to type a quantity-on-hand into."
order: 4
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/items/valuation-methods
  - /guide/inventory/stock-adjustments
  - /guide/bookkeeping-basics/everything-traces-to-entries
---

## Quantity on hand is derived, never typed

There is no "quantity on hand" field you can edit on an inventory item. The number you see is
**calculated** — it's the sum of every **stock movement** for that item. Each movement is
dated, has a cause, and links to the document that created it.

If you could just type a new quantity, the number would drift away from the transactions
behind it, and the drift would surface — embarrassingly — during an audit. So you can't. You
change stock by recording the thing that actually moved it.

## The item ledger

**Sales → Items → (an item) → View ledger** shows every movement, with a running quantity and
value:

![The item ledger for Cables: a table of movements — Opening balance, Sale, Sale return, Purchase, Purchase return, Write off, Adjustment in — each with its quantity change, unit cost, running balance quantity and value, a source (Invoice, Credit note, Bill, Debit note, Stock adjustment) and a link to the journal entry](/guide/items/item-ledger.jpg "Every movement — what changed it, by how much, at what cost, and the entry it posted")

Reading a row: the **Qty** is the change, **Balance qty** is the running total, **Unit cost**
is what each unit was valued at (per the [valuation
method](/guide/items/valuation-methods)), **Balance value** is stock value after the move, and
**Source** / **Journal entry** are links straight to what caused it.

## What creates a movement

| Movement                      | Caused by                                                        |
| ----------------------------- | ---------------------------------------------------------------- |
| **Purchase**                  | a [bill](/guide/purchases/recording-a-bill) line for the item    |
| **Purchase return**           | a [debit note](/guide/purchases/debit-notes) against that bill   |
| **Sale**                      | an [invoice](/guide/sales/creating-an-invoice) line for the item |
| **Sale return**               | a [credit note](/guide/sales/credit-notes) against that invoice  |
| **Adjustment in / Write off** | a [stock adjustment](/guide/inventory/stock-adjustments)         |
| **Opening balance**           | the item's starting quantity, set at creation                    |

Every one of these also posts to the general ledger — moving value between Inventory, Cost of
Sales, and the other accounts — which is why the numbers on the
[Inventory valuation report](/guide/inventory/inventory-valuation-report) always tie to GL
account 1500.

## Negative stock

If a sale would take an item below zero, what happens depends on your organization's
negative-stock policy: **BLOCK** (the default — you can save the invoice as a draft but not
issue it, and Ledgerly points you at recording the missing purchase or a stock adjustment), or
**ALLOW_AND_FLAG** (it posts, with a warning, and the movement is marked for the exceptions
report). In the ledger above, the `-3` balance row in red is a movement that posted at
negative stock.

## See also

- [Valuation method: weighted average vs. FIFO](/guide/items/valuation-methods)
- [Stock adjustments](/guide/inventory/stock-adjustments)
- [Why every report traces back to the same entries](/guide/bookkeeping-basics/everything-traces-to-entries)

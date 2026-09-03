---
title: "Production orders"
description: "Running a build: consuming the components from stock, adding the finished units, and the single journal entry that moves the value across."
order: 3
verifiedAgainst: "invoicegen @ 2026-09-03, Ceylon Spice Traders"
related:
  - /guide/manufacturing/bills-of-materials
  - /guide/manufacturing/voiding-a-production-order
  - /guide/items/stock-movements
  - /guide/bookkeeping-basics/journal-entries-and-posting
---

## What it is

A **production order** is the document that runs one build. Issuing it:

- **consumes** each component from stock at its current cost,
- **adds** the finished units to stock at the total build cost divided by the quantity made,
- **posts one journal entry** that moves that value from the components' inventory accounts to
  the finished good's inventory account.

It behaves like every other posting document: a draft is editable, an issued one is locked, it
needs an open [accounting period](/guide/accounting/accounting-periods), and it takes a gapless
**`MFG-` number** when it's issued.

## Creating one

**Manufacturing → Production orders → New.**

- **Finished item** — only items that have a [bill of
  materials](/guide/manufacturing/bills-of-materials) appear here.
- **Quantity to produce** — how many finished units this run makes.
- **Order date** — the date the build happened; the journal entry posts on this date.

The **Components consumed** table fills itself from the recipe, scaled to your quantity and
inflated by any wastage. You can edit a line's quantity or remove one for this run without
touching the recipe. **Reset to recipe** puts it back.

Below the table:

- **Estimated cost per unit** and **Total** — the material cost of the run at current prices.
- **On issue, this posts** — a preview of the exact journal entry: a credit to each
  component's inventory account, and one debit to the finished good's inventory account for
  the total. It shows **Balanced** when debits equal credits, which they always will.

Save to create the draft. A draft has no number, moves no stock, and posts nothing.

## Issuing

On the draft's detail page: **Edit**, **Discard**, or **Issue**. Issuing asks you to confirm,
then:

1. **Allocates the `MFG-` number.**
2. **Costs every component** at its current [valuation
   method](/guide/items/valuation-methods) — weighted average or FIFO — and freezes those unit
   costs onto the order.
3. **Posts the journal entry** (source: Manufacturing). For example, a run costing LKR 10,000
   of materials posts `Dr Finished Goods Inventory 10,000 / Cr Raw Materials Inventory 10,000`.
   If your components and finished goods share one inventory account, both sides name that
   account and the entry nets to zero — still correct, just less visible.
4. **Writes the stock movements** — a **Consumed (production)** movement for each component and
   a **Manufactured** movement for the finished good. The finished good's new weighted-average
   cost is the build cost per unit.

After that the order is immutable. Correct it with a
[void](/guide/manufacturing/voiding-a-production-order).

## When a build is blocked

If a component doesn't have enough stock on hand, issuing is **rejected** with the shortfall,
in line with your organisation's negative-stock policy. Record the [supplier
bill](/guide/purchases/recording-a-bill) that brings the material in first — that's also what
gives the component a cost.

## Where it shows up

- The finished good and each component's [item ledger](/guide/items/stock-movements) — the new
  movement rows link back to the production order and its journal entry.
- The [inventory valuation report](/guide/inventory/inventory-valuation-report) — the finished
  good now carries stock and value.
- The journal report — filter by the **Manufacturing** source.

## See also

- [Bills of materials](/guide/manufacturing/bills-of-materials)
- [Voiding a production order](/guide/manufacturing/voiding-a-production-order)
- [How stock movements work](/guide/items/stock-movements)

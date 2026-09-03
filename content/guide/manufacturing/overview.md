---
title: "How manufacturing works in Ledgerly"
description: "An optional module for businesses that buy raw materials, turn them into finished goods, and sell those — with the stock and the ledger kept in step automatically."
order: 1
verifiedAgainst: "invoicegen @ 2026-09-03, Ceylon Spice Traders"
related:
  - /guide/manufacturing/bills-of-materials
  - /guide/manufacturing/production-orders
  - /guide/items/valuation-methods
---

## Who this is for

If you **buy materials, make something from them, and sell the result** — cloth into shirts,
spices into blends, components into assemblies — the manufacturing module keeps your stock and
your accounts in step through that transformation. Without it, the raw materials sit in
inventory forever and the finished goods never appear; with it, one document moves the value
across.

It is **an optional module**. If you don't manufacture, you'll never see it, and nothing about
the rest of Ledgerly changes.

## Getting it turned on

Manufacturing is enabled per organisation by the Ledgerly team. Ask your account contact to
switch it on. Once it is:

- a **Manufacturing** group appears in the left sidebar, with **Production orders**;
- inventory items gain a **Bill of materials** section on their detail page.

Turning it off later hides the module and stops you creating new production orders — but it
never deletes a recipe, a past production order, or its journal entry, and it never changes how
your existing stock is valued.

## The two documents

Manufacturing adds exactly two things to the app:

1. **A bill of materials (BOM)** — the recipe for a finished good: which items it's made from
   and how much of each. It's a template. It never touches the ledger.
   See [Bills of materials](/guide/manufacturing/bills-of-materials).

2. **A production order** — the document that actually runs a build. It consumes the
   components from stock, adds the finished units to stock, and posts one journal entry that
   moves the value from raw materials to finished goods.
   See [Production orders](/guide/manufacturing/production-orders).

## How it fits the rest of Ledgerly

Nothing here is a separate accounting world. Raw materials and finished goods are ordinary
**inventory items** — you buy the materials with a normal [supplier
bill](/guide/purchases/recording-a-bill), which is what gives them a cost. A production order
then uses that cost. When you later sell a finished good with a normal
[invoice](/guide/sales/issuing-an-invoice), it relieves cost of sales at the manufactured
cost, through the same path every stock sale uses.

The result shows up everywhere stock does: the [item
ledger](/guide/items/stock-movements), the [inventory valuation
report](/guide/inventory/inventory-valuation-report), and the journal report.

## What this version does and doesn't do

**It does:** consume multiple components per build, cost them at each item's current
[valuation method](/guide/items/valuation-methods), block a build when a component is short on
stock, freeze the numbers on issue, and let you reverse a build with a void.

**It doesn't yet:** capture labour or overhead as part of the build cost (a build capitalises
material cost only), track a separate work-in-progress stage, or handle a run that yields less
than planned. Those are on the roadmap.

## See also

- [Bills of materials](/guide/manufacturing/bills-of-materials)
- [Production orders](/guide/manufacturing/production-orders)
- [Voiding a production order](/guide/manufacturing/voiding-a-production-order)

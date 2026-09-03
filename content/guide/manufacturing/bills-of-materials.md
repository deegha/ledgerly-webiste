---
title: "Bills of materials (recipes)"
description: "Telling Ledgerly what a finished good is made from — the components, the quantities, and the wastage — so a production order can build it."
order: 2
verifiedAgainst: "invoicegen @ 2026-09-03, Ceylon Spice Traders"
related:
  - /guide/manufacturing/production-orders
  - /guide/items/adding-an-item
  - /guide/items/valuation-methods
---

## What it is

A **bill of materials** (BOM) is a recipe attached to one finished-good item. It lists the
other items that go into making it and how much of each. It's a template — creating or editing
one posts nothing to the ledger. A [production
order](/guide/manufacturing/production-orders) reads the recipe to know what to consume.

There's no separate "raw material" item type. A raw material is just an inventory item that
happens to appear in a recipe; a finished good is just an inventory item that happens to have
one.

## Where to find it

Open the finished-good item (**Items → the item**). If the item's **Type** is **Inventory**
and manufacturing is enabled, a **Bill of materials** card sits below the item form. Turn on
**This item is manufactured** to reveal the recipe editor.

New inventory items land on their own page straight after you save them, so the card is right
there.

## Building the recipe

- **Recipe yields** — how many finished units one batch of the component quantities below
  produces. Leave it at **1** and the quantities are simply "per finished unit". Set it to
  **100** and enter the quantities for a batch of 100.
- **Component** — pick an inventory item. It has to be an **active Inventory item**, and it
  can't be the finished good itself.
- **Qty per batch** — how much of that component one batch consumes.
- **Wastage** — an optional allowance for scrap, entered as a fraction (`0.02` = 2%). A
  production order consumes `qty × (1 + wastage)`.
- **Unit cost** — shown for reference: the component's current weighted-average cost.

As you edit, the card shows a live **Estimated unit cost** — the sum of each component's
`qty × current unit cost`, divided by the recipe yield. It's an estimate because the real
figure is locked in only when a production order is issued, using the costs at that moment.

## Editing a recipe later

A BOM is always editable. Changing it affects **future** production orders only — every
production order copies the recipe into its own lines when you create it, so past builds keep
the costs they were issued with. There's no version history; the current recipe is the
recipe.

## Loops are blocked

If a component is itself manufactured, that's fine — but the recipe can't form a loop. If
"Shirt" is made from "Panel" and you then try to make "Panel" from "Shirt", Ledgerly rejects
it with a clear message. For a multi-level product you build the sub-assembly with its own
production order first, then use it as a component.

## See also

- [Production orders](/guide/manufacturing/production-orders)
- [Adding an item](/guide/items/adding-an-item)
- [Valuation method: weighted average vs. FIFO](/guide/items/valuation-methods)

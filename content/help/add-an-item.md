---
title: "How to add an item — and choosing inventory vs. service"
description: "The item type you pick determines whether stock and costing even apply."
category: "Getting started"
---

## Create the item

Go to **Sales → Items** and click **New item**. Give it a code (or let one generate), a name, a unit of measure, and a selling price.

## Inventory vs. service — this choice matters

The **type** you pick isn't cosmetic:

- **Inventory** items track stock on hand, and every sale or purchase draws down or adds to that stock through a proper stock movement — never a mutable "quantity" field that can drift from reality. You'll also choose a **costing method** (weighted average or FIFO) for the item, which determines how cost of goods sold is calculated when it sells.
- **Service** items have no stock to track. A sale posts revenue with no corresponding COGS entry, because there's nothing to value — a consulting hour doesn't have a unit cost sitting in a warehouse.

Picking Inventory for something you don't actually stock (or Service for something you do) doesn't just look wrong on the item list — it changes what gets posted every time the item is sold.

## Setting an opening stock balance

For a new inventory item that already has stock on hand when you start using Ledgerly, record an opening stock movement rather than editing a quantity field directly. This gives the item a real cost basis to draw from on its very first sale, instead of starting from zero.

## Deactivating an item

Items that are discontinued should be marked **inactive** rather than deleted — this keeps historical invoices and bills that reference the item intact and readable, while hiding it from new document line-item pickers.

_See also: [FIFO vs. weighted average](/blog/fifo-vs-weighted-average) on the blog, for how to choose a costing method._

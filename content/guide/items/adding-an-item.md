---
title: "Adding an item, and Inventory vs. Service"
description: "The one choice that shapes everything else about an item — whether it's stock you hold, or a service you perform."
order: 1
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/items/item-defaults-and-accounts
  - /guide/items/stock-movements
  - /guide/manufacturing/bills-of-materials
---

## What an item is

An item is a reusable line you put on invoices and bills — a product, or a service. Setting
one up once means its price, tax code, and the accounts it posts to are filled in every time
you use it. Items get a gapless **`ITM-` number** (the examples here predate that and use
custom codes).

## Where to find it

**Sales → Items → New item.**

![The Items list: Code, Name, Type (Inventory / Service badges), Unit, Selling price and "Stock on hand" columns — stock shows a number for inventory items and a dash for services](/guide/items/items-list.jpg "Sales → Items — inventory items carry a stock-on-hand figure; services don't")

## Type comes first

The **Type** selector is the first real decision, and it _drives which fields appear below_:

![The new item form with Type set to Service: item code, name, unit, currency, selling and purchase price, "Sold to customers" / "Purchased from suppliers" checkboxes, and an Account mapping section with only an Income account](/guide/items/new-item-service.jpg "A Service item — just an income account; no stock, no cost-of-sales, no valuation method")

- **Service** — something you _do_: consulting, a repair, a subscription. It has a price and
  an income account, and that's about it. There's no quantity to track.
- **Inventory** — something you _hold_: goods in a warehouse. On top of the service fields it
  adds a **cost-of-sales account**, an **inventory account**, and a
  **[valuation method](/guide/items/valuation-methods)** — because Ledgerly now has to track
  how many you have and what they're worth.

Choose based on whether you keep a countable stock of the thing. If you buy-to-order and never
hold any, Service is usually right even for a physical product.

## Type locks once used

Once an item has appeared on a posted document, **its type can't change** — the form shows it
as _"Locked — this item has transactions"_. An inventory item has stock movements and ledger
entries that assume it's stock; flipping it to a service would strand them. If you got it
wrong, make the item inactive and create a new one.

## Sold, purchased, or both

**Sold to customers** and **Purchased from suppliers** control where the item shows up. A
resale product is both; a service you only sell is sold-only; a raw material you only buy is
purchased-only.

## See also

- [Default price, tax code, and account mapping](/guide/items/item-defaults-and-accounts)
- [How stock movements work](/guide/items/stock-movements)

---
title: "Introducing product variants: one product, every size and colour"
description: "Stop creating a disconnected item for every size and colour combination. Define the product once, generate every variant in one pass, and browse them grouped everywhere they appear."
date: "2026-09-20"
image: "/images/blog/introducing-item-variants.svg"
---

If you sell a T-shirt in six sizes and three colours, you've had one option in Ledgerly until now: create eighteen items, one at a time, each with its own code and price and account mapping, with nothing tying them together. Finding "everything in Blue" meant scanning the whole item list by eye. Adding a new colour meant repeating the setup from scratch.

That's fixed. Item variants are an optional module — if you don't need them, you'll never see them — that let you define a **product** once and generate every option it comes in as a single pass.

## A product is a label, not a new kind of item

This is the whole idea in one sentence: **a variant is an ordinary item.** "Classic Polo Shirt — Medium / Blue" has its own price, its own tax code, its own income and inventory accounts, its own stock. A **product** — "Classic Polo Shirt" — is just the grouping label above it. It never has a price, never appears on an invoice, never holds stock. Only its variants do.

That's why turning this on changes nothing about how selling or stocking works. A variant posts to the ledger, gets its cost tracked, and shows up on every report exactly the way any item you built by hand always has.

## Set up your attributes once, reuse them everywhere

**Settings → Attribute types** is where you define the vocabulary — "Size" with its five values, "Colour" with its three, or whatever actually distinguishes what you sell. Every product that needs "Size" reuses the same list; you're not retyping "Small, Medium, Large" for every new product line.

## Generate a whole product line in one pass

Create the product — just a name and an optional code, nothing transactional. Then the generator does the rest: check the attribute types and values this product actually comes in, fill in the shared defaults (type, price, accounts) once, and Ledgerly works out every combination for you. Three sizes and two colours becomes six rows, each with a suggested name and item code, each editable, each one you can uncheck if you don't want it.

Click **Generate variants**, and every checked row becomes its own real item — priced, mapped, and ready to sell — in the time it used to take to create just one.

## Grouped everywhere you'd look for them

The item list gains a Product column, a "group by product" option, and an attribute filter — "show me everything in Blue" is one selection, across every product that has a Blue variant, not a manual scan. Every line picker on invoices, quotes, and bills groups a product's variants under its name too, so you search once and pick the exact size and colour from underneath it.

## Nothing about what already exists changes

Standalone items you've always had keep working exactly as they do today — variants are additive, never a migration. And a product remembers what type its variants already are, so adding a new colour next season doesn't mean re-deciding Inventory versus Service from scratch.

---

To have item variants switched on for your organisation, talk to your Ledgerly contact.

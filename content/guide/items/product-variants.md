---
title: "Products and variants: selling one item in many options"
description: "Group related items — a T-shirt in every size and colour, a service in every duration — under one product, and generate every combination at once instead of creating items one at a time."
order: 5
verifiedAgainst: "invoicegen @ 2026-09-20, Ceylon Spice Traders"
related:
  - /guide/items/adding-an-item
  - /guide/items/item-defaults-and-accounts
  - /guide/sales/creating-an-invoice
---

## Who this is for

If you sell the same thing in several options — a shirt in six sizes, a piece of furniture in
three finishes, a treatment in three durations — variants save you from creating each one as a
disconnected item with no relationship between them. You define the **product** once ("Classic
Polo Shirt"), pick the attributes that distinguish its options ("Size", "Colour"), and Ledgerly
generates one properly priced, properly mapped item per combination.

It is **an optional module**. If you don't need it, you'll never see it, and nothing about the
rest of Ledgerly changes.

## The key idea: a variant is an ordinary item

This is the part worth understanding before anything else, because it explains almost everything
about how the feature behaves: **a variant is not a new kind of record.** "Classic Polo Shirt —
Medium / Blue" is a completely ordinary item — it has its own price, its own tax code, its own
income and inventory accounts, and its own stock. A **product** ("Classic Polo Shirt") is just a
label that groups a set of these items together for browsing and bulk creation. It never appears
on an invoice itself, never carries a price, and never holds stock — only its variants do.

That's why generating variants doesn't change how selling or stocking them works. A variant posts
to the ledger, gets its cost tracked, and shows up on reports exactly the way any item you created
one at a time always has.

## Getting it turned on

Item variants are enabled per organisation by the Ledgerly team. Ask your account contact to
switch it on. Once it is, an **Attribute types** tab appears under **Settings**, and a
**Products** button appears next to **New item** on the Items page.

## Step 1 — Set up your attribute types

Attribute types are the reusable vocabulary every product draws from — "Size", "Colour",
"Duration", whatever fits what you sell. You define each one once, with its list of values, and
every product that needs it reuses the same list rather than retyping "Small, Medium, Large"
every time.

Go to **Settings → Attribute types**. Give a type a name, then add its values underneath.

![The Attribute types settings tab: a "New attribute type" form, a Size card with values Small, Medium, Large, Extra Large, and 2 Extra Large, and a Colour card with values Red, Blue, and Green](/guide/items/attribute-types.jpg "Settings → Attribute types — reusable across every product")

You can deactivate a type or a value later (the toggle next to its name) without deleting it —
nothing that already used it changes, and it simply stops being offered on future generations.

## Step 2 — Create the product

Go to **Items → Products → New product**. A product only has a name, an optional catalogue code,
and a description — no price, no accounts, no stock. Those all belong to the variants you're
about to generate.

![The New product form: a required Name field, an optional Code field, and a Description textarea, with a "Create and add variants" button](/guide/items/new-product-form.jpg "Creating the product — just an identity, nothing transactional")

Saving takes you straight to the product's page, with an empty variants list and the generator
underneath it, ready to go.

![The Classic Polo Shirt product page right after creation: Details card, "Variants (0) — No variants yet", and the Generate variants panel below it with Size and Colour attribute-type checkboxes and a blank Type field](/guide/items/product-empty.jpg "A fresh product — no variants yet, and no type guessed for you")

## Step 3 — Generate the variants

This is the wizard that turns your chosen attributes into real, sellable items in one pass.

**Pick the attribute types and values that apply.** Check a type to reveal its values, then check
the ones this product actually comes in. Skip anything that doesn't apply — you don't have to use
every attribute type on every product.

![The Attribute types section with Size checked (Small, Medium, and Large selected; Extra Large and 2 Extra Large left unchecked) and Colour checked (Red and Blue selected)](/guide/items/product-attributes-selected.jpg "Only the sizes and colours this product actually comes in")

**Fill in the shared defaults.** These apply to every variant this run creates: item type
(Service, Inventory, or Non-inventory), unit of measure, a starting price, and the account
mapping — income account always, plus cost of sales, inventory account, and valuation method for
Inventory. Every field here works exactly like it does on the ordinary [item
form](/guide/items/adding-an-item) — nothing new to learn, just applied to several items at once.

![The Shared defaults section fully filled: Type INVENTORY, Unit of measure "Unit", Starting selling price 3500, Income account "4000 — Sales Revenue", Cost of sales account "5000 — Cost of Sales", Inventory account "1500 — Inventory", Valuation method WEIGHTED_AVERAGE](/guide/items/product-shared-defaults.jpg "One set of defaults, stamped onto every variant this run creates")

**Review the combinations.** Ledgerly works out every combination of the values you checked —
here, three sizes times two colours is six — and suggests a name and item code for each, built
from the product name and the attribute values. Uncheck any row you don't actually want, or
rename or recode one before it's created; both fields are editable right here.

![The combination checklist: 6 rows, each "Classic Polo Shirt — Small/Blue" style with a checkbox and an editable suggested item code like POLO-SMALL-RED, and a "Generate variants" button](/guide/items/product-combinations.jpg "Every combination, pre-named and pre-coded — edit anything before it's created")

Click **Generate variants**. Each checked row becomes its own item, with the shared defaults
applied and its own attribute values recorded against it.

![The Classic Polo Shirt product page after generation: "Variants (6)" table listing all six size/colour combinations, each with its own code, name, LKR 3,500.00 selling price, and Active status](/guide/items/product-variants-generated.jpg "Six ordinary items, created in one pass — each independently editable from here on")

## What you get afterward

Every generated row is a completely ordinary item from this point on. Open one from the table and
you'll find the same edit page any item has — change its price, its stock, or its accounts
without affecting its siblings. Ledgerly remembers what type this product's variants already are:
the next time you open the generator here, the Type field starts on whatever they already are,
instead of resetting — so you can add a new colour six months later without re-deciding Inventory
vs. Service each time.

## Where variants show up

**On the item list.** Once any item belongs to a product, `/items` gains a **Product** column, a
**Group by product** option that sorts variants next to each other, and an attribute filter built
from whatever values are actually in use — so "show me everything in Blue" is one selection,
across every product that has a Blue variant.

![The Items list filtered to Type "INVENTORY" and grouped by product, showing three products' variants together: Back Flip T Shirt, Black Pants, and Classic Polo Shirt](/guide/items/items-list-inventory-grouped.jpg "Grouped by product — variants of the same product sit together")

![The Items list with the attribute filter set to "Colour: Blue": three Classic Polo Shirt rows and one Shoes row, all Blue, all INVENTORY](/guide/items/items-list-colour-filter.jpg "One filter, narrowing across every product that has a Blue variant")

**On every line item picker** — invoices, quotes, bills, credit notes, debit notes. Search for the
product name and its variants appear grouped under a header, labelled by their attributes rather
than repeating the product name on every row.

![The item picker on a new invoice line, searched for "polo": a CLASSIC POLO SHIRT header above six variant rows, each showing its code, size/colour label, an INVENTORY badge, and its price](/guide/items/item-picker-grouped.jpg "Grouped in the picker too — pick the exact variant, not the product")

Selecting one works exactly like selecting any item: it fills in the description, price, and tax
code for that line.

![An invoice line with POLO-MEDIUM-BLUE selected: description "Classic Polo Shirt — Medium / Blue", unit price LKR 3,500, and a warning "Only 0 available, requested 1 — record a purchase bill or raise a stock adjustment first"](/guide/items/invoice-line-selected.jpg "Selected like any item — including the same negative-stock guard rail")

That warning isn't specific to variants — it's the same [negative-stock
block](/guide/inventory/stock-adjustments) every Inventory item has. This one shows it because the
variant was just generated and has never been stocked.

## Common questions

**Do I have to use both Size and Colour, or can a product have just one attribute?** Just one is
completely normal — a shirt with only sizes generates one variant per size, no colours involved.

**Can I add a new size or colour to a product later?** Yes. Open the product and run the generator
again with the new value checked — Ledgerly won't let you create a combination that already
exists, so you can safely re-run it to add just what's missing.

**What happens to a product's existing items if I deactivate it?** Deactivating a product with
active variants asks you first whether to deactivate them too. Nothing is ever deleted — a
deactivated item just stops appearing in pickers and defaults, the same as deactivating any item
by hand.

**Can variants of one product be a mix of Inventory and Service?** No — the generator only offers
one type per run, and all of a product's variants are expected to share it. If you need both, they
don't belong under the same product.

**Does adding variants change how anything posts?** No. A variant posts, values stock, and reports
exactly like any item you created one at a time — variants only change how you create and browse
items, never how they behave once they exist.

## See also

- [Adding an item, and Inventory vs. Service](/guide/items/adding-an-item)
- [Default price, tax code, and account mapping](/guide/items/item-defaults-and-accounts)
- [Creating and issuing an invoice](/guide/sales/creating-an-invoice)

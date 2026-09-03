---
title: "Introducing manufacturing: bills of materials and production orders"
description: "If you buy raw materials and sell what you make from them, Ledgerly now keeps the stock and the ledger in step across that transformation — with two documents and one journal entry."
date: "2026-09-15"
image: "/images/blog/introducing-manufacturing.svg"
---

Until now, Ledgerly handled businesses that buy things and sell things. If you buy things, _make_ something, and sell that, there was a gap: your raw materials sat in inventory indefinitely, and your finished goods never appeared. You could fake it with stock adjustments, but the cost never flowed through properly and your gross margin on the finished product was a guess.

That gap is now closed. Manufacturing is an optional module — if you don't make anything, you'll never see it — that adds exactly two documents to the app.

## A bill of materials is the recipe

Open a finished-good item and you'll find a **Bill of materials** section. Turn on "This item is manufactured" and list what it's made from: each component (any inventory item), how much of it one batch consumes, and an optional wastage allowance for scrap. As you type, Ledgerly shows a live estimated cost per finished unit, built from each component's current cost.

A recipe is a template. Creating or editing one posts nothing. It just tells a production order what to consume.

## A production order runs the build

**Manufacturing → Production orders → New.** Pick the finished item, enter how many you're making, and the components fill themselves in from the recipe — scaled to your quantity, adjusted for wastage, and fully editable for this particular run. A posting preview shows the exact journal entry before you commit.

Issue it, and three things happen together:

- each component is **consumed from stock** at its current weighted-average or FIFO cost;
- the finished units are **added to stock** at the total build cost divided by the quantity made;
- one **journal entry** posts, moving that value from the raw-materials inventory account to the finished-goods inventory account.

From that point the finished good has a real cost. Sell it on a normal invoice and cost of sales is relieved at that cost, automatically, the same way every stock sale works.

## Everything still traces

A production order takes a gapless `MFG-` number, needs an open accounting period, and is immutable once issued — corrected by a **void** that posts the exact reversing entry and puts every item's stock back, never by a silent edit. The build shows up in each item's ledger, in the inventory valuation report, and in the journal report under a Manufacturing source.

---

This first version capitalises **material cost** — labour and overhead as part of the build cost are coming next. To have manufacturing switched on for your organisation, talk to your Ledgerly contact.

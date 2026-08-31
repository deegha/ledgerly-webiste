---
title: "Fixed assets"
description: "Registering an asset, the depreciation schedule Ledgerly builds, posting each period's charge, and disposing of the asset."
order: 6
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/accounting/journals
  - /guide/reports/balance-sheet
---

## What this is

A **fixed asset** is something you own and use over years — a vehicle, equipment, fit-out. You
don't expense it when you buy it; you **depreciate** it — spreading its cost across its useful
life. The fixed assets module builds and posts that schedule so you don't do it by hand.

## Where to find it

**Accounting → Fixed assets.** The list shows each asset with its **cost**, current **net
book value**, and status.

## Registering an asset

**Register asset** captures the acquisition — name, category, **acquisition cost**,
acquisition date, **useful life**, **depreciation method** (straight line), and the accounts
for cost, accumulated depreciation, and the depreciation expense.

## The depreciation schedule

Ledgerly builds the full schedule up front:

![The fixed asset detail for FA-0001 Delivery Van (Disposed): acquisition cost 1,200,000, accumulated depreciation 180,000, net book value 0.00, method Straight line; a "Depreciation schedule" table with Period, Opening, Depreciation, Accumulated and Closing columns and a Status of Posted or Unposted per period](/guide/accounting/depreciation-schedule.jpg "The schedule — one row per period, each with opening/closing book value and a Posted / Unposted status")

Each row is one period: **opening** book value, the period's **depreciation** charge, the
running **accumulated** total, and the **closing** book value. In the example the van
depreciates LKR 90,000 a month.

## Posting the charge

A schedule row starts **Unposted**. Posting it (per period, or catching up several) posts a
journal entry — **Dr Depreciation Expense, Cr Accumulated Depreciation** — and flips the row
to **Posted**. That's what moves the charge into your P&L and reduces the asset's book value
on the [Balance Sheet](/guide/reports/balance-sheet).

## Disposal

When you sell or scrap the asset, **dispose** it: enter the **disposal date** and any
**proceeds**. Ledgerly posts an entry that removes the asset's cost and accumulated
depreciation from the books and records the **gain or loss** — proceeds minus net book value.
The example van was disposed for LKR 1,070,000 against a book value of 1,020,000, a **gain of
50,000**, and its status is now **Disposed** with a net book value of zero.

## See also

- [Journals and manual journal entries](/guide/accounting/journals)
- [Balance Sheet](/guide/reports/balance-sheet)

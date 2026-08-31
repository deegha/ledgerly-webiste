---
title: 'Accounting periods, and why you "close" one'
description: 'Your year is divided into months. "Closing" a month is how you declare its books finished and stop them from changing.'
order: 6
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/why-posted-entries-are-immutable
  - /guide/bookkeeping-basics/fiscal-years
  - /help/close-an-accounting-period
---

## What a period is

Ledgerly divides your [fiscal year](/guide/bookkeeping-basics/fiscal-years) into **12 monthly
periods**. Every journal entry falls into exactly one period, decided by its date. Periods are
how you talk about your books in chunks: "August's numbers", "the September VAT return".

![The Periods screen showing fiscal year FY2027-28 with its 12 monthly periods, each marked Open, each with "Soft close" and "Hard close" actions, and a "Close fiscal year" button](/guide/bookkeeping-basics/periods-open.jpg "A fiscal year's 12 periods, all open — each can be soft-closed or hard-closed")

## What "closing" means

Closing a period is you saying: **this month is done, stop letting things change.** Until you
close it, someone can still post a forgotten invoice into last month and quietly move numbers
you've already reported.

Ledgerly has two levels:

- **Soft close** — the period is finished for normal work, but an Accountant or Owner can
  still post an adjustment if something genuinely needs to go in that month. A soft close can
  be **reopened** (with a typed reason, which is recorded).
- **Hard close** — the period is sealed. Nothing posts into it, full stop. A hard close
  **cannot be undone** — Ledgerly makes you type the period's name to confirm, because it
  means it.

## Why close at all

- **So a reported number stays reported.** Once you've filed a VAT return or given the owner
  August's P&L, August shouldn't be able to move.
- **So corrections land in the right month.** If last month is closed, a correction you make
  today posts to _this_ month — which is where it belongs, because that's when you found it.
- **So the audit has firm ground.** An auditor works with closed periods; an open period is
  still a moving target.

## The normal rhythm

Each month, once you've reconciled the bank and checked the month looks right, **soft close**
it. Reopen only if you truly must. **Hard close** older periods once you're certain — often at
year end, or once a return is filed and final.

The step-by-step is in [Close an accounting period](/help/close-an-accounting-period).

## See also

- [Why a posted entry can't be edited](/guide/bookkeeping-basics/why-posted-entries-are-immutable)
- [What a fiscal year is](/guide/bookkeeping-basics/fiscal-years)

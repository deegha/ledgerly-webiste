---
title: "Period Close & Reopen History"
description: "Every period and fiscal-year close, hard close, and reopen — with who did it and, for reopens, why."
order: 11
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/accounting/accounting-periods
  - /guide/reports/audit-trail
---

## What it answers

_"When was this month closed, by whom — and has it ever been reopened, and why?"_ It's the
close/reopen lifecycle for every [period](/guide/accounting/accounting-periods) in every
fiscal year, on one screen.

![The Period Close & Reopen History for Acme Trading, grouped by fiscal year: FY2027-28 marked Open, a table with Period, Status, Closed (date and who), and "Last reopen" (date, who, and a quoted reason) columns; April 2027 shows a close and a reopen with reason "test reason"](/guide/reports/period-history.jpg "Period history — the close and reopen record for every period, reasons included")

## How to read it

- Grouped by **fiscal year**, one row per **period**.
- **Closed** — when it was closed (soft or hard) and by whom.
- **Last reopen** — if a soft-closed period was ever reopened: when, by whom, and the **typed
  reason** they had to give, shown in quotes.

A period that was hard-closed shows no reopen — a hard close can't be undone.

## Why it exists

Closing a period is a control; reopening one weakens it. This report makes every reopen
**visible and justified** — an auditor can see exactly which months moved after they were
first closed, and read the stated reason for each.

## What it reconciles to

It matches the current status on **Accounting → Periods**, with the full history the Periods
screen doesn't show.

## See also

- [Accounting periods: soft close, hard close, year-end](/guide/accounting/accounting-periods)
- [Audit Trail Report](/guide/reports/audit-trail)

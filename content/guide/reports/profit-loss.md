---
title: "Profit & Loss"
description: "Income minus expenses for a period, with an optional comparative period and budget variance."
order: 3
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/reading-the-core-reports
  - /guide/accounting/budgets
---

## What it answers

_"Did we make money over this span of time?"_ The P&L covers a **period** — a month, a
quarter, a fiscal year — and comes down to income minus expenses.

![The Profit & Loss for Acme Trading: an Income section (Sales Revenue 98,500.00, Other Income 5,000.00, Total income 103,500.00), an Expenses section (Cost of Sales 31,035.98, Operating Expenses 29,416.67, Total expenses 60,452.65), and Net profit 43,047.35](/guide/reports/profit-loss.jpg "Profit & Loss — total income, total expenses, net profit, for the chosen period")

## How to read it

- **Total income − total expenses = net profit.** Here, 103,500.00 − 60,452.65 =
  **43,047.35**.
- Every line is an income or expense account balance **for the chosen period only** — income
  and expense accounts don't carry forward year to year; at year end they're swept to zero and
  the profit rolls into equity.

## Worked example

The **Net profit of 43,047.35** appears unchanged as **Current Year Earnings** on the
[Balance Sheet](/guide/reports/balance-sheet) and on the
[Changes in Equity](/guide/reports/changes-in-equity) report — because all three read the same
income and expense journal lines.

## Parameters

Period start and end; a **Compare to prior period** toggle for side-by-side columns. For
actual-vs-plan, use the [budget variance report](/guide/accounting/budgets).

## What it reconciles to

The income and expense rows of the [Trial Balance](/guide/reports/trial-balance) for the same
dates.

## See also

- [Reading a Trial Balance, a P&L, and a Balance Sheet](/guide/bookkeeping-basics/reading-the-core-reports)
- [Budgets and the variance report](/guide/accounting/budgets)

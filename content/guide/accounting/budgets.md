---
title: "Budgets and the variance report"
description: "Setting an annual budget figure per account, and reading the actual-vs-budget report that grows against it."
order: 7
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/reports/profit-loss
  - /guide/bookkeeping-basics/fiscal-years
---

## What this is

A **budget** is your plan for the year, account by account. Once it's set, Ledgerly shows you
**actual vs. budget** as the year runs — where you're over, where you're under, by how much.

## Setting a budget

**Accounting → Budgets → Create budget.**

![The Create budget form: a Fiscal year selector, a Budget name, and an "Account budgets — annual total, spread evenly across the year's periods" section with an account selector and an "Annual amount" field, plus an "Add account" link](/guide/accounting/create-budget.jpg "Create budget — one annual figure per account, split evenly across the 12 periods")

- **Fiscal year** — the year this budget covers.
- **Budget name** — e.g. "FY2027-28 Operating Budget".
- **Account budgets** — pick an income or expense account, enter one **annual amount**, and
  **Add account** for the next. Ledgerly **spreads each annual figure evenly across the 12
  periods** — it's one number per account, not a 12-column grid. (A per-period grid is a noted
  future refinement.)

## Reading the variance report

Opening a budget shows the **actual vs. budget** comparison, split into Income and Expense:

![A budget's actual-vs-budget report: Income and Expense sections, each with Account, Budgeted, Actual, Variance and % columns; an expense row "6900 — Depreciation Expense" shows Budgeted 240,000, Actual 180,000, Variance -60,000, and -25.0%](/guide/accounting/budget-variance.jpg "Actual vs budget — the variance and percentage for every budgeted account")

- **Budgeted** — the account's annual budget (or the year-to-date share of it).
- **Actual** — what's actually posted to that account, from the ledger.
- **Variance** — Actual minus Budgeted. For an **expense**, a negative variance (spent less
  than planned) is good; for **income**, positive is good.
- **%** — the variance as a percentage of the budget.

The Actual column reads straight from journal lines, the same source as the
[Profit & Loss](/guide/reports/profit-loss) — so the variance report and the P&L always
agree on what an account has done.

## See also

- [Profit & Loss](/guide/reports/profit-loss)
- [What a fiscal year is](/guide/bookkeeping-basics/fiscal-years)

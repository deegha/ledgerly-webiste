---
title: "What a chart of accounts is"
description: "The named list of every account your transactions can be filed under, and why yours is numbered the way it is."
order: 3
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/debits-and-credits
  - /guide/accounting/chart-of-accounts
---

## What it is

Every journal entry files each of its lines under an **account** — "Trade Receivables",
"Sales Revenue", "Operating Expenses". The **chart of accounts** is the master list of every
account you're allowed to use. It's the vocabulary your books are written in.

Ledgerly seeds a standard Sri Lankan SME chart when your organization is created, so you're
never starting from a blank page.

![The Chart of accounts screen for Acme Trading: 111 accounts in a table with Code, Name, Type and Balance columns; asset accounts numbered from 1000, liability accounts from 2000, a lock icon on system accounts](/guide/bookkeeping-basics/chart-of-accounts.jpg "The seeded chart — grouped by type, numbered in bands, with system accounts locked")

## Why it's numbered in bands

Each account has a **code**, and the codes are grouped so the type is obvious at a glance:

| Code band | Type            | Examples                                                  |
| --------- | --------------- | --------------------------------------------------------- |
| 1000–1999 | **Assets**      | Cash in Hand, Bank Accounts, Trade Receivables, Inventory |
| 2000–2999 | **Liabilities** | Trade Payables, Output VAT, WHT Payable, EPF/ETF Payable  |
| 3000–3999 | **Equity**      | Share Capital, Retained Earnings                          |
| 4000–4999 | **Income**      | Sales Revenue, Other Income                               |
| 5000–6999 | **Expenses**    | Cost of Sales, Operating Expenses                         |

This isn't a rule of accounting — it's a widely used convention. It means anyone opening your
books, including an auditor, can read the structure without being told.

## System accounts are locked

Some accounts show a **lock icon**. These are the ones Ledgerly's posting logic refers to by
code — Trade Receivables (1200), Inventory (1500), Output VAT, and so on. You can't change
their code or type, because an invoice needs to know exactly where to post the receivable.
You _can_ rename them to match your own language.

## Making it yours

You can **add your own accounts** — a separate expense account per cost centre, a second bank
account, a category that matters to your business. What you generally shouldn't do is delete
seeded accounts or try to restructure the whole tree; add to it instead. Managing accounts is
covered in [the Accounting chapter](/guide/accounting/chart-of-accounts).

## Why the balances shown here always agree with the reports

The **Balance** column isn't a separate running total that could drift. It's the sum of that
account's journal lines — the same source the Trial Balance and Balance Sheet read. There is
only ever one number for an account's balance.

## See also

- [Debits and credits](/guide/bookkeeping-basics/debits-and-credits)
- [Chart of accounts: structure and hierarchy](/guide/accounting/chart-of-accounts)

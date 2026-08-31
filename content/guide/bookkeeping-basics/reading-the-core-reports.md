---
title: "Reading a Trial Balance, a P&L, and a Balance Sheet"
description: "The three reports you'll open most, what each one answers, and how to tell at a glance that they're right."
order: 8
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/debits-and-credits
  - /guide/bookkeeping-basics/everything-traces-to-entries
  - /guide/reports/trial-balance
---

## Three reports, one ledger

The Trial Balance, the Profit & Loss, and the Balance Sheet aren't three separate sets of
books. They're three **views of the same journal entries**, sliced differently. Once you can
read them, most of the other reports follow the same shape.

The figures below are all from the same organization (Acme Trading) as at the same date.

## Trial Balance — "is everything in balance?"

![The Trial Balance: every account with its balance in either the Debit or Credit column, a green "Balanced" banner, and a Total row reading 149,000.00 on both sides](/guide/bookkeeping-basics/trial-balance.jpg "Every account, one line each, debit or credit — and the two totals equal")

The Trial Balance lists **every account** with its balance, in the Debit or Credit column
depending on its type. It's not something you give to an owner or a bank — it's the
**check**. The one thing you look for:

> **Total debits = total credits.** Here, 149,000.00 each side, and the green banner confirms
> it.

If those totals ever disagree, stop — something is wrong at the entry level, and every other
report is built on it. In Ledgerly this shouldn't happen, but the check is there so you'd know
instantly if it did.

## Profit & Loss — "did we make money, over a span of time?"

![The Profit & Loss: Income section (Sales Revenue 98,500.00, Other Income 5,000.00, Total income 103,500.00), Expenses section (Cost of Sales 31,035.98, Operating Expenses 29,416.67, Total expenses 60,452.65), Net profit 43,047.35](/guide/bookkeeping-basics/profit-and-loss.jpg "Income minus expenses, for a chosen period")

The P&L covers a **period** — a month, a quarter, a fiscal year. It's just:

> **Total income − total expenses = net profit.**
> 103,500.00 − 60,452.65 = **43,047.35**.

Income and expense accounts only ever tell you about the chosen span; at year end they're
swept to zero and the profit rolls into equity. That's why a P&L always needs a "from" and a
"to" date.

## Balance Sheet — "what is the business worth, right now?"

![The Balance Sheet: Assets (Total 88,547.35), Liabilities (Total 29,500.00), Equity (Retained Earnings 16,000.00, Current Year Earnings 43,047.35, Total 59,047.35), with a green "Balanced — Assets = Liabilities + Equity" banner](/guide/bookkeeping-basics/balance-sheet.jpg "A snapshot as at one date — and the accounting equation, made visible")

The Balance Sheet is a **snapshot as at one date**, not a span. It shows the three sides of
the [accounting equation](/guide/bookkeeping-basics/double-entry):

> **Assets = Liabilities + Equity**
> 88,547.35 = 29,500.00 + 59,047.35.

The green banner is the same kind of check as the Trial Balance's: if assets didn't equal
liabilities plus equity, the books wouldn't balance.

## How they lock together

Notice **Current Year Earnings — 43,047.35** in the Balance Sheet's equity section. That's the
**exact net profit** from the P&L. The P&L explains _how_ equity changed over the period; the
Balance Sheet shows _where it landed_. They're two ends of the same thread — which is the
subject of [the next article](/guide/bookkeeping-basics/everything-traces-to-entries).

## See also

- [Debits and credits](/guide/bookkeeping-basics/debits-and-credits)
- [Why every report traces back to the same entries](/guide/bookkeeping-basics/everything-traces-to-entries)
- [The Trial Balance report in detail](/guide/reports/trial-balance)

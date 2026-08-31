---
title: "Chart of accounts: structure and adding your own"
description: "Managing the account tree — types and subtypes, parent grouping, and adding accounts without breaking the seeded ones."
order: 1
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/chart-of-accounts
  - /guide/accounting/journals
---

## What this is

The [chart of accounts](/guide/bookkeeping-basics/chart-of-accounts) is the list of every
account your transactions can post to. This page is about _managing_ it — the concept is in
Bookkeeping basics.

## Where to find it

**Accounting → Chart of accounts.**

![The Chart of accounts screen: a table of accounts with Code, Name, Type and Balance columns, a search box, a type filter, a "Show inactive" toggle, and a lock icon on system accounts](/guide/accounting/chart-of-accounts.jpg "Accounting → Chart of accounts — search, filter by type, and a lock on the accounts posting logic depends on")

Each row shows the account's **code**, **name**, **type**, and current **balance** (the sum of
its journal lines — the same number every report reads). Search, filter by type, or reveal
inactive accounts.

## Adding an account

**New account** opens a short form:

![The new account form: Code, Name, Type (Asset), Subtype (Current asset), an optional Parent account for "tree grouping only", Currency, and Description](/guide/accounting/new-account-form.jpg "The new account form — code, name, type, subtype, and an optional parent for grouping")

- **Code** — pick one in the right band for the type (1000s for assets, 2000s for
  liabilities, and so on) so the tree stays readable.
- **Type** and **Subtype** — Type is the big five (Asset / Liability / Equity / Income /
  Expense); Subtype refines it (e.g. _Current asset_). Type drives how debits and credits
  behave for this account.
- **Parent account** — optional, **for grouping only**. It nests the account under another in
  the tree view; it has no effect on posting or on balances.
- **Currency** — leave blank to use your base currency (the usual case).

## What you can and can't do

- **Add** your own accounts freely.
- **Rename** any account, including seeded and system ones.
- **Deactivate** an account you're not using (it must have a zero balance and no recent
  activity).
- You **can't change an account's code or type once it has postings**, and you **can't delete**
  an account that's ever been posted to — or **merge** two accounts. Plan the structure early;
  see the [first-week checklist](/guide/getting-started/first-week-checklist).

## System accounts

Accounts with a **lock icon** are referenced by Ledgerly's posting logic by code — Trade
Receivables (1200), Inventory (1500), Output VAT (2100), and so on. You can rename them; you
can't change their code or type, and you can't deactivate them.

## See also

- [What a chart of accounts is](/guide/bookkeeping-basics/chart-of-accounts)
- [Journals: manual journal entries](/guide/accounting/journals)

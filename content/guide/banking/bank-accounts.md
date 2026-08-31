---
title: "Linking a bank account"
description: "Connecting one of your GL bank or cash accounts to a real bank account, so you can import statements and reconcile."
order: 1
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/banking/importing-a-statement
  - /guide/banking/reconciling
---

## What this is

Your [chart of accounts](/guide/bookkeeping-basics/chart-of-accounts) already has bank and
cash accounts (1000, 1100). A **bank account** in the Banking section is a link between one of
those GL accounts and the details of a real-world account at a real bank — the bit that lets
you import statements and reconcile.

## Where to find it

**Banking → Bank accounts.**

![The Bank accounts screen: a table with Bank, Account, GL account, Currency and Actions (Transactions · Reconcile) columns showing one linked account; below, an "Add a bank account" form with GL account, Bank name, Account name, Account number, Branch and Currency fields](/guide/banking/bank-accounts.jpg "Banking → Bank accounts — each row links a GL account to a real bank account")

## Adding one

In **Add a bank account**:

- **GL account** — the Bank or Cash account this links to. Ledgerly only offers accounts of
  that type. This is the account every matched transaction already posts to.
- **Bank name**, **Account name**, **Account number**, **Branch** — the real account's
  details, used on reconciliation summaries and (optionally) on your
  [invoice template's payment instructions](/guide/settings/invoice-template).
- **Currency** — usually LKR; match the real account.

Once linked, the row gains two actions: **Transactions** (view and import statement lines) and
**Reconcile** (the [matcher](/guide/banking/reconciling)).

## Common questions

**Do I need this to record payments?** No — you can record customer and supplier payments
against any bank/cash GL account without linking it here. Linking is only needed to import
statements and reconcile.

**One GL account, two real bank accounts?** Give each real account its own GL account and link
them separately, so each reconciles against its own statement.

## See also

- [Importing a bank statement](/guide/banking/importing-a-statement)
- [Reconciling a bank account](/guide/banking/reconciling)

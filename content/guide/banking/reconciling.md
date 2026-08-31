---
title: "Reconciling a bank account"
description: "The two-pane matcher, what the difference figure means, and why you can't finish until it's zero."
order: 3
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/banking/importing-a-statement
  - /guide/banking/reconciliation-limits
  - /help/reconcile-a-bank-account
---

## What reconciling proves

Reconciling a bank account is confirming that **your ledger and the bank agree** — that every
line on the bank's statement corresponds to a transaction in your books, and nothing is
missing on either side. Do it every period, once the statement is in.

## Where to find it

**Banking → Bank accounts → Reconcile.**

![The Reconcile screen: a "Reconciliation summary" showing Statement balance, Ledger balance and a red Difference of -2,300.00, with a disabled "Complete reconciliation" button; below, two panes — "Statement lines" on the left (a "Bank charges" line for -150.00) and "Unmatched payments" on the right ("Nothing unmatched.") — with a "Match selected" button](/guide/banking/reconcile-matcher.jpg "The two-pane matcher — statement lines on the left, unmatched payments on the right, and the running difference up top")

## The two panes

- **Left — Statement lines:** rows from the imported statement that haven't been matched yet.
- **Right — Unmatched payments:** [customer receipts](/guide/sales/customer-payments) and
  [supplier payments](/guide/purchases/supplier-payments) in your ledger that haven't been
  tied to a statement line yet.

Select a line on the left and the payment on the right that it corresponds to, then **Match
selected**. They pair off and drop out of both panes.

## The difference, and "= 0"

The **Reconciliation summary** shows three numbers:

- **Statement balance** — the closing balance you entered on import.
- **Ledger balance** — what your books say the account holds.
- **Difference** — the gap between them.

Every correct match brings the difference closer to zero. **When the difference is zero**, the
statement and the ledger fully agree — every line accounted for, nothing unexplained. Only
then does **Complete reconciliation** unlock. A reconciliation can't be marked complete while
any difference remains, because a non-zero difference means something is genuinely unexplained.

## When the difference won't go to zero

- A payment exists in the bank but not your books → record it (a receipt, a payment, or a
  [direct expense](/guide/purchases/direct-expenses)), then match.
- A payment is in your books but not the bank → it hasn't cleared yet; leave it, it'll match
  next period.
- The opening or closing balance was keyed wrong on import → fix it on the Transactions
  screen.
- The difference is a **bank charge or interest** with no matching payment → these can't be
  matched here yet; see [what reconciliation doesn't
  cover](/guide/banking/reconciliation-limits).

## See also

- [Importing a bank statement](/guide/banking/importing-a-statement)
- [What reconciliation doesn't cover yet](/guide/banking/reconciliation-limits)
- [Reconcile a bank account (quick recipe)](/help/reconcile-a-bank-account)

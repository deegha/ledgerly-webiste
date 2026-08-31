---
title: "What reconciliation doesn't cover yet"
description: "Two deliberate limits in the current bank reconciliation — direct expenses aren't matchable, and there's no auto-matching."
order: 4
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/banking/reconciling
  - /guide/purchases/direct-expenses
---

## Why this page exists

Bank reconciliation in Ledgerly today does one job well — matching statement lines to payment
records — and deliberately leaves two things out. Knowing them up front saves you hunting for
buttons that aren't there.

## 1. Only payments can be matched, not direct expenses

The right-hand pane on the [Reconcile](/guide/banking/reconciling) screen is **Unmatched
payments** — [customer receipts](/guide/sales/customer-payments) and
[supplier payments](/guide/purchases/supplier-payments). That's the whole set of things a
statement line can be matched to.

A **[direct expense](/guide/purchases/direct-expenses)** paid straight from a bank account — a
bank charge, a card payment, interest — **is not matchable**. It's a real transaction in your
ledger, and it correctly affects the account balance, but the reconciliation screen won't pair
it with the corresponding statement line.

**What to do:** these still need to be _in the ledger_ so the account balance is right —
record them as direct expenses. On the reconciliation, a statement line for a bank charge will
stay unmatched, and you account for it as part of explaining the difference rather than by
pairing it off. For a clean period-end, record the direct expenses first, then reconcile the
payments.

## 2. No auto-matching

Matching is **entirely manual** — you select a statement line and the payment it corresponds
to, one pair at a time. Ledgerly doesn't suggest likely matches or match by amount and date
automatically.

For a handful of transactions a period this is quick. For high volume it's the part that takes
the time.

## Both are intentional

These aren't bugs — they're scoped-out features, chosen deliberately and documented as such.
They may be extended later; for now, plan your month-end around them.

## See also

- [Reconciling a bank account](/guide/banking/reconciling)
- [Recording a direct expense](/guide/purchases/direct-expenses)

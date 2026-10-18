---
title: 'Bank reconciliation explained: why "match to zero" matters'
description: "Most guides tell you to reconcile your bank account. Few explain why the difference has to land on exactly zero, and what a non-zero difference is actually telling you."
date: "2027-01-27"
image: "/images/blog/bank-reconciliation-match-to-zero.svg"
---

Bank reconciliation is the routine of checking your books against your bank statement. Every guide says to do it. Fewer explain the part that matters: the goal isn't "close enough" — it's that the difference between the two comes to **exactly zero**, and a difference that _won't_ go to zero is a signal, not a nuisance.

## What you're actually comparing

Two records of the same money:

- **Your books** — the bank account as your ledger shows it, built from every payment, receipt, and transfer you recorded.
- **The bank statement** — the bank's record of the same account.

They _should_ describe an identical set of movements. Reconciliation is going through both, ticking off every line that appears in both, and accounting for every line that appears in only one.

## Why the difference must be exactly zero

Because money is discrete. Every rupee that moved through that account either happened or didn't. There's no such thing as a genuine LKR 340 discrepancy — that 340 is a real transaction that one side recorded and the other didn't, or recorded differently. "Nearly reconciled" means you haven't found it yet.

A reconciliation that lands on zero is a positive statement: _every transaction in my books is confirmed by the bank, and every transaction on the bank statement is in my books._ That's why it's one of the first things an [auditor](/blog/sme-audit-requirements-sri-lanka) checks, and why lenders take reconciled books more seriously — the bank statement is external evidence, and a clean reconciliation ties your ledger to it.

## What a non-zero difference is telling you

Work the difference and it always resolves to one of a short list:

- **Timing.** A cheque you wrote hasn't cleared, or a deposit is in transit. Legitimate, temporary — these are _reconciling items_ you list and carry to next period, when they clear.
- **Something in your books, not on the statement.** A payment recorded twice, a receipt entered that never actually arrived, a typo in an amount.
- **Something on the statement, not in your books.** Bank charges, interest, a standing order, a direct debit, a customer payment straight to your account — real transactions you simply haven't entered yet. Enter them.
- **A wrong amount on one side.** LKR 4,500 recorded as LKR 5,400 — a transposition. The difference will be divisible by 9, a classic tell.
- **Wrong account.** A transaction posted to the wrong bank account, or to the wrong side.

Every one of these is worth knowing about. The forced discipline of driving the difference to zero is what surfaces them — if you accepted "close enough", the double-booked payment or the missing bank charge would just sit in your numbers.

## The routine

1. Get the statement for the period.
2. Match each statement line to a transaction in your books; tick both.
3. For unticked **statement** lines — enter them (charges, interest, auto-payments you'd missed).
4. For unticked **book** lines — decide: genuine timing difference (carry forward) or an error (fix it).
5. Confirm: opening balance + everything that cleared = closing balance per the statement, difference **0.00**.
6. Lock it. The reconciled period shouldn't be quietly editable afterward — that's the [immutability](/blog/what-immutable-means-in-accounting-software) principle applied to banking.

Do this every period and it takes minutes. Skip it for a year and it becomes the core of the [year-end scramble](/blog/year-end-bookkeeping-catch-up-cost).

## In Ledgerly

Ledgerly's [reconciliation](/guide/banking/reconciling) works from an [imported statement](/guide/banking/importing-a-statement): it proposes matches, you confirm them, and unmatched items on either side are surfaced so you can enter or correct them. The screen shows the running difference and won't let you finalise until it's zero — and once reconciled, the period is locked. "Match to zero" stops being a chore you talk yourself out of and becomes a two-minute confirmation.

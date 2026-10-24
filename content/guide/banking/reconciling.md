---
title: "Reconciling a bank account"
description: "The two-pane matcher, what the difference figure means, and why you can't finish until it's zero."
order: 3
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
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

![The Reconcile screen: a Reconciliation summary with Statement balance, Ledger balance, Uncleared in ledger (receipts and payments) and a Difference of 240,409.94, with Complete reconciliation disabled and the note "Complete needs a difference of exactly 0."; below, Statement lines on the left and Uncleared ledger entries on the right, one of each selected at −95,866.06, and a Match selected button](/guide/banking/reconcile-matcher.webp "The two-pane matcher — statement lines on the left, uncleared ledger entries on the right, and the running difference up top")

## The two panes

- **Left — Statement lines:** rows from imported statements that haven't been matched yet,
  with their signed amounts (money in positive, money out negative).
- **Right — Uncleared ledger entries:** every posted line on this bank's GL account that no
  statement line is matched to yet — [customer receipts](/guide/sales/customer-payments),
  [supplier payments](/guide/purchases/supplier-payments),
  [expenses](/guide/purchases/direct-expenses) and [manual journals](/guide/accounting/journals)
  (interest, transfers). Each shows its entry number, date and where it came from.

Select a line on the left and the ledger entry on the right that it corresponds to, then
**Match selected**. They pair off and drop out of both panes. Ledgerly refuses a pair whose
amounts or direction differ, and says why.

One statement line matches **one** ledger entry, and matching never creates an entry. If a
line has nothing to match, record the missing item first, then match it.

## The difference, and "= 0"

The **Reconciliation summary** shows:

- **Statement balance** — the closing balance of the latest imported statement.
- **Ledger balance** — what your books say the account holds at that statement's end date.
- **Uncleared in ledger** — receipts and payments in your books, up to that date, that no
  statement line is matched to yet.
- **Difference** — statement balance − (ledger balance − uncleared receipts + uncleared
  payments).

Every correct match moves the difference toward zero. **Complete reconciliation** unlocks only
when the difference is exactly zero **and** every statement line is matched; until then the
screen tells you which of the two is missing ("Complete needs a difference of exactly 0."). A
completed reconciliation can't be undone, and its lines can't be unmatched.

## When the difference won't go to zero

- A transaction is in the bank but not your books — a bank charge, interest, a card spend →
  record it (an [expense](/guide/purchases/direct-expenses) paid from this bank, a receipt, a
  payment, or a [manual journal](/guide/accounting/journals)), then match it.
- A transaction is in your books but not the bank → it hasn't cleared yet. Leave it; it stays
  in the right-hand pane and matches against a later statement.
- The opening or closing balance was keyed wrong on import → **Remove import** on the
  Transactions screen and import the statement again. See
  [Importing a bank statement](/guide/banking/importing-a-statement).
- You matched the wrong pair → **Unmatch** it on the Transactions screen, as long as the
  reconciliation isn't complete.

## See also

- [Importing a bank statement](/guide/banking/importing-a-statement)
- [What reconciliation doesn't cover yet](/guide/banking/reconciliation-limits)
- [Reconcile a bank account (quick recipe)](/help/reconcile-a-bank-account)

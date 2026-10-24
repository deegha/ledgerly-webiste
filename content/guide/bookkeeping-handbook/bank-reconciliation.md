---
title: "Reconciling the bank"
description: "How the Reconcile screen works, what the difference means, the matching rules, and the month-end routine that gets it to zero."
order: 11
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/banking/reconciling
  - /guide/bookkeeping-handbook/bank-statement-import
  - /help/reconcile-a-bank-account
---

## The Reconcile screen

**Banking → Bank accounts → Reconcile.**

- **Statement lines** (left): the imported statement lines that aren't matched yet, with their
  signed amounts (money in positive, money out negative).
- **Uncleared ledger entries** (right): every posted line on this bank's GL account that no
  statement line is matched to yet: supplier payments, customer receipts, **expenses**, **manual
  journals** (interest, transfers) and so on, each with its number, source, date and amount.
- **Reconciliation summary:** **Statement balance**, **Ledger balance**, **Uncleared in ledger**
  (receipts and payments) and the **Difference**.

**Difference = statement balance − (ledger balance − uncleared receipts + uncleared payments).**
Before you match anything, the whole statement movement is unexplained. Each correct match moves
the difference toward zero. A bank line the books don't have yet (a charge, interest) keeps it
off zero until you record it and match it. Uncleared items dated before the statement end, such as
a cheque you wrote that the bank hasn't paid yet, carry forward without blocking zero.

## Matching rules

Select one statement line and one ledger entry, then click **Match selected**. Ledgerly refuses
the match (and says why) unless:

- the amount is the **same**, in the bank account's currency;
- the **direction** is the same: money out with a payment or expense, money in with a receipt;
- the ledger entry is dated **on or before the statement end** (and after the account's last
  reconciled point);
- neither side is already matched.

One statement line matches **one** ledger entry. A single bank deposit made up of several
receipts can't be split across them, so record one receipt (or one journal) per bank line.

**Match** never creates a ledger entry. Record the missing item first, then match it.

Made a mistake? **Unmatch** the line from the **Transactions** screen, as long as the
reconciliation isn't complete.

## The routine

1. **Get the books complete for the period.** Every line on the statement must exist in
   Ledgerly, dated as on the statement:
   - supplier payments and customer receipts;
   - **expenses** for card spends and bank charges (Paid from = this bank);
   - **manual journals** for interest and transfers between your own accounts.
2. **Import the statement**, every line, with the real statement date, period, opening and
   closing balances (see [Importing a bank statement](/guide/bookkeeping-handbook/bank-statement-import)).
3. **Match** each statement line to its ledger entry. Check the reference and the date as well as
   the amount: the matcher shows both dates, and two items of the same amount are easy to swap.
4. **Read the Difference.**
   - Not zero, and statement lines are left with nothing to match: those are items missing from
     the books. Record them (step 1) and match them.
   - Not zero, and everything is matched: the ledger and the bank disagree before this period.
     Compare **Reports → General Ledger** for the bank account with the statement's opening
     balance. Never "plug" the gap with a journal without your accountant's agreement.
5. **Complete reconciliation** is enabled only when the difference is **exactly 0** and **every
   statement line is matched**. The screen tells you which condition isn't met yet.

After completing:

- the lines in that reconciliation can't be unmatched;
- a payment, receipt or expense matched to a statement line can't be voided;
- there's no undo.

## Where reconciling starts

For a bank account's first reconciliation, Ledgerly takes the ledger before the first statement to
agree with that statement's **opening balance**. That's why the bank's opening balance (see
[Setting up](/guide/bookkeeping-handbook/setting-up#7-opening-balances)) should equal the
statement's opening balance on the day after your cut-off, and why statements should be imported
in date order from there.

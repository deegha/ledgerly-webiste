---
title: "Importing a bank statement (CSV)"
description: "Loading your bank's statement export so its lines can be matched against what's in your ledger."
order: 2
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/banking/bank-accounts
  - /guide/banking/reconciling
---

## What this is

To reconcile, Ledgerly needs the bank's version of events — the **statement lines**. You bring
those in by importing the CSV your bank lets you download.

## Where to find it

**Banking → Bank accounts → Transactions** (on a linked account).

![The bank account transactions screen: a "Statement" card listing imported lines with Date, Description, Debit, Credit and a Matched / Unmatched status; below, an "Import a statement" section with a CSV file picker and fields for Statement date, Period start, Period end, Opening balance and Closing balance](/guide/banking/import-statement.jpg "Import a statement — the CSV plus the period and the opening/closing balances from the statement header")

## The CSV

Ledgerly needs each row to have:

- a **date** column,
- a **description** column, and
- either separate **Debit** and **Credit** columns, **or** a single **signed Amount** column
  (positive for money in, negative for money out).

Most banks' CSV exports already fit one of those shapes. You don't need to reformat headers —
Ledgerly asks you to confirm the mapping.

## The fields alongside the file

- **Statement date**, **Period start**, **Period end** — the span the statement covers,
  copied from its header.
- **Opening balance** and **Closing balance** — also from the statement header. These are what
  the [reconciliation](/guide/banking/reconciling) checks against: after every line is
  matched, the ledger movement over the period must bridge opening to closing exactly.

## After import

Each line lands as **Unmatched**. Lines you've already matched to a payment show as
**Matched**, with an **Unmatch** action if you got one wrong. Matching happens on the
[Reconcile](/guide/banking/reconciling) screen.

## Common questions

**I imported the same statement twice.** Delete the duplicate lines from this screen before
reconciling — duplicated lines will throw the difference off.

**My bank only gives PDF statements.** You'll need to convert to CSV first; Ledgerly imports
CSV only.

## See also

- [Linking a bank account](/guide/banking/bank-accounts)
- [Reconciling a bank account](/guide/banking/reconciling)

---
title: "Importing a bank statement (CSV)"
description: "Loading your bank's statement export so its lines can be matched against what's in your ledger."
order: 2
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
related:
  - /guide/banking/bank-accounts
  - /guide/banking/reconciling
---

## What this is

To reconcile, Ledgerly needs the bank's version of events — the **statement lines**. You bring
those in by importing the CSV your bank lets you download.

## Where to find it

**Banking → Bank accounts → Transactions** (on a linked account), in the **Import a statement**
section.

![The Import a statement section for a Sampath Bank savings account: Statement CSV with sampath-savings-2026-10.csv chosen; the columns it detected — Date, Description, Reference (Cheque No), Money out (Debit) (Withdrawals), Money in (Credit) (Deposits), Signed amount and DR/CR indicator (none), Running balance (Balance); 4 lines from 2026-10-05 to 2026-10-31, money out LKR 200,000.00, money in LKR 401,458.33, and the file's opening and closing balances; then Statement date, Period start, Period end, Opening balance and Closing balance filled in, the warning "1 balance/total row(s) inside the table were skipped", and an Import statement button](/guide/banking/import-statement.webp "Import a statement — the file, the columns it detected, and the period and balances from the statement header")

## The CSV

Exports from **Commercial Bank, Sampath, HNB, BOC, People's and NDB** are recognised. As soon
as you pick the file, Ledgerly shows a preview before anything is saved:

- the columns it detected — **Date**, **Description**, **Reference**, **Money out (Debit)**,
  **Money in (Credit)**, **Signed amount**, **DR/CR indicator** and **Running balance** — each
  of which you can change;
- the number of lines and their date range, the money out and money in totals, and the file's
  own opening and closing balance when it has a running balance column;
- every error and warning, re-checked as you change the fields.

A file needs a **date** and a **description** for every row, and either separate money out /
money in columns or a single signed amount (optionally with a DR/CR column). Dates are read day
first (`05/11/2026`, `05-Nov-2026`); a month-first date is an error, never guessed. Bank
preamble above the header and balance or total rows inside the table are skipped.

## The fields alongside the file

- **Statement date**, **Period start**, **Period end** — the span the statement covers,
  copied from its header.
- **Opening balance** and **Closing balance** — also from the statement header, as printed;
  overdrawn is negative.

**Import statement** is enabled only when there are no errors. The main checks: money in minus
money out must equal closing minus opening to the cent, a running balance in the file must
carry on line by line, and every line must fall inside the period. Warnings — a gap after the
previous statement, an opening balance that isn't the previous closing balance — don't block
the import.

## After import

The statement appears as a card on the Transactions screen. Each line starts as
**Unmatched**; once it's matched on the [Reconcile](/guide/banking/reconciling) screen it shows
**Matched**, with an **Unmatch** action if you got one wrong.

## Common questions

**I imported the same statement twice.** You can't: Ledgerly refuses a file that's already been
imported, a period that overlaps a statement already imported, or a file whose every line is
already in another statement.

**I imported the wrong file, or keyed a balance wrong.** Expand the statement and click
**Remove import**. You give a reason, which is kept in the audit trail. It's refused while any
of its lines are matched (unmatch them first) or once a completed reconciliation covers it.
Statements are never edited in place: remove the import and import the corrected file.

**My bank only gives PDF statements.** You'll need to convert to CSV first; Ledgerly imports
CSV only.

## See also

- [Linking a bank account](/guide/banking/bank-accounts)
- [Reconciling a bank account](/guide/banking/reconciling)

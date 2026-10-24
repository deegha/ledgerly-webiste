---
title: "Importing a bank statement"
description: "Linking a bank account, the CSV layouts Ledgerly recognises, the preview and checks before import, and removing a wrong import."
order: 10
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/banking/bank-accounts
  - /guide/banking/importing-a-statement
  - /guide/bookkeeping-handbook/bank-reconciliation
---

## Link a bank account

**Banking → Bank accounts → Add a bank account** (Owner or Accountant):

- **GL account:** a Bank or Cash type account, for example **1100 Bank Accounts**.
- **Bank name**, **Account name**, **Account number**, **Branch** and **Currency** (LKR).
- One GL account links to one real bank account. For a second bank, first create a GL account
  for it: **Accounting → Chart of accounts → New account**, for example Code 1110, Name "HNB
  Current", Type ASSET, Subtype BANK. Then link it.

Each linked account gets **Transactions** and **Reconcile** links. Payments, receipts and
expenses recorded against the GL account before you linked it can still be matched, because
matching works on the GL account.

![Banking → Bank accounts: one linked account (Test Bank, GL 1100 Bank Accounts, LKR) with Transactions and Reconcile links, and the Add a bank account form below](/guide/bookkeeping-handbook/bank-accounts.webp "Banking → Bank accounts")

## Import a statement

**Banking → Bank accounts → Transactions → Import a statement.**

1. **Statement CSV:** pick the file your bank exported. Exports from **Commercial Bank, Sampath,
   HNB, BOC, People's and NDB** are recognised.
2. Ledgerly shows a **preview** before anything is saved:
   - the columns it detected, each of which you can change: **Date**, **Description**,
     **Reference**, **Money out (Debit)**, **Money in (Credit)**, **Signed amount**, **DR/CR
     indicator** and **Running balance**;
   - the header row, the number of lines and their date range;
   - money out and money in totals, and the file's own opening and closing balance when it has a
     running balance column;
   - every error and warning, re-checked as you change the fields.
3. Fill in **Statement date**, **Period start**, **Period end**, **Opening balance** and **Closing
   balance**, exactly as printed on the statement. An overdrawn balance is negative.
4. **Import statement** is enabled only when there are no errors.

![Import a statement for a Sampath Bank savings account: the CSV preview with its column mapping (Date, Description, Reference to Cheque No, Money out to Withdrawals, Money in to Deposits, Running balance to Balance), 4 lines, money out 200,000.00 and money in 401,458.33, the file balances, the statement dates and balances filled in, and one warning that a balance row inside the table was skipped](/guide/bookkeeping-handbook/statement-import-preview.webp "The preview: check the column mapping, totals and warnings before you import")

Import the **whole** statement, every line. Lines that aren't in your books yet (a bank charge,
interest) are recorded and matched when you reconcile.

### What the file can look like

- **Header row:** anywhere in the first rows; bank preamble above it and footer rows such as
  `Total`, `Balance B/F` or `Closing Balance` are skipped.
- **Columns:** separate Debit/Credit (or Withdrawals/Deposits, Money out/Money in) columns, or one
  signed **Amount** column, optionally with a DR/CR column. Common bank header names are
  recognised; anything else you map by hand in the preview.
- **Dates are always day first:** `05/11/2026`, `05-11-2026`, `05.11.2026`, `05/11/26`,
  `05-Nov-2026`, `05 Nov 2026`, or `2026-11-05`. A time after the date is ignored. A US
  month-first date such as `11/30/2026` is an error, never guessed.
- **Amounts:** thousands separators, `Rs.` or `LKR`, brackets for negatives, a trailing minus,
  and `Dr`/`Cr` before or after the number are all fine. Ambiguous grouping (`1,00`, `1.000,00`,
  lakh grouping such as `1,00,000`) is rejected rather than guessed.
- Quoted cells with commas or line breaks are fine. A newest-first export is put in date order.
- CSV only: Excel, OFX and MT940 files aren't accepted.

A minimal file that works:

```csv
Date,Description,Reference,Debit,Credit
03/11/2026,Transfer to Fake Supplies (Pvt) Ltd,TRF10234,"120,500.00",
07/11/2026,Customer deposit Fake Customer Ltd,DEP5521,,"45,000.00"
15/11/2026,Cheque 000123 Fake Landlord,000123,"50,000.00",
```

### Checks that block the import

- Money in − money out must equal **closing − opening**, to the cent. There's no override: fix the
  typed balance or the file.
- Where the file has a running balance, it must carry on line by line from the opening balance.
- Every line must fall inside the declared period, and the statement date can't be before the
  period end.
- **Duplicates:** the same content already imported (even in another layout), a period that
  overlaps a statement already imported, or every line already present in another statement.
- Every row problem is listed at once with its row number; nothing is imported until the file is
  clean.

### Warnings worth reading

A gap after the previous statement, an opening balance that isn't the previous closing balance,
a later statement already imported, or repeated identical lines. Warnings don't block the import.

## Remove a wrong import

On the **Transactions** screen, expand the statement and click **Remove import**. You must give a
reason, and it's recorded in the audit trail. It's refused while any of the statement's lines are
matched (unmatch them first) or when a reconciliation completed on or after the statement's start
date covers it.

![A bank account Transactions screen: the statement for 10/16/2026 – 10/22/2026 expanded, 0/2 matched, with its lines and an enabled Remove import button; the 10/1/2026 – 10/15/2026 statement collapsed, 3/7 matched](/guide/bookkeeping-handbook/bank-transactions-remove-import.webp "Remove import sits under each statement and works only while none of its lines are matched")

Statements are never edited in place: **to correct an import, remove it and import again.** A
removed import can't be restored; import the file again instead.

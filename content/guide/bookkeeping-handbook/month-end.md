---
title: "Month end"
description: "The reports to check once the month's bills, expenses and payments are in, how to read the VAT return, and how to post tax payments to the IRD."
order: 13
verifiedAgainst: "invoicegen @ 161f079 (2026-10-24)"
related:
  - /guide/reports/vat-return
  - /guide/reports/trial-balance
  - /guide/reports/ap-ageing
---

Run these after the month's bills, expenses and payments are in and the bank is reconciled.

![The Reports index: Financial (Trial Balance, General Ledger, Profit & Loss, Balance Sheet, Cash Flow, Changes in Equity), Sub-ledger (AR Ageing, AP Ageing), Tax (VAT Return), Inventory and Audit sections](/guide/bookkeeping-handbook/reports-menu.webp "Reports: every report reads the ledger")

| Report             | Check                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Trial Balance**  | It balances. Note the totals of 1300, 2000, 2100, 2200, 2210 and 6000.                                                                                                    |
| **General Ledger** | **6000 Operating Expenses**: anything that belongs in a more specific account? The bank account against the statement.                                                    |
| **AP Ageing**      | Total = **2000 Trade Payables** on the trial balance. A difference means a journal was posted to 2000 directly; find it.                                                  |
| **VAT Return**     | Pick the month (below).                                                                                                                                                   |
| **Profit & Loss**  | A sense check, account by account.                                                                                                                                        |
| **Balance Sheet**  | **1400 Prepayments** holds only deliberate prepayments (apply the rest to their bills); 1700/1750 agree with the asset register; **1000 Cash in Hand** is never negative. |
| **Audit Trail**    | Everything done this month is attributable to a person.                                                                                                                   |

A negative cash balance (a credit on 1000) means a missing receipt, a missing cash withdrawal, or
missing opening balances.

## The VAT return

**Reports → VAT Return.** Pick the period. The return shows **Output tax**, **Zero-rated
supplies**, **Exempt supplies**, **Credit/debit note adjustments**, **Input tax**, and the
result:

- **Net payable** when output tax is more than input tax;
- **Net refundable / credit carried forward** when it's less.

![The VAT Return for Sep 01 – Sep 30, 2026, marked Working: output tax 72,000.00, zero-rated, exempt and note adjustments 0.00, input tax 219,510.00, and Net refundable / credit carried forward −147,510.00, with the note on what the return counts and a File return button](/guide/bookkeeping-handbook/vat-return.webp "More input tax than output tax: a credit carried forward")

**What it counts:** the VAT on invoices, bills, expenses and credit/debit notes dated in the
period. VAT paid to or refunded by the IRD and opening VAT balances are **not** part of the
return, and neither are WHT, APIT or SSCL. So output tax should equal the month's VAT on 2100 from
documents, and input tax the month's VAT on 1300 from documents.

A manual journal on 2100 or 1300 isn't counted either, so a VAT correction belongs on a credit or
debit note, not a journal.

**Filing.** Ledgerly doesn't submit anything to the IRD; you file the return with the IRD
yourself. **File return** in Ledgerly records that the period was filed: it **soft-closes every
accounting period in the range** (no more documents can post there without reopening), and the
same period can't be filed twice. Owners and Accountants can file. Agree who does it, and do it
only once the figures are final.

## Paying tax over to the IRD

Post each payment as a manual journal on the day you pay, with the IRD receipt attached:

| Paying       | Debit                         | Credit   |
| ------------ | ----------------------------- | -------- |
| VAT          | **2100 Output VAT (Payable)** | the bank |
| SSCL         | **2210 SSCL Payable**         | the bank |
| WHT deducted | **2200 WHT Payable**          | the bank |
| APIT         | **2530 APIT Payable**         | the bank |

A VAT refund received is the mirror: Dr the bank / Cr **1300** (or 2100, as your accountant
prefers). None of these reach the VAT return.

Paying WHT locks earlier WHT-bearing supplier payments against voiding (see
[Paying suppliers](/guide/bookkeeping-handbook/paying-suppliers#paying-the-wht-over-to-the-ird)).

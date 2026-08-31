---
title: "VAT Return"
description: "Output and input tax for a period, mapped to Schedules 01, 04 and 07, with filing and drill-through to the journal lines."
order: 9
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/accounting/tax-codes
  - /guide/purchases/recording-a-bill
---

## What it answers

_"What VAT do we owe (or reclaim) for this period, and what makes up each line of the
return?"_ It totals the VAT in your ledger for the period and lays it out in the shape the IRD
filing expects.

![The VAT Return for Acme Trading, Aug 2026: a "Working" badge, lines for Output tax (Schedule 01), Zero-rated supplies (Schedule 07), Exempt supplies, Credit/debit note adjustments (Schedule 04) and Input tax, a "Net payable" total, a "File return" button, and a "Previously filed" table listing an earlier filed period](/guide/reports/vat-return.jpg "VAT Return — output and input tax by schedule, with Working → Filed states")

## How to read it

| Line                              | What it is                             | Schedule |
| --------------------------------- | -------------------------------------- | -------- |
| **Output tax**                    | VAT you charged customers              | 01       |
| **Zero-rated supplies**           | exports and other 0%-rated sales       | 07       |
| **Exempt supplies**               | sales with no VAT and no reclaim       | —        |
| **Credit/debit note adjustments** | VAT reversed by credit and debit notes | 04       |
| **Input tax**                     | _recoverable_ VAT you paid suppliers   | —        |

**Net payable = output tax − input tax − adjustments.** A negative figure is a refund due to
you.

Only VAT that Ledgerly booked as **recoverable** reaches the Input tax line — that depends on
your and the supplier's VAT status and the tax code (see [input VAT
recoverability](/guide/purchases/recording-a-bill)). Acme Trading isn't VAT-registered, so
every line here is 0.00.

## Working → Filed

An open period shows as **Working**. **File return** locks that period's figures and moves it
to **Previously filed**, with the filed date recorded. Filed returns are listed at the bottom
and can't be re-filed.

## Drill-through

Click any line to open the **journal lines** behind it — the invoices, bills, and notes whose
VAT rolls into that figure. This replaces the deferred standalone VAT transaction-detail
report.

## What it reconciles to

The **Output VAT (2100)** and **Input VAT (1300)** account balances on the
[Trial Balance](/guide/reports/trial-balance) for the period.

## See also

- [Tax codes: VAT, SSCL, and WHT](/guide/accounting/tax-codes)
- [Recording a bill, and input VAT recoverability](/guide/purchases/recording-a-bill)

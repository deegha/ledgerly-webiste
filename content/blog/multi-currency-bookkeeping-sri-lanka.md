---
title: "Multi-currency bookkeeping: a guide for Sri Lankan exporters and importers"
description: "If you invoice in dollars or pay suppliers in euros, the rupee's movement between transaction and settlement is a real number in your accounts. Here's how to record it correctly."
date: "2027-01-13"
image: "/images/blog/multi-currency-bookkeeping-sri-lanka.svg"
---

If your business trades across borders — an exporter paid in USD, an importer settling supplier invoices in EUR or CNY, or just a company with foreign software subscriptions — your books have to deal with more than one currency. And because the rupee moves, the value of a foreign-currency transaction is not one fixed number. Getting this right is the difference between accounts that reflect reality and accounts that quietly drift.

## The core problem: three moments, three rates

A single foreign-currency sale has up to three points where an exchange rate matters:

1. **Transaction date** — you issue a USD 10,000 invoice. It's recorded in your books in rupees, at that day's rate.
2. **Reporting date** — the invoice is still unpaid at month-end. The rupee has moved. What's that receivable worth _now_?
3. **Settlement date** — the customer pays. You convert the dollars to rupees at _that_ day's rate, which is different again.

Each step produces a rupee figure, and the differences between them are **exchange gains and losses** — real income or real cost, caused by the currency moving, not by anything you did wrong.

## Functional currency

Your books have one **functional currency** — for a Sri Lankan business, almost always LKR. Every transaction, whatever currency it's denominated in, ends up expressed in LKR in the ledger. Foreign-currency amounts are recorded _alongside_ the rupee value, not instead of it, so you can see both "USD 10,000" and "LKR 3,050,000 at 305.00".

## Recording it, step by step

**On the transaction.** Record the invoice or bill in its original currency, and let the system translate to LKR at the transaction-date rate. Your receivable/payable now carries both the foreign amount and its rupee equivalent.

**At period end — revaluation.** For any foreign-currency balance still open, restate it at the closing rate. If a USD 10,000 receivable was booked at 305 and the rate is now 310, the receivable is worth LKR 50,000 more — you post an **unrealised exchange gain** of 50,000. It's "unrealised" because the cash hasn't landed yet; if the rate moves back next month, you revalue again.

**On settlement — realisation.** When payment actually comes in, convert at the settlement-date rate and compare to what the receivable was carried at. The difference is a **realised exchange gain or loss**, and it's final. The receivable clears; your bank goes up by the actual rupees received.

## Where it goes wrong

- **Recording payment at the invoice rate.** The exchange difference just disappears, and your bank reconciliation won't match the cash actually received.
- **Never revaluing open balances.** Your month-end debtors and creditors are stated at stale rates, so your balance sheet is wrong by the accumulated currency drift.
- **Mixing realised and unrealised.** Auditors care about the split — one is settled, one is an estimate that will change.
- **Ignoring FX on the P&L.** Exchange gains/losses are part of your result. An exporter can have a decent operating month wiped out (or rescued) by the rupee, and the books should show it.

This is one of the [bookkeeping mistakes](/blog/bookkeeping-mistakes-sri-lankan-smes) that's specific to trading businesses, and it compounds silently.

## The compliance angle for exporters

Exports are [zero-rated for VAT](/blog/vat-return-schedules-explained) — 0% output tax, input tax still recoverable — so exporters live on refund claims, and those claims are built from foreign-currency invoices. If your USD invoice values and their rupee equivalents aren't clean, your [VAT return](/guide/reports/vat-return) schedules aren't clean, and neither is your refund. If you're in an early [RAMIS phase](/blog/ramis-phase-one-export-sector), the transmitted invoice data has to carry the currency detail too.

## In Ledgerly

Ledgerly records [foreign-currency invoices](/guide/sales/foreign-currency-invoices) and bills in their original currency with the LKR value alongside, uses maintained [exchange rates](/guide/accounting/exchange-rates), revalues open balances at period end, and posts realised gains and losses automatically when a foreign payment settles — each to its own ledger account, so the realised/unrealised split an auditor wants is already there. The currency movement stops being a reconciliation headache and becomes a line you can read.

If you also hold physical stock, the [FIFO vs weighted average](/blog/fifo-vs-weighted-average) guide is the companion piece on valuing it.

---
title: "Foreign-currency invoices and FX gain/loss"
description: "Invoicing in USD or another currency, the exchange rate it needs, and why the amount you eventually bank rarely matches the invoice."
order: 7
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/sales/creating-an-invoice
  - /guide/settings/currencies
  - /guide/accounting/exchange-rates
---

> The Acme Trading demo organization has no foreign-currency transactions, so the screenshots
> below are of the LKR flow. The currency-specific behaviour is described from the posting
> rules; when the demo data grows a USD example this page will be re-shot against it.

## Invoicing in another currency

On a [new invoice](/guide/sales/creating-an-invoice), the **Currency** field defaults to the
customer's billing currency. Set it to USD, EUR, or any
[enabled currency](/guide/settings/currencies) and the whole invoice — prices, totals — is
entered and shown in that currency.

Your **base currency is still LKR**, so at the moment you issue the invoice Ledgerly converts
the total to LKR using the **dated exchange rate** for that currency on the **invoice date**.
That LKR figure is what posts to Trade Receivables and Sales Revenue.

**A foreign-currency invoice can't be issued if there's no exchange rate on its date.** Add
the rate first, in [Accounting → Exchange rates](/guide/accounting/exchange-rates) — rates are
one value per currency per date, append-only.

## Why settlement rarely matches

The customer pays weeks later, and the rate has moved. Say you invoiced USD 100 when the rate
was 300 (LKR 30,000 booked as the receivable), and they pay USD 100 when the rate is 310
(LKR 31,000 actually banked).

- Your bank account goes up by **LKR 31,000**.
- The receivable that gets cleared was booked at **LKR 30,000**.
- The **LKR 1,000 difference is an FX gain** — you earned it purely from the currency moving
  in your favour. (A move the other way is an FX loss.)

Ledgerly posts that difference to an **exchange gain/loss account** automatically when you
allocate the payment. You don't calculate it; you just see it on the receipt and in the P&L.

## Common questions

**Which date's rate is used — invoice or payment?** The invoice date's rate values the sale.
The payment date's rate values the cash received. The gap between them is the gain or loss.

**Do I need a rate for every single day?** No — Ledgerly uses the most recent rate on or
before the date it needs. Keep rates reasonably current for the currencies you trade in.

## See also

- [Creating and issuing an invoice](/guide/sales/creating-an-invoice)
- [Base currency and currencies](/guide/settings/currencies)
- [Exchange rates](/guide/accounting/exchange-rates)

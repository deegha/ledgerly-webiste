---
title: "Exchange rates"
description: "Adding dated rate snapshots against your base currency, and how foreign-currency documents pick the rate to use."
order: 4
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/settings/currencies
  - /guide/sales/foreign-currency-invoices
---

> The Acme Trading demo organization has no exchange rates, so the screenshot below is of the
> empty state and the add form.

## What this is

Every foreign-currency document has to be recorded in your base currency (LKR) as well. To do
that, Ledgerly needs a rate. **Exchange rates** here are **dated snapshots** — "on this date, 1
USD was worth this many LKR" — and the list is **append-only**: you add new dated rates, you
never edit an old one, because an old rate is history that documents were already valued at.

## Where to find it

**Accounting → Exchange rates.**

![The Exchange rates screen: "Dated rate snapshots, append-only", an "Add a rate" form with From currency, To (LKR), Rate, and Effective date fields, and an empty state reading "No exchange rates yet"](/guide/accounting/exchange-rates.jpg "Accounting → Exchange rates — add a dated rate; the list only ever grows")

## Adding a rate

In **Add a rate**:

- **From** — the foreign currency (an [enabled currency](/guide/settings/currencies)).
- **To** — your base currency, LKR, fixed.
- **Rate** — how many LKR one unit of the foreign currency is worth (`1 USD = ? LKR`).
- **Effective date** — the date this rate applies from.

## How documents use them

When you post a foreign-currency invoice, bill, or payment, Ledgerly takes the **most recent
rate on or before the document's date**. So you don't need a rate for every single day — one
per week, or per rate change, is usually enough. But if there's **no rate on or before** the
document's date, the document **can't be posted**. Add the rate first.

The invoice date's rate values the sale; the payment date's rate values the cash received; the
difference between them is the [settlement FX gain or
loss](/guide/sales/foreign-currency-invoices), which Ledgerly posts automatically.

## Common questions

**I entered a rate wrong.** You can't edit it — add a _new_ rate for the same date with the
correct value; the latest one for a date wins. Any document already posted at the wrong rate
is corrected the normal way (credit/debit note or reversal).

## See also

- [Base currency and currencies](/guide/settings/currencies)
- [Foreign-currency invoices and FX gain/loss](/guide/sales/foreign-currency-invoices)

---
title: "Base currency and currencies"
description: "Your books are kept in one base currency, set for good. Additional currencies can be enabled for foreign transactions."
order: 2
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/settings/organization-profile
  - /guide/bookkeeping-basics/fiscal-years
---

## Where to find it

**Settings → Currencies.**

![Settings → Currencies: a "Base currency" card showing LKR, noting it was set at creation and cannot be changed; an "Enabled currencies" card with chips for LKR, USD, GBP, EUR, AUD, SGD, INR](/guide/settings/currencies.jpg "Base currency LKR, fixed; a set of enabled transaction currencies alongside it")

## Base currency

Your **base currency** is the one your ledger is kept in — every posted balance, every report,
every account total is denominated in it. For Sri Lankan organizations it's **LKR**.

It's set when the organization is created and **cannot be changed afterwards**. Changing it
would mean re-stating every entry ever posted, so Ledgerly doesn't allow it.

## Enabled currencies

**Enabled currencies** are the ones you can use on an invoice, a bill, or a payment. Enable a
currency here when you start trading in it. A foreign-currency document is converted to your
base currency at posting time, using a dated exchange rate.

Those rates live in **Accounting → Exchange rates** — one rate per currency per date,
append-only. A foreign-currency document with no rate on its date can't be posted, so add the
rate first.

## See also

- [Organization profile](/guide/settings/organization-profile)
- [What a fiscal year is](/guide/bookkeeping-basics/fiscal-years)

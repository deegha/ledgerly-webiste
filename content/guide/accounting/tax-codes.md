---
title: "Tax codes: VAT, SSCL, and WHT"
description: "The seeded Sri Lankan tax codes, their dated rates, and the output and input accounts each one posts to."
order: 5
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/purchases/recording-a-bill
  - /guide/reports/vat-return
---

## What a tax code is

A **tax code** ties three things together: a **rate**, an **account for tax you collect**
(output), and an **account for tax you can reclaim** (input). Put a code on an invoice or bill
line and Ledgerly works out the tax and posts it to the right places.

## Where to find it

**Accounting → Tax codes.**

![The Tax codes screen: cards for NOVAT, SSCL, VAT0, VAT18 and more, each showing a type badge, "Current rate", "Show rate history" and "Add new rate" links, and the linked accounts — VAT codes show "2100 — Output VAT (Payable) · 1300 — Input VAT (Recoverable)"](/guide/accounting/tax-codes.jpg "Accounting → Tax codes — each code carries a dated rate and its output/input accounts")

## The seeded codes

Onboarding seeds the standard Sri Lankan set:

| Code      | Name                              | Typical rate | Recoverable? |
| --------- | --------------------------------- | ------------ | ------------ |
| **VAT18** | VAT Standard Rate                 | 18%          | yes          |
| **VAT0**  | VAT Zero-Rated (Export)           | 0%           | yes          |
| **VATEX** | VAT Exempt                        | 0%           | no           |
| **NOVAT** | Not VAT Registered                | 0%           | —            |
| **SSCL**  | Social Security Contribution Levy | 2.5%         | no           |
| **WHT5**  | WHT — Services                    | 5%           | —            |
| **WHT14** | WHT — Rent                        | 14%          | —            |

## Output vs. input accounts

A VAT code posts to **two** accounts:

- **Output VAT (2100)** — VAT you charge customers. It's a liability: you've collected it on
  the state's behalf and owe it onward.
- **Input VAT (1300)** — VAT you pay suppliers. It's an asset: you can reclaim it — **but only
  when the bill qualifies** (see [input VAT
  recoverability](/guide/purchases/recording-a-bill)).

Both feed the [VAT Return](/guide/reports/vat-return). SSCL and the WHT codes work differently
— SSCL is a cost, WHT is an amount withheld from a payment — and don't use the VAT accounts.

## Rates are dated

A rate change is a **new dated rate**, not an edit — **Add new rate** with an effective date.
**Show rate history** lists every rate the code has had. A document uses the rate that applied
**on its date**, so a rate change never rewrites past invoices.

## See also

- [Recording a bill, and input VAT recoverability](/guide/purchases/recording-a-bill)
- [VAT Return](/guide/reports/vat-return)

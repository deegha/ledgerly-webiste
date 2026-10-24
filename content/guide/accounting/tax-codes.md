---
title: "Tax codes: VAT, SSCL, and WHT"
description: "The seeded Sri Lankan tax codes, their dated rates, and the output and input accounts each one posts to."
order: 5
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
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

![The Tax codes screen listing 8 tax codes — NOVAT, SSCL, VAT0, VAT18, VAT18S, VATEX, WHT14 and WHT5 — each with a type badge, "Current rate", "Show rate history" and "Add new rate", and its linked accounts: "2100 — Output VAT (Payable) · 1300 — Input VAT (Recoverable)" on the recoverable VAT codes, "2210 — SSCL Payable" on SSCL and "2200 — WHT Payable" on the WHT codes; VAT18S carries a note that SSCL is charged on the net first, then 18% on the net plus SSCL](/guide/accounting/tax-codes.webp "Accounting → Tax codes — each code carries a dated rate and the accounts it posts to")

## The seeded codes

Onboarding seeds the standard Sri Lankan set:

| Code       | Name                                         | Typical rate | Recoverable? |
| ---------- | -------------------------------------------- | ------------ | ------------ |
| **VAT18**  | VAT Standard Rate                            | 18%          | yes          |
| **VAT0**   | VAT Zero-Rated (Export)                      | 0%           | yes          |
| **VATEX**  | VAT Exempt                                   | 0%           | no           |
| **NOVAT**  | Not VAT Registered                           | 0%           | no           |
| **SSCL**   | Social Security Contribution Levy            | 2.5%         | no           |
| **VAT18S** | VAT 18% + SSCL (VAT on SSCL-inclusive value) | 18% + SSCL   | yes          |
| **WHT5**   | WHT — Services 5%                            | 5%           | —            |
| **WHT14**  | WHT — Rent 14%                               | 14%          | —            |

**VAT18S** is a compound code for the usual Sri Lankan invoice from a supplier who's liable for
SSCL: SSCL is charged on the net first, then 18% VAT on the net plus SSCL. The SSCL part is
treated like SSCL (below) and the VAT part like VAT18. A rate change on SSCL applies here too;
a VAT rate change needs a new rate on VAT18S as well.

## Output vs. input accounts

A VAT code posts to **two** accounts:

- **Output VAT (2100)** — VAT you charge customers. It's a liability: you've collected it on
  the state's behalf and owe it onward.
- **Input VAT (1300)** — VAT you pay suppliers. It's an asset: you can reclaim it — **but only
  when the bill qualifies** (see [input VAT
  recoverability](/guide/purchases/recording-a-bill)).

Both feed the [VAT Return](/guide/reports/vat-return). SSCL and the WHT codes work differently
and don't use the VAT accounts:

- **SSCL** posts to **2210 SSCL Payable** when you charge it on a sale. On a purchase it isn't
  recoverable, so it's part of the cost.
- **WHT5** and **WHT14** post to **2200 WHT Payable**. WHT is an amount withheld from a payment,
  so these codes are used only on [supplier payments](/guide/purchases/supplier-payments) — never
  on an invoice or bill line.

## Rates are dated

A rate change is a **new dated rate**, not an edit — **Add new rate** with an effective date.
**Show rate history** lists every rate the code has had. A document uses the rate that applied
**on its date**, so a rate change never rewrites past invoices.

## See also

- [Recording a bill, and input VAT recoverability](/guide/purchases/recording-a-bill)
- [VAT Return](/guide/reports/vat-return)

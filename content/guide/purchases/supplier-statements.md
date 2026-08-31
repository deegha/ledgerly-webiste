---
title: "Supplier statements"
description: "A per-supplier statement of bills, debit notes, and payments is not currently available. Here's what to use instead."
order: 6
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/reports/ap-ageing
  - /guide/purchases/supplier-payments
---

## Not currently available

A **supplier statement** — one running document listing every bill, debit note, and payment
for a single supplier with a rolling balance — is not built into Ledgerly yet. It's the same
gap as [customer statements](/guide/sales/customer-statements) on the sales side.

## What to use instead

- **What you owe one supplier, and how overdue it is:** the
  [AP Ageing report](/guide/reports/ap-ageing), which buckets every supplier's balance by age.
- **The documents behind that balance:** the supplier's open
  [bills](/guide/purchases/recording-a-bill) and
  [payments](/guide/purchases/supplier-payments), each linked to its journal entry.
- **A point-in-time list:** drill from the AP Ageing figure, or from the **Trade Payables**
  line on the [Trial Balance](/guide/bookkeeping-basics/reading-the-core-reports), into the
  filtered Journals for that account, then into each source document.

## See also

- [AP Ageing](/guide/reports/ap-ageing)
- [Recording a supplier payment](/guide/purchases/supplier-payments)

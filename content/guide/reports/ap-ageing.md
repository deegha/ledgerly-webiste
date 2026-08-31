---
title: "AP Ageing"
description: "Outstanding supplier balances, split by how overdue they are — what you owe and when."
order: 8
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/purchases/supplier-payments
  - /guide/purchases/supplier-statements
---

## What it answers

_"Who do we owe, how much, and how overdue is it?"_ The mirror of [AR
Ageing](/guide/reports/ar-ageing), for bills instead of invoices.

![The AP Ageing report for Acme Trading: a green "Reconciles to Trade Payables in the trial balance" banner, and a table with Bill, Supplier, Due date, Days overdue, Bucket (61-90, 1-30) and Balance due columns; Total 22,000.00](/guide/reports/ap-ageing.jpg "AP Ageing — open bills by age bucket, totalling to Trade Payables")

## How to read it

- Each open bill sits in a **bucket** by days past its due date: **current**, **1–30**,
  **31–60**, **61–90**, **90+**.
- Use it to plan payments — clear the 61–90 and 90+ rows before they damage a supplier
  relationship, and time the rest against your cash position.

## Worked example

The **Total is 22,000.00** — the same as **Trade Payables** on the
[Trial Balance](/guide/reports/trial-balance) and **AP outstanding** on the dashboard. Green
banner confirms.

## What it reconciles to

The **Trade Payables** balance on the Trial Balance / Balance Sheet, as at the same date.
Also the stand-in for a [supplier
statement](/guide/purchases/supplier-statements).

## Parameters

As-at date.

## See also

- [Recording a supplier payment](/guide/purchases/supplier-payments)
- [Supplier statements](/guide/purchases/supplier-statements)

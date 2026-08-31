---
title: "AR Ageing"
description: "Outstanding customer balances, split by how overdue they are — the collections report."
order: 7
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/sales/overdue-reminders
  - /guide/sales/customer-statements
---

## What it answers

_"Who owes us, how much, and how late are they?"_ Every open invoice, bucketed by age, as at a
date you choose.

![The AR Ageing report for Acme Trading: a green "Reconciles to Trade Receivables in the trial balance" banner, a "Send reminders now" button, and a table with Invoice, Customer, Due date, Days overdue, Bucket (1-30, 90+) and Balance due columns; Total 72,000.00](/guide/reports/ar-ageing.jpg "AR Ageing — open invoices by age bucket, totalling to Trade Receivables")

## How to read it

- Each open invoice sits in a **bucket** by days past its due date: **current**, **1–30**,
  **31–60**, **61–90**, **90+**.
- Anything past **current** is money you should be chasing; the further right, the more urgent.
  The 90+ row is where a debt turns into a likely write-off.
- **Send reminders now** triggers the [overdue
  reminders](/guide/sales/overdue-reminders) immediately rather than waiting for the daily run.

## Worked example

The **Total is 72,000.00** — the same figure as **Trade Receivables** on the
[Trial Balance](/guide/reports/trial-balance) and **AR outstanding** on the dashboard, because
all three are computed from the same journal lines. The green banner states it.

## What it reconciles to

The **Trade Receivables** balance on the Trial Balance / Balance Sheet, as at the same date.
It's also the closest thing to a [customer
statement](/guide/sales/customer-statements) Ledgerly currently offers.

## Parameters

As-at date.

## See also

- [Automatic overdue-invoice reminders](/guide/sales/overdue-reminders)
- [Customer statements](/guide/sales/customer-statements)

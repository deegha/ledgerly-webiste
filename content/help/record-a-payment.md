---
title: "How to record a customer payment"
description: "Apply a payment to one or several invoices, and how partial payments are tracked."
category: "Sales"
---

## Start from the invoice or the dashboard

Click **Record payment** on the Dashboard, or open the specific invoice and use **Record payment** there — either way lands on the same form, just with the customer and invoice pre-selected when you start from an invoice.

## Choose what the payment applies to

A single payment can be applied across **more than one invoice** for the same customer — useful when a customer sends one bank transfer that covers several outstanding invoices. Enter the total amount received, then allocate it across the invoices it's meant to cover. Ledgerly won't let the allocated total exceed the amount received.

## Partial payments

If a payment doesn't cover an invoice in full, allocate whatever amount was actually received. The invoice's status updates to **Partially paid**, and its **Balance due** reflects exactly what's left — no manual adjustment needed. A second payment later can close out the remainder, moving the invoice to **Paid**.

## What posts behind the scenes

Recording a payment posts a journal entry debiting the bank or cash account and crediting Trade Receivables for the allocated amount. This is why AR ageing and the Trade Receivables balance on your balance sheet always agree — they're reading the same posted entries, not two separately maintained numbers.

## Undoing a mistaken payment

A posted payment can't be edited directly. If a payment was recorded in error — wrong amount, wrong invoice, wrong customer — void it and record a new, correct one. The void is visible in the invoice's history, so there's no gap in the trail.

_See also: [How to create and issue an invoice](/help/create-an-invoice), [How to reconcile a bank account](/help/reconcile-a-bank-account)._

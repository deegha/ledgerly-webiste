---
title: "How to record a bill and pay a supplier"
description: "The purchase side mirrors sales exactly: bill in, payment out, both posting to Trade Payables."
category: "Purchases"
---

## Enter the bill

From **Purchases → Bills**, click **New bill** and select the supplier. Add line items the same way you would on an invoice — item, quantity, unit price, tax code — and the bill's subtotal, tax, and total calculate live.

Bills go through the same draft → posted lifecycle as invoices: a draft bill can be edited freely, and posting it locks the details and creates a journal entry crediting Trade Payables and debiting the relevant expense or asset accounts.

## Record the supplier payment

Once a bill is posted, go to **Purchases → Supplier payments** (or use **Record payment** from the bill itself) to pay it. Like customer payments, a single supplier payment can be split across multiple bills for the same supplier, and partial payments are tracked automatically — the bill's status moves from **Issued** to **Partially paid** to **Paid** as payments are applied.

## Correcting a posted bill

A posted bill can't be edited directly. If the amount or line items were wrong, issue a **debit note** against it — the purchase-side equivalent of a credit note. It posts its own entry and stays linked to the original bill, so the correction has a visible trail rather than a silent edit.

## Recording an expense without a formal bill

For smaller purchases that don't go through a supplier bill — a taxi receipt, office supplies paid on the spot — use **Purchases → Expenses** instead. It posts directly without the bill/payment two-step, but still goes through the ledger the same way; nothing here is tracked outside the journal.

_See also: [How to create and issue an invoice](/help/create-an-invoice) — the sales-side mirror of this workflow._

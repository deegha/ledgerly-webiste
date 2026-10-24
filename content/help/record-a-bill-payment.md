---
title: "How to record a bill and pay a supplier"
description: "The purchase side mirrors sales exactly: bill in, payment out, both posting to Trade Payables."
category: "Purchases"
---

## Enter the bill

From **Purchases → Bills**, click **New bill** and select the supplier. Add line items the same way you would on an invoice — item, description, account, quantity, unit price, tax code — and the bill's subtotal, tax, and total calculate live.

Bills go through the same draft → issued lifecycle as invoices: a draft bill can be edited freely (**Save draft**), and **Issue** locks the details and creates a journal entry crediting Trade Payables and debiting the account on each line, plus input VAT where it's recoverable.

## Record the supplier payment

Once a bill is issued, go to **Purchases → Supplier payments** and click **Record payment**. Like customer payments, a single supplier payment can be split across multiple bills for the same supplier, and partial payments are tracked automatically — the bill's status moves from **Issued** to **Partially paid** to **Paid** as payments are applied. If you withhold tax, pick the WHT code against the bill on the payment; **Amount paid** is the cash that leaves the bank.

## Correcting a posted bill

An issued bill can't be edited directly. If the amount or line items were wrong, record a **debit note** against it — the purchase-side equivalent of a credit note. It posts its own entry and stays linked to the original bill, so the correction has a visible trail rather than a silent edit. If the whole bill was a mistake, an Owner or Accountant can **Void** it instead.

## Recording an expense without a formal bill

For smaller purchases that don't go through a supplier bill — a taxi receipt, office supplies paid on the spot — use **Purchases → Expenses** instead. It posts directly without the bill/payment two-step, but still goes through the ledger the same way; nothing here is tracked outside the journal.

_See also: [How to create and issue an invoice](/help/create-an-invoice) — the sales-side mirror of this workflow._

_Read the full guide: [Recording a supplier payment](/guide/purchases/supplier-payments) — the same steps in context, with what posts to the ledger and why._

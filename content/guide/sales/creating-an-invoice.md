---
title: "Creating and issuing an invoice"
description: "The invoice form, the line editor, invoice date versus supply date, and the posting preview you check before issuing."
order: 3
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/sales/issuing-an-invoice
  - /guide/sales/customers
  - /help/create-an-invoice
---

## Where to find it

**Sales → Invoices → New invoice.**

![The new invoice form: Customer and Currency at the top; Invoice date, Supply date and Due date on one row; a Lines section with Item, Description, Qty, Unit price, Disc. %, Tax code and Line total columns; Reference and Notes; live Subtotal, Tax and Total; Cancel, Save draft and Issue buttons](/guide/sales/new-invoice-form.jpg "The new invoice form — customer, three dates, a line editor, and live totals")

## The header

- **Customer** — pick an existing one or [create a new one right here](/guide/sales/customers).
- **Currency** — defaults to the customer's billing currency. A non-LKR invoice needs a
  [dated exchange rate](/guide/sales/foreign-currency-invoices).
- **Invoice date** — when the invoice is issued.
- **Supply date** — when the goods or service were actually delivered. **Gazette 2481/22
  requires this as a separate field**, even when it's the same as the invoice date.
- **Due date** — when payment is due. Pre-filled from the customer's payment terms.

## The line editor

Each line takes an **item** (or free text), a **description**, **quantity**, **unit price**, a
**discount %**, and a **tax code**. The line total, and the invoice subtotal, tax and total,
recalculate as you type. **Add line** for more rows.

Picking an item fills in its default price and tax code; you can still override either on the
line.

## The posting preview

As soon as the invoice has a line, Ledgerly shows the **exact journal entry it will post**:

![The lower half of the invoice form: a single line for "Bookkeeping consultation" at 5,000 with tax code VAT18, Subtotal 5,000.00, Tax 900.00, Total 5,900.00; below, a posting preview table — Trade Receivables 5,900.00 debit, Sales Revenue 5,000.00 credit, Output VAT (Payable) 900.00 credit — marked Balanced](/guide/sales/new-invoice-posting-preview.jpg "The posting preview — the ledger effect of issuing, shown before you commit")

For this invoice:

- **1200 Trade Receivables** — debit 5,900.00 (what the customer now owes, tax included)
- **4000 Sales Revenue** — credit 5,000.00 (the revenue you earned)
- **2100 Output VAT (Payable)** — credit 900.00 (the VAT you've collected on the state's behalf)

and it's marked **Balanced**. If the item is tracked stock, you'll also see the cost-of-sales
and inventory lines. Check this panel before you issue — it's your last look before the entry
is permanent.

## Save draft, or issue

- **Save draft** — keeps the invoice as a work in progress. Nothing posts; no number is
  allocated; you can edit it freely.
- **Issue** — posts the journal entry, allocates the invoice number, and makes the invoice
  read-only. What happens at that moment is covered in
  [Issuing an invoice](/guide/sales/issuing-an-invoice).

## See also

- [What happens when you issue an invoice](/guide/sales/issuing-an-invoice)
- [How to create and issue an invoice (quick recipe)](/help/create-an-invoice)

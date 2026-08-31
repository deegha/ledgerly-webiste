---
title: "Customers"
description: "Adding a customer, the details that matter for tax invoices, and quick-creating one without leaving an invoice."
order: 1
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/sales/creating-an-invoice
  - /guide/settings/document-numbering
---

## What this is

A customer is a contact you sell to. Every invoice, quote, credit note, and receipt is tied
to one. You can add customers up front, or create them on the fly while raising an invoice.

## Where to find it

**Sales → Customers.**

![The Customers list: a table with Number, Name, TIN and Credit limit columns and a "New customer" button](/guide/sales/customers-list.jpg "Sales → Customers — each customer has a gapless CUS- number")

Each customer gets a gapless **`CUS-` number** from its own continuous
[sequence](/guide/settings/document-numbering).

## Adding a customer

**New customer** opens a form:

![The customer form: contact number, type (CUSTOMER), name, legal name, TIN, VAT registration number, a "VAT registered" toggle noted as affecting tax invoice eligibility, email, phone, address, default billing currency, and payment terms in days](/guide/sales/customer-form.jpg "The customer form — identity, tax status, and billing defaults")

The fields that do real work:

- **Name** — required; what you'll see everywhere. **Legal name** — only if it differs from
  the trading name; this is what prints on the invoice.
- **TIN** and **VAT registration no.** — printed on tax invoices. The **VAT registered**
  toggle affects the customer's tax-invoice eligibility.
- **Email** — where invoices and [overdue reminders](/guide/sales/overdue-reminders) are sent.
- **Default billing currency** — pre-fills the currency on their invoices. Leave as LKR
  unless you usually bill them in something else.
- **Payment terms (days)** — how the invoice **due date** is calculated from the invoice date
  (30 means net-30).

## Quick-create from an invoice

You don't have to break off to add a customer. On a new invoice, open the **Customer** field
and choose **Create new contact**:

![The Customer dropdown on a new invoice, showing existing contacts and a "Create new contact" option](/guide/sales/customer-quick-create.jpg "Create a customer without leaving the invoice you're raising")

The customer is created and selected on the invoice in one step. You can fill in the rest of
their details later from Sales → Customers.

## Common questions

**Can I delete a customer?** Not once they have documents — a financial record can't lose its
counterparty. You can leave them inactive.

**We bill one client in USD and one in LKR.** Set each customer's default billing currency;
the invoice still lets you override it per document.

## See also

- [Creating and issuing an invoice](/guide/sales/creating-an-invoice)
- [Automatic overdue-invoice reminders](/guide/sales/overdue-reminders)

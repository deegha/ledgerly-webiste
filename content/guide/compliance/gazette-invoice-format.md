---
title: "The gazette tax invoice format"
description: "What Gazette 2481/22 mandates on a Sri Lankan tax invoice, and how Ledgerly builds it for you."
order: 1
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/settings/invoice-template
  - /guide/sales/creating-an-invoice
---

## What this is

**Gazette Extraordinary No. 2481/22** sets the format a tax invoice must take in Sri Lanka
from **1 July 2026**. Ledgerly's invoice layout follows it — you don't design the structure,
you just supply your details.

> Verify the current requirements against **ird.gov.lk** before relying on any invoice for
> filing — the regulation is recent and subject to change.

## What the format requires

The parts Ledgerly handles from the data you enter:

- The heading **"TAX INVOICE"** (toggleable on the
  [invoice template](/guide/settings/invoice-template), on by default).
- **Your** legal name, address, and **VAT registration number**.
- The **customer's** name, address, and TIN / VAT number.
- A **gapless invoice number** (see [document
  numbering](/guide/settings/document-numbering)).
- The **invoice date** _and_ a separate **supply date** — the date goods or services were
  actually delivered. This is the field a generic invoicing tool doesn't have, and Gazette
  2481/22 requires it even when it equals the invoice date. Ledgerly asks for both on
  [every invoice](/guide/sales/creating-an-invoice).
- Per line: description, quantity, unit price, the **tax rate and amount**.
- The **VAT total** shown separately from the net, and the gross total.
- Optionally, the **total in words**.

## What you configure

![The Settings → Invoice template screen: a "Gazette 2481/22" note, a "Show TAX INVOICE label" toggle, a "Show amount in words" toggle, a footer-text box, a logo upload, and a Bank details section](/guide/compliance/invoice-template.jpg "Settings → Invoice template — your logo, footer, and bank details on top of the compliant layout")

On [Settings → Invoice template](/guide/settings/invoice-template): your **logo**, a **footer
line**, the **"TAX INVOICE" and amount-in-words toggles**, and optional **bank details** for
payment instructions. Preview a PDF after any change.

## What changes on your invoices

If you were issuing invoices before July 2026, the visible differences are: the **supply date**
now appears as its own field, the **"TAX INVOICE"** heading, and VAT broken out on its own
line. The numbering and immutability were already there.

## See also

- [Invoice template](/guide/settings/invoice-template)
- [Creating and issuing an invoice](/guide/sales/creating-an-invoice)

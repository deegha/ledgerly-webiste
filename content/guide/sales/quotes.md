---
title: "Quotes"
description: "Creating a quote, sending it, converting an accepted one into an invoice, and what expiry means."
order: 2
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/sales/creating-an-invoice
  - /guide/sales/customers
---

## What this is

A quote is a priced offer to a customer. Nothing posts to the ledger when you create or send
one — a quote has no accounting effect. It only matters once it's **converted into an
invoice**, which is the document that actually posts.

## Where to find it

**Sales → Quotes.**

![The Quotes list: Number, Date, Customer, Valid until, Total and Status columns, with statuses Sent, Converted and Expired](/guide/sales/quotes-list.jpg "Sales → Quotes — a quote moves from Sent to Converted, or lapses to Expired")

Quotes get a gapless **`QUO-` number** and carry a **Valid until** date.

## Creating and sending

**New quote** uses the same line editor as an invoice — customer, lines, quantities, prices,
tax codes, live totals. Set a **Valid until** date; that's the offer's expiry.

Once created, the quote detail gives you the actions:

![A quote detail with actions: Resend, Mark accepted, Mark declined, Convert to invoice; below, the customer and the quote date / valid-until range](/guide/sales/quote-actions.jpg "A sent quote — resend it, record the customer's decision, or convert it")

- **Resend** — email the quote to the customer again.
- **Mark accepted** / **Mark declined** — record the customer's decision.
- **Convert to invoice** — build an invoice from the quote's lines, ready to review and issue.

## Expiry

When a quote passes its **Valid until** date without being converted, it moves to **Expired**.
Expiry is just a status — it doesn't stop you converting it later if the customer comes back;
it's a signal that the price and terms may need a fresh look.

## Converting to an invoice

**Convert to invoice** carries the customer, lines, quantities, prices, and tax codes onto a
new draft invoice. You still set the invoice date, supply date, and due date, review the
[posting preview](/guide/sales/creating-an-invoice), and **issue** it — the invoice is what
posts, not the quote.

## See also

- [Creating and issuing an invoice](/guide/sales/creating-an-invoice)
- [Customers](/guide/sales/customers)

---
title: "Correcting an issued invoice with a credit note"
description: "A credit note is the reversal, in sales form — full or partial, up to what the invoice still owes. It links to the invoice it corrects and posts its own entry."
order: 5
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
related:
  - /guide/sales/issuing-an-invoice
  - /guide/bookkeeping-basics/why-posted-entries-are-immutable
---

## What this is

You can't edit an [issued invoice](/guide/sales/issuing-an-invoice). When one is wrong — the
customer returned goods, you over-charged, a line shouldn't have been there — you issue a
**credit note** against it. The credit note posts an entry that reduces the customer's balance
and reverses the revenue (and VAT, and cost of sales) for the amount credited.

## Where to find it

**Sales → Credit notes.**

![The Credit notes list: Number, Date, Customer, Origin invoice, Total and Status columns; every row names an origin invoice and shows status Issued](/guide/sales/credit-notes-list.jpg "Sales → Credit notes — each one tied to the invoice it corrects")

Choose the invoice you're correcting in **Origin invoice**; it pre-fills the lines from that
invoice, and the credit note reduces that invoice's balance. The note must be for the same
customer and in the invoice's currency.

The form lets you leave **Origin invoice** as "No linked invoice", but then the note isn't
applied to any invoice's balance, and Ledgerly has no way yet to refund that credit or apply it
to another invoice. When a credit note corrects an invoice, link it.

## How much you can credit

A credit note can't exceed what the invoice still owes. The form tells you the limit: "Up to …
(INV-…'s open balance, VAT included) can be credited against this invoice." The open balance
is the invoice total less receipts, advances and earlier credit notes applied to it.

## Full or partial

- **Partial** — credit specific lines or quantities. The example below credits 2 units of
  Cables (4,000.00) against an invoice that had more on it.
- **Full** — credit everything the invoice still owes, e.g. to cancel it and re-issue a
  correct one.

## The credit note

![Credit note CRN-2026-000004: a notice "Posted on Jul 26, 2026 by Test Owner. Credit notes are final once issued.", the customer with a reason "Returned faulty units", the date, a linked origin invoice INV-2026-000009, a linked journal entry JE-2026-000026, and a line crediting 2 units of Cables for 4,000.00](/guide/sales/credit-note-detail.jpg "A credit note — its reason, its origin invoice, and the journal entry it posted")

It carries:

- a **reason** — recorded on the document (here, "Returned faulty units")
- the **origin invoice** it corrects (`INV-2026-000009`), as a link
- its own **journal entry** (`JE-2026-000026`), as a link
- and, like an invoice, it's **final once issued** — it can't be edited. If the credit note
  itself was a mistake, an Owner or Accountant can **Void** it: that posts the exact reverse of
  its entry, and the linked invoice owes the credited amount again.

## Common questions

**Does a credit note refund money?** No — it adjusts what the customer _owes_. Ledgerly doesn't
have a customer refund flow yet; if you return cash to a customer, agree with your accountant
how to record it.

**The invoice was fully paid before I credited it.** Ledgerly won't link a credit note to it:
there's nothing left to credit. If it was paid, void the receipt applied to it first (that
re-opens the invoice), issue the credit note, then record the receipt again — anything paid
over becomes a [customer advance](/guide/sales/applying-a-customer-advance).

## See also

- [What happens when you issue an invoice](/guide/sales/issuing-an-invoice)
- [Why a posted entry can't be edited](/guide/bookkeeping-basics/why-posted-entries-are-immutable)

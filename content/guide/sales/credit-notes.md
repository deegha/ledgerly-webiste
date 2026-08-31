---
title: "Correcting an issued invoice with a credit note"
description: "A credit note is the reversal, in sales form — full or partial. It always links to an origin invoice and posts its own entry."
order: 5
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
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

![The Credit notes list: Number, Date, Customer, Origin invoice, Total and Status columns; every row names an origin invoice and shows status Issued](/guide/sales/credit-notes-list.jpg "Sales → Credit notes — each one is tied to the invoice it corrects")

Every credit note is **linked to an origin invoice** — there's no such thing as a free-standing
one.

## Full or partial

- **Partial** — credit specific lines or quantities. The example below credits 2 units of
  Cables (4,000.00) against an invoice that had more on it.
- **Full** — credit the entire invoice, e.g. to cancel it and re-issue a correct one.

## The credit note

![Credit note CRN-2026-000004: a notice "Posted on Jul 26, 2026 by Test Owner. Credit notes are final once issued.", the customer with a reason "Returned faulty units", the date, a linked origin invoice INV-2026-000009, a linked journal entry JE-2026-000026, and a line crediting 2 units of Cables for 4,000.00](/guide/sales/credit-note-detail.jpg "A credit note — its reason, its origin invoice, and the journal entry it posted")

It carries:

- a **reason** — recorded on the document (here, "Returned faulty units")
- the **origin invoice** it corrects (`INV-2026-000009`), as a link
- its own **journal entry** (`JE-2026-000026`), as a link
- and, like an invoice, it's **final once issued** — a mistake on a credit note is fixed with
  another document, not an edit.

## Common questions

**Does a credit note refund money?** No — it adjusts what the customer _owes_. If you also
return cash, that's a separate payment out.

**The invoice was fully paid before I credited it.** The credit note leaves the customer with
a credit balance (an unallocated amount in your favour to them), which you can apply to a
future invoice or refund.

## See also

- [What happens when you issue an invoice](/guide/sales/issuing-an-invoice)
- [Why a posted entry can't be edited](/guide/bookkeeping-basics/why-posted-entries-are-immutable)

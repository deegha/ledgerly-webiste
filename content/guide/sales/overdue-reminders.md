---
title: "Automatic overdue-invoice reminders"
description: "Ledgerly emails customers when their invoices go past due, and logs every reminder on the invoice."
order: 9
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/sales/customer-payments
  - /guide/reports/ar-ageing
---

## What this is

You don't have to chase overdue invoices by hand. Ledgerly checks daily for issued invoices
that are past their **due date** with a balance still outstanding, and emails the customer a
reminder. It's automatic — there's no switch to flip and no reminder to schedule.

## Where you see it

Each reminder is logged on the invoice itself, in an **Overdue reminders sent** card:

![An issued invoice's detail with an "Overdue reminders sent" card listing two reminders — "7/27/2026 — 65 days overdue" and "7/27/2026 — 57 days overdue" — each sent to the customer's email address](/guide/sales/overdue-reminders.jpg "Every reminder is recorded on the invoice, with how overdue it was and where it went")

Each line shows the **date sent**, **how many days overdue** the invoice was at that point,
and the **email address** it went to — the one on the
[customer's record](/guide/sales/customers).

## What stops the reminders

- The invoice is **paid** (or the balance reaches zero via a
  [credit note](/guide/sales/credit-notes)).
- The invoice is **voided**.

Recording a [payment](/guide/sales/customer-payments) that clears the balance is the normal
way a reminder cycle ends.

## Common questions

**A customer says they're getting reminders for an invoice they've paid.** Check the payment
was actually recorded and allocated to that invoice — an unallocated receipt doesn't clear a
specific invoice's balance.

**The reminder went to the wrong address.** Update the email on the customer's record; future
reminders use the current address.

**Where do I see everything that's overdue, across all customers?** The
[AR Ageing report](/guide/reports/ar-ageing).

## See also

- [Recording a customer payment](/guide/sales/customer-payments)
- [AR Ageing](/guide/reports/ar-ageing)

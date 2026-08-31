---
title: "Document numbering"
description: "Why every invoice, bill, and journal number is gapless — and where you set the prefix and format."
order: 4
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/journal-entries-and-posting
  - /guide/getting-started/first-week-checklist
---

## Where to find it

**Settings → Numbering.**

![Settings → Numbering: a table with Type, Fiscal year, Prefix, Padding and Next number columns; rows for BILL, CREDIT_NOTE, DEBIT_NOTE, EXPENSE, INVOICE and JOURNAL per fiscal year, and CONTACT_CUSTOMER, CONTACT_SUPPLIER, FIXED_ASSET and ITEM as continuous sequences](/guide/settings/document-numbering.jpg "Each document type has its own sequence, prefix, and current next number")

## What a sequence is

Every kind of document — invoice, bill, credit note, expense, journal entry — draws its
number from a **sequence**. Each sequence has:

- a **prefix** (`INV-`, `BIL-`, `JE-`)
- a **padding** width (how many digits the running number is zero-filled to)
- a **next number** — shown here, read-only

Transactional documents get a **fresh sequence per fiscal year** (`INV-2026-000013`,
`INV-2027-000002`). Reference records like customers, suppliers, items and fixed assets use a
single **continuous** sequence.

## Why numbers are gapless

The number is allocated **inside the posting transaction**, with a lock, so two documents can
never take the same number and the sequence can never skip one. This matters for compliance:
an auditor and the tax authority both expect an unbroken run, and Ledgerly's **Document
Sequence Integrity** report exists to prove there is one.

Because of this, you **can't back-fill** a number or insert one out of order. If you're moving
from another system mid-year, set the prefix and starting number to continue your existing
run — before you issue the first document.

## Common questions

**Can I change a prefix later?** You can, but it's disruptive once documents exist — you end
up with two formats in one year. Decide it during your
[first week](/guide/getting-started/first-week-checklist).

**A draft was discarded — did it burn a number?** No. Numbers are allocated at posting, not
when you start a draft.

## See also

- [Journal entries and posting](/guide/bookkeeping-basics/journal-entries-and-posting)
- [A first-week checklist](/guide/getting-started/first-week-checklist)

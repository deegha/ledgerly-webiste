---
title: "Document Sequence Integrity"
description: "Gap detection across every document number your organization has ever allocated — proof the run is unbroken."
order: 12
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/settings/document-numbering
  - /guide/reports/audit-trail
---

## What it answers

_"Is every invoice, bill, and journal number accounted for — no gaps, no jumps?"_ Gapless
numbering is a hard rule (invariant I5), and this report is the evidence.

![The Document Sequence Integrity report for Acme Trading: a green banner "Zero gaps found — every sequence checked is gapless, exactly as invariant I5 requires", and a table with Document type, Sequence prefix, Count, Range and Status ("No gaps") for each document type](/guide/reports/sequence-integrity.jpg "Sequence Integrity — one row per document sequence, each confirmed gapless")

## How to read it

- One row per **document sequence** (per type, per fiscal year — e.g. `INV-2026-`,
  `JE-2027-`).
- **Count** is how many numbers have been allocated; **Range** is lowest to highest.
- **Status** should read **No gaps** for every row, and the green banner should confirm zero
  gaps overall.

If a gap ever appeared, the row would flag it with the missing number — a sign that something
bypassed the posting transaction, which shouldn't be possible.

## Why numbers are gapless

Each number is allocated **inside the posting transaction** with a row lock, never from a
database sequence that could skip. A discarded draft doesn't consume a number. See
[document numbering](/guide/settings/document-numbering).

## Who uses it

Auditors, and the tax authority, expect an unbroken run of tax-invoice numbers. This report is
what you hand them.

## See also

- [Document numbering](/guide/settings/document-numbering)
- [Audit Trail Report](/guide/reports/audit-trail)

---
title: "Data protection and your accounting records: what Sri Lanka's PDPA means"
description: "The Personal Data Protection Act gives people a right to have their data erased. Your books are full of personal data you're legally required to keep. Here's how those two facts reconcile."
date: "2027-01-06"
image: "/images/blog/pdpa-and-your-accounting-records.svg"
---

Sri Lanka's **Personal Data Protection Act No. 9 of 2022** (PDPA) is the country's first comprehensive data-protection law. It gives individuals real rights over their personal data — including a **right to erasure** — and it applies to businesses that hold personal data, which is essentially all of them.

Your accounting records hold a lot of personal data: customer names, addresses, TINs, contact details, and the same for suppliers and staff. So a question arises that most accounting-software content hasn't touched yet: **what do you do when someone asks you to delete their data, and your books are legally required to keep it?**

## The tension, stated plainly

Two obligations point in opposite directions:

- **PDPA:** an individual can request erasure of their personal data, and you generally have a limited window — reported as **21 business days** — to respond.
- **Retention law:** the Companies Act, the Inland Revenue Act, and the VAT Act require you to keep financial records — including the invoices with that person's name on them — for around **seven years**.

You cannot both delete the invoice and keep it for seven years. Something has to give, and the law's own answer is that the retention obligation is a legitimate basis to _refuse_ full erasure — but not a reason to ignore the request.

## How it actually reconciles

The resolution isn't "delete everything" or "ignore the law." It's more surgical:

**1. Anonymise, don't delete.** When you grant an erasure request for someone whose transactions are still inside the retention window, you strip the _identifying_ data — name, address, TIN, contact details are replaced with a placeholder — while the _financial_ records stay intact. The invoices, the amounts, the ledger entries all survive, because the accounts still have to balance and the audit trail still has to be complete. What's gone is the ability to tie those numbers to a named person.

**2. Refuse with a documented reason where retention applies.** If someone's records are inside the seven-year window, you can lawfully refuse full erasure — but you must record _why_, cite the statutory basis, and note the date the hold expires. That refusal record is your compliance evidence; an empty "denied" isn't enough.

**3. Honour the parts you can.** Marketing consent, for instance, has a much shorter retention basis than tax records. A request to stop processing someone's data for marketing can usually be granted immediately even when the financial records must stay.

**4. Support the right of access.** Separately from erasure, a person can ask for everything you hold about them. You need to be able to produce that — a structured export of their contact record and associated transactions.

**5. Set retention periods deliberately.** Each record type should have a defined retention period tied to its legal basis, and you shouldn't be able to quietly set one _below_ the statutory minimum for financial records.

_Commencement dates and specific procedures under the PDPA are still settling — check **dpa.gov.lk** and current guidance before relying on any single interpretation._

## Why this is hard to bolt on later

Anonymisation-in-place is not something you can do to a spreadsheet or a system that stores a customer's name directly on every invoice row. Doing it properly means the data model separates the _person_ from the _transaction_ from the start, so identity can be removed without touching the financial record — and the audit trail has to be append-only so the anonymisation itself is logged and can't be undone silently.

## Where Ledgerly stands

Ledgerly was built with this split in mind. **Settings → Data protection** gives you retention policies per record type (with a warning if you set one below the statutory minimum), an erasure-request workflow with the 21-business-day countdown, grant-by-anonymisation that keeps the ledger balanced, documented refusals with a statutory-hold date, and subject-data export. The mechanics are covered in the [data protection guide](/guide/compliance/data-protection).

It's an emerging area, and getting ahead of it costs little now. For the other side of the compliance picture — invoice format and real-time reporting — see the [gazette 2481/22 explainer](/blog/gazette-2481-22-explained) and the [RAMIS guide](/blog/ramis-e-invoicing-explained).

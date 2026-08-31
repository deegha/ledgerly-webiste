---
title: "Data protection: retention and erasure requests"
description: "Setting retention periods, handling a PDPA erasure request, and exporting everything held about a person."
order: 3
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/getting-started/roles-and-permissions
  - /guide/reports/audit-trail
---

## What this is

The **Personal Data Protection Act No. 9 of 2022** gives individuals rights over their
personal data, including a right to erasure with a **21-business-day** response window. Ledgerly
holds personal data on your contacts and users, so it gives you the tools to meet those
obligations. **Settings → Data protection**, three tabs.

> Commencement dates and specifics change — check **dpa.gov.lk** and current guidance.

## 1. Retention policies

![The Retention policies tab: a table with Record type, Retention (an editable "years" field) and Legal basis columns — AUDIT_TRAIL 7 years (SLAuS 230), FINANCIAL_RECORDS 7 years (Companies Act s.148-150), MARKETING_CONSENT 2 years (PDPA), SESSIONS 0 years, TAX_RECORDS 7 years, VAT_INVOICES 7 years](/guide/compliance/retention-policies.jpg "Retention policies — how long each record type is kept, and the law that requires it")

Each **record type** has a **retention period** and the **legal basis** for it — 7 years for
financial and tax records (Companies Act, Inland Revenue Act, VAT Act), 2 years for marketing
consent, and so on. You can edit the years, but Ledgerly **warns you if you set one below the
statutory minimum** — you can't quietly under-retain a record the law says to keep.

## 2. Erasure requests

![The Erasure requests tab: a table of requests with Subject, Type, Requested date, and Status; one row for "kavoKreative@gmail.com" marked REFUSED with the note "Statutory retention applies until 2033-07-26 under Companies Act s.148-150 — active transactions within the 7-year window"; below, a "Log an erasure request" form](/guide/compliance/erasure-requests.jpg "Erasure requests — each with a countdown to the 21-day deadline, then granted or refused with a reason")

When someone asks you to erase their data:

1. **Log the request** — pick the subject (a contact or a user) and record it. A countdown to
   the **21-business-day deadline** starts; it turns **amber inside 5 days** and **red when
   overdue**.
2. **Review**, then **grant** or **refuse** it.
   - **Grant** → the person's identifying data (name, TIN, address, contact details) is
     **anonymised**, not deleted. The invoices, the amounts, the ledger entries all survive —
     they have to, for the accounts to still balance and for the audit. Anonymisation is
     **irreversible** and needs a typed confirmation.
   - **Refuse** → you **must** give a typed **reason** and a **statutory-hold date**. In the
     example, the request is _REFUSED_ because financial records for that contact are inside
     the 7-year retention window — the refusal record is your compliance evidence, so an empty
     justification isn't allowed.

## 3. Subject data export

Look up a contact or user and **export everything held about them** as JSON or PDF — the PDPA
right of access.

## Who can do this

Logging and reviewing requests is available to compliance managers; **granting or refusing an
erasure request is Owner-only** (the [`erasure:decide`
permission](/guide/getting-started/roles-and-permissions)) — it's one-way.

## See also

- [Users, roles, and permissions](/guide/getting-started/roles-and-permissions)
- [Audit Trail Report](/guide/reports/audit-trail)

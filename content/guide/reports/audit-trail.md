---
title: "Audit Trail Report"
description: "Every insert, update, and delete on a financial table — who, when, what changed, from what to what."
order: 10
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/getting-started/roles-and-permissions
  - /guide/reports/period-history
---

## What it answers

_"Who touched this record, and what exactly did they change?"_ The Audit Trail is the
row-level history of every financial table. It's written by database triggers, and the
application role has no permission to update or delete it — so it can't be tampered with, even
by Ledgerly itself.

![The Audit Trail report for Acme Trading: "647 matching entries"; filter bar for From/To date, User, Table, Operation and Record ID; a table with When, User, Table, Record, Operation (INSERT / UPDATE badges) and IP columns; expandable rows](/guide/reports/audit-trail.jpg "Audit Trail — every change to a financial table, filterable and expandable to the field level")

## How to read it

- Each row is one **operation** — INSERT, UPDATE, or DELETE — on one record of one table.
- **User** is who did it (`system` for cron jobs), **When** is the UTC timestamp, **IP** is
  where from.
- **Expand a row** to see the **field-by-field diff** — each changed field with its old and
  new value.

## Filtering

By **date range**, **user**, **table**, **operation**, or an **exact record ID**. To
investigate one invoice: filter Table = `invoices`, Record ID = that invoice's id, and you get
its entire history.

## Who can see it

**Owner** and **Auditor** roles only — it carries the
[`audit-trail:view` permission](/guide/getting-started/roles-and-permissions). An external
auditor is given the Auditor role precisely for this screen.

## Related audit reports

- [Period Close & Reopen History](/guide/reports/period-history) — closes and reopens, with
  reasons.
- [Document Sequence Integrity](/guide/reports/sequence-integrity) — proof there are no gaps.
- [User Access](/guide/reports/user-access) — current roles and role-change history.

## See also

- [Users, roles, and permissions](/guide/getting-started/roles-and-permissions)
- [Period Close & Reopen History](/guide/reports/period-history)

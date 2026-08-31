---
title: "User Access Report"
description: "Current roles for every team member, and the full history of role changes."
order: 13
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/getting-started/roles-and-permissions
  - /guide/settings/team-members
---

## What it answers

_"Who has access to our books, at what level — and has anyone's access changed?"_

![The User Access report for Acme Trading: "3 active members"; a "Current roles" table with Member, Email, Role (Owner, Accountant) and Joined columns; a "Permission change history" section reading "No role changes recorded yet"](/guide/reports/user-access.jpg "User Access — current roles, plus a log of every role change")

## How to read it

- **Current roles** — every active member with their email, [role](/guide/getting-started/roles-and-permissions),
  and the date they joined.
- **Permission change history** — every time someone's role was changed: who, from what to
  what, when, and by whom. Empty until the first change is made.

## Why it exists

Segregation of duties only means something if you can show who could do what, and when. This
report is the access-control equivalent of the [audit
trail](/guide/reports/audit-trail): an auditor checks it to confirm that, say, the person who
approved payments in March didn't also have the ability to create them.

## What it reconciles to

The **Current roles** table matches [Settings → Team](/guide/settings/team-members) exactly —
this report just adds the history and packages it for review.

## See also

- [Users, roles, and permissions](/guide/getting-started/roles-and-permissions)
- [Team members and invitations](/guide/settings/team-members)

---
title: "Users, roles, and permissions"
description: "The six built-in roles, what each one can and can't do, and how Ledgerly uses them to keep duties separated."
order: 4
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/getting-started/inviting-your-team
  - /help/close-an-accounting-period
---

## What this is

Every person you add to your organization gets exactly one **role**. The role decides which
screens they can act on — not just what they can see. Ledgerly ships six roles; you don't
define your own. They're designed so that on a team of any size, no single person has to hold
every key.

## Where to find it

**Settings → Roles.** The screen is a reference matrix — it shows what each role can do, and
it's the same for every organization. You assign roles to people on **Settings → Team**, not
here.

![The Roles & permissions matrix: rows for each action, columns for OWNER, ACCOUNTANT, BOOKKEEPER, APPROVER, AUDITOR and VIEWER, with a check where the role is permitted](/guide/getting-started/roles-and-permissions.jpg "Settings → Roles — the permission matrix, identical across every organization")

## The six roles

**Owner** — full control. The only role that can change the organization profile, manage the
team, and permanently close a period or a fiscal year. Every organization has at least one
Owner, and it's the one role you can't lock yourself out of.

**Accountant** — runs the books day to day. Creates and approves documents, posts and
reverses manual journal entries, soft-closes periods, and manages the chart of accounts, tax
codes, exchange rates, items, and compliance settings. What they can't do: touch the
organization profile or the team, or hard-close a period.

**Bookkeeper** — enters transactions. Creates documents (invoices, bills, expenses, and so
on) and views reports. They **cannot post a manual journal entry** — anything that needs one
goes to an Accountant.

**Approver** — approves documents but **cannot create them**. This is a deliberate split: on
a team where segregation of duties matters, the person who raises a bill isn't the person who
approves it.

**Auditor** — read-only, plus the audit trail. Sees every report and the full record of who
changed what, and can change nothing. This is the role you give an external auditor.

**Viewer** — read-only, reports only. No audit trail, no document screens.

## What every role can do

All six roles can **view reports**. That's the floor — even a Viewer can open the Trial
Balance, the P&L, and the Balance Sheet.

## What only the Owner can do

- Edit the organization profile and fiscal settings
- Invite, remove, and re-role team members
- **Hard-close** a period and **reopen** one
- Close a fiscal year
- Grant or refuse a data-protection erasure request

These are the irreversible or org-wide actions. If you're the only Owner, consider adding a
second one before you go on leave.

## Common questions

**Can I create a custom role?** No. The six roles are fixed. If none fits exactly, pick the
narrower one — it's safer to grant a second person a capability than to over-grant one.

**Someone needs to post a journal entry but they're a Bookkeeper.** Either an Accountant posts
it, or you change their role. There's no per-action override.

**What happens to a person's past work if I change their role?** Nothing. Every entry stays
attributed to whoever posted it, regardless of their role today. Roles govern what someone can
do next, not what they've already done.

## See also

- [Inviting your team](/guide/getting-started/inviting-your-team)
- [Accounting periods: soft close vs. hard close](/guide/accounting/accounting-periods)

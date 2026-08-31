---
title: "Understanding your dashboard"
description: "What each stat card and chart on the Dashboard is actually reading from your books."
order: 3
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/getting-started/what-is-ledgerly
  - /guide/reports/ar-ageing
  - /help/create-an-invoice
---

## What this is

The Dashboard is the first thing you see after signing in — a live snapshot of your organization's
ledger position, not a separate summary someone has to keep updated. Every number on it is read
straight from your posted journal entries, the same source every report in Ledgerly reads from.

## Where to find it

It's the first item in the left sidebar, labelled **Dashboard** — you land here automatically
after signing in.

![The Ledgerly dashboard for Acme Trading, showing six stat cards, an income vs expenses chart, an AR ageing chart, a needs-attention panel, and a recent-activity feed](/guide/getting-started/dashboard-overview.jpg "The Dashboard for a real seeded organization (Acme Trading)")

## Reading the stat cards

Six figures sit across the top, each with a "what this is as of" line underneath it so you're
never guessing the time window:

- **Revenue**, **Expenses**, and **Net profit** — the current fiscal year to date, compared
  against the prior period, computed the same way the Profit & Loss report is; the Dashboard is
  just showing you today's slice of it.
- **Cash position** — your combined Bank/Cash account balance as at today.
- **AR outstanding** and **AP outstanding** — what customers owe you and what you owe suppliers,
  as at today. These match the totals on the AR ageing and AP ageing reports exactly, because
  they're computed the same way.

## Reading the two charts

- **Income vs expenses — last 12 months** bars out revenue against expenses month by month, so a
  bad month is visible at a glance rather than buried in a year-to-date total.
- **AR ageing** buckets your open invoices by how overdue they are (current, 1–30, 31–60, 61–90,
  90+ days). A tall bar anywhere past "current" is the first place to look before it becomes a
  collections problem.

## Needs attention

This panel surfaces the things that could turn into a real problem if ignored — overdue invoices,
and stock movements that posted while an item's balance went negative. Each line has its own
**Review** link straight to the relevant list, filtered to just the affected records.

## Recent activity

The feed at the bottom lists the most recent journal entries across your whole ledger — payments,
depreciation runs, stock adjustments, manual entries, whatever posted last — each one a link
straight to that entry. This is the fastest way to answer "what just happened in my books,"
and doubles as a sanity check that something you expected to post actually did.

## Common questions

**Why did a number change without me doing anything?** It didn't — every figure here is
recalculated on load from the ledger as it stands right now. If revenue moved, an invoice was
issued or a credit note posted since you last looked, not a caching quirk.

**Can I change the date range?** Not on the Dashboard itself — it's always "this fiscal year to
date" and "as at today." For a specific date range or an as-at-a-past-date view, use the
individual report it summarizes, linked from each section above.

## See also

- [How to create and issue an invoice](/help/create-an-invoice)

---
title: "What reconciliation doesn't cover yet"
description: "Deliberate limits in the current bank reconciliation — one-to-one matching, matching never creates an entry, and there's no auto-matching."
order: 4
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
related:
  - /guide/banking/reconciling
  - /guide/purchases/direct-expenses
---

## Why this page exists

Bank reconciliation in Ledgerly matches statement lines to the entries already in your ledger,
one pair at a time. A few things it deliberately doesn't do yet. Knowing them up front saves
you hunting for buttons that aren't there.

## 1. One statement line, one ledger entry

A statement line matches exactly **one** uncleared ledger entry, of the same amount and
direction. A single bank deposit made up of several receipts can't be split across them, and
one receipt can't be matched to several bank lines.

**What to do:** record one receipt (or one journal) per bank line, so each bank line has
exactly one entry to match.

## 2. Matching never creates an entry

A bank charge, interest or a card spend that's on the statement but not in your books can't be
matched until it's recorded. Ledgerly doesn't create the entry from the statement line.

**What to do:** record it first — an [expense](/guide/purchases/direct-expenses) paid from that
bank for a charge or card spend, a [manual journal](/guide/accounting/journals) for interest or
a transfer between your own accounts — then match it on the
[Reconcile](/guide/banking/reconciling) screen. Expenses and manual journals on the bank's GL
account appear in the **Uncleared ledger entries** pane like any payment.

## 3. No auto-matching

Matching is **entirely manual** — you select a statement line and the ledger entry it
corresponds to, one pair at a time. Ledgerly doesn't suggest likely matches or match by amount
and date automatically. It does refuse a pair whose amount or direction differs.

For a handful of transactions a period this is quick. For high volume it's the part that takes
the time.

## These are intentional

These aren't bugs — they're scoped-out features, chosen deliberately. They may be extended
later; for now, plan your month-end around them.

## See also

- [Reconciling a bank account](/guide/banking/reconciling)
- [Recording a direct expense](/guide/purchases/direct-expenses)

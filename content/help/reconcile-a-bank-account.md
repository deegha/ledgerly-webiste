---
title: "How to reconcile a bank account"
description: "Import a statement, match it against what's in your ledger, and why the difference has to hit exactly zero."
category: "Banking"
---

## Import the statement

From **Banking → Bank accounts**, open the account's **Transactions** and use **Import a
statement**. Ledgerly recognises CSV exports from Commercial Bank, Sampath, HNB, BOC, People's
and NDB, and shows the columns it detected, which you can adjust, before anything is saved.
Enter the period and the opening and closing balance from the statement header; the import is
refused if the lines don't add up to those balances.

## Match lines against your ledger

On **Reconcile**, select a line under **Statement lines** and the entry it corresponds to under
**Uncleared ledger entries** — a receipt, a supplier payment, an expense or a manual journal —
then **Match selected**. Matching is manual, one statement line to one ledger entry. A bank
charge or interest credit that isn't in your books yet has nothing to match: record it first,
then match it.

## Watch the difference

The **Reconciliation summary** shows the **Statement balance**, the **Ledger balance**, the
receipts and payments **Uncleared in ledger**, and the **Difference**. As you match lines, the
difference moves toward zero. This is live, not something you check only at the end.

## Completing the reconciliation

**Complete reconciliation** is only available once the difference is exactly zero and every
statement line is matched. This is deliberate — a reconciliation that's "close enough" isn't
actually a reconciliation, it's a place where an error is quietly hiding. If you can't get to
zero, the usual causes are a transaction in the bank but not yet in Ledgerly (often a bank
charge), or an opening or closing balance keyed wrong on import (remove the import and import
it again).

## Fixing a mistaken match

If you matched the wrong lines, use **Unmatch** from the transactions screen before you
complete — it's a normal, expected part of reconciling. Once a reconciliation is complete, its
lines can't be unmatched.

_See also: [What audit-ready books actually look like](/blog/getting-audit-ready-books) on the blog._

_Read the full guide: [Reconciling a bank account](/guide/banking/reconciling) — the same steps in context, with what posts to the ledger and why._

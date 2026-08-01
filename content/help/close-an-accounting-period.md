---
title: "How to close an accounting period"
description: "The difference between a soft close and a hard close — and why a hard close can't be undone."
category: "Period-end"
---

## Soft close vs. hard close

Ledgerly has two levels of period closing, under **Accounting → Periods**:

- **Soft close** locks a period against casual changes, but can be reopened by someone with the right permission if something genuinely needs correcting — useful for a monthly close where you want to discourage backdated entries without making them impossible.
- **Hard close** is permanent. Once a period is hard-closed, nothing — no role, no override — can reopen it or post a backdated entry into it. This is typically done at year-end, once the numbers are final and reviewed.

## Before closing a period

Reconcile every bank account through the period end date, review the AR and AP ageing reports for anything that looks wrong, and check the trial balance is, in fact, balanced (it always should be, but this is the moment to confirm nothing was posted outside the normal flow). Closing a period doesn't fix problems in it — it just prevents new ones from being added silently.

## What happens to a correction needed after closing

If an error is discovered in a period that's already hard-closed, you don't reopen the old period — you post a correcting entry in the **current** open period that references what it's fixing. This keeps the closed period's numbers exactly as they were reported (which matters if they've already been used in a filed VAT return or a set of financial statements someone relied on) while still getting the books right going forward.

## Year-end closing entries

At fiscal year-end, closing the final period also generates the entry that zeroes out income and expense accounts into Retained Earnings, so the new fiscal year starts with a clean P&L and a carried-forward balance sheet — this happens as one reviewable, posted journal entry, not a silent batch process.

_See also: the [ledger invariants](/#trust) on why a hard close can't be reopened._

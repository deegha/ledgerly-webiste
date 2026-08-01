---
title: "How to reconcile a bank account"
description: "Import a statement, match it against recorded payments, and why the difference has to hit exactly zero."
category: "Banking"
---

## Import the statement

From **Banking**, open the account you want to reconcile and choose **Import statement**. Ledgerly reads CSV exports from the major Sri Lankan banks' column layouts directly — no manual reformatting needed before upload.

## Match lines against your ledger

Each imported statement line — a payment, a bank charge, an interest credit — gets matched against a transaction already recorded in Ledgerly. Most matches are unambiguous (same amount, close date) and can be confirmed with one click; anything that doesn't have an obvious match stays in the **Unmatched** list for you to investigate or match manually.

## Watch the difference

The reconciliation summary shows three numbers at all times: the **statement balance**, the **ledger balance**, and the **difference** between them. As you match lines, the difference moves toward zero. This is live, not something you check only at the end.

## Completing the reconciliation

**Complete reconciliation** is only available once the difference is exactly zero. This is deliberate — a reconciliation that's "close enough" isn't actually a reconciliation, it's a place where an error is quietly hiding. If you can't get to zero, the usual causes are a missing payment (recorded in the bank but not yet in Ledgerly), a duplicate, or a bank charge that hasn't been entered as a transaction yet.

## Fixing a mistaken match

If you matched the wrong lines, use **Unmatch** from the transactions screen — it's a normal, expected part of reconciling, not something to work around by force-completing with a difference left over.

_See also: [What audit-ready books actually look like](/blog/getting-audit-ready-books) on the blog._

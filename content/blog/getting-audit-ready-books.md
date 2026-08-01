---
title: "What 'audit-ready' books actually look like, before the auditor shows up"
description: "Auditors don't want a clean-looking dashboard. They want a trail. Five things that make the difference between a smooth audit and a long one."
date: "2026-03-11"
image: "/images/blog/getting-audit-ready-books.svg"
---

Every SME owner has heard some version of "keep your books audit-ready." Fewer have a concrete sense of what that means beyond "keep receipts." Here's what actually changes an audit from a week of back-and-forth into a straightforward review.

## 1. Every number traces back to an entry

The single biggest time sink in a messy audit is an auditor asking "where did this figure come from?" and nobody being able to answer precisely. If your balance sheet, P&L, and trial balance are all computed by reading the same posted journal entries, that question has a mechanical answer every time: this account balance is the sum of these specific lines, each one attached to the document that created it. If instead your reports are separately calculated summaries that happen to usually agree with each other, that question becomes an investigation.

## 2. Posted documents don't get quietly edited

An auditor will, at some point, sample transactions and check them against source documents. If it's possible for someone to have edited an invoice after it was issued — changing an amount, a date, a customer — without leaving a visible trail, that's not just a risk, it's a finding. The fix isn't "be careful." It's making it structurally impossible: once issued, a document is locked, and any correction is a new, separately dated, separately posted entry.

## 3. There's an audit log an auditor can actually read

Not a changelog buried in application logs somewhere — a record, attributable to a specific user and a specific UTC timestamp, of every mutation to financial data, that the application itself cannot edit or delete. If your bookkeeping tool's own admin account can quietly rewrite the audit trail, it isn't one.

## 4. Bank reconciliation is actually zero, not "close enough"

A reconciliation that's marked complete with a small unexplained difference is a liability, not a convenience. Auditors will ask what the difference is. "We're not sure" is the answer that extends an audit by days.

## 5. Numbering is gapless, and gaps are explainable

Invoice, bill, and journal entry numbers should never skip — and if one is voided, that has to be visible as a void, not a silent hole in the sequence. A missing number with no explanation is one of the first things an auditor checks, precisely because it's one of the easiest things to hide inconsistent bookkeeping behind.

---

None of these are things you can retrofit the week before an audit. They're properties of how your bookkeeping system is built, not habits you adopt under deadline. The businesses that find audits genuinely uneventful are the ones where these five things were true on day one, not fixed on day 89.

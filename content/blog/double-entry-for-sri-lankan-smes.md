---
title: "Why double-entry actually matters for a Sri Lankan SME"
description: "Single-entry bookkeeping works fine until the day it doesn't — usually the day a bank, an auditor, or the IRD asks a question your spreadsheet can't answer."
date: "2026-06-02"
image: "/images/blog/double-entry-for-sri-lankan-smes.svg"
---

Most small businesses in Sri Lanka don't start with double-entry bookkeeping. They start with a spreadsheet, or an invoicing app that happens to also draw a P&L by summing up the invoices it has on file. That works, right up until it doesn't.

## The moment it breaks

Here's the failure mode we see most often: an invoice for LKR 60,000 gets issued in June, a customer pays LKR 40,000 in July, and in August someone notices the invoice had the wrong item on it and edits it down to LKR 50,000. What happens to the payment that was recorded against the original LKR 60,000?

In a system that computes its reports by summing source documents, the answer is: nobody really knows. The dashboard might show LKR 50,000 owed. The payment record might still say it was applied against a LKR 60,000 invoice. Reconcile that against your bank statement and the numbers won't match, and there's no single place that tells you _why_.

## What double-entry actually buys you

Double-entry bookkeeping isn't a compliance formality — it's a structural guarantee. Every transaction becomes a journal entry with at least two lines, and the debits always equal the credits. Editing an invoice after a payment has already been recorded doesn't happen; instead, the invoice is locked the moment it's issued, and any correction is a new, separate entry — a credit note — that itself posts a balanced pair of lines.

The practical effect: your balance sheet, your P&L, your bank reconciliation are never our best guess reconstructed from a pile of documents. They're a direct read of a ledger where every number can be traced back to the entry that produced it.

## What to check in whatever you're using today

If you're not sure whether your current bookkeeping tool is doing real double-entry under the hood, ask it these three questions:

1. **Can a posted invoice be edited directly?** If yes, it isn't double-entry — corrections should always be a new entry (a credit note, a reversal), never a silent edit of history.
2. **Where does your P&L come from?** If the honest answer is "we add up the invoices and bills," that's a single-entry system wearing double-entry clothes.
3. **Does your bank reconciliation ever refuse to complete?** A real reconciliation can't be marked done while the difference isn't exactly zero. If it lets you close out a mismatch, it's not actually checking anything.

None of this is exotic accounting theory — it's the same standard an auditor works to, and the same standard the Inland Revenue Department expects your books to meet if they ever ask to see them. The earlier your bookkeeping is built on it, the less painful the first audit is.

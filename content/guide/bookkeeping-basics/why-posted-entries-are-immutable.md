---
title: "Why a posted entry can't be edited — only reversed or voided"
description: "Editing history is how books stop being trustworthy. Ledgerly won't let you do it, and this is why."
order: 5
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
related:
  - /guide/bookkeeping-basics/journal-entries-and-posting
  - /guide/bookkeeping-basics/accounting-periods
---

## The rule

Once a journal entry is **posted**, Ledgerly will not let anyone change it or delete it. Not
an Accountant, not the Owner. The only way to undo its effect is to post a **reversal** — a
second entry with the debits and credits swapped, which cancels the first. For an entry you
posted by hand, that's **Reverse**. For an entry a document posted, it's **Void** on the
document, which posts the reversal for you.

![A posted journal entry, JE-2026-000011, with the source BILL and the note "Posted on Oct 24, 2026 by Demo Owner. JE-2026-000011 was posted by a document, so it can't be reversed here — void the bill, or record a debit note against it instead. That keeps the document and the ledger in step."; below it the narration, supporting documents and the lines](/guide/bookkeeping-basics/journal-entry-bill.webp "There's no Edit button on a posted entry. A bill's entry is corrected through the bill; a manual entry has a Reverse button")

## Why it works this way

**Books are a historical record, not a working document.** If a posted figure can be quietly
changed later, then no report printed from those books can be trusted — because the numbers
behind it might not be the numbers that were there yesterday.

Keeping posted entries immutable buys you three things:

- **An audit that means something.** An auditor can rely on the fact that what they're looking
  at is what happened. Corrections are visible as their own dated entries, not silent edits.
- **Reports that don't change behind your back.** A P&L you ran last month still ties out if
  you run it again today.
- **A clear trail for every correction.** A mistake plus its reversal plus the right entry
  tells the whole story. A mistake that was edited away tells nothing.

## How you actually fix things

| Situation                                  | What you do                                                            |
| ------------------------------------------ | ---------------------------------------------------------------------- |
| A **draft** invoice or bill is wrong       | Edit it, or **Discard draft**. Nothing has posted.                     |
| A posted **manual journal** is wrong       | **Reverse** it, then post the correct entry.                           |
| An **issued invoice** is wrong             | Raise a credit note against it, or **Void** it to reverse it entirely. |
| A **posted bill** is wrong                 | Record a debit note against it, or **Void** it to reverse it entirely. |
| A **payment, receipt or expense** is wrong | **Void** it, then record it again correctly.                           |

**Void** needs a reason, which goes in the audit trail with your name, and a void date in an
open period; the reversal posts on that date. Ledgerly refuses a void that would leave other
records out of step — for example an invoice with payments or notes still applied (void those
first), a document already in a filed VAT return, or a payment matched to a bank statement
line — and says what to do instead.

In every case the original stays visible, the correction is dated, and the books tell the
truth about both.

## This is also why periods close

Immutability at the entry level has a companion at the period level: once a
[period is closed](/guide/bookkeeping-basics/accounting-periods), nothing new can post into
it either. Same principle, wider scope.

## See also

- [Journal entries and posting](/guide/bookkeeping-basics/journal-entries-and-posting)
- [Accounting periods, and why you "close" one](/guide/bookkeeping-basics/accounting-periods)

---
title: "Why a posted entry can't be edited — only reversed"
description: "Editing history is how books stop being trustworthy. Ledgerly won't let you do it, and this is why."
order: 5
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/journal-entries-and-posting
  - /guide/bookkeeping-basics/accounting-periods
---

## The rule

Once a journal entry is **posted**, Ledgerly will not let anyone change it or delete it. Not
an Accountant, not the Owner. The only way to undo its effect is to post a **reversal** — a
second entry with the debits and credits swapped, which cancels the first.

![The header of a posted journal entry showing a "Reverse" button and the note "Posted on Jul 27, 2026 by Test Owner. Reverse this entry to correct."](/guide/bookkeeping-basics/posted-immutable.jpg "There's no Edit button on a posted entry — only Reverse")

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

| Situation                      | What you do                                                          |
| ------------------------------ | -------------------------------------------------------------------- |
| A **draft** entry is wrong     | Edit it, or discard it. Nothing has posted.                          |
| A **posted** entry is wrong    | Post a reversal, then post the correct entry.                        |
| An **issued invoice** is wrong | Raise a credit note against it — that's the reversal, in sales form. |
| A **posted bill** is wrong     | Raise a debit note against it.                                       |

In every case the original stays visible, the correction is dated, and the books tell the
truth about both.

## This is also why periods close

Immutability at the entry level has a companion at the period level: once a
[period is closed](/guide/bookkeeping-basics/accounting-periods), nothing new can post into
it either. Same principle, wider scope.

## See also

- [Journal entries and posting](/guide/bookkeeping-basics/journal-entries-and-posting)
- [Accounting periods, and why you "close" one](/guide/bookkeeping-basics/accounting-periods)

---
title: "Journal entries and posting"
description: 'A journal entry is one balanced transaction in the ledger. "Posting" is the moment it becomes part of the permanent record.'
order: 4
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/double-entry
  - /guide/bookkeeping-basics/why-posted-entries-are-immutable
---

## What a journal entry is

A **journal entry** is one transaction, written into the ledger as a set of lines that
balance. Each line names an account and an amount on either the debit or the credit side; the
debits and credits total to the same figure.

In Ledgerly you rarely write one by hand. Issuing an invoice, recording a bill, running
depreciation, reconciling a bank line — each of these _creates_ a journal entry for you, from
a template that's been checked to balance. A manual journal entry is the exception, for the
handful of things no document covers.

![Journal entry JE-2027-000007: status Posted, source INVOICE, dated 5/10/2027, narration "Invoice INV-2027-000001", four balanced lines, a note reading "Posted on Jul 27, 2026 by Test Owner. Reverse this entry to correct."](/guide/bookkeeping-basics/journal-entry.jpg "A posted journal entry — its source, its narration, its balanced lines, and who posted it")

Every entry carries:

- an **entry number** (`JE-2027-000007`) — gapless, allocated in sequence
- a **date** — which decides the [period](/guide/bookkeeping-basics/accounting-periods) it
  falls in
- a **source** — `INVOICE`, `BILL`, `PAYMENT_RECEIVED`, `DEPRECIATION`, `MANUAL`, and so on
- a **narration** — a plain-language description
- its **lines**, and a **who and when** stamp

## What "posting" means

A journal entry has two states:

- **Draft** — a work in progress. Nothing has happened to your books yet. You can edit it
  freely or discard it.
- **Posted** — committed to the ledger. It now counts. Every report includes it. And it can
  no longer be changed.

**Posting is the moment a transaction becomes real.** Before you post, you're preparing;
after you post, you're on the record. This is why Ledgerly shows you a preview of the exact
lines an invoice or bill will post _before_ you commit — so the decision to post is made with
full sight of its effect.

## Posting checks three things

When you post, Ledgerly confirms:

1. **The entry balances** — total debits equal total credits. It won't post otherwise.
2. **The date is in an open period** — you can't post into a period that's been closed.
3. **You're allowed to** — posting a manual journal needs the right
   [role](/guide/getting-started/roles-and-permissions).

If all three hold, the entry gets its number and joins the ledger.

## See also

- [Why a posted entry can't be edited](/guide/bookkeeping-basics/why-posted-entries-are-immutable)
- [Accounting periods](/guide/bookkeeping-basics/accounting-periods)

---
title: "Journal entries and posting"
description: 'A journal entry is one balanced transaction in the ledger. "Posting" is the moment it becomes part of the permanent record.'
order: 4
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
related:
  - /guide/bookkeeping-basics/double-entry
  - /guide/bookkeeping-basics/why-posted-entries-are-immutable
---

## What a journal entry is

A **journal entry** is one transaction, written into the ledger as a set of lines that
balance. Each line names an account and an amount on either the debit or the credit side; the
debits and credits total to the same figure.

In Ledgerly you rarely write one by hand. Issuing an invoice, recording a bill or a payment,
running depreciation — each of these _creates_ a journal entry for you, from a template that's
been checked to balance. (Reconciling a bank line doesn't: matching only pairs a statement
line with an entry that's already in the ledger.) A manual journal entry is the exception, for the
handful of things no document covers.

![Journal entry JE-2026-000011: status Posted, source BILL, dated 10/8/2026, narration "Bill BIL-2026-000006", balanced lines to Travel & Transport, Input VAT (Recoverable) and Trade Payables totalling 217,710.00, and the note "Posted on Oct 24, 2026 by Demo Owner. JE-2026-000011 was posted by a document, so it can't be reversed here — void the bill, or record a debit note against it instead."](/guide/bookkeeping-basics/journal-entry-bill.webp "A posted journal entry — its source, its narration, its balanced lines, and who posted it")

Every entry carries:

- an **entry number** (`JE-2026-000011`) — gapless, allocated in sequence
- a **date** — which decides the [period](/guide/bookkeeping-basics/accounting-periods) it
  falls in
- a **source** — `INVOICE`, `BILL`, `PAYMENT_RECEIVED`, `DEPRECIATION`, `MANUAL`, and so on
- a **narration** — a plain-language description
- its **lines**, and a **who and when** stamp

## What "posting" means

**Posting is the moment a transaction becomes real.** Before it, nothing has happened to your
books; after it, the entry counts, every report includes it, and it can no longer be changed.

Where you prepare is the **document**. A draft invoice or bill is a work in progress — you can
edit it freely or discard it, and it's not in the ledger. Issuing it posts its journal entry.
Ledgerly shows you the exact lines an invoice or bill will post _before_ you commit, so the
decision to post is made with full sight of its effect. A manual journal entry posts as soon
as you click **Post journal entry**.

A journal entry you see in the ledger is either:

- **Posted** — committed to the ledger, and counting.
- **Void** — reversed. The entry stays visible, and the reversing entry that cancels it is in
  the ledger too.

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

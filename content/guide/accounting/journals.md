---
title: "Journals and manual journal entries"
description: "The list every auditor opens, when you'd post a manual entry by hand, and the checks that stand between you and posting."
order: 2
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/journal-entries-and-posting
  - /guide/accounting/accounting-periods
---

## The Journals list

**Accounting → Journals** is every posted entry in your ledger, whatever produced it —
invoices, bills, payments, depreciation, stock moves, year-end close, and the ones you post by
hand. Each row shows the entry number, date, narration, **source** badge, debit total, and
status.

The **Manual only** filter is prominent for a reason: it's what an auditor opens first, to see
every entry a person made directly rather than one a document generated.

## When you'd post a manual entry

Most of your ledger should come from documents. Reach for a manual journal entry only when no
document fits:

- **Accruals and prepayments** at period end
- **Depreciation** if you're not using the [fixed assets](/guide/accounting/fixed-assets)
  module
- **Payroll**, posted from the payroll template (a pre-mapped account layout, not an engine)
- **Corrections** that aren't a credit/debit note — e.g. reclassifying between two expense
  accounts
- **Opening balances**, if you didn't enter them during onboarding

If you find yourself posting manual entries for routine sales or purchases, use the documents
instead — they post the same entry and keep the sub-ledgers right.

## Posting one

**New journal entry**:

![The new journal entry form: a Date field showing a warning "This date falls in a closed accounting period.", a Narration field, a Template selector, and a line grid with account, description, debit and credit columns; a "Post journal entry" button is disabled](/guide/accounting/new-journal-entry.jpg "The manual journal form — date, narration, a template option, and a balanced line grid")

1. **Date** — decides the [period](/guide/accounting/accounting-periods). If it's a closed
   period, Ledgerly warns you here and won't let you post.
2. **Narration** — required. Explain _why_, not just _what_.
3. **Template** — optionally load a pre-mapped layout (e.g. payroll) that fills the accounts
   for you; you still enter the amounts.
4. **Lines** — an account, an optional description, and an amount in **either** the debit
   **or** the credit column.

**Post journal entry** stays disabled until the entry **balances** — total debits equal total
credits. You also need the [`journal:post-manual`
permission](/guide/getting-started/roles-and-permissions) (Owner or Accountant).

## After posting

A manual entry is immutable like any other. Wrong one? **Reverse** it from its detail page and
post a correct one. The reversal links back to the original, so the trail is complete.

## See also

- [Journal entries and posting](/guide/bookkeeping-basics/journal-entries-and-posting)
- [Accounting periods](/guide/accounting/accounting-periods)

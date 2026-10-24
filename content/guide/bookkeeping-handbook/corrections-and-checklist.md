---
title: "Corrections and the pre-save checklist"
description: "What can and can't be undone, how Void and Discard work, and the twelve checks to run before every Issue, Record or Post."
order: 12
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/bookkeeping-basics/why-posted-entries-are-immutable
  - /guide/accounting/journals
---

## What each action does, and how it's corrected

| Action                                               | Where                                        | Correction                                                                            |
| ---------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Issue** a bill, debit note, invoice or credit note | the document form                            | **Void** (Owner/Accountant), or a debit note (bills) / credit note (invoices)         |
| **Record expense**, **Record payment**               | the expense / payment form                   | **Void** (Owner/Accountant)                                                           |
| **Post journal entry** (manual)                      | Journals → New                               | **Reverse entry** on the journal's page (Owner/Accountant), or a correcting journal   |
| **Reverse entry**                                    | a manual journal's page                      | None: it can't be undone, and a reversal can't itself be reversed                     |
| **Save draft**                                       | bill, debit note, invoice, credit note forms | **Discard draft**                                                                     |
| **Import statement**                                 | bank Transactions                            | **Remove import**, while nothing is matched and no completed reconciliation covers it |
| **Complete reconciliation**                          | Reconcile                                    | None                                                                                  |
| **File return** (VAT)                                | Reports → VAT Return                         | None: a period can't be filed twice, and filing soft-closes every period in the range |
| Soft close / hard close / year-end close             | Accounting → Periods                         | Hard close and year-end close are permanent and Owner-only                            |
| **Post depreciation**, dispose of an asset           | the asset's page                             | A correcting journal; agree it with your accountant                                   |
| New supplier or account                              | the forms                                    | Can't be deleted, only deactivated: search first                                      |

## Void

An Owner or Accountant can void a posted invoice, bill, credit note, debit note, expense, customer
payment or supplier payment. The **Void** button is at the top of the document's page.

- You give a **Reason** (recorded in the audit trail with your name) and a **Void date**, and type
  **VOID** to confirm.
- The void date must be in an **open period**, not before the document's own date, and not later
  than today.
- Ledgerly posts the **exact reverse** of the document's journal entry on the void date, and
  updates the document in the same step: status **VOID**, balance 0. A voided payment re-opens
  every invoice or bill it paid; a voided credit or debit note gives the amount back to its
  invoice or bill.
- The document **keeps its number** and stays visible with a **VOID** badge and a banner showing
  who voided it, when, why, and the reversing entry. Voided documents drop out of the ageing
  reports from the void date.
- In the VAT return, the original counts in its own period and the reversal in the void date's
  period, so a void inside one return nets to zero.

Void is **refused** when:

- payments or notes are applied to the document: void those first (the message names them);
- the document is dated inside a **filed** VAT return: use a credit note or debit note instead;
- the document moved **stock**: a void doesn't reverse stock movements, so use a credit or debit
  note;
- a payment, receipt or expense is **matched to a bank statement line**;
- a supplier payment's **WHT may already be with the IRD** (a WHT Payable payment is posted on or
  after it): record a debit note instead;
- an invoice has been **accepted or is being transmitted** in RAMIS (a submission the IRD hasn't
  accepted yet is cancelled by the void instead).

### Documents whose entry was reversed by hand

Before Reverse was limited to manual journals, a document's own entry could be reversed from the
journal screen. Such a document shows a notice that its entry was reversed and that nothing can
be applied to it. **Void it**: the void adopts the existing reversal and posts nothing new. If the
entry was reversed more than once, the void is refused; ask your accountant.

## Discard draft

A draft bill, debit note, invoice or credit note that you no longer need can be removed with
**Discard draft** on its edit page. It never posted, so nothing in the ledger changes. It leaves
the list (the **Discarded** filter still shows it) and stays in the audit trail. Anyone who can
create documents can discard a draft; anything already issued has to be voided instead.

## The checklist before every Issue, Record or Post

1. Right **organization**? Check the name in the header.
2. **No duplicate?** Search Bills or Expenses for the supplier invoice number and amount.
3. **Date** = the document's date, and that month is **OPEN**.
4. **Supplier** correct, with **VAT registered** and a **TIN** if you're claiming VAT.
5. **Lines:** net amounts, one tax code per line, **VAT18S** for SSCL plus VAT, no WHT on a line.
6. **Totals** on screen = the subtotal, VAT and total on the document (±0.01).
7. **Account** right on every line.
8. **Paid from / Pay from** = the account the money really left.
9. On a payment: **WHT** matches the certificate, and **Unallocated** is 0 (or is a deliberate
   prepayment).
10. **Attachment** uploaded and listed.
11. **Reference / Supplier invoice #** filled in.
12. Click once, and wait for the number (`BIL-`, `EXP-`, `PAY-`). Don't double-click or retry
    blindly: check the list first.

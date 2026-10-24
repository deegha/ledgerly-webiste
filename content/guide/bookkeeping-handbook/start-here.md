---
title: "Start here: the bookkeeper's routine"
description: "Who this handbook is for, the six rules that prevent most mistakes, and how the chapter is laid out."
order: 1
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/bookkeeping-basics/double-entry
  - /guide/getting-started/first-week-checklist
---

## Who this is for

This handbook is for the person who keeps the books day to day: entering supplier bills,
expense receipts and supplier payments, importing the bank statement and reconciling it, and
checking the month before the VAT return goes in. It assumes a Sri Lankan business: base
currency **LKR**, **VAT** at 18%, **SSCL** at 2.5%, **WHT** deducted from some supplier
payments, and returns filed with the **IRD**.

The rest of the User Guide explains each screen on its own. This chapter is the **routine**: what
to do, in what order, and why. Each step names the screen and button exactly as they appear in
the app, so you can follow along with Ledgerly open beside it.

## The six rules

1. **Enter opening balances before the first transaction.** Without them, cash and bank go
   negative as soon as you record a payment, and the first reconciliation can't reach zero. See
   [Setting up before your first entry](/guide/bookkeeping-handbook/setting-up).
2. **Posting is permanent; corrections are new entries.** Anything you **Issue**, **Record** or
   **Post** gets a number and a journal entry that's never edited. An Owner or Accountant can
   **Void** a document (Ledgerly posts the exact reverse), or you correct it with a debit note,
   credit note or manual journal. See
   [Corrections and the pre-save checklist](/guide/bookkeeping-handbook/corrections-and-checklist).
3. **Attach the source document before you save.** Bills take attachments only while they're
   drafts, and expenses and payments only at the moment you record them.
4. **One tax code per line, and never WHT on a line.** VAT and SSCL go on the line (use
   **VAT18S** when a supplier charges both). WHT is deducted on the **supplier payment**, not added
   to the bill. See [VAT, SSCL and WHT](/guide/bookkeeping-handbook/vat-sscl-and-wht).
5. **Reverse is for manual journals only.** Invoices, bills, expenses and payments are corrected
   with **Void** or a credit/debit note. The journal screen doesn't offer **Reverse entry** on
   them.
6. **Reconcile from complete books.** Record every line on the bank statement in Ledgerly first
   (payments, expenses, charges, interest, transfers), import the whole statement, and match it
   line for line until the difference is zero. See
   [Reconciling the bank](/guide/bookkeeping-handbook/bank-reconciliation).

## How this chapter is laid out

| Article                                                                                         | Covers                                                           |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [Setting up before your first entry](/guide/bookkeeping-handbook/setting-up)                    | Roles, VAT settings, periods, banks, suppliers, opening balances |
| [How Ledgerly thinks: bill or expense?](/guide/bookkeeping-handbook/bill-or-expense)            | The rules behind every screen, and which document to use         |
| [Suppliers, bills and expenses](/guide/bookkeeping-handbook/suppliers-bills-expenses)           | Step by step, with the account and tax fields                    |
| [Paying suppliers, WHT and prepayments](/guide/bookkeeping-handbook/paying-suppliers)           | Supplier payments, withholding tax, applying prepayments         |
| [Assets, debit notes and journals](/guide/bookkeeping-handbook/assets-notes-journals)           | Equipment, supplier credits, manual journals, customer receipts  |
| [Choosing the account](/guide/bookkeeping-handbook/choosing-the-account)                        | Which account for which cost, and the default chart              |
| [VAT, SSCL and WHT](/guide/bookkeeping-handbook/vat-sscl-and-wht)                               | Tax codes, VAT18S, and when input VAT is recoverable             |
| [Attaching source documents](/guide/bookkeeping-handbook/attachments)                           | When and how to attach the evidence                              |
| [Importing a bank statement](/guide/bookkeeping-handbook/bank-statement-import)                 | Linking bank accounts, CSV formats, import checks                |
| [Reconciling the bank](/guide/bookkeeping-handbook/bank-reconciliation)                         | Matching to zero and completing                                  |
| [Corrections and the pre-save checklist](/guide/bookkeeping-handbook/corrections-and-checklist) | Void, discard, and what can't be undone                          |
| [Month end](/guide/bookkeeping-handbook/month-end)                                              | The VAT return and the reports to check                          |
| [What each document posts](/guide/bookkeeping-handbook/what-each-document-posts)                | The journal entry behind every document                          |
| [Common mistakes and things to know](/guide/bookkeeping-handbook/common-mistakes)               | The usual slips, and current quirks of the app                   |

## Before you start

App routes all sit under your organization, for example `/c/<your organization>/purchases/bills`.
Screen names in **bold** match the sidebar and button labels exactly.

If something on your screen doesn't match what's written here, trust the screen and tell us at
[contact@ledgerly.lk](mailto:contact@ledgerly.lk). Ledgerly changes often, and each article
records the build it was last checked against.

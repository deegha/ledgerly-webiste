---
title: "How Ledgerly thinks: bill or expense?"
description: "The five rules behind every screen, and how to choose between a bill and a direct expense."
order: 3
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/bookkeeping-basics/journal-entries-and-posting
  - /guide/purchases/recording-a-bill
  - /guide/purchases/direct-expenses
---

## Five rules

1. **Everything is double-entry.** Each saved document posts a journal entry, and every report
   reads only the journal.
2. **Drafts can be edited or discarded; posted documents can't be edited.** Bills are **DRAFT**
   until you click **Issue**. Expenses and supplier payments post the moment you click **Record
   expense** or **Record payment**. A posted document is corrected by **Void** (Owner or
   Accountant) or with a debit note, never edited.
3. **Numbers are assigned at posting** and have no gaps: `BIL-2026-000001`, `EXP-…`, `PAY-…`,
   `JE-…`, suppliers `SUP-0001`. A draft shows a placeholder. A voided document keeps its number.
4. **The date drives the period and the tax rate.** Use the date on the supplier's document (the
   bill date or the expense date).
5. **One tax code per line.** Tax = net × the code's rate. You can't type a tax amount. A code
   such as **VAT18S** (SSCL then VAT) is still one code.

## Bill or expense?

| Use a **Bill** when…                                                        | Use an **Expense** when…                                                                                              |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| The supplier gave you an invoice and you'll pay it **later** (credit terms) | You **already paid** at the time: card, cash, petty cash, an on-the-spot transfer, a subscription charged to the card |
| You want it in **AP Ageing** and paid through **Supplier payments**         | Nothing is owed: the receipt is the proof of payment                                                                  |
| You may pay it in parts, deduct WHT, or correct it later with a debit note  | It's a small receipt: taxi, fuel, stationery, a bank charge, courier                                                  |
| It's stock (inventory items)                                                | It's a running cost, not stock (expenses don't move inventory)                                                        |

Both forms let you choose the **Account** on each line.

### What each posts

- **Bill (Issue):** Dr each line's account (free-text lines default to **6000 Operating
  Expenses**; stock lines always use the item's inventory account), Dr **1300 Input VAT** for
  recoverable VAT, Cr **2000 Trade Payables** for the gross total.
- **Supplier payment (Record):** Dr 2000 for the gross amount each bill is cleared by, Cr **2200
  WHT Payable** for any WHT withheld, Cr the bank for the cash paid. Any amount not allocated to a
  bill goes to Dr **1400 Prepayments**, and you can apply it to a bill later.
- **Expense (Record):** Dr the account on each line, Dr **1300** for recoverable VAT, Cr the
  **Paid from** bank or cash account.

[What each document posts](/guide/bookkeeping-handbook/what-each-document-posts) has the full
set.

### Tie-breakers

- **Paid already and it's a normal running cost:** use an **Expense**, even if the supplier
  issued a tax invoice.
- **Not paid yet:** use a **Bill**.
- **Paid by the owner personally:** neither. Agree the treatment with your accountant. A common
  approach is a manual journal, Dr the expense account / Cr a director's current account (a
  liability account you create), because an expense can only be paid from a bank or cash account.

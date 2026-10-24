---
title: "Suppliers, bills and expenses"
description: "Adding a supplier with the right VAT and WHT defaults, entering a supplier bill, and recording an expense you've already paid."
order: 4
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/purchases/suppliers
  - /guide/purchases/recording-a-bill
  - /guide/purchases/direct-expenses
---

## 1. Add a supplier

**Purchases → Suppliers → New supplier.** You can also quick-create a supplier from inside the
bill or expense form, but the full form shows the VAT and WHT fields, so it's safer.

**Search the list first.** A supplier can't be deleted, only deactivated, so avoid duplicates.

![The Suppliers list with supplier number, name, TIN and credit limit, and the New supplier button](/guide/bookkeeping-handbook/suppliers-list.webp "Purchases → Suppliers: search here before creating a new one")

1. **Type:** Supplier. **Name:** as on their invoice. **Legal name:** the registered name, if
   different.
2. **TIN:** the supplier's TIN, from their tax invoice.
3. **VAT registered:** switch it **on** only if their invoice is a _tax invoice_ showing a VAT
   registration number. Then fill in **VAT registration no.**
4. **Payment terms (days):** from their invoice (default 30). Address, email and phone are
   optional but useful.
5. **Payable account override:** leave empty; it defaults to **2000 Trade Payables**.
6. **Default purchase tax code:** the code most of their invoices carry, for example **VAT18**,
   or **VAT18S** if they charge SSCL and VAT. It pre-fills on new bill, debit note and expense
   lines for this supplier. An item's own tax code takes precedence, and a code you pick by hand is
   never overwritten.
7. **Default WHT on payments:** for suppliers you withhold tax from (for example **WHT14** for a
   landlord). It pre-selects the WHT code on their supplier payments. WHT codes can't be used as a
   purchase or sales tax code.
8. Click **Create contact** (that's the button's label on the supplier form). The supplier gets a
   number, `SUP-0001` and so on.

![The New supplier form filled in for a VAT-registered supplier: name, TIN, VAT registration no., the VAT registered switch on, email, phone, city and 30-day payment terms; Default purchase tax code set to VAT18 and Default WHT on payments set to WHT5, with the Create contact button at the bottom](/guide/bookkeeping-handbook/new-supplier-form.webp "WHT is withheld from the payment, never added to the bill")

## 2. Enter a bill (a supplier invoice you'll pay later)

**Purchases → Bills → New bill.**

![The Bills list: Number, Supplier ref, Date, Supplier, Due date, Total, Balance and Status columns, with Draft, Issued, Part-paid, Paid, Void and Discarded filters above it; bills show DRAFT, ISSUED, PARTIALLY PAID and PAID statuses](/guide/bookkeeping-handbook/bills-list.webp "Purchases → Bills: the Supplier ref column is where duplicates show up")

1. **Supplier:** pick the supplier. If VAT applies, check it's the record with VAT registered on
   and a TIN.
2. **Supplier invoice #:** the supplier's invoice number exactly, for example `INV-4471`. This is
   how you'll spot duplicates.
3. **Currency:** LKR, unless the invoice is in a foreign currency.
4. **Bill date:** the invoice date. **Supply date:** when the goods or services were received
   (often the same). **Due date:** the invoice date plus the terms.
5. **Lines.** One line per account and tax treatment (not necessarily one per invoice line):
   - **Item:** leave blank (free text) unless it's a stock item or a catalogue item.
   - **Description:** short and specific, for example "Office rent Nov 2026" or "Electricity acct
     1234 Oct 2026".
   - **Account:** where the cost belongs, for example **6200 Rent** or **6210 Utilities**.
     Free-text lines start on **6000 Operating Expenses**; change it. A stock item's line is locked
     to that item's inventory account. See
     [Choosing the account](/guide/bookkeeping-handbook/choosing-the-account) for what's allowed.
   - **Qty:** 1, or the real quantity. **Unit price:** the **net** amount before VAT and SSCL.
   - **Tax code:** **VAT18** if the invoice charges VAT; **VAT18S** if it charges SSCL and VAT on
     top; **SSCL** if it charges only SSCL; empty (or **NOVAT**) if there's no tax. WHT codes
     aren't offered here: WHT is deducted when you pay. See
     [VAT, SSCL and WHT](/guide/bookkeeping-handbook/vat-sscl-and-wht).
   - Check the **Line total** against the invoice.
6. **Reference:** a PO number, if any. **Notes:** anything unusual, for example "VAT on invoice
   18,000.00; Ledgerly computed 17,999.99".
7. **Attachments:** attach the supplier invoice PDF or photo **now**. See
   [Attaching source documents](/guide/bookkeeping-handbook/attachments).
8. Compare the on-screen subtotal, tax and total with the invoice. If they match, click
   **Issue**. **Save draft** keeps it editable; a draft you no longer need can be removed with
   **Discard draft** (it never posted, so nothing in the ledger changes).
9. The issued bill shows status **ISSUED**, its `BIL-` number, **Input VAT recoverable**
   Yes/No, and a link to its journal entry. Check that Yes/No is what you expected (see
   [When input VAT is recoverable](/guide/bookkeeping-handbook/vat-sscl-and-wht#when-input-vat-is-recoverable)).

![A new bill line with the Tax code list open, offering NOVAT, SSCL, VAT0, VAT18, VAT18S (20.95%) and VATEX; no WHT codes are listed](/guide/bookkeeping-handbook/bill-tax-code-dropdown.webp "The tax code list on a bill line: WHT codes are never offered")

![A new bill from Ceylon Packaging Solutions, supplier invoice CP-4519: one line on 5000 Cost of Sales (10,000 × 28.50, VAT18) and one on 6260 Travel & Transport (4,500.00, VAT18); subtotal 289,500.00, tax 52,110.00, total 341,610.00. The posting preview debits 5000 285,000.00, 6260 4,500.00 and 1300 Input VAT 51,300.00 + 810.00, and credits 2000 Trade Payables 341,610.00](/guide/bookkeeping-handbook/new-bill-filled.webp "Each line carries its own account and tax code; check the posting preview before you click Issue")

The issued bill's notice says "Issue a credit note to correct". For a bill, the correction is a
**debit note** (see [Assets, debit notes and journals](/guide/bookkeeping-handbook/assets-notes-journals)),
or a **Void** by an Owner or Accountant.

## 3. Record an expense or receipt (already paid)

**Purchases → Expenses → Record expense.**

1. **Vendor (contact):** pick the supplier record **if** the receipt is a VAT tax invoice from a
   VAT-registered supplier with a TIN. Otherwise type a **Vendor name** (for example "PickMe" or
   "Lanka IOC Kollupitiya"). **With a typed vendor name, VAT is never recoverable**: it becomes
   part of the cost. That's correct for receipts that aren't tax invoices.
2. **Expense date:** the date on the receipt.
3. **Paid from:** the bank or cash account the money left: **1000 Cash in Hand**, **1100 Bank
   Accounts**, or the specific bank's account. For a debit card, pick the bank account the card is
   linked to.
4. **Currency:** LKR.
5. **Lines.** For each:
   - **Description**, and the **Account** (see
     [Choosing the account](/guide/bookkeeping-handbook/choosing-the-account)).
   - **Amount = the NET amount before VAT.** If the receipt only shows a VAT-inclusive total, net
     = total ÷ 1.18, rounded to 2 decimals. Check that **Line total** equals the receipt total,
     and nudge the net by 0.01 if needed.
   - **Tax code:** **VAT18** if VAT was charged; empty if not.
6. **Reference:** the receipt or bill number. **Notes:** optional.
7. **Attachments:** the receipt photo or PDF, **now**. You can't add it afterwards.
8. Check the total matches the receipt, then click **Record expense**. It posts immediately and
   gets an `EXP-` number.

![The Record expense form: Vendor (contact) left empty, a typed Vendor name, Expense date, the Paid from list open showing 1000 Cash in Hand and 1100 Bank Accounts, and one line with Account, Amount and Tax code](/guide/bookkeeping-handbook/expense-paid-from.webp "Paid from only offers bank and cash accounts")

![The Record expense form filled in: typed vendor "Sample Stationery Shop", paid from 1100 Bank Accounts, one line 6000 Operating Expenses 5,000.00 with VAT18, total 5,900.00. The posting preview shows 5,900.00 to 6000 and 5,900.00 from 1100](/guide/bookkeeping-handbook/expense-filled.webp "A typed vendor name means no recoverable VAT, so the whole 5,900 is posted as cost")

![Recorded expense EXP-2026-000003: the notice Expenses are final once recorded, vendor Lanka Office Mart (Pvt) Ltd paid from 1100 Bank Accounts, journal entry JE-2026-000019, one line of 6,800.00 plus 1,224.00 tax, total 8,024.00, and a Void button at the top right](/guide/bookkeeping-handbook/expense-detail.webp "A recorded expense: final, but an Owner or Accountant can Void it")

A recorded expense can't be edited. The expense page still reads "Expenses are final once
recorded", but an Owner or Accountant can **Void** it (with a reason and a void date), which posts
the exact reverse and puts the money back on the paid-from account. A void is refused once the
expense is matched on a bank reconciliation or falls inside a filed VAT return. See
[Corrections and the pre-save checklist](/guide/bookkeeping-handbook/corrections-and-checklist).

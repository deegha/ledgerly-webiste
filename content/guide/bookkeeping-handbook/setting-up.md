---
title: "Setting up before your first entry"
description: "The role you need, VAT settings, periods, bank accounts, suppliers, and how to enter opening balances in an existing organization."
order: 2
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/getting-started/roles-and-permissions
  - /guide/settings/organization-profile
  - /guide/accounting/accounting-periods
---

Do these once per organization, in this order.

## 1. Your role: Accountant

**Settings → Team.** An Owner invites you, or changes your role, to **Accountant**.

| Task                                                       | Bookkeeper | Accountant | Owner |
| ---------------------------------------------------------- | :--------: | :--------: | :---: |
| Bills, expenses, supplier payments, suppliers, debit notes |     ✓      |     ✓      |   ✓   |
| Discard a draft                                            |     ✓      |     ✓      |   ✓   |
| Void an issued or recorded document                        |     –      |     ✓      |   ✓   |
| Create or edit accounts in the chart                       |     –      |     ✓      |   ✓   |
| Link bank accounts, import or remove statements, reconcile |     –      |     ✓      |   ✓   |
| Post and reverse manual journals                           |     –      |     ✓      |   ✓   |
| Register fixed assets, post depreciation                   |     –      |     ✓      |   ✓   |
| Add a new tax rate, file the VAT return                    |     –      |     ✓      |   ✓   |
| Soft-close a period                                        |     –      |     ✓      |   ✓   |
| Hard close, reopen, year-end close, organization settings  |     –      |     –      |   ✓   |

The Bookkeeper role can't do banking or journals, so it isn't enough for the full routine. The
person who keeps the books doesn't need to be an Owner either. Once two active members can approve
documents, the Team page's "Only one active member can approve documents" warning goes away.

## 2. The organization's VAT settings

**Settings → Organization.** Check **TIN**, **VAT registration no.**, the **VAT registered**
switch and the **VAT filing frequency**.

- If the business **is** VAT-registered, the switch must be **on**. Otherwise no input VAT is
  ever claimed.
- If it **isn't**, leave it off. VAT you pay is then part of the cost. Still enter the VAT code
  on the line, so the total matches the supplier's document.
- Only an Owner can change these settings.

![Settings → Organization: Trading name, Legal name, TIN, VAT registration no., the VAT registered switch turned on, and VAT filing frequency set to Monthly](/guide/bookkeeping-handbook/settings-organization-vat.webp "Settings → Organization, for a VAT-registered business")

## 3. Fiscal year and periods

**Accounting → Periods.** By default the fiscal year runs **1 April – 31 March** in twelve monthly
periods. You can only post into an **OPEN** period: if a document's date falls in a soft-closed
or closed month, saving fails. Closing and reopening periods is for the Owner (an Accountant can
soft-close), so ask before changing anything here.

## 4. Bank accounts

**Banking → Bank accounts.** Link each real bank account to its GL account before you start
reconciling. Payments recorded before the link can still be matched later, because matching works
on the GL account. See [Importing a bank statement](/guide/bookkeeping-handbook/bank-statement-import).

## 5. Suppliers with their VAT status, TIN and defaults

For every VAT-registered supplier, the supplier record needs **both** the **VAT registered**
switch on **and** a **TIN**. Without both, VAT on their bills is treated as cost, even when your
business is VAT-registered.

While you're there, set the supplier's **Default purchase tax code** (it pre-fills on their bill,
debit note and expense lines) and, for suppliers you withhold tax from, **Default WHT on
payments**. See [Suppliers, bills and expenses](/guide/bookkeeping-handbook/suppliers-bills-expenses).

## 6. Any extra expense accounts you need

The default chart has a starter set of expense accounts (see
[Choosing the account](/guide/bookkeeping-handbook/choosing-the-account)). Agree any extra ones
with the owner or your accountant, then create them once at **Accounting → Chart of accounts →
New account**.

## 7. Opening balances

Do this once, **after** steps 1–6 and **before** the first bill, expense or payment. Without
opening balances, cash and bank go negative as soon as you record payments, the trial balance and
balance sheet are wrong, and the first bank reconciliation can't reach zero.

![Trial balance with no opening balances: Cash in Hand shows a credit of 1,770.00 and Bank Accounts a credit of 126,400.00](/guide/bookkeeping-handbook/trial-balance-no-opening-balances.webp "Without opening balances, cash and bank show credit (negative) balances")

### What you need

All as at the **cut-off date**, the day before Ledgerly takes over:

- the closing trial balance from the old system, or the last audited accounts;
- each bank's statement closing balance at cut-off, and a cash count;
- a list of **unpaid supplier invoices** (supplier, invoice no., date, due date, amount still
  owed);
- unpaid customer invoices, if you record sales too;
- VAT, SSCL, WHT, EPF/ETF and APIT owed at cut-off;
- the fixed asset list (cost, accumulated depreciation, date bought);
- share capital, loans and director's current account balances.

### Which date

Use the **first day of the first OPEN period** in Ledgerly, for example 1 April if you start at
the beginning of a fiscal year. A date before the first period can't post, because there's no
period for it. Only balance-sheet accounts go in, so the profit and loss isn't affected. If you're
going live part-way through a year, agree with your accountant how to treat the profit to date
before you start.

### How to enter them

There's no opening-balances screen once the organization exists, so use three steps.

**Step A: one manual journal for everything except supplier and customer balances.**
**Accounting → Journals → New journal entry.** Date = the opening date. Narration
`Opening balances as at <cut-off date>`. Attach the old trial balance under **Supporting
documents**.

| Balance                                       | Account                                                     | Side                                               |
| --------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| Cash count                                    | **1000 Cash in Hand**                                       | Dr                                                 |
| Each bank account (statement closing balance) | that bank's GL account, e.g. **1100 Bank Accounts**         | Dr (Cr if overdrawn)                               |
| Prepaid rent, insurance, deposits             | **1400 Prepayments**                                        | Dr                                                 |
| Stock on hand (only if you track inventory)   | **1500 Inventory**                                          | Dr                                                 |
| Fixed assets: original cost                   | **1700 Fixed Assets — Cost**                                | Dr                                                 |
| Fixed assets: depreciation to date            | **1750 Accumulated Depreciation**                           | Cr                                                 |
| Accrued expenses                              | **2300 Accruals**                                           | Cr                                                 |
| VAT owed to (or refundable by) the IRD        | **2100 Output VAT (Payable)**, or **1300** for a refund due | Cr owed / Dr refundable                            |
| SSCL owed                                     | **2210 SSCL Payable**                                       | Cr                                                 |
| WHT deducted but not yet paid over            | **2200 WHT Payable**                                        | Cr                                                 |
| EPF / ETF / APIT owed                         | **2510 / 2520 / 2530**                                      | Cr                                                 |
| Loans, director's current account             | the liability accounts you've set up for them               | Cr                                                 |
| Share capital                                 | **3000 Share Capital**                                      | Cr                                                 |
| **Balancing figure**                          | **3100 Retained Earnings**                                  | Cr if net assets (usual); Dr if accumulated losses |

- **The equity offset.** Debits and credits must match. Whatever is left after share capital
  goes to **3100 Retained Earnings**. Never use **3200 Current Year Earnings** (the year-end
  close uses it), and never an income or expense account.
- **VAT balances can go on 2100 and 1300.** The VAT return counts VAT from documents, not from
  manual journals, so an opening VAT balance doesn't land in your first month's return.
- **Don't put supplier balances on 2000 here.** A journal to 2000 creates no open bill, so it
  won't appear in AP ageing or on the payment screen, and you couldn't allocate a payment to it
  later. Use step B.

**Step B: one bill per unpaid supplier invoice.** For each invoice on the unpaid list,
**Purchases → Bills → New bill**:

- **Supplier:** the supplier record. **Supplier invoice #:** the original number.
- **Bill date** and **Supply date:** the opening date. **Due date:** the original due date, so the
  ageing is roughly right.
- One line: Description `Opening balance – INV-4471 dated 12 Mar`, Qty 1, Unit price = **the
  amount still owed** (gross, including any VAT). Leave the **Account** on **6000 Operating
  Expenses**.
- **Tax code: none.** That VAT was claimed in the old books; a code here would claim it again.
- Attach the original invoice, then click **Issue**. Each bill posts Dr 6000 / Cr 2000.

**Step C: one journal to move that cost to equity.** Same date. Narration
`Opening payables: bills BIL-… to BIL-…`.

- Dr **3100 Retained Earnings**, the total of the step B bills
- Cr **6000 Operating Expenses**, the same total

The result: **2000 Trade Payables** holds the opening creditors as real open bills that you can
pay and allocate, and 6000 nets to zero. Customer balances work the same way if you need them: a
no-tax invoice per unpaid customer invoice, then Dr the income account / Cr 3100.

### Fixed assets

Registering an asset doesn't post anything, so the register won't double-count what step A
posted. Agree one of these with your accountant:

- register each asset at its **net book value** as the cost, with the opening date as the
  acquisition date and its **remaining** useful life; or
- leave old assets out of the register and post their depreciation by manual journal.

Depreciation posts the oldest unposted month from the acquisition date, so don't register an old
asset with its original purchase date.

### Worked example

Made-up figures, cut-off 31 March:

| Account                              |           Dr |           Cr |
| ------------------------------------ | -----------: | -----------: |
| _Step A_                             |              |              |
| 1000 Cash in Hand                    |    25,000.00 |              |
| 1100 Bank Accounts                   | 1,250,000.00 |              |
| 1700 Fixed Assets — Cost             |   300,000.00 |              |
| 1750 Accumulated Depreciation        |              |    60,000.00 |
| 3000 Share Capital                   |              | 1,000,000.00 |
| 3100 Retained Earnings (balancing)   |              |   515,000.00 |
| _Step B: two bills, 80,000 + 45,500_ |              |              |
| 6000 Operating Expenses              |   125,500.00 |              |
| 2000 Trade Payables                  |              |   125,500.00 |
| _Step C_                             |              |              |
| 3100 Retained Earnings               |   125,500.00 |              |
| 6000 Operating Expenses              |              |   125,500.00 |

End position: assets 1,515,000 (net) = payables 125,500 + share capital 1,000,000 + retained
earnings 389,500.

### Checks after posting

1. **Reports → Trial Balance** as at the opening date: every balance-sheet line matches the old
   trial balance, and 6000 is zero.
2. **AP Ageing** total = **2000 Trade Payables** = the unpaid list total.
3. Each bank's GL balance = its statement closing balance at cut-off. The first statement you
   import then starts the next day.
4. **Profit & Loss** for the opening date shows nothing.

![The New journal entry form: Date, Narration, Template, account lines with debit and credit, the Balanced indicator, Supporting documents and the Post journal entry button](/guide/bookkeeping-handbook/new-manual-journal.webp "Accounting → Journals → New journal entry, used for steps A and C")

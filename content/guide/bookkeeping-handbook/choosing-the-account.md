---
title: "Choosing the account"
description: "Which accounts a bill or expense line can use, where common Sri Lankan business costs go, and the default chart of accounts."
order: 7
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/accounting/chart-of-accounts
  - /guide/bookkeeping-basics/chart-of-accounts
---

**Accounting → Chart of accounts** lists every account. Bill, debit note and expense lines each
have an **Account** picker.

## What a purchase line can use

- **Any active expense account.** This is where most lines go.
- **Asset accounts a purchase can capitalise:** fixed assets (**1700 Fixed Assets — Cost**),
  current assets such as **1400 Prepayments** (a year's insurance paid up front), and non-current
  assets such as deposits.
- **Inventory accounts only through a stock item, and only on a bill or debit note.** A stock
  item's line is locked to that item's inventory account, because it also adds stock valued
  there. Stock items can't go on an expense.

Ledgerly refuses anything else when you save or issue, with a "Line N: …" message: bank and cash
accounts, receivables, **1300 Input VAT**, accumulated depreciation, and all liability, equity and
income accounts. Inactive accounts are refused too.

A catalogue item that isn't stock can carry a **Purchase account**, which its lines then use.
Left blank, they use **6000 Operating Expenses**.

## Where common costs go

| Cost                                                                                    | Account                                                                         | Notes                                                                  |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Office or shop rent                                                                     | **6200 Rent**                                                                   | Usually a monthly bill; WHT may apply on payment                       |
| Electricity (CEB/LECO), water (NWSDB)                                                   | **6210 Utilities**                                                              |                                                                        |
| Internet, mobile, landline (Dialog, SLT-Mobitel, Hutch, Airtel)                         | **6210 Utilities**, or a Telephone & Internet account you add (e.g. 6215)       |                                                                        |
| Software and SaaS (Google Workspace, Microsoft 365, Zoom, Canva, hosting, domains, AWS) | **6230 Software & Subscriptions**                                               | Foreign card charges are usually no-VAT lines                          |
| Fuel, vehicle running, parking, tolls, taxi/PickMe/Uber, bus/train                      | **6260 Travel & Transport**                                                     | Fuel receipts usually aren't tax invoices: typed vendor name, no claim |
| Bank charges, SMS alerts, card fees, cheque books, stamp duty on cheques                | **6250 Bank Charges**                                                           | Usually found on the statement: record an expense paid from that bank  |
| Accounting, audit, tax, legal, company secretary, consultants                           | **6220 Professional Fees**                                                      | WHT may apply on payment                                               |
| Advertising, Facebook/Google ads, printed flyers                                        | **6240 Marketing**                                                              |                                                                        |
| Stationery, printing, courier and postage, small office supplies                        | an Office Supplies account you add (e.g. 6270), or **6000**                     |                                                                        |
| Small equipment below your capitalisation threshold (mouse, kettle, chair)              | a Small Equipment account you add (e.g. 6280), or **6000**                      |                                                                        |
| Equipment above the threshold (laptop, printer, furniture, air conditioner)             | **1700 Fixed Assets — Cost**, then register the asset                           | See [Assets](/guide/bookkeeping-handbook/assets-notes-journals)        |
| Repairs and maintenance                                                                 | a Repairs & Maintenance account you add (e.g. 6290), or **6000**                |                                                                        |
| Insurance                                                                               | an Insurance account you add (e.g. 6295), or **1400** if prepaid for a year     |                                                                        |
| Salaries, employer EPF 12%, ETF 3%                                                      | **6100 / 6110 / 6120**; liabilities **2500**, **2510**, **2520**, **2530** APIT | Payroll is posted by journal; agree it with your accountant            |
| Stock for resale                                                                        | a stock item on a bill (posts to its inventory account)                         |                                                                        |
| Anything unclear                                                                        | **6000 Operating Expenses**, plus a note                                        | Don't guess; reclass later by journal                                  |

### Adding an expense account

**Accounting → Chart of accounts → New account**: **Code** (e.g. 6270), **Name**, **Type**
EXPENSE, **Subtype** OPERATING_EXPENSE, **Parent account** 6000 Operating Expenses. Click
**Create account**. Accounts can't be deleted, only deactivated, so agree the list first.

## The default chart

Every organization starts with these. **System accounts** can't be deleted, deactivated or
renumbered.

| Code | Name                     | Code | Name                                      |
| ---- | ------------------------ | ---- | ----------------------------------------- |
| 1000 | Cash in Hand             | 2540 | Gratuity Provision                        |
| 1100 | Bank Accounts            | 3000 | Share Capital                             |
| 1200 | Trade Receivables        | 3100 | Retained Earnings                         |
| 1300 | Input VAT (Recoverable)  | 3200 | Current Year Earnings                     |
| 1400 | Prepayments              | 4000 | Sales Revenue                             |
| 1500 | Inventory                | 4100 | Other Income                              |
| 1510 | Raw Materials Inventory  | 4200 | Delivery Income                           |
| 1520 | Work in Progress         | 4900 | Foreign Exchange Gain                     |
| 1530 | Finished Goods Inventory | 4910 | Gain on Disposal of Assets                |
| 1700 | Fixed Assets — Cost      | 5000 | Cost of Sales                             |
| 1750 | Accumulated Depreciation | 6000 | Operating Expenses (parent; bill default) |
| 2000 | Trade Payables           | 6100 | Salaries & Wages                          |
| 2100 | Output VAT (Payable)     | 6110 | EPF — Employer Contribution               |
| 2200 | WHT Payable              | 6120 | ETF — Employer Contribution               |
| 2210 | SSCL Payable             | 6130 | Gratuity Expense                          |
| 2300 | Accruals                 | 6900 | Depreciation Expense                      |
| 2400 | Customer Advances        | 7900 | Foreign Exchange Loss                     |
| 2500 | Salaries Payable         | 7910 | Loss on Disposal of Assets                |
| 2510 | EPF Payable              |      |                                           |
| 2520 | ETF Payable              |      |                                           |
| 2530 | APIT Payable             |      |                                           |

**Starter accounts** under 6000 (editable): 6200 Rent, 6210 Utilities, 6220 Professional Fees,
6230 Software & Subscriptions, 6240 Marketing, 6250 Bank Charges, 6260 Travel & Transport.

Organizations created before **2210 SSCL Payable** was added got it automatically, unless that
code was already in use.

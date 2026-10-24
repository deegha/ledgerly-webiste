---
title: "What each document posts"
description: "The journal entry behind every purchase-side document, payment, correction and month-end posting in this handbook."
order: 14
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/bookkeeping-basics/everything-traces-to-entries
  - /guide/bookkeeping-basics/debits-and-credits
---

| Document                                                                 | Debit                                                                                                                                                      | Credit                                                                |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Bill (Issue)                                                             | each line's account (default 6000; a stock item's inventory account), net + any SSCL; **1300** VAT if recoverable (otherwise the VAT is in the line debit) | **2000** Trade Payables, gross                                        |
| Expense (Record expense)                                                 | each line's account, net + any SSCL; **1300** VAT if recoverable                                                                                           | the **Paid from** bank or cash account, gross                         |
| Supplier payment (Record payment)                                        | **2000**, the gross each bill is cleared by; **1400** for any unallocated amount                                                                           | **2200** for WHT withheld; the bank or cash account for the cash paid |
| FX difference on paying a foreign-currency bill (separate entry, in LKR) | loss: **7900**; gain: **2000**                                                                                                                             | loss: **2000**; gain: **4900**                                        |
| Prepayment applied to a bill (Apply)                                     | **2000**                                                                                                                                                   | **1400**                                                              |
| Debit note (Issue)                                                       | **2000**                                                                                                                                                   | the line accounts; **1300** if the original VAT was recoverable       |
| Sales invoice with VAT18S (Issue)                                        | **1200** Trade Receivables, gross                                                                                                                          | the income account, net; **2210** SSCL; **2100** VAT                  |
| Customer payment (Record payment)                                        | the deposit bank or cash account                                                                                                                           | **1200** per invoice; **2400** for any unallocated amount             |
| Depreciation (Post depreciation)                                         | **6900** (or the asset's depreciation account)                                                                                                             | **1750**                                                              |
| Void (any document)                                                      | the exact mirror of the document's own entries, dated the void date                                                                                        |                                                                       |
| Reclass journal                                                          | the correct account                                                                                                                                        | the account the line was posted to                                    |
| Opening balances (step A)                                                | cash, banks, prepayments, 1700…                                                                                                                            | 1750, liabilities, 3000, **3100** (balancing)                         |
| Opening supplier bill (step B, no tax)                                   | **6000**                                                                                                                                                   | **2000**                                                              |
| Opening bills to equity (step C)                                         | **3100**                                                                                                                                                   | **6000**                                                              |
| Paying VAT / SSCL / WHT to the IRD (journal)                             | **2100** / **2210** / **2200**                                                                                                                             | the bank                                                              |

Every one of these appears in **Accounting → Journals**, with a link back to the document that
posted it. A void's reversing entry is linked to the original and shows on the voided document's
banner.

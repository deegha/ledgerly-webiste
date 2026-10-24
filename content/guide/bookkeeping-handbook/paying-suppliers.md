---
title: "Paying suppliers, WHT and prepayments"
description: "Recording a supplier payment, withholding WHT on it, applying a prepayment to a bill later, and paying WHT over to the IRD."
order: 5
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/purchases/supplier-payments
  - /guide/bookkeeping-handbook/vat-sscl-and-wht
  - /help/record-a-bill-payment
---

## Record a supplier payment

**Purchases → Supplier payments → Record payment.**

1. **Supplier:** picking one loads their open bills into the **Apply to bills** grid.
2. **Currency:** LKR, or the bills' currency. **Payment date:** the date on the bank statement or
   transfer slip.
3. **Method:** Bank transfer, Cash, Cheque, Card, Online or Other. **Reference:** the bank
   reference or cheque number; it helps when you reconcile.
4. **Pay from:** the bank or cash account the money left.
5. **Amount paid:** the **cash** that actually left the bank. The bills are cleared by this plus
   any WHT withheld.
6. **Apply to bills.** For each bill the payment covers:
   - **Clear (gross):** how much of the bill this payment settles, WHT included.
   - **WHT:** the WHT code, if you're withholding (pre-selected from the supplier's **Default WHT
     on payments**). Choose **No WHT** otherwise.
   - **WHT withheld:** filled in from the code's rate; change it to match the WHT certificate.
   - **Cash:** what's left, clear (gross) minus WHT.
     Work down the grid until **Unallocated** is 0. **Amount paid** follows the cash you apply
     until you edit it.
7. **Attachments:** the transfer confirmation or cheque copy, and the WHT certificate if you have
   it.
8. Click **Record payment**. The bill becomes **PAID** or **PARTIALLY PAID**, and the payment gets
   a `PAY-` number.

![Record payment for Colombo Freight & Logistics: Pay from 1100 Bank Accounts, Amount paid 208,710; in Apply to bills, BIL-2026-000006 ticked with Clear (gross) 217,710, WHT5 (5%) and WHT withheld 9,000, Cash 208,710.00; Unallocated 0.00. The posting preview debits 2000 Trade Payables 217,710.00 and credits 2200 WHT Payable 9,000.00 and 1100 Bank Accounts 208,710.00](/guide/bookkeeping-handbook/supplier-payment-wht.webp "WHT5 on the 180,000 pre-tax amount: the bill clears in full, the bank pays the rest")

If there's no bill yet, enter the bill first, then pay it. A bill whose journal entry was
reversed by hand (older data, from before Reverse was limited to manual journals) isn't offered
in the grid: void it first.

## WHT withheld on the payment

Sri Lankan withholding tax is deducted when you pay, so the bill stays at its full amount and the
payment does the withholding. For a 50,000 rent bill with **WHT14** (rate as seeded; check
current IRD rates):

| Account             |     Dr |     Cr |
| ------------------- | -----: | -----: |
| 2000 Trade Payables | 50,000 |        |
| 2200 WHT Payable    |        |  7,000 |
| Bank                |        | 43,000 |

- **The default WHT amount** is the code's rate (as at the payment date) times the bill's
  **pre-tax** share of the amount cleared, rounded to cents. So on a VAT bill, WHT is worked out on
  the amount before VAT. Override it if the certificate says otherwise.
- **The payment page** shows the cash paid, the WHT withheld and, for each bill, the code and
  rate, the WHT and the cash.
- **AP Ageing stays in step** with 2000 Trade Payables, because the bill is cleared by the gross
  amount.
- **Ledgerly doesn't keep WHT certificates or remittance records.** Attach the certificate to the
  payment and keep your own register of certificates issued.

### Paying the WHT over to the IRD

Post a manual journal: **Accounting → Journals → New journal entry**, Dr **2200 WHT Payable** /
Cr the bank, dated the day you paid, with the IRD receipt attached.

Once a debit to WHT Payable is posted on or after a payment's date, Ledgerly assumes that
payment's WHT may already be with the IRD and **won't let you void the payment** any more. The
supplier payment page disables **Void** and says why. To correct the bill after that, record a
**debit note** for the supplier's credit note instead.

## Unallocated money and prepayments

If you pay a supplier before there's a bill (a deposit, an advance), or pay more than the bills
you allocate, the unallocated part posts to **1400 Prepayments**.

When the bill arrives and is issued, its page shows "This supplier has … in unapplied
prepayments." Pick the payment (if there's more than one), enter the **Amount to apply** and click
**Apply**. That posts Dr **2000 Trade Payables** / Cr **1400 Prepayments** and reduces the bill's
balance.

- The prepayment and the bill must be in the **same currency at the same exchange rate**.
  Otherwise Ledgerly refuses and asks for a manual journal.
- **Applying a prepayment doesn't withhold WHT.** For a supplier you withhold from, allocate the
  payment to the bill when you record it, so the WHT is deducted on the payment.
- Voiding the original payment also undoes any applications of it.

## Foreign-currency bills

A bill in USD (or another currency) is booked in LKR at the bill's rate. When you pay it at a
different rate, Ledgerly clears the payable at the **booked** LKR amount and posts the difference
as realised exchange gain or loss to **4900 Foreign Exchange Gain** or **7900 Foreign Exchange
Loss**, in LKR. AP Ageing and 2000 Trade Payables agree after the payment.

## Correcting a payment

A recorded payment can't be edited. An Owner or Accountant can **Void** it: it reverses the
payment (and any FX and WHT lines), and every bill it paid re-opens for the full amount it
cleared. Void is refused when the payment is matched on a bank statement line, or when its WHT
may already be with the IRD (above). See
[Corrections and the pre-save checklist](/guide/bookkeeping-handbook/corrections-and-checklist).

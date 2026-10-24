---
title: "VAT, SSCL and WHT"
description: "The tax codes, when input VAT is recoverable, how to enter SSCL with VAT using VAT18S, and why WHT never goes on a bill line."
order: 8
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/accounting/tax-codes
  - /guide/reports/vat-return
  - /guide/bookkeeping-handbook/paying-suppliers
---

**Accounting → Tax codes** lists the codes every organization starts with:

| Code       | What it is                                       | Rate             | Where it posts                                                          |
| ---------- | ------------------------------------------------ | ---------------- | ----------------------------------------------------------------------- |
| **VAT18**  | VAT standard rate                                | 18%              | 2100 Output VAT on sales; 1300 Input VAT on purchases, when recoverable |
| **VAT18S** | VAT 18% + SSCL (VAT on the SSCL-inclusive value) | 20.95% effective | SSCL part: 2210 on sales, cost on purchases. VAT part: as VAT18         |
| **VAT0**   | Zero-rated (exports)                             | 0%               | 2100 / 1300                                                             |
| **VATEX**  | Exempt                                           | 0%               | —                                                                       |
| **NOVAT**  | Not VAT registered                               | 0%               | —                                                                       |
| **SSCL**   | Social Security Contribution Levy                | 2.5%             | 2210 SSCL Payable on sales; cost on purchases                           |
| **WHT5**   | WHT on services                                  | 5%               | 2200 WHT Payable, on supplier payments only                             |
| **WHT14**  | WHT on rent                                      | 14%              | 2200 WHT Payable, on supplier payments only                             |

![Accounting → Tax codes: cards for NOVAT, SSCL (2.5%, posting to 2210 SSCL Payable), VAT0, VAT18, VAT18S with its compound note, VATEX, WHT14 and WHT5 (both posting to 2200 WHT Payable)](/guide/bookkeeping-handbook/tax-codes.webp "Accounting → Tax codes, as every organization starts")

These are the rates as seeded. Confirm current rates on [ird.gov.lk](https://www.ird.gov.lk)
with your accountant. A rate change is entered with **Add new rate** and an effective date (Owner
or Accountant). If the VAT rate changes, add the new rate to **both VAT18 and VAT18S**. If the
SSCL rate changes, add it to **SSCL** only; VAT18S picks it up.

## One code per line

Each line carries exactly one **Tax code**, and tax = net × rate. You can't type a tax amount,
and tax isn't rounded line by line, so Ledgerly's figure can differ from a supplier's tax invoice
by a cent. Enter the net as printed and note any cent difference. For a mixed invoice, split it
into one line per treatment (VAT items on one line, non-VAT items on another).

## When input VAT is recoverable

Input VAT goes to **1300 Input VAT (Recoverable)** only when **all four** are true:

1. your **organization** is VAT-registered (Settings → Organization);
2. the **supplier** record has **VAT registered** on;
3. the supplier record has a **TIN**; and
4. the line's code is recoverable (**VAT18**, **VAT18S** or **VAT0**).

On an **expense**, the supplier must be picked as **Vendor (contact)**; a typed **Vendor name** is
never recoverable.

- If any condition fails, the VAT is added to the cost of the line. The total is still right.
- **Only claim with a proper VAT tax invoice.** If the receipt isn't one (a supermarket, a fuel
  shed, a taxi), use a typed vendor name with VAT18 if VAT is shown, so the VAT is costed, not
  claimed.
- An issued bill shows **Input VAT recoverable: Yes/No**. Check it.

## SSCL with VAT: use VAT18S

Suppliers liable for SSCL charge 2.5% on their price, and VAT is then charged on the price
**including** SSCL. Enter the invoice on **one line** with **VAT18S**:

```
Services (net)          100,000.00
SSCL 2.5%                 2,500.00
VAT 18% on 102,500       18,450.00
Total                   120,950.00
```

| Description       | Qty | Unit price | Tax code   | Line total |
| ----------------- | --: | ---------: | ---------- | ---------: |
| Services Nov 2026 |   1 | 100,000.00 | **VAT18S** | 120,950.00 |

The line shows the effective rate, 20.95%. When it posts, Ledgerly splits the tax back into SSCL
(net × 2.5%) and VAT (the rest):

- **On a bill or expense:** SSCL is never recoverable, so the expense account gets 102,500 (net +
  SSCL). The 18,450 VAT goes to **1300** if the line is recoverable (above); otherwise it's cost
  too, and the whole 120,950 is expensed.
- **On a sales invoice:** income stays at 100,000, the SSCL 2,500 goes to **2210 SSCL Payable**
  and the VAT 18,450 to **2100 Output VAT**. The invoice PDF and page show SSCL and VAT as
  separate amounts.

![Issued bill BIL-2026-000006 from Colombo Freight & Logistics, supplier ref CFL-1008: two VAT18S lines, 145,000.00 with 30,377.50 tax and 35,000.00 with 7,332.50 tax; subtotal 180,000.00, tax 37,710.00, total 217,710.00; Input VAT recoverable Yes and a link to journal entry JE-2026-000011](/guide/bookkeeping-handbook/bill-detail-vat18s.webp "On the bill, each VAT18S line shows its combined tax at 20.95%")

![The bill's journal entry JE-2026-000011: 6260 Travel & Transport debited 148,625.00 and 35,875.00 (net plus SSCL), 1300 Input VAT (Recoverable) debited 26,752.50 and 6,457.50, and 2000 Trade Payables credited 217,710.00](/guide/bookkeeping-handbook/bill-journal-sscl.webp "The journal splits it: SSCL is added to the cost on 6260, only the VAT goes to 1300, and nothing goes to 2210")

If a supplier charges **only SSCL** (no VAT), use the **SSCL** code on its own; on a purchase the
2.5% is part of the cost.

SSCL isn't part of the VAT return: the return reads only the VAT accounts. There's no separate
SSCL report yet; use **Reports → General Ledger** for **2210 SSCL Payable** to see what you owe.

## WHT: on the supplier payment, never on a line

Withholding tax is **deducted when you pay the supplier**, so it never goes on a bill, expense,
invoice, credit note, debit note or quote line. The line pickers don't list WHT codes, and a draft
that still carries one can't be issued until you remove it ("…is withholding tax: it is deducted
when you pay the supplier").

How to withhold is in
[Paying suppliers, WHT and prepayments](/guide/bookkeeping-handbook/paying-suppliers#wht-withheld-on-the-payment).

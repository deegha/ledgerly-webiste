---
title: "Common mistakes and things to know"
description: "The slips that cause most clean-up work, and the current quirks of the app worth knowing about."
order: 15
verifiedAgainst: "invoicegen @ 6936e9e (2026-10-24)"
related:
  - /guide/bookkeeping-handbook/corrections-and-checklist
---

## Common mistakes

1. **Putting a WHT code on a bill line.** Ledgerly won't issue it. WHT is deducted on the supplier
   payment.
2. **Splitting SSCL and VAT into two lines.** Use one line with **VAT18S**.
3. **Entering the VAT-inclusive amount as the expense Amount.** The Amount is **net**, so VAT gets
   added twice.
4. **A typed vendor name on a VAT tax invoice** (VAT not claimed), or **claiming VAT on a receipt
   that isn't a tax invoice**. Match the treatment to the document.
5. **A supplier record without a TIN.** VAT silently becomes cost. Check **Input VAT recoverable**
   on the issued bill.
6. **Leaving lines on 6000 Operating Expenses** when a better account exists. Pick the account on
   the line.
7. **Recording a paid receipt as a bill** and never paying it, so AP stays open. Paid already:
   use an **expense**.
8. **Paying a WHT supplier in advance and applying the prepayment later.** The application doesn't
   withhold WHT. Allocate the payment to the bill when you record it.
9. **Paying from the wrong bank or cash account.**
10. **Forgetting the attachment** until after posting.
11. **Leaving stray drafts.** Finish in one go and **Issue**, or **Discard draft**.
12. **Importing part of a statement.** Import every line; record what's missing, then match.
13. **Matching by amount alone.** Check direction, date and reference too.
14. **Duplicate suppliers.** Search before creating.
15. **Filing the VAT return in Ledgerly before the figures are final.** Filing soft-closes the
    periods and can't be repeated.
16. **Skipping opening balances**, or putting supplier balances on 2000 by journal.
17. **Reading list dates day-first.** See below.
18. **Correcting VAT with a manual journal.** It won't reach the VAT return; use a credit or
    debit note.

## Things to know about the app today

These are current behaviours, not mistakes, and may change in later builds:

- **List dates are month/day/year.** Lists (bills, journals, statement lines) show dates such as
  `10/5/2026`, which is **5 October**. Forms and document pages show "Oct 5, 2026". Open the
  document if in doubt.
- **Tax isn't rounded line by line**, and there's no tax override. Enter the net as printed and
  note any cent difference.
- **Attachments are added before saving**, except on manual journals.
- **Registering a fixed asset doesn't post the purchase.** Post it with a bill or expense coded to 1700.
- **Tax codes can't be created or remapped** in the app; you can only add a new rate to an
  existing code.
- **There's no opening-balances screen** after sign-up; use the
  [three-step method](/guide/bookkeeping-handbook/setting-up#7-opening-balances).
- **There's no WHT summary report and no SSCL report** yet. Use the General Ledger for 2200 and 2210.
- **Bank matching is one statement line to one ledger entry**, and statements are imported from
  CSV only.
- **The Bookkeeper role** can't link banks, import statements, reconcile, post journals or
  register assets.
- **Some labels don't match the action:** the supplier form's button says **Create contact**; an
  issued bill's notice says "Issue a credit note to correct" (for bills it's a **debit note**);
  expense and payment pages say they're "final once recorded", though an Owner or Accountant can
  **Void** them.

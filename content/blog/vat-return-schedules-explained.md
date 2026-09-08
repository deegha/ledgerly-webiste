---
title: "VAT return filing in Sri Lanka: Schedules 01, 04 and 07 explained"
description: "Everyone tells you a VAT return must be filed. Almost nobody explains the schedule structure underneath it — which is exactly where the errors happen."
date: "2026-10-28"
image: "/images/blog/vat-return-schedules-explained.svg"
---

A Sri Lankan VAT return isn't a single number. It's a set of **schedules**, each one capturing a different category of transaction, and the return total is what falls out once they're all filled in correctly. Most guidance stops at "file your return by the deadline." This post is about what's actually on the form.

Keep this one bookmarked — it's reference material you'll come back to every filing period.

## The core idea: output tax minus input tax

Every VAT return resolves to one calculation:

- **Output tax** — the VAT you charged your customers on taxable sales.
- **Input tax** — the VAT you paid your suppliers on business purchases, where it's recoverable.
- **Net** — output minus input. Positive, you pay the IRD. Negative, you're in a refund position.

The schedules exist because not all sales carry output tax the same way, and not all input tax is claimable, so the IRD wants each category listed separately rather than netted into one figure you assert.

## The schedules, and what belongs in each

The exact schedule numbers and layout are set by the IRD and revised periodically — always work from the **current** return template on **ird.gov.lk** — but the structure has been stable in shape:

**Schedule 01 — output tax on local taxable supplies.** Your standard-rated domestic sales. For each, the return wants the customer, the invoice, the value of the supply, and the VAT charged. This is where the [gazette-format tax invoices](/blog/gazette-2481-22-explained) you issued during the period get summarised. If your invoicing tool doesn't hold supply date and customer TIN as real fields, populating this schedule accurately is a manual exercise.

**Schedule 04 — zero-rated supplies.** Exports and other supplies taxed at 0%. The output tax is nil, but these are **not** the same as exempt supplies: zero-rated sales still let you recover the input tax attributable to them, which is why [exporters](/blog/ramis-phase-one-export-sector) are usually in a refund position. This schedule has to be right for your refund claim to hold up.

**Schedule 07 — credit and debit notes.** Adjustments to supplies already reported. If you issued a credit note this period against an invoice from a prior period, it belongs here — reducing your output tax — with a reference back to the original invoice. This schedule is the mechanical reason **you never edit an issued invoice**: the correct way to reduce a reported supply is a credit note that shows up in Schedule 07, not a quiet change to the original that leaves your return and your books disagreeing.

Other schedules handle exempt supplies, imports, and specific sectors; the three above are the ones most SMEs touch every period.

## Where the errors come from

Filing mistakes cluster in predictable places:

- **Zero-rated recorded as exempt (or vice versa).** Different input-tax consequences; easy to get backwards; directly affects your refund.
- **Credit notes netted against invoices** instead of reported in Schedule 07, so the return doesn't tie back to the source documents.
- **Input tax claimed without a valid tax invoice** on file — a common audit adjustment.
- **Timing mismatches** — a supply dated in one period, invoiced in the next, reported in a third.

## How Ledgerly maps to this

Every sale in Ledgerly is tagged to its VAT treatment — standard, zero-rated, exempt — at the point of entry, and credit and debit notes stay linked to the invoice they adjust. The [VAT return report](/guide/reports/vat-return) then presents your figures already grouped the way the schedules expect, each line traceable to the invoice or note that produced it. The return becomes a check against source documents rather than a spreadsheet you rebuild every period.

For the mechanics of _why_ an issued invoice can't be edited — the property that makes Schedule 07 work — see [what "immutable" means in accounting software](/blog/what-immutable-means-in-accounting-software).

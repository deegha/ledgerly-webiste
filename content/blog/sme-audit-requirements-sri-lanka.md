---
title: "What auditors actually look for in Sri Lankan SME accounts"
description: "Written for the business owner, not the auditor. When a statutory audit applies to you, what the auditor is really testing, and the five things that turn a long audit into a short one."
date: "2026-11-11"
image: "/images/blog/sme-audit-requirements-sri-lanka.svg"
---

Most writing about audit is written _for auditors_ — sampling methodology, materiality thresholds, assurance standards. If you're the owner of a Sri Lankan SME facing your first audit, that's not what you need. You need to know whether an audit even applies to you, what the auditor is actually going to do, and what you can put in place beforehand so it goes quickly.

## Does a statutory audit apply to you?

Under the **Companies Act No. 7 of 2007**, every company incorporated in Sri Lanka must keep proper accounting records, and — unless it qualifies for an exemption — have its financial statements audited by a registered auditor each year. Small private companies can be exempt from the audit requirement if they meet the size conditions the Act and its regulations set (turnover, assets, and employee headcount below stated limits, and shareholder agreement). Those thresholds get revised, so confirm the current position with a registered auditor or on the relevant regulator's site rather than assuming last year's numbers.

Even where a full statutory audit isn't required, an audit or a review is often triggered by something else: a bank facility covenant, an investor, a tender requirement, or a grant condition. So "we're too small to be audited" frequently isn't true in practice.

## What the auditor is actually testing

Strip away the terminology and an audit is asking a few plain questions about your numbers:

- **Existence** — does this asset/liability actually exist? Is the stock on the balance sheet really in the warehouse?
- **Completeness** — is anything missing? Are there liabilities or expenses that happened but weren't recorded?
- **Accuracy and cut-off** — are amounts right, and recorded in the correct period? A sale shipped on 2 April shouldn't be in the year ended 31 March.
- **Valuation** — is inventory at the lower of cost and net realisable value? Are receivables collectible? Is depreciation reasonable?
- **Rights and obligations** — do you actually own it / owe it?
- **Presentation** — are the financial statements laid out per the applicable standard (SLFRS / SLFRS for SMEs)?

The auditor confirms these by tracing figures to evidence: sampling transactions and checking them against source documents, confirming balances with third parties, recalculating, and inspecting.

## The five things that make an audit short

**1. Every number traces back to an entry.** The biggest time sink in a messy audit is "where did this figure come from?" with no precise answer. If your balance sheet, P&L and [trial balance](/guide/reports/trial-balance) are all a direct read of the same posted journal entries, that question has a mechanical answer every time.

**2. Posted documents don't get quietly edited.** When the auditor samples an invoice and checks it against the source, it needs to still be the invoice that was issued. If amounts, dates or customers can be changed after the fact with no trace, that's not a risk — it's a finding. Corrections should be separate, dated entries. This is the [immutability](/blog/what-immutable-means-in-accounting-software) property.

**3. There's an [audit trail](/guide/reports/audit-trail) an auditor can read.** A record — attributable to a user and a UTC timestamp — of every change to financial data, that the application itself can't alter. If the admin account can rewrite history, it isn't an audit trail.

**4. Reconciliations are done and documented.** Bank accounts [reconciled to zero](/blog/bank-reconciliation-match-to-zero) every period, debtors and creditors agreeing to the [ageing reports](/blog/ar-ap-ageing-reports-explained), stock agreeing to a count. These are the first things requested and the fastest way to build or lose auditor confidence.

**5. Period cut-off is clean.** Once a period is closed, entries stop landing in it. If transactions can still be backdated into a "closed" year, cut-off testing becomes an investigation. Ledgerly's [accounting periods](/guide/accounting/accounting-periods) lock a period so nothing new posts into it.

## The point

An audit is only painful when the books can't answer basic questions without a manual hunt. Ledgerly is built so they can: every figure ties to an entry, issued documents lock, every change is logged, and periods close hard. That doesn't remove the audit — it turns it from weeks of back-and-forth into a straightforward review. For the informal-stage version of the same idea, see [why investors don't trust Excel](/blog/why-investors-distrust-excel-bookkeeping).

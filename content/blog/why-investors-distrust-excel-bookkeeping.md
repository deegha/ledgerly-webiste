---
title: "Why banks and investors don't trust Excel-based bookkeeping"
description: "It's not that spreadsheets are hard to use. It's that a spreadsheet can be changed by anyone, at any time, with no trace — and that's precisely what due diligence is trying to rule out."
date: "2026-09-16"
image: "/images/blog/why-investors-distrust-excel-bookkeeping.svg"
---

Ask a founder why their books are in Excel and the answer is usually reasonable: it's free, everyone knows it, and it worked fine for the first two years. Then they apply for a working-capital facility, or a strategic investor asks to "see the numbers," and the spreadsheet that felt sufficient suddenly reads as a red flag to the person on the other side of the table.

It's worth understanding exactly why — because the objection isn't about formatting.

## What a lender or investor is actually checking

Due diligence on a small company's finances is trying to answer one question: **can I rely on these numbers as a record of what happened?** Not "are they impressive" — "are they _true_, and can I verify that they're true without taking your word for it."

A spreadsheet fails that test structurally, for reasons that have nothing to do with your honesty:

- **Any cell can be changed, by anyone with the file, at any time, leaving no trace.** A revenue figure from eighteen months ago can be higher today than it was then, and nothing in the file would show it.
- **There's no separation between the record and the person keeping it.** The same person who owes the bank a favourable picture is the only person who can edit the numbers, and the edits aren't logged.
- **Reports are formulas over inputs, not a ledger.** Your P&L is `=SUM(...)` across a range. Change an input, the P&L silently changes, and last month's version — the one you already showed someone — no longer reconciles.
- **It rarely balances in the accounting sense.** Single-entry spreadsheets have no built-in check that assets, liabilities and equity actually tie out, so errors sit undetected until someone goes looking.

None of this means your Excel numbers are wrong. It means a third party has **no mechanical way to confirm they're right**, so they have to discount them — price in the risk, ask for more collateral, or walk.

## "We're careful with it" isn't the answer

The instinct is to say the file is locked down, only two people touch it, there's a backup. That doesn't address the objection, because the objection is about **capability, not current practice**. If the numbers _can_ be silently changed, a reviewer has to assume they _might_ have been. The fix isn't more discipline around the spreadsheet — it's a system where the thing they're worried about is structurally impossible.

## What "structurally impossible" looks like

The property investors and auditors are really asking for is **immutability**: once a transaction is posted, the record of it cannot be quietly altered. A correction is allowed — but only as a _new_, separately dated entry that references the original, so the history stays visible. On top of that:

- **Double-entry**, so the books balance by construction and a whole class of error can't survive.
- **An [audit trail](/guide/reports/audit-trail)** — every change attributed to a user and a timestamp, that the application itself can't edit or delete.
- **Reports read from the ledger**, so this month's P&L and the one you sent last quarter are the same underlying data, not two spreadsheet states.

That's the difference between "trust me" and "check for yourself." A competing accountant will tell you the same thing about Excel — the difference is their fix is to hire them to maintain a manual workpaper, and a system's fix is that the guarantee is built in and runs on every transaction.

## The practical move

You don't need to migrate the day before a funding round — you need books that were already structured when the question got asked. The [real cost of bad bookkeeping](/blog/bookkeeping-mistakes-sri-lankan-smes) post covers the everyday version of this; [what auditors look for](/blog/sme-audit-requirements-sri-lanka) covers the formal one.

Ledgerly is built on exactly the properties above — posted documents lock, corrections are separate entries, every mutation is logged to an audit trail the app can't rewrite. Not because it's a nice feature, but because it's the thing that makes your numbers mean something to someone who doesn't know you.

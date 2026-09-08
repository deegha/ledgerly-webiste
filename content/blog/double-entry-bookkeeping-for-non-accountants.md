---
title: "Double-entry bookkeeping, explained for non-accountants"
description: "No accounting background assumed. What a ledger is, what debit and credit actually mean, why every entry has two sides, and how a chart of accounts ties it together."
date: "2026-09-23"
image: "/images/blog/double-entry-bookkeeping-for-non-accountants.svg"
---

Almost every explanation of double-entry bookkeeping assumes you already know some accounting. This one doesn't. If "debit" and "credit" have never quite made sense to you, start here — by the end you'll understand why bookkeeping is built the way it is, and it'll stop feeling arbitrary.

## Start with the ledger

A **ledger** is just a complete list of every financial thing that has happened in your business, organised so you can answer questions about it. That's the whole idea. Historically it was a physical book; now it's a database. But it's still a running record: money in, money out, what you own, what you owe.

The list is broken into **accounts** — one for each kind of thing you want to track. "Bank", "Cash", "Sales", "Rent", "Equipment", "Loans", "VAT owed". Each account is a little sub-list that only holds movements of that one kind. Add them all up and you have the ledger.

## Every transaction touches at least two accounts

Here's the core insight, and it's simpler than the jargon makes it sound: **money doesn't appear or vanish — it moves.** So recording a transaction always means recording _where it came from_ and _where it went_. That's two accounts, minimum. Hence "double" entry.

Examples:

- You sell goods for LKR 50,000 cash. Cash goes **up** by 50,000; Sales goes **up** by 50,000. Two accounts.
- You pay LKR 30,000 rent from the bank. Bank goes **down** by 30,000; Rent expense goes **up** by 30,000. Two accounts.
- You buy a laptop for LKR 200,000 on the company card. Equipment goes **up** by 200,000; the card (a liability) goes **up** by 200,000. Two accounts.

Notice each transaction has a balanced pair: something increases, something else increases or decreases by the same amount. That balance is not a coincidence — it's enforced.

## Debit and credit: just "left" and "right"

Now the two words that trip everyone up. **Debit** and **credit** don't mean "good" and "bad", or "in" and "out". They literally just mean **left side** and **right side** of an account.

The rule bookkeepers use:

- **Debit** (left) increases: **assets** (things you own — bank, cash, equipment, money owed to you) and **expenses** (costs — rent, wages, electricity).
- **Credit** (right) increases: **liabilities** (things you owe — loans, unpaid bills, VAT payable), **equity** (the owner's stake), and **income** (sales, other revenue).

And decreases work the opposite way for each. So when cash comes in, you _debit_ Cash (an asset going up). When you make a sale, you _credit_ Sales (income going up). Those are the two sides of that one transaction, and they're equal: debit 50,000, credit 50,000.

You don't have to love this convention. You just have to know that "debit the bank" when money arrives is correct even though your bank's app says "credit" — the bank is describing _its_ books, where your deposit is money it now owes you.

## Why the two sides must always be equal

Because if they're not, something is unrecorded or wrong. "Total debits = total credits" is a built-in error check that runs on your entire ledger at once. The report that shows it is the **[trial balance](/guide/reports/trial-balance)** — every account, its balance, debits in one column, credits in the other, and the two columns must match to the cent. When they don't, you have a bug to find, and you find it now instead of at year-end.

This is also why [proper systems won't let you edit a posted entry](/blog/what-immutable-means-in-accounting-software) — an edit could unbalance the pair. Corrections go in as their own balanced entry.

## The chart of accounts ties it together

Your **chart of accounts** is the master list of every account you use, grouped into the five types above (assets, liabilities, equity, income, expenses). It's what lets the ledger produce reports: sum the income and expense accounts and you get the **profit & loss**; sum the asset, liability and equity accounts and you get the **balance sheet**. Same underlying entries, sliced two ways.

A good chart is detailed enough to answer your real questions ("how much did we spend on freight this year?") without being so granular it's a chore to post to.

## Why this is worth understanding as an owner

You don't need to do the debits and credits by hand — software does that when you record an invoice or a bill. But knowing the model means you can read your own reports, spot when something looks wrong, and understand why your accountant asks the questions they ask. For the specifically Sri Lankan reasons this structure matters — banks, auditors, the IRD — see [why double-entry actually matters for a Sri Lankan SME](/blog/double-entry-for-sri-lankan-smes). And if the document names themselves are the confusing part, [invoice vs quote vs bill vs expense](/blog/invoice-quote-bill-expense-explained) clears those up.

Ledgerly does the double-entry for you — record a sale, and the balanced pair posts itself — but every entry is visible, traceable, and yours to inspect. Nothing happens to your books that you can't follow.

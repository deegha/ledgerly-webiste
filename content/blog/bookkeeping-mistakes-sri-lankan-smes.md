---
title: "The real cost of bad bookkeeping: five mistakes Sri Lankan SMEs make"
description: "Not generic 'remember to keep receipts' advice. Five errors that are specific to running a business in Sri Lanka — currency exposure, VAT misclassification, cash retail — and what each one actually costs."
date: "2026-11-04"
image: "/images/blog/bookkeeping-mistakes-sri-lankan-smes.svg"
---

Most "common bookkeeping errors" articles are written for a business anywhere, then have "Sri Lanka" pasted into the title. The mistakes that actually cost money here are shaped by local conditions — a volatile rupee, a VAT regime with real classification traps, and a lot of trade still done in cash. Here are five, with what each one costs and how to tell if you're making it.

## 1. Treating a foreign-currency invoice as if the rate never moves

If you invoice or get invoiced in USD or EUR — normal for exporters, importers, and anyone buying software subscriptions — the rupee value of that transaction is not fixed. It's set at the rate on the transaction date, and it changes again when payment actually lands.

**The mistake:** recording the invoice at one rate and the payment at the same rate, so the exchange difference just disappears.

**What it costs:** your revenue and your creditor/debtor balances drift away from reality, and you never see the **FX gain or loss** that the rupee's movement actually handed you. Over a year of a moving currency, that's not a rounding error. Auditors will also flag it, because foreign-currency translation is explicitly something they test.

**The fix:** record foreign-currency transactions at the transaction-date rate, revalue open balances at period end, and post the difference to a realised/unrealised FX account. The [multi-currency bookkeeping guide](/blog/multi-currency-bookkeeping-sri-lanka) walks through this properly.

## 2. Mixing up zero-rated, exempt, and standard-rated supplies

Sri Lankan VAT has three treatments that look similar and behave very differently. Exports are **zero-rated** — 0% output tax, but you keep the right to reclaim input tax. Some supplies are **exempt** — no output tax, and you _lose_ the related input tax. Everything else is **standard-rated**.

**The mistake:** tagging a zero-rated export as exempt (or not tagging supplies at all and sorting it out at return time).

**What it costs:** misclassify zero-rated as exempt and you quietly forfeit input-tax refunds you were entitled to. Get it wrong the other way and you underpay, then face an assessment. Either way your [VAT return schedules](/blog/vat-return-schedules-explained) don't tie back to your invoices.

**The fix:** assign the VAT treatment on every sale at the point of entry, not in a month-end reclassification pass.

## 3. Letting cash retail sales go in as a single daily lump

A lot of Sri Lankan retail still runs substantially on cash. The temptation is to record "Tuesday: LKR 84,000" as one line.

**The mistake:** no transaction-level record behind the daily total, and no reconciliation of cash counted against cash recorded.

**What it costs:** you can't see which products actually sold, shrinkage and till errors are invisible, and if you're VAT-registered your Schedule 01 detail doesn't exist. In an audit, an unsupported cash figure is where the questions start.

**The fix:** capture sales at the line level even for cash, and reconcile the till daily — counted cash to recorded cash, difference explained.

## 4. Recording a bill only when you pay it

Small businesses under cash pressure often book an expense on the day money leaves the account, not the day the obligation arose.

**The mistake:** no record of what you owe until you settle it, so unpaid supplier bills are invisible.

**What it costs:** your P&L is missing accrued costs, so your margin looks better than it is; your creditors balance is understated; and you get surprised by payment runs you could have seen coming. Year-end accruals become a frantic reconstruction.

**The fix:** record the [supplier bill](/guide/purchases/recording-a-bill) when it's received, against the correct period, and record the payment separately when it happens.

## 5. Editing an invoice after it's been issued

Someone spots that an issued invoice had the wrong quantity, so they open it and change it.

**The mistake:** treating a finalised financial document as a draft.

**What it costs:** any payment already recorded against it no longer reconciles; if the invoice crossed a VAT period, your return is now wrong; and the moment an auditor finds one silently edited invoice, they stop trusting all of them. This is also incompatible with [real-time RAMIS reporting](/blog/ramis-e-invoicing-explained), where the transmitted copy won't match your edited one.

**The fix:** issue a **credit note**. It's a separate, dated entry that reverses what needs reversing and leaves the history intact.

## The through-line

Four of these five come down to the same thing: **a financial record should reflect what happened, when it happened, and stay that way.** Ledgerly enforces that by construction — bills and invoices post to the period they belong to, VAT treatment is set at entry, issued documents lock, and corrections are separate entries. It doesn't make you a bookkeeper, but it stops the structural mistakes from being possible. For the version of this that a lender or investor cares about, see [why banks and investors don't trust Excel](/blog/why-investors-distrust-excel-bookkeeping).

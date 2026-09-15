---
title: "VAT on your Google and AWS bills: the new reverse charge, explained"
description: "From 1 July 2026, Sri Lanka taxes digital services from foreign providers. If you're VAT-registered, Google and AWS won't charge you VAT — you're expected to account for it yourself. Here's what that actually means."
date: "2026-10-02"
image: "/images/blog/vat-reverse-charge-digital-services.svg"
---

You pay for a Meta ads campaign, or an AWS bill lands for the month, or you renew a Zoom subscription. The invoice arrives in USD, there's no VAT line on it, and you record it the way you always have. As of 1 July 2026, if your business is VAT-registered, that invoice quietly creates a tax obligation that's entirely yours to handle — and the fact that nobody charged you anything is precisely why it's easy to miss.

## What the rule actually says

Sri Lanka now applies 18% VAT to digital services supplied by non-resident providers — streaming, apps, e-books, film, social media, e-commerce platforms, fintech tools, online marketplaces, the general category of "stuff delivered over the internet by a company with no local presence." For an ordinary consumer buying something like a streaming subscription, the plan is that the foreign provider registers and charges VAT itself, the same way it already does in a lot of other countries.

Business purchases work differently, and this is the part worth actually understanding. When the buyer is a VAT-registered business using the service for business purposes, the foreign provider is **not** required to charge VAT at all. Instead, the Sri Lankan business is expected to self-account for it — a mechanism usually called a reverse charge. In practice: you work out what 18% VAT on that AWS bill would have been, declare it as output tax you owe, and — because it's a legitimate business expense — claim the same amount back as input tax on the same return. The net cash effect is usually zero. The reporting effect is not: it has to show up correctly on both sides of your VAT return, and the carve-out only holds if you can document that the purchase was genuinely for the business.

## Why "net zero" doesn't mean "ignore it"

It's tempting to read "cancels out" and decide it isn't worth the bother. That's the wrong read. The obligation is to declare the output tax and the input tax, not to net them off in your head and skip the paperwork. If you just record the AWS invoice as a USD expense and never touch VAT on it, you've under-declared output tax on your return — even though, financially, you're no worse off. The IRD doesn't assess "financially no worse off." It assesses what the return says, and an under-declared figure is an under-declared figure whether or not it would have washed out.

This is also the kind of transaction that's genuinely easy to forget precisely because nothing about receiving the bill prompts you to think about VAT. A supplier invoice with 18% VAT already on it is obviously a VAT event. A USD invoice from a company with no Sri Lankan presence and no VAT line doesn't look like one at all, which is exactly why it needs a deliberate step in your process rather than relying on habit.

## How this actually sits in your books

There's no supplier charging you the tax, so there's no bill line with a normal tax code to apply — nothing about the AWS invoice itself changes. What you need is a second entry, dated the same day, that records the self-assessed VAT: a debit to Input VAT (Recoverable) and a credit to Output VAT (Payable), both for the same amount, both flowing into the same [VAT return](/blog/vat-return-schedules-explained) that every other transaction already feeds. It's a genuinely balanced entry — nothing moves money, it just puts the right figures in the right boxes on the return, with a note explaining why.

## Where Ledgerly fits

Record the AWS or Google bill itself as an ordinary [foreign-currency bill](/blog/multi-currency-bookkeeping-sri-lanka) in USD, with no tax code, because nothing was charged. Then post the reverse-charge amount as a manual [journal entry](/guide/accounting/journals) — a debit and credit between the same Input VAT and Output VAT accounts every other VAT transaction already uses, narrated so it's obvious later what it is and why it's there. There's no special "reverse charge" button, and honestly it doesn't need one: the accounts already exist, they already feed the VAT return, and a manual entry is a first-class, fully auditable part of the ledger rather than a workaround. Because it's immutable once posted, the explanation for why you made the adjustment stays attached to it for good, which is the part an auditor actually wants to see if they ever ask why a USD bill with no VAT on it produced a VAT movement.

If you're newly grappling with VAT at all, the [VAT registration guide](/blog/vat-registration-sri-lanka-guide) is a good starting point before this one.

---
title: "Gazette 2481/22, plainly: what it actually changes on your invoice"
description: "From 1 July 2026, the tax invoice format changes. Here's what's new, what supplyDate means, and why it has to be a separate field from the invoice date."
date: "2026-05-14"
image: "/images/blog/gazette-2481-22-explained.svg"
---

Gazette Extraordinary 2481/22 sets a mandatory tax invoice format that takes effect from 1 July 2026. If your invoicing tool hasn't mentioned it, it's worth checking — the change is small in scope but easy to get structurally wrong if the underlying data model wasn't built for it.

## The headline change: supply date

The gazette requires a **supply date** on every tax invoice — the date goods or services were actually supplied — as a field distinct from the invoice date. In most transactions these are the same day, so it's tempting for a system to just reuse the invoice date and call it done. That works until it doesn't: a service delivered in June but invoiced in July needs the June date on record, and a system that only stores one date can't represent that correctly at all.

This isn't a formatting nuance. It means the underlying invoice record needs a real `supplyDate` column, separate from `invoiceDate`, from day one — not a derived value, not a display-only override.

## What else the format expects

Alongside supply date, the format is explicit about:

- **TIN (Taxpayer Identification Number)** for both the issuer and, where applicable, the customer.
- **Sequential, gapless invoice numbering** — a numbering scheme with gaps is itself a red flag in an audit, independent of any single invoice being correct.
- **A clear breakdown of taxable, zero-rated, and exempt supplies** on the same document, not inferred after the fact from the VAT return.

## Why this matters more than it looks

None of this is difficult to display. What's difficult is displaying it _correctly_ if your system wasn't storing the right data to begin with. A supply date bolted on as a UI label that just mirrors the invoice date isn't compliant — it just looks compliant until someone checks a case where the two dates genuinely differ.

The safest way to verify: pick an invoice where the item was delivered on a different day than it was invoiced, and check whether your system can even represent that. If it can't, the gap won't show up in normal use — only in an audit, which is the worst possible time to find it.

_Always verify current requirements against [ird.gov.lk](https://ird.gov.lk) — gazette notices are amended, and this post reflects our reading of 2481/22 as of the date above, not legal advice._

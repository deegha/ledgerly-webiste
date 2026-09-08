---
title: "RAMIS e-invoicing: what it is, and who actually has to comply"
description: "The IRD is phasing in real-time invoice reporting through RAMIS. Here's what that means for a business owner — in plain language, not tax-lawyer language."
date: "2026-09-30"
image: "/images/blog/ramis-e-invoicing-explained.svg"
---

If you've heard the term "RAMIS e-invoicing" and weren't sure whether it applies to you, you're not alone. Most of what's been published about it is written for tax practitioners, and it's easy to come away thinking either that nothing has changed or that you're already late. Neither is quite right.

Here's the plain version.

## What RAMIS actually is

RAMIS — the Revenue Administration Management Information System — is the Inland Revenue Department's back-end platform for tax administration. It's already how VAT returns, income tax, and registrations are processed. What's new is a component that receives **invoice data in real time**, as invoices are issued, rather than only seeing the summarised totals you report on a periodic return.

The mechanism is a **Web API**: your accounting system transmits a structured record of each tax invoice to the IRD at (or near) the moment it's issued, and receives back an acknowledgement. The goal from the IRD's side is straightforward — narrow the gap between what businesses invoice and what they declare, the same reason e-invoicing mandates have rolled out across the region.

## Who has to comply, and when

This is the part that matters, and the honest answer is: **it depends on your sector, and the rollout is phased.**

Under **IRD Notice SEC/PN/VAT/2026-03**, real-time transmission is being introduced sector by sector rather than switched on for every VAT-registered business at once. Early phases target specific export-oriented sectors — [tea and garment exporters first](/blog/ramis-phase-one-export-sector) — with the scope widening in later phases. If you're a general domestic retailer or a small service business, you are almost certainly **not** required to transmit yet. If you're in an export sector, you may be in an early phase, and it's worth confirming your position directly.

Because the phasing is defined by IRD notices that get updated, the only reliable way to know where you stand is to check **ird.gov.lk** for the current phase schedule, or ask your tax advisor. Don't assume a blog post — including this one — reflects the latest notice.

## What it means for your invoicing, practically

Whether or not you're in scope today, three things follow:

- **Your invoice data needs to be structured, not just printed.** Real-time transmission means a machine-readable record of every field on the invoice — issuer TIN, customer TIN, supply date, line-level tax — has to exist in your system. A PDF or a spreadsheet row isn't enough. This is the same underlying requirement as the [gazette tax invoice format](/blog/gazette-2481-22-explained); RAMIS just adds "and transmit it" on top of "and format it correctly."
- **Every invoice needs to be final when it's issued.** You can't transmit an invoice in real time and then quietly edit it later — the transmitted record and your books would diverge. Corrections have to happen the proper way: a separate, dated credit note that itself gets reported.
- **Late is expensive to fix.** Reconstructing structured invoice data retroactively, for a business that's been running on informal records, is a project. Being ready before the mandate reaches your sector turns a scramble into a configuration step.

## Where Ledgerly stands on this

Ledgerly captures every invoice in the exact structured shape RAMIS expects, and the submission state machine — the queue, the status lifecycle, the retry handling — is **already built**. What isn't switched on yet is the live transport: the credentials and the actual transmission to the IRD. Until the IRD opens transmission for your sector, submissions sit at _Pending_ and there's nothing to configure.

The point is that the data is being recorded correctly now, so that when transmission goes live for your sector, it's a switch to flip rather than a migration to run. You can see exactly what that screen shows today in the [RAMIS submission status guide](/guide/compliance/ramis).

If you want to go deeper on the sector-specific timing, the [RAMIS Phase One export-sector guide](/blog/ramis-phase-one-export-sector) covers who's affected first and why early adoption is worth it.

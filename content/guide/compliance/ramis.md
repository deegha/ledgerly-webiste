---
title: "RAMIS submission status"
description: "Where real-time transmission to the IRD's RAMIS system stands, and what the status screen shows today."
order: 2
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/reports/vat-return
  - /guide/compliance/gazette-invoice-format
---

## What this is

**RAMIS** is the IRD's tax administration system. Under **IRD Notice SEC/PN/VAT/2026-03**,
real-time transmission of invoice data to RAMIS is being **phased in by sector** — not every
business is required to transmit yet.

## Where to find it

**Settings → Compliance.**

![Settings → Compliance: a "RAMIS configuration" note explaining that the schema and state machine are built but live transport isn't, a "Transmission status" row of counters (Pending 1, Queued 0, Transmitting 0, Acknowledged 0, Rejected 0, Failed 0), and an empty "Retry queue"](/guide/compliance/ramis-status.jpg "Settings → Compliance — the RAMIS submission state machine and its counters")

## Current state — read this

The screen is **built and ready but not yet live**. In Ledgerly's own words on that page: the
submission **schema and state machine** are in place; the **actual transport — credentials and
live transmission — is not yet implemented**, so **every submission stays at _Pending_** until
it is.

So today:

- **Transmission status** counters show where submissions sit across the lifecycle — _Pending
  → Queued → Transmitting → Acknowledged_, or _Rejected / Failed_. In practice everything is
  Pending.
- The **Retry queue** lists submissions that failed or were rejected so you can resend them.
  It's **read-only until transport is implemented** — nothing there can be retried yet.

## What to do about it

Nothing, for now — there's no configuration to complete and no action that would do anything.
When live transmission is switched on for your sector, this is where you'll enter credentials
and monitor acknowledgements. Keep issuing invoices normally; the data is being captured in
the right shape for when transmission begins.

## See also

- [VAT Return](/guide/reports/vat-return)
- [The gazette tax invoice format](/guide/compliance/gazette-invoice-format)

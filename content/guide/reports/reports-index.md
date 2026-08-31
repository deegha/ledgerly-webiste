---
title: "The Reports index, and finding a General Ledger"
description: "How the reports are grouped, the principle they all share, drilling from any figure to its source, and which reports aren't built yet."
order: 1
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/bookkeeping-basics/everything-traces-to-entries
  - /guide/reports/trial-balance
---

## Where to find it

**Reports.** The index groups every report by category, each with a one-line description.

![The Reports index: a header line "Every report reads the ledger — none of these sum source documents", and grouped links — Financial (Trial Balance, Profit & Loss, Balance Sheet, Cash Flow, Changes in Equity), Sub-ledger (AR Ageing, AP Ageing), Tax (VAT Return), Inventory (Inventory Valuation), Audit (Audit Trail, Journal Report, Period History, Sequence Integrity, User Access)](/guide/reports/reports-index.jpg "Reports — grouped by category, every one reading the same ledger")

The header line is the whole idea: **"Every report reads the ledger — none of these sum source
documents."** See [why every report traces back to the same
entries](/guide/bookkeeping-basics/everything-traces-to-entries).

## Every report page has the same furniture

- A **parameter bar** — a date range or an as-at date, plus filters and (on some) a comparison
  period.
- **Drill links** on figures — click a number to open the entries behind it.
- A **totals row**, an **export menu**, and a **compliance header**.
- Where relevant, a **reconciliation banner** confirming the report agrees with the ledger.

## Drilling to the source

Ledgerly has **no standalone "General Ledger with running balance" page** — and doesn't need
one. From any report figure:

1. Click the figure → the **Journals list, filtered** to the entries that make up it.
2. Click an entry → its **debit and credit lines**.
3. Click a line's source → the **document** (invoice, bill, payment) that posted it.

That chain — figure → entries → document — is the general ledger, and it works from every
report. It's the substitute for a GL page, and it's better: you always land on evidence.

## What isn't built yet

The index says so plainly in a few places:

- **General Ledger page** — use the drill-down above.
- **WHT summary** — deferred. WHT amounts are visible on payments and in the ledger.
- **Standalone VAT transaction-detail report** — deferred; superseded by drilling from the
  [VAT Return](/guide/reports/vat-return) into the journal lines.
- **Stock summary, stock movement, reorder reports** — deferred. Use the
  [Inventory Valuation report](/guide/inventory/inventory-valuation-report) and each item's
  ledger.
- **Customer / supplier statements** — not built; see
  [customer statements](/guide/sales/customer-statements).

## See also

- [Why every report traces back to the same entries](/guide/bookkeeping-basics/everything-traces-to-entries)
- [Trial Balance](/guide/reports/trial-balance)

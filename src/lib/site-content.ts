export type ShotImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  url: string;
};

export type FeatureChapter = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  images: ShotImage[];
  tinted?: boolean;
  /** Shown on the home page's trimmed feature story; full list lives on /features. */
  highlight?: boolean;
};

export const heroStats = [
  {
    n: "51",
    label: "ledger-backed data models — none of them a spreadsheet in disguise",
  },
  {
    n: "6",
    label: "role permission levels, from data-entry Bookkeeper to read-only Auditor",
  },
  {
    n: "2",
    label: "inventory costing methods — weighted average and FIFO, per item",
  },
  {
    n: "100%",
    label: "of financial statements read the ledger — never a sum of source documents",
  },
];

export const featureChapters: FeatureChapter[] = [
  {
    id: "product",
    eyebrow: "Ledger position, in real time",
    title: "One screen, the whole business.",
    body: "Revenue, expenses, and net profit for the fiscal year to date — the organisation's actual April–March fiscal year, not the calendar year — cash position, and receivables/payables outstanding, computed fresh from posted entries every time the page loads. Overdue invoices and negative-stock movements are surfaced, not buried in a report nobody opens.",
    highlight: true,
    images: [
      {
        src: "/images/dashboard.jpg",
        alt: "Ledgerly dashboard showing revenue, expenses, net profit, cash position, and a 12-month income vs expense chart",
        width: 1346,
        height: 683,
        url: "ledgerly.lk/",
      },
    ],
  },
  {
    id: "sales",
    eyebrow: "Sales, mirrored on the purchase side",
    title: "Quote → Invoice → Payment. Bill → Payment. Every step posts.",
    body: "A quote converts to a draft invoice with its line snapshot intact. Once issued, an invoice is immutable — the only way to correct it is a credit note, never a silent edit. Purchases run the identical shape: bills, debit notes, and supplier payments, posting to Trade Payables the same way sales post to Trade Receivables.",
    tinted: true,
    highlight: true,
    images: [
      {
        src: "/images/invoices-list.jpg",
        alt: "Invoice list showing draft, issued, partially paid, and paid statuses",
        width: 1346,
        height: 420,
        url: "ledgerly.lk/sales/invoices",
      },
      {
        src: "/images/invoice-detail.jpg",
        alt: "A posted invoice showing it is locked, with TIN, supply date separate from invoice date, and a linked journal entry",
        width: 1290,
        height: 560,
        url: "ledgerly.lk/sales/invoices/…",
      },
    ],
  },
  {
    id: "inventory",
    eyebrow: "Stock & valuation",
    title: "Weighted average by default. FIFO where it matters.",
    body: "Stock on hand is never a mutable column that can drift from reality — it's reconstructed from movement history every time. Each item picks its own costing method; a sale draws down FIFO layers oldest-first, or blends into the weighted-average cost, and posts the matching COGS entry automatically. Selling stock the ledger doesn't hold is blocked by default.",
    images: [
      {
        src: "/images/items.jpg",
        alt: "Items list showing inventory and service items with selling price and stock on hand",
        width: 1290,
        height: 340,
        url: "ledgerly.lk/items",
      },
    ],
  },
  {
    id: "statements",
    eyebrow: "Financial statements",
    title: "Assets = Liabilities + Equity. Always. Provably.",
    body: "Trial balance, P&L, Balance Sheet, Cash Flow, and Changes in Equity — every one built from the same posted journal lines, as at any date, past or present. A balance sheet that doesn't balance isn't shown quietly — it's flagged loudly, because that would mean the posting logic itself is wrong.",
    tinted: true,
    highlight: true,
    images: [
      {
        src: "/images/balance-sheet.jpg",
        alt: "Balance sheet as at a date, showing a green Balanced confirmation banner and assets, liabilities, and equity sections",
        width: 1290,
        height: 720,
        url: "ledgerly.lk/reports/balance-sheet",
      },
    ],
  },
  {
    id: "assets",
    eyebrow: "Fixed assets",
    title: "The full depreciation schedule, generated on day one.",
    body: "Register an asset — straight-line or reducing-balance — and its entire month-by-month schedule is written immediately, the final period plugged so accumulated depreciation lands exactly on the depreciable base. Posting a period is one reviewable journal entry at a time, never a silent batch. Disposal recognises the gain or loss the moment the asset leaves the books.",
    images: [
      {
        src: "/images/fixed-asset.jpg",
        alt: "A fixed asset detail page showing acquisition cost, accumulated depreciation, net book value, and a full monthly depreciation schedule, including a disposal at a gain",
        width: 1290,
        height: 700,
        url: "ledgerly.lk/accounting/fixed-assets/…",
      },
    ],
  },
  {
    id: "budgets",
    eyebrow: "Budgets",
    title: "Variance against what actually happened — not what was invoiced.",
    body: "Set a budget per account, per fiscal year. The variance report reads the same posted actuals every other statement does, so a favourable or unfavourable call is never a guess — it's a comparison of two real numbers, colour-coded by which side of zero actually helps the business.",
    tinted: true,
    images: [
      {
        src: "/images/budget.jpg",
        alt: "Budget variance report comparing budgeted and actual depreciation expense, with a favourable variance badge",
        width: 1290,
        height: 330,
        url: "ledgerly.lk/accounting/budgets/…",
      },
    ],
  },
  {
    id: "banking",
    eyebrow: "Bank reconciliation",
    title: "Import a statement. Match it. Zero means done.",
    body: "Drop in a CSV statement — any Sri Lankan bank's column layout — and match each line against the payments already recorded in the ledger. The difference is computed live as you match, and reconciliation simply can't be marked complete while it isn't exactly zero.",
    images: [
      {
        src: "/images/bank-reconcile.jpg",
        alt: "Bank reconciliation screen showing statement balance, ledger balance, the running difference, and unmatched statement lines",
        width: 1290,
        height: 470,
        url: "ledgerly.lk/banking/…/reconcile",
      },
    ],
  },
  {
    id: "receivables",
    eyebrow: "Receivables & automated follow-up",
    title: "Ageing that reconciles. Reminders that don't nag.",
    body: "Every AR ageing report checks itself against the Trade Receivables balance in the trial balance and says so — a subledger that quietly drifted from the ledger is exactly the kind of error this catches. Overdue reminders send once, then wait a respectful interval before sending again, never once a day forever.",
    tinted: true,
    images: [
      {
        src: "/images/ar-ageing.jpg",
        alt: "AR ageing report with a green reconciliation confirmation and a Send reminders now action",
        width: 1290,
        height: 380,
        url: "ledgerly.lk/reports/ar-ageing",
      },
    ],
  },
  {
    id: "compliance",
    eyebrow: "Built for Sri Lanka, not adapted to it",
    title: "Gazette-format invoices. VAT returns. RAMIS-ready.",
    body: "Tax invoices carry supplyDate as its own field, separate from the invoice date, per Gazette 2481/22. VAT returns total output tax, input tax, and credit/debit note adjustments by schedule number, straight from posted entries, and file with a permanent record — never editable after the fact.",
    highlight: true,
    images: [
      {
        src: "/images/vat-return.jpg",
        alt: "Filed VAT return broken down by Gazette schedule number, including output tax, input tax, and credit note adjustments",
        width: 1290,
        height: 610,
        url: "ledgerly.lk/reports/vat-return",
      },
    ],
  },
  {
    id: "team",
    eyebrow: "Team & governance",
    title: "Six roles. One of them can only read.",
    body: "Owner, Accountant, Bookkeeper, Approver, Auditor, Viewer — permission is checked on every write, not just hidden in the menu. The Auditor role reads everything, including the full audit trail, and can post nothing, structurally, not by convention.",
    tinted: true,
    images: [
      {
        src: "/images/team.jpg",
        alt: "Team settings showing members, their role, and role-change controls",
        width: 1290,
        height: 670,
        url: "ledgerly.lk/settings/team",
      },
    ],
  },
];

export const invariants = [
  {
    title: "Double entry",
    description:
      "Every journal entry has 2+ lines, debits = credits, enforced by a database constraint.",
  },
  {
    title: "Posted is immutable",
    description: "No UPDATE, no DELETE on a posted entry. Corrections are reversals, never edits.",
  },
  {
    title: "Reports read the ledger",
    description:
      "Never a sum of source documents. If a figure can't come from journal lines, the posting logic is fixed instead.",
  },
  {
    title: "Audit log is append-only",
    description:
      "Enforced at the database level — the application's own role has UPDATE and DELETE revoked on it.",
  },
  {
    title: "Document numbers are gapless",
    description:
      "Allocated inside the posting transaction with row-level locking — never a sequence that can skip.",
  },
  {
    title: "Records are never hard-deleted",
    description: "Void or discard. Personal data is anonymised on request, never deleted outright.",
  },
  {
    title: "Every mutation is attributed",
    description:
      "User and UTC timestamp on every write. Scheduled jobs post as a designated system actor.",
  },
  {
    title: "Money is never a float",
    description:
      "Decimal(19,4) in Postgres, decimal.js in TypeScript — enforced by a lint rule, not a habit.",
  },
  {
    title: "Every query is org-scoped",
    description:
      "Row-level security in Postgres, not a WHERE clause someone has to remember to write.",
  },
  {
    title: "A hard close is permanent",
    description:
      'The moment a closed period could be reopened, "closed" would stop meaning anything.',
  },
];

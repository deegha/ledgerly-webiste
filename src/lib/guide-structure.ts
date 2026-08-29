// The canonical chapter list for the User Guide (see USER_GUIDE_PLAN.md §3.2).
// Chapter membership comes from directory name under content/guide/<slug>/, not
// from a frontmatter field — one source of truth instead of two that can drift
// apart. Order here is reading order: setup and mental model first, then the
// transaction cycle in the order money actually moves, then reporting and
// reference material last.
export type GuideChapterMeta = {
  slug: string;
  title: string;
  description: string;
};

export const GUIDE_CHAPTERS: GuideChapterMeta[] = [
  {
    slug: "getting-started",
    title: "Getting started",
    description: "What Ledgerly is, onboarding your organization, and your first week.",
  },
  {
    slug: "bookkeeping-basics",
    title: "Bookkeeping basics",
    description: "Double-entry, debits and credits, and how to read the core reports.",
  },
  {
    slug: "accounting",
    title: "Accounting",
    description: "Chart of accounts, journals, periods, tax codes, fixed assets, budgets.",
  },
  {
    slug: "items",
    title: "Items",
    description: "Products and services, valuation methods, and stock movements.",
  },
  {
    slug: "sales",
    title: "Sales",
    description: "Customers, quotes, invoices, credit notes, and customer payments.",
  },
  {
    slug: "purchases",
    title: "Purchases",
    description: "Suppliers, bills, debit notes, supplier payments, and expenses.",
  },
  {
    slug: "inventory",
    title: "Inventory",
    description: "Stock adjustments and the inventory valuation report.",
  },
  {
    slug: "banking",
    title: "Banking",
    description: "Linking bank accounts, importing statements, and reconciling.",
  },
  {
    slug: "reports",
    title: "Reports",
    description: "What each report shows and what it tells you about your business.",
  },
  {
    slug: "compliance",
    title: "Compliance",
    description: "The Sri Lankan gazette invoice format, RAMIS, and data protection.",
  },
  {
    slug: "settings",
    title: "Settings",
    description: "Organization, currencies, numbering, roles, team, and security.",
  },
];

export function getGuideChapterMeta(slug: string): GuideChapterMeta | undefined {
  return GUIDE_CHAPTERS.find((c) => c.slug === slug);
}

export type GuideNavChapter = GuideChapterMeta & {
  articles: { slug: string; title: string }[];
};

import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getHelpArticles } from "@/lib/content";
import { siteUrl } from "@/lib/env";

const title = "Help centre";
const description = "Short, task-focused guides for the everyday jobs in Ledgerly.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/help` },
  openGraph: { title, description, url: `${siteUrl}/help` },
  twitter: { title, description },
};

const categoryOrder = ["Getting started", "Sales", "Purchases", "Banking", "Period-end"];

export default function HelpIndexPage() {
  const articles = getHelpArticles();
  const categories = categoryOrder
    .map((category) => ({
      category,
      articles: articles.filter((a) => a.frontmatter.category === category),
    }))
    .filter((group) => group.articles.length > 0);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-rule border-b">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
            <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
              Help centre
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl">How do I…</h1>
            <p className="text-ink-soft mt-5 max-w-2xl text-lg leading-relaxed">
              Short, task-focused guides for the everyday jobs — issuing an invoice, recording a
              payment, closing a period.
            </p>
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="flex flex-col gap-14">
              {categories.map((group) => (
                <div key={group.category}>
                  <h2 className="text-ink text-lg font-semibold">{group.category}</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {group.articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/help/${article.slug}`}
                        className="group border-rule bg-paper-raised hover:border-rule-strong rounded-lg border p-5 transition-colors"
                      >
                        <h3 className="text-ink group-hover:text-brand-ink font-medium transition-colors">
                          {article.frontmatter.title}
                        </h3>
                        <p className="text-ink-soft mt-1.5 text-sm leading-relaxed">
                          {article.frontmatter.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getHelpArticle, getHelpArticles } from "@/lib/content";
import { siteUrl } from "@/lib/env";

export function generateStaticParams() {
  return getHelpArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) return {};
  const url = `${siteUrl}/help/${slug}`;
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      url,
    },
    twitter: { title: article.frontmatter.title, description: article.frontmatter.description },
  };
}

export default async function HelpArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: article.frontmatter.title,
          description: article.frontmatter.description,
          url: `${siteUrl}/help/${slug}`,
          author: { "@type": "Organization", name: "Ledgerly.lk" },
          publisher: { "@type": "Organization", name: "Ledgerly.lk" },
        }}
      />
      <SiteHeader />
      <main>
        <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <Link href="/help" className="text-brand-ink text-sm font-medium">
            ← Help centre
          </Link>
          <span className="text-brand-ink mt-8 block font-mono text-xs font-semibold tracking-[0.14em] uppercase">
            {article.frontmatter.category}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl">{article.frontmatter.title}</h1>
          <div
            className="prose prose-neutral mt-10 max-w-none"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

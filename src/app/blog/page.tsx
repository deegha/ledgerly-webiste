import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getBlogPosts } from "@/lib/content";
import { siteUrl } from "@/lib/env";

const title = "Blog";
const description = "Notes on bookkeeping, Sri Lankan compliance, and building audit-ready books.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: { title, description, url: `${siteUrl}/blog` },
  twitter: { title, description },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-LK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-rule border-b">
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
            <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
              The Ledgerly blog
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl">Bookkeeping, done properly.</h1>
            <p className="text-ink-soft mt-5 text-lg leading-relaxed">
              Notes on double-entry, Sri Lankan compliance, and what audit-ready books actually
              require.
            </p>
          </div>
        </section>
        <section>
          <div className="divide-rule mx-auto max-w-4xl divide-y px-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-6 py-10 first:pt-14 sm:flex-row sm:items-center"
              >
                {post.frontmatter.image && (
                  // eslint-disable-next-line @next/next/no-img-element -- SVG cover art, no raster benefit
                  <img
                    src={post.frontmatter.image}
                    alt=""
                    width={1200}
                    height={630}
                    loading="lazy"
                    className="border-rule aspect-[1200/630] w-full shrink-0 rounded-lg border object-cover sm:w-56"
                  />
                )}
                <div>
                  <time className="text-ink-faint font-mono text-xs">
                    {formatDate(post.frontmatter.date)}
                  </time>
                  <h2 className="group-hover:text-brand-ink mt-2 text-2xl transition-colors">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-ink-soft mt-2 leading-relaxed">
                    {post.frontmatter.description}
                  </p>
                  <span className="text-brand-ink mt-3 inline-block text-sm font-medium">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

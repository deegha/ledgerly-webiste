import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import { siteUrl } from "@/lib/env";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-LK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `${siteUrl}/blog/${slug}`;
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url,
      type: "article",
      publishedTime: post.frontmatter.date,
      images: post.frontmatter.image ? [{ url: post.frontmatter.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.image ? [post.frontmatter.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.frontmatter.title,
          description: post.frontmatter.description,
          datePublished: post.frontmatter.date,
          image: post.frontmatter.image ? `${siteUrl}${post.frontmatter.image}` : undefined,
          url: `${siteUrl}/blog/${slug}`,
          author: { "@type": "Organization", name: "Ledgerly.lk" },
          publisher: { "@type": "Organization", name: "Ledgerly.lk" },
        }}
      />
      <SiteHeader />
      <main>
        <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <Link href="/blog" className="text-brand-ink text-sm font-medium">
            ← All posts
          </Link>
          <time className="text-ink-faint mt-8 block font-mono text-xs">
            {formatDate(post.frontmatter.date)}
          </time>
          <h1 className="mt-3 text-3xl sm:text-4xl">{post.frontmatter.title}</h1>
          {post.frontmatter.image && (
            // eslint-disable-next-line @next/next/no-img-element -- SVG cover art, no raster benefit
            <img
              src={post.frontmatter.image}
              alt=""
              width={1200}
              height={630}
              className="border-rule mt-8 aspect-[1200/630] w-full rounded-lg border object-cover"
            />
          )}
          <div
            className="prose prose-neutral mt-10 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

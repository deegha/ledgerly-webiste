import Link from "next/link";
import { Logo } from "@/components/logo";
import { getBlogPosts, getHelpArticles } from "@/lib/content";

const CONTACT_EMAIL = "contact@ledgerly.lk";

export async function SiteFooter() {
  const year = new Date().getFullYear();
  const recentPosts = getBlogPosts().slice(0, 3);
  const helpArticles = getHelpArticles().slice(0, 4);

  return (
    <footer className="border-rule bg-mist border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo className="text-ink h-6" />
            <p className="text-ink-soft mt-3 max-w-[26ch] text-sm">
              Double-entry bookkeeping, built for Sri Lanka.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-brand-ink mt-4 inline-block text-sm font-medium"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h3 className="text-ink-faint font-mono text-xs font-semibold tracking-[0.1em] uppercase">
              Product
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <Link href="/features" className="text-ink-soft hover:text-ink">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-ink-soft hover:text-ink">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-ink-soft hover:text-ink">
                  Help centre
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-ink-faint font-mono text-xs font-semibold tracking-[0.1em] uppercase">
              From the blog
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="text-ink-soft hover:text-ink">
                    {post.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-ink-faint font-mono text-xs font-semibold tracking-[0.1em] uppercase">
              Help articles
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {helpArticles.map((article) => (
                <li key={article.slug}>
                  <Link href={`/help/${article.slug}`} className="text-ink-soft hover:text-ink">
                    {article.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-rule mt-14 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink-faint font-mono text-xs">© {year} Ledgerly.lk</p>
          <p className="text-ink-faint font-mono text-xs">Colombo, Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}

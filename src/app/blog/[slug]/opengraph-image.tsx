import { ImageResponse } from "next/og";
import { getBlogPost, getBlogPosts } from "@/lib/content";

// Per-post social card. Rendered as a real PNG by next/og — the blog frontmatter
// `image` fields are SVG (fine for on-page <img>, but Twitter/X, Facebook,
// LinkedIn, Slack and iMessage all refuse SVG in link previews), so the card
// can't point at those. Next injects both og:image and twitter:image from this
// file with absolute URLs, replacing the site-wide opengraph-image.tsx for
// /blog/[slug] routes.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ledgerly.lk blog post";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

const clamp = (style: Record<string, unknown>, lines: number) => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical" as const,
  WebkitLineClamp: lines,
  overflow: "hidden",
  ...style,
});

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post?.frontmatter.title ?? "Ledgerly.lk";
  const description = post?.frontmatter.description ?? "";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "#100f0c",
        color: "#f3f1ea",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 20,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#9b95f7",
          fontFamily: "monospace",
        }}
      >
        Ledgerly.lk · Blog
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={clamp({ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }, 3)}>{title}</div>
        {description ? (
          <div style={clamp({ fontSize: 28, color: "#b6b0a0", lineHeight: 1.4 }, 3)}>
            {description}
          </div>
        ) : null}
      </div>

      <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
        <span>Ledgerly</span>
        <span style={{ color: "#9b95f7" }}>.</span>
        <span>lk</span>
      </div>
    </div>,
    { ...size },
  );
}

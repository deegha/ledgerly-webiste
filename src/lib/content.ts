import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked, Marked } from "marked";
import { GUIDE_CHAPTERS, type GuideNavChapter } from "@/lib/guide-structure";
import { slugify } from "@/lib/slugify";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  image?: string;
};

export type HelpFrontmatter = {
  title: string;
  description: string;
  category: string;
};

export type ContentEntry<T> = {
  slug: string;
  frontmatter: T;
  html: string;
};

function readCollection<T>(collection: "blog" | "help"): ContentEntry<T>[] {
  const dir = path.join(CONTENT_DIR, collection);
  const filenames = fs.readdirSync(dir).filter((name) => name.endsWith(".md"));

  return filenames.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: filename.replace(/\.md$/, ""),
      frontmatter: data as T,
      html: marked.parse(content, { async: false }),
    };
  });
}

export function getBlogPosts(): ContentEntry<BlogFrontmatter>[] {
  return readCollection<BlogFrontmatter>("blog").sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
  );
}

export function getBlogPost(slug: string): ContentEntry<BlogFrontmatter> | undefined {
  return getBlogPosts().find((post) => post.slug === slug);
}

export function getHelpArticles(): ContentEntry<HelpFrontmatter>[] {
  return readCollection<HelpFrontmatter>("help").sort((a, b) =>
    a.frontmatter.title.localeCompare(b.frontmatter.title),
  );
}

export function getHelpArticle(slug: string): ContentEntry<HelpFrontmatter> | undefined {
  return getHelpArticles().find((article) => article.slug === slug);
}

// ─── User Guide ──────────────────────────────────────────────────────
// A separate collection from blog/help: chapter comes from directory
// structure (see guide-structure.ts), articles carry an explicit `order`,
// and images render as framed .guide-screenshot figures rather than bare
// <img> tags — see USER_GUIDE_PLAN.md §5.4. This needs its own Marked
// instance (not the shared default export) so blog/help rendering is
// untouched by the heading-id and image-framing overrides below.

export type GuideFrontmatter = {
  title: string;
  description: string;
  order: number;
  verifiedAgainst?: string;
  related?: string[];
};

export type GuideHeading = { id: string; text: string; depth: number };

export type GuideEntry = ContentEntry<GuideFrontmatter> & {
  chapter: string;
  headings: GuideHeading[];
};

function createGuideMarked() {
  let headings: GuideHeading[] = [];
  const instance = new Marked({
    renderer: {
      heading(token) {
        const text = this.parser.parseInline(token.tokens);
        const id = slugify(token.text);
        if (token.depth <= 3) headings.push({ id, text: token.text, depth: token.depth });
        return `<h${token.depth} id="${id}">${text}</h${token.depth}>\n`;
      },
      image(token) {
        const caption = token.title ? `<figcaption>${token.title}</figcaption>` : "";
        return `<figure class="guide-screenshot"><img src="${token.href}" alt="${token.text}" loading="lazy" />${caption}</figure>`;
      },
    },
  });
  return {
    render(content: string): { html: string; headings: GuideHeading[] } {
      headings = [];
      const html = instance.parse(content, { async: false }) as string;
      return { html, headings };
    },
  };
}

const guideMarked = createGuideMarked();

function readGuideCollection(): GuideEntry[] {
  const dir = path.join(CONTENT_DIR, "guide");
  if (!fs.existsSync(dir)) return [];

  const entries: GuideEntry[] = [];
  for (const chapterDirent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!chapterDirent.isDirectory()) continue;
    const chapter = chapterDirent.name;
    const chapterDir = path.join(dir, chapter);
    const filenames = fs.readdirSync(chapterDir).filter((name) => name.endsWith(".md"));

    for (const filename of filenames) {
      const raw = fs.readFileSync(path.join(chapterDir, filename), "utf8");
      const { data, content } = matter(raw);
      const { html, headings } = guideMarked.render(content);
      entries.push({
        slug: filename.replace(/\.md$/, ""),
        chapter,
        frontmatter: data as GuideFrontmatter,
        html,
        headings,
      });
    }
  }
  return entries;
}

function sortGuideEntries(entries: GuideEntry[]): GuideEntry[] {
  return entries.sort((a, b) => {
    const chapterDiff =
      GUIDE_CHAPTERS.findIndex((c) => c.slug === a.chapter) -
      GUIDE_CHAPTERS.findIndex((c) => c.slug === b.chapter);
    if (chapterDiff !== 0) return chapterDiff;
    return (a.frontmatter.order ?? 0) - (b.frontmatter.order ?? 0);
  });
}

export function getGuideArticles(): GuideEntry[] {
  return sortGuideEntries(readGuideCollection());
}

export function getGuideArticlesByChapter(chapter: string): GuideEntry[] {
  return getGuideArticles().filter((a) => a.chapter === chapter);
}

export function getGuideArticle(chapter: string, slug: string): GuideEntry | undefined {
  return getGuideArticles().find((a) => a.chapter === chapter && a.slug === slug);
}

export function getGuideNavChapters(): GuideNavChapter[] {
  const articles = getGuideArticles();
  return GUIDE_CHAPTERS.map((chapter) => ({
    ...chapter,
    articles: articles
      .filter((a) => a.chapter === chapter.slug)
      .map((a) => ({ slug: a.slug, title: a.frontmatter.title })),
  }));
}

export function getAdjacentGuideArticles(
  chapter: string,
  slug: string,
): { prev: GuideEntry | null; next: GuideEntry | null } {
  const all = getGuideArticles();
  const index = all.findIndex((a) => a.chapter === chapter && a.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 ? all[index + 1] : null,
  };
}

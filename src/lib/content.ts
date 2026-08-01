import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

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

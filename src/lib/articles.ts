import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export interface ArticleMetadata {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime?: string;
  coverImage?: string;
}

export interface Article extends ArticleMetadata {
  contentHtml: string;
}

// Calculate rough reading time based on words
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = await marked.parse(content);

  return {
    title: data.title || "Untitled",
    slug: data.slug || slug,
    date: data.date || new Date().toISOString().split("T")[0],
    excerpt: data.excerpt || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readTime: data.readTime || calculateReadTime(content),
    coverImage: data.coverImage,
    contentHtml,
  };
}

export async function getAllArticles(): Promise<ArticleMetadata[]> {
  const slugs = getArticleSlugs();
  const articles: ArticleMetadata[] = [];

  for (const slug of slugs) {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    articles.push({
      title: data.title || "Untitled",
      slug: data.slug || slug,
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      readTime: data.readTime || calculateReadTime(content),
      coverImage: data.coverImage,
    });
  }

  // Sort articles by date in descending order
  return articles.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}

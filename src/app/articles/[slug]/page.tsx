import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Developer Portfolio`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 px-4 sm:px-6 max-w-3xl mx-auto space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to all articles
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-800 pb-8">
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-sky-400" />
            {article.date}
          </span>
          {article.readTime && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {article.readTime}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="text-slate-300 text-lg leading-relaxed italic">
            {article.excerpt}
          </p>
        )}

        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-sky-300 border border-slate-700 font-mono flex items-center gap-1"
              >
                <Tag className="w-3 h-3 text-sky-400" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Content Rendered from Markdown */}
      <div
        className="prose max-w-none pt-4"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      {/* Article Footer */}
      <div className="border-t border-slate-800 pt-8 mt-12 flex items-center justify-between">
        <Link
          href="/articles"
          className="text-sky-400 hover:text-sky-300 text-sm font-semibold flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>
      </div>
    </article>
  );
}

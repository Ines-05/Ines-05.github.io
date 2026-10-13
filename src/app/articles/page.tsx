import { BookOpen } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata = {
  title: "Articles & Blog | Developer Portfolio",
  description: "Guides, technical articles, and thoughts on web development, React, and architecture.",
};

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <div className="py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-medium">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Articles &amp; Writing</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          All Articles
        </h1>
        <p className="text-slate-400 text-base max-w-2xl">
          Deep-dives into software architecture, frontend engineering, tools, and technical tutorials.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.length === 0 ? (
          <p className="text-slate-400 col-span-2 text-center py-12">
            No articles found. Add Markdown (.md) files to the <code>content/articles</code> directory!
          </p>
        ) : (
          articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ArticleMetadata } from "@/lib/articles";

export function ArticleCard({ article }: { article: ArticleMetadata }) {
  return (
    <article className="bg-slate-800/40 border border-slate-700/60 hover:border-sky-500/50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/5 group flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3">
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

        <Link href={`/articles/${article.slug}`}>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors mb-2 leading-snug">
            {article.title}
          </h3>
        </Link>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {article.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800">
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link
          href={`/articles/${article.slug}`}
          className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          Read <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}

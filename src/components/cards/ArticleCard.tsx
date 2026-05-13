import Link from "next/link";
import type { Article } from "@/types/article";
import { formatDateAR } from "@/lib/formatting";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.category}/${article.slug}/`}
      className="group block rounded-xl border border-ink-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-card"
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
        {article.category}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-ink-900 group-hover:text-brand-700">
        {article.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-ink-700">{article.description}</p>
      <p className="mt-3 text-xs text-ink-500">
        Actualizado el <time dateTime={article.lastUpdated}>{formatDateAR(article.lastUpdated)}</time>
      </p>
    </Link>
  );
}

import Link from "next/link";
import type { RelatedArticleRef } from "@/types/article";

export function RelatedLinks({ items }: { items: RelatedArticleRef[] }) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Artículos relacionados">
      <h2 className="text-xl font-semibold text-ink-900">Seguí leyendo</h2>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/${item.category}/${item.slug}/`}
              className="block rounded-lg border border-ink-200 bg-white p-4 hover:border-brand-300 hover:shadow-card"
            >
              <span className="text-sm font-medium text-brand-700">{item.category}</span>
              <span className="mt-1 block font-semibold text-ink-900">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

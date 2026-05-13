import Link from "next/link";
import type { Category } from "@/types/article";

export function CategoryCard({ category }: { category: Category }) {
  const inner = (
    <div className="flex h-full flex-col rounded-xl border border-ink-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-card">
      <div className="flex items-center gap-3">
        <span aria-hidden className="text-3xl">
          {category.icon}
        </span>
        <h3 className="text-lg font-semibold text-ink-900">{category.name}</h3>
        {!category.available && (
          <span className="ml-auto rounded-full border border-ink-200 bg-ink-50 px-2 py-0.5 text-xs text-ink-500">
            Próximamente
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-ink-700">{category.shortDescription}</p>
      <span className="mt-auto pt-3 text-sm font-medium text-brand-700">
        {category.available ? "Ver guías →" : "En preparación"}
      </span>
    </div>
  );

  if (!category.available) {
    return <div className="opacity-80">{inner}</div>;
  }
  return (
    <Link href={`/${category.slug}/`} className="block h-full">
      {inner}
    </Link>
  );
}

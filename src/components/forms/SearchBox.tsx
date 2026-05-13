"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { articles } from "@/data/articles";
import { trackEvent } from "@/lib/analytics";

export function SearchBox() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    return articles
      .filter((a) => {
        const hay = `${a.title} ${a.description} ${a.keyword}`.toLowerCase();
        return hay.includes(term);
      })
      .slice(0, 5);
  }, [q]);

  function handleBlur() {
    if (q.trim().length >= 2) {
      trackEvent("internal_search", { q: q.trim().slice(0, 60) });
    }
  }

  return (
    <div className="relative">
      <label htmlFor="home-search" className="sr-only">
        Buscar guías
      </label>
      <input
        id="home-search"
        type="search"
        autoComplete="off"
        placeholder="Buscá: mantener un auto, VTV, seguro, transferencia…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onBlur={handleBlur}
        className="w-full rounded-full border border-ink-200 bg-white px-5 py-3 text-base shadow-sm focus:border-brand-500 focus:outline-none"
      />
      {results.length > 0 && (
        <ul className="absolute left-0 right-0 z-10 mt-2 overflow-hidden rounded-lg border border-ink-200 bg-white shadow-card">
          {results.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/${a.category}/${a.slug}/`}
                className="block px-4 py-3 hover:bg-ink-50"
                onClick={() =>
                  trackEvent("internal_search", { q: q.trim().slice(0, 60), result: a.slug })
                }
              >
                <span className="block text-sm font-medium text-ink-900">{a.title}</span>
                <span className="mt-0.5 line-clamp-1 text-xs text-ink-500">{a.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

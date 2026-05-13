import type { PriceSource } from "@/types/pricing";
import { formatDateAR } from "@/lib/formatting";

export function SourceList({ sources }: { sources: PriceSource[] }) {
  if (sources.length === 0) return null;
  return (
    <div>
      <h2 className="text-xl font-semibold text-ink-900">Fuentes y referencias</h2>
      <ul className="mt-3 space-y-2 text-sm text-ink-700">
        {sources.map((s, idx) => (
          <li key={`${s.name}-${idx}`} className="rounded border border-ink-200 bg-white p-3">
            <p className="font-medium text-ink-900">
              {s.url ? (
                <a
                  href={s.url}
                  rel="noopener nofollow"
                  target="_blank"
                  className="text-brand-700 hover:underline"
                >
                  {s.name}
                </a>
              ) : (
                s.name
              )}
            </p>
            <p className="mt-1 text-xs text-ink-500">
              Tipo: {s.type} · Revisado: {formatDateAR(s.checkedAt)}
            </p>
            {s.note && <p className="mt-1 text-sm">{s.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

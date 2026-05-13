"use client";

import { formatARS } from "@/lib/formatting";
import type { AutoCostBreakdownItem } from "@/lib/calculators";

export function CostBreakdown({
  items,
  total,
}: {
  items: AutoCostBreakdownItem[];
  total: number;
}) {
  const max = items.reduce((m, it) => Math.max(m, it.value), 0) || 1;
  return (
    <ol className="space-y-2">
      {items.map((it) => {
        const pct = total > 0 ? Math.round((it.value / total) * 100) : 0;
        const barWidth = Math.max(2, Math.round((it.value / max) * 100));
        return (
          <li key={it.name} className="rounded-md border border-ink-200 bg-white p-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-sm font-medium text-ink-900">{it.name}</span>
              <span className="text-sm text-ink-700">
                {formatARS(it.value)}{" "}
                <span className="text-xs text-ink-500">({pct}%)</span>
              </span>
            </div>
            <div
              className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-100"
              aria-hidden
            >
              <div
                className="h-full rounded-full bg-brand-500"
                style={{ width: `${barWidth}%` }}
              />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

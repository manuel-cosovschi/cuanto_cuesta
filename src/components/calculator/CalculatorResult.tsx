"use client";

import { formatARS } from "@/lib/formatting";
import type { AutoCostResult } from "@/lib/calculators";
import { CostBreakdown } from "./CostBreakdown";

export function CalculatorResult({ result, km }: { result: AutoCostResult; km: number }) {
  return (
    <section
      aria-live="polite"
      className="space-y-4 rounded-xl border border-brand-200 bg-white p-5 shadow-card"
    >
      <header>
        <h2 className="text-lg font-semibold text-ink-900">Resultado estimado</h2>
        <p className="text-xs text-ink-500">
          Valores orientativos. Pueden variar por proveedor, zona y temporada.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-brand-50 p-4">
          <p className="text-xs uppercase tracking-wide text-brand-700">Mensual</p>
          <p className="mt-1 text-2xl font-bold text-ink-900">
            {formatARS(result.monthlyTotal)}
          </p>
        </div>
        <div className="rounded-lg bg-ink-50 p-4">
          <p className="text-xs uppercase tracking-wide text-ink-700">Anual</p>
          <p className="mt-1 text-2xl font-bold text-ink-900">
            {formatARS(result.annualTotal)}
          </p>
        </div>
        <div className="rounded-lg bg-emerald-50 p-4">
          <p className="text-xs uppercase tracking-wide text-emerald-700">
            Por kilómetro
          </p>
          <p className="mt-1 text-2xl font-bold text-ink-900">
            {km > 0 ? `${formatARS(result.costPerKm)}` : "—"}
            {km > 0 && <span className="ml-1 text-sm font-medium text-ink-500">/km</span>}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-ink-900">Desglose por categoría</h3>
        <div className="mt-2">
          <CostBreakdown items={result.breakdown} total={result.monthlyTotal} />
        </div>
      </div>

      {result.topExpense && (
        <p className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
          <span className="font-semibold">Gasto más alto:</span> {result.topExpense.name}{" "}
          ({formatARS(result.topExpense.value)} por mes).
        </p>
      )}

      <p className="rounded-md border border-brand-200 bg-brand-50 p-3 text-sm text-ink-900">
        {result.recommendation}
      </p>
    </section>
  );
}

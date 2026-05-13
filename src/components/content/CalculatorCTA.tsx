import Link from "next/link";

export function CalculatorCTA({
  title = "Calculadora de costo mensual de auto",
  description = "Ingresá tus gastos reales y obtené costo mensual, anual y por kilómetro estimado para tu auto.",
  href = "/calculadoras/costo-mensual-auto/",
}: {
  title?: string;
  description?: string;
  href?: string;
}) {
  return (
    <aside className="rounded-xl border border-brand-200 bg-white p-5 shadow-card">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-brand-700">Calculadora gratuita</p>
          <h3 className="mt-1 text-lg font-semibold text-ink-900">{title}</h3>
          <p className="mt-1 text-sm text-ink-700">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-flex shrink-0 items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Abrir calculadora →
        </Link>
      </div>
    </aside>
  );
}

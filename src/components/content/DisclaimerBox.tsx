import { PRICE_DISCLAIMER } from "@/lib/constants";

export function DisclaimerBox({ extra }: { extra?: string }) {
  return (
    <aside
      aria-label="Aviso sobre los precios publicados"
      className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
    >
      <p className="font-semibold">Aviso importante sobre los precios</p>
      <p className="mt-1 leading-relaxed">{PRICE_DISCLAIMER}</p>
      {extra && <p className="mt-2 leading-relaxed">{extra}</p>}
    </aside>
  );
}

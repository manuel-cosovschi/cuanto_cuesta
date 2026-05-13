import type { CostItem } from "@/types/pricing";
import { formatARS } from "@/lib/formatting";
import { Badge } from "../content/Badge";

export function CostTable({
  items,
  caption = "Costos estimativos",
}: {
  items: CostItem[];
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-ink-200 bg-white">
      <table className="w-full text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-ink-50 text-left text-xs uppercase tracking-wide text-ink-500">
          <tr>
            <th scope="col" className="px-3 py-2">
              Concepto
            </th>
            <th scope="col" className="px-3 py-2">
              Bajo
            </th>
            <th scope="col" className="px-3 py-2">
              Medio
            </th>
            <th scope="col" className="px-3 py-2">
              Alto
            </th>
            <th scope="col" className="px-3 py-2">
              Frecuencia
            </th>
            <th scope="col" className="px-3 py-2">
              Tipo
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-200">
          {items.map((item) => (
            <tr key={item.name} className="align-top">
              <td className="px-3 py-2 font-medium text-ink-900">
                {item.name}
                {item.note && (
                  <p className="mt-1 text-xs font-normal text-ink-500">{item.note}</p>
                )}
              </td>
              <td className="px-3 py-2 text-ink-700">{formatARS(item.low)}</td>
              <td className="px-3 py-2 text-ink-700">{formatARS(item.medium)}</td>
              <td className="px-3 py-2 text-ink-700">{formatARS(item.high)}</td>
              <td className="px-3 py-2 text-ink-700">{item.frequency}</td>
              <td className="px-3 py-2">
                <Badge tone={item.isEstimate ? "warn" : "success"}>
                  {item.isEstimate ? "Estimativo" : "Oficial"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

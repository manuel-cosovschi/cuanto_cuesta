import Link from "next/link";
import { REPORT_PRICE_CTA } from "@/lib/constants";

export function ReportPriceCTA() {
  return (
    <aside className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
      <p className="font-semibold text-emerald-900">{REPORT_PRICE_CTA}</p>
      <p className="mt-1 text-sm text-emerald-900/80">
        Tu reporte nos ayuda a mantener los rangos al día. No publicamos información personal.
      </p>
      <Link
        href="/contacto/?motivo=precio-desactualizado"
        className="mt-3 inline-flex items-center rounded-md bg-emerald-700 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-800"
      >
        Reportar precio
      </Link>
    </aside>
  );
}

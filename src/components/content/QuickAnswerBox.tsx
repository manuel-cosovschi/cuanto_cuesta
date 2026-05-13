import { Badge } from "./Badge";

export function QuickAnswerBox({
  estimatedRange,
  answer,
}: {
  estimatedRange: string;
  answer: string;
}) {
  return (
    <aside
      aria-label="Respuesta rápida"
      className="rounded-xl border border-brand-200 bg-brand-50 p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="brand">Respuesta rápida</Badge>
        <Badge tone="warn">Precio estimativo</Badge>
        <Badge tone="neutral">Argentina</Badge>
      </div>
      <p className="mt-3 text-base font-semibold text-ink-900 sm:text-lg">
        {estimatedRange}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-700 sm:text-base">
        {answer}
      </p>
    </aside>
  );
}

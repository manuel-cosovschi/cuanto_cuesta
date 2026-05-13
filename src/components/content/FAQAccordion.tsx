import type { FAQ } from "@/types/article";

export function FAQAccordion({ items, idPrefix = "faq" }: { items: FAQ[]; idPrefix?: string }) {
  return (
    <div className="divide-y divide-ink-200 rounded-lg border border-ink-200 bg-white">
      {items.map((item, idx) => (
        <details key={item.question} className="group p-4">
          <summary
            id={`${idPrefix}-${idx}`}
            className="cursor-pointer list-none text-base font-semibold text-ink-900"
          >
            <span className="flex items-start justify-between gap-2">
              <span>{item.question}</span>
              <span
                aria-hidden
                className="mt-1 text-ink-500 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <div className="mt-2 text-sm leading-relaxed text-ink-700">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

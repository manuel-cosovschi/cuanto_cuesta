import Link from "next/link";

export function MethodologyBox({
  notes,
  compact = false,
}: {
  notes: string[];
  compact?: boolean;
}) {
  return (
    <aside
      aria-label="Cómo estimamos los precios"
      className="rounded-lg border border-ink-200 bg-white p-4"
    >
      <p className="font-semibold text-ink-900">Cómo estimamos estos precios</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-700">
        {notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      {!compact && (
        <p className="mt-3 text-sm">
          <Link
            href="/metodologia/"
            className="font-medium text-brand-700 hover:underline"
          >
            Leer metodología completa →
          </Link>
        </p>
      )}
    </aside>
  );
}

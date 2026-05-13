import { formatDateAR } from "@/lib/formatting";

export function LastUpdated({ iso, label = "Última actualización" }: { iso: string; label?: string }) {
  return (
    <p className="text-xs text-ink-500">
      <span className="font-medium text-ink-700">{label}:</span>{" "}
      <time dateTime={iso}>{formatDateAR(iso)}</time>
    </p>
  );
}

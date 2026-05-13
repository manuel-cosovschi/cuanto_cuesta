import type { ReactNode } from "react";

type Tone = "info" | "warn" | "success" | "neutral" | "brand";

const styles: Record<Tone, string> = {
  info: "bg-brand-50 text-brand-700 border-brand-200",
  warn: "bg-amber-50 text-amber-800 border-amber-200",
  success: "bg-emerald-50 text-emerald-800 border-emerald-200",
  neutral: "bg-ink-100 text-ink-700 border-ink-200",
  brand: "bg-brand-600 text-white border-brand-700",
};

export function Badge({
  tone = "neutral",
  children,
}: {
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

"use client";

import type { InputHTMLAttributes } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  label: string;
  help?: string;
  suffix?: string;
  onValueChange: (value: number) => void;
  value: number;
}

export function CalculatorInput({
  label,
  help,
  suffix,
  onValueChange,
  value,
  id,
  ...rest
}: Props) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1 text-sm">
      <span className="font-medium text-ink-900">{label}</span>
      <span className="relative flex items-center">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={0}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => {
            const n = Number(e.target.value);
            onValueChange(Number.isFinite(n) && n >= 0 ? n : 0);
          }}
          className="w-full rounded-md border border-ink-200 bg-white px-3 py-2 text-ink-900 shadow-sm focus:border-brand-500 focus:outline-none"
          {...rest}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-3 text-xs text-ink-500">
            {suffix}
          </span>
        )}
      </span>
      {help && <span className="text-xs text-ink-500">{help}</span>}
    </label>
  );
}

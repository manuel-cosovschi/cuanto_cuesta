export type Currency = "ARS" | "USD";

export type PriceFrequency =
  | "única"
  | "mensual"
  | "anual"
  | "semestral"
  | "cada service"
  | "por evento"
  | "por kilómetro";

export type PriceSourceType =
  | "oficial"
  | "mercado"
  | "estimado"
  | "comunidad"
  | "promedio";

export interface CostItem {
  /** Nombre legible del gasto, p. ej. "Seguro de auto". */
  name: string;
  /** Rango bajo, medio y alto en la moneda indicada. */
  low: number;
  medium: number;
  high: number;
  /** Frecuencia del gasto. */
  frequency: PriceFrequency;
  /** Aclaración corta (jurisdicción, supuestos, etc.). */
  note?: string;
  /** Tipo de fuente del rango. */
  sourceType: PriceSourceType;
  /** Si el valor es estimativo y no oficial. */
  isEstimate: boolean;
  /** Moneda del rango. Default ARS. */
  currency?: Currency;
}

export interface PriceSource {
  name: string;
  url?: string;
  type: PriceSourceType;
  /** ISO date string yyyy-mm-dd. */
  checkedAt: string;
  note?: string;
}

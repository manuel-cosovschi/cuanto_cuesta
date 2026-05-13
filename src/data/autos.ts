import type { FAQ } from "@/types/article";

export const autosCategoryIntro = `Tener un auto en Argentina implica más gastos de los que parece. Acá reunimos guías con rangos de precios estimativos para los costos más comunes: seguro, patente, combustible, cochera, VTV, service, cubiertas y reparaciones. Todos los valores son orientativos y se actualizan periódicamente.`;

export const autosCategoryLastUpdated = "2026-05-13";

export const autosCategoryFaqs: FAQ[] = [
  {
    question: "¿Cuánto sale por mes mantener un auto en Argentina?",
    answer:
      "Para un auto chico o mediano con uso urbano moderado, el costo mensual estimado se ubica entre ARS 300.000 y ARS 700.000. Incluye seguro, patente, combustible, cochera, service prorrateado y otros gastos variables. El valor exacto depende de uso, modelo y zona.",
  },
  {
    question: "¿Qué gasto pesa más cuando tenés auto?",
    answer:
      "Suele alternarse entre seguro y combustible. Si manejás poco, pesa más el seguro; si manejás mucho, gana el combustible. La cochera puede ser el tercer gran gasto si la tenés en zonas céntricas.",
  },
  {
    question: "¿La VTV es la misma en todo el país?",
    answer:
      "No. La VTV se rige por jurisdicción. Hay tarifas distintas en Provincia de Buenos Aires, CABA, Córdoba, Santa Fe y otras provincias. La frecuencia también puede variar según la antigüedad del vehículo.",
  },
  {
    question: "¿Es caro transferir un auto?",
    answer:
      "El total suele ubicarse entre el 1,5% y el 3% del valor del vehículo. El componente principal es el arancel del Registro Automotor, que se calcula sobre la valuación fiscal del auto.",
  },
];

export interface AutosSummaryRow {
  concept: string;
  costRange: string;
  frequency: string;
  note?: string;
}

export const autosCategorySummary: AutosSummaryRow[] = [
  {
    concept: "Seguro (terceros completo)",
    costRange: "ARS 35.000 – 110.000",
    frequency: "mensual",
    note: "Varía por zona, modelo y perfil del conductor.",
  },
  {
    concept: "Patente / impuesto automotor",
    costRange: "ARS 8.000 – 50.000",
    frequency: "mensual prorrateado",
    note: "Depende de jurisdicción y valuación.",
  },
  {
    concept: "Combustible",
    costRange: "ARS 80.000 – 280.000",
    frequency: "mensual",
    note: "Asumiendo 600–1.500 km/mes.",
  },
  {
    concept: "Cochera",
    costRange: "ARS 0 – 140.000",
    frequency: "mensual",
    note: "0 si guardás en la calle.",
  },
  {
    concept: "VTV",
    costRange: "ARS 25.000 – 90.000",
    frequency: "anual",
    note: "Cambia por jurisdicción.",
  },
  {
    concept: "Service básico",
    costRange: "ARS 90.000 – 250.000",
    frequency: "cada service",
    note: "Cada 10.000–15.000 km o 1 año.",
  },
  {
    concept: "Cubiertas (juego)",
    costRange: "ARS 280.000 – 1.000.000",
    frequency: "cada 40–60.000 km",
    note: "Depende de marca y medida.",
  },
  {
    concept: "Reparaciones e imprevistos",
    costRange: "ARS 5.000 – 60.000",
    frequency: "mensual prorrateado",
    note: "Reserva para fallas eventuales.",
  },
];

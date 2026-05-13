import type { Category } from "@/types/article";

export const categories: Category[] = [
  {
    slug: "autos",
    name: "Autos",
    shortDescription:
      "Cuánto sale tener, mantener, transferir o asegurar un auto en Argentina.",
    available: true,
    icon: "🚗",
  },
  {
    slug: "vivienda",
    name: "Vivienda",
    shortDescription:
      "Alquileres, expensas, mudanzas y servicios del hogar.",
    available: false,
    icon: "🏠",
  },
  {
    slug: "construccion",
    name: "Construcción",
    shortDescription:
      "Materiales, mano de obra y costo por metro cuadrado.",
    available: false,
    icon: "🧱",
  },
  {
    slug: "mascotas",
    name: "Mascotas",
    shortDescription:
      "Veterinaria, alimento, vacunas y gastos mensuales.",
    available: false,
    icon: "🐾",
  },
  {
    slug: "tramites",
    name: "Trámites",
    shortDescription:
      "DNI, pasaporte, certificados y aranceles oficiales.",
    available: false,
    icon: "📄",
  },
  {
    slug: "viajes",
    name: "Viajes",
    shortDescription:
      "Pasajes, hospedaje y presupuestos para destinos populares.",
    available: false,
    icon: "✈️",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

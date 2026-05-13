export interface AutoCostInputs {
  vehicleType: "chico" | "mediano" | "suv";
  kilometersPerMonth: number;
  consumptionPer100Km: number;
  fuelPricePerLiter: number;
  insuranceMonthly: number;
  patenteMonthly: number;
  garageMonthly: number;
  serviceAnnual: number;
  vtvAnnual: number;
  washesPerMonth: number;
  costPerWash: number;
  unexpectedMonthly: number;
}

export interface AutoCostBreakdownItem {
  name: string;
  value: number;
}

export interface AutoCostResult {
  monthlyTotal: number;
  annualTotal: number;
  costPerKm: number;
  breakdown: AutoCostBreakdownItem[];
  /** Item con el gasto más alto. */
  topExpense: AutoCostBreakdownItem | null;
  /** Recomendación textual generada a partir del resultado. */
  recommendation: string;
}

export const defaultAutoCostInputs: AutoCostInputs = {
  vehicleType: "mediano",
  kilometersPerMonth: 1000,
  consumptionPer100Km: 8,
  fuelPricePerLiter: 1200,
  insuranceMonthly: 60000,
  patenteMonthly: 18000,
  garageMonthly: 60000,
  serviceAnnual: 240000,
  vtvAnnual: 50000,
  washesPerMonth: 2,
  costPerWash: 12000,
  unexpectedMonthly: 20000,
};

function safe(n: unknown): number {
  const v = Number(n);
  return Number.isFinite(v) && v >= 0 ? v : 0;
}

export function calculateAutoCost(inputs: AutoCostInputs): AutoCostResult {
  const km = safe(inputs.kilometersPerMonth);
  const consumption = safe(inputs.consumptionPer100Km);
  const fuel = safe(inputs.fuelPricePerLiter);
  const insurance = safe(inputs.insuranceMonthly);
  const patente = safe(inputs.patenteMonthly);
  const garage = safe(inputs.garageMonthly);
  const serviceAnnual = safe(inputs.serviceAnnual);
  const vtvAnnual = safe(inputs.vtvAnnual);
  const washes = safe(inputs.washesPerMonth);
  const washCost = safe(inputs.costPerWash);
  const unexpected = safe(inputs.unexpectedMonthly);

  const fuelMonthly = (km * consumption * fuel) / 100;
  const serviceMonthly = serviceAnnual / 12;
  const vtvMonthly = vtvAnnual / 12;
  const washMonthly = washes * washCost;

  const breakdown: AutoCostBreakdownItem[] = [
    { name: "Combustible", value: fuelMonthly },
    { name: "Seguro", value: insurance },
    { name: "Patente", value: patente },
    { name: "Cochera", value: garage },
    { name: "Service (prorrateado)", value: serviceMonthly },
    { name: "VTV (prorrateada)", value: vtvMonthly },
    { name: "Lavados", value: washMonthly },
    { name: "Imprevistos", value: unexpected },
  ];

  const monthlyTotal = breakdown.reduce((acc, it) => acc + it.value, 0);
  const annualTotal = monthlyTotal * 12;
  const costPerKm = km > 0 ? monthlyTotal / km : 0;

  const topExpense =
    breakdown.length > 0
      ? breakdown.reduce((max, it) => (it.value > max.value ? it : max), breakdown[0])
      : null;

  const recommendation = buildRecommendation({
    breakdown,
    topExpense,
    km,
    costPerKm,
    vehicleType: inputs.vehicleType,
  });

  return {
    monthlyTotal,
    annualTotal,
    costPerKm,
    breakdown,
    topExpense,
    recommendation,
  };
}

function buildRecommendation(args: {
  breakdown: AutoCostBreakdownItem[];
  topExpense: AutoCostBreakdownItem | null;
  km: number;
  costPerKm: number;
  vehicleType: AutoCostInputs["vehicleType"];
}): string {
  const { topExpense, km, costPerKm, vehicleType } = args;
  if (!topExpense || topExpense.value <= 0) {
    return "Cargá tus datos reales para obtener una estimación útil. Cuantos más campos completes, más precisa va a ser.";
  }
  const tipo =
    vehicleType === "chico"
      ? "auto chico"
      : vehicleType === "suv"
        ? "SUV o pickup"
        : "auto mediano";

  if (topExpense.name === "Combustible") {
    return `Tu gasto principal es combustible. Para tu ${tipo}, revisar consumo, presión de cubiertas y planificar viajes puede bajar la cuenta. Si recorrés ${km.toLocaleString("es-AR")} km/mes, el costo por kilómetro es alto: evaluá si conviene reducir trayectos cortos.`;
  }
  if (topExpense.name === "Seguro") {
    return `Tu mayor gasto es el seguro. Pedí al menos 3 cotizaciones nuevas: para un ${tipo} es común encontrar diferencias del 20–40%. Revisá la cobertura y la franquicia.`;
  }
  if (topExpense.name === "Cochera") {
    return `La cochera pesa más que cualquier otro rubro. Si tu uso es bajo (${km.toLocaleString("es-AR")} km/mes) y el costo por km es alto (${Math.round(costPerKm).toLocaleString("es-AR")} ARS/km), evaluá si la ubicación o el tipo de contrato se pueden ajustar.`;
  }
  if (topExpense.name === "Patente") {
    return `La patente es tu gasto principal. Verificá la valuación fiscal y la jurisdicción donde está radicado tu ${tipo}: en algunos casos hay alternativas más convenientes según la provincia.`;
  }
  return `Tu mayor gasto es ${topExpense.name}. Revisá los proveedores y compará al menos 2 alternativas antes de renovar. El costo por kilómetro estimado es ${Math.round(costPerKm).toLocaleString("es-AR")} ARS/km.`;
}

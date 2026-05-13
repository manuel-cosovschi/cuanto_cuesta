import { describe, it, expect } from "vitest";
import {
  calculateAutoCost,
  defaultAutoCostInputs,
} from "@/lib/calculators";

describe("calculateAutoCost", () => {
  it("calcula combustible mensual con km × consumo × precio / 100", () => {
    const r = calculateAutoCost({
      ...defaultAutoCostInputs,
      kilometersPerMonth: 1000,
      consumptionPer100Km: 8,
      fuelPricePerLiter: 1000,
      insuranceMonthly: 0,
      patenteMonthly: 0,
      garageMonthly: 0,
      serviceAnnual: 0,
      vtvAnnual: 0,
      washesPerMonth: 0,
      costPerWash: 0,
      unexpectedMonthly: 0,
    });
    // 1000 * 8 * 1000 / 100 = 80000
    const fuel = r.breakdown.find((b) => b.name === "Combustible");
    expect(fuel?.value).toBe(80000);
    expect(r.monthlyTotal).toBe(80000);
  });

  it("anualiza multiplicando mensual por 12", () => {
    const r = calculateAutoCost(defaultAutoCostInputs);
    expect(r.annualTotal).toBeCloseTo(r.monthlyTotal * 12, 5);
  });

  it("calcula costo por km cuando km > 0", () => {
    const r = calculateAutoCost(defaultAutoCostInputs);
    expect(r.costPerKm).toBeCloseTo(
      r.monthlyTotal / defaultAutoCostInputs.kilometersPerMonth,
      5,
    );
  });

  it("devuelve costPerKm 0 cuando km = 0", () => {
    const r = calculateAutoCost({ ...defaultAutoCostInputs, kilometersPerMonth: 0 });
    expect(r.costPerKm).toBe(0);
  });

  it("prorratea service anual y VTV anual / 12", () => {
    const r = calculateAutoCost({
      ...defaultAutoCostInputs,
      serviceAnnual: 240000,
      vtvAnnual: 60000,
    });
    const service = r.breakdown.find((b) => b.name === "Service (prorrateado)");
    const vtv = r.breakdown.find((b) => b.name === "VTV (prorrateada)");
    expect(service?.value).toBe(20000);
    expect(vtv?.value).toBe(5000);
  });

  it("identifica el gasto más alto", () => {
    const r = calculateAutoCost({
      ...defaultAutoCostInputs,
      insuranceMonthly: 999999,
    });
    expect(r.topExpense?.name).toBe("Seguro");
  });

  it("tolera inputs negativos o NaN forzándolos a 0", () => {
    const r = calculateAutoCost({
      ...defaultAutoCostInputs,
      kilometersPerMonth: -100,
      consumptionPer100Km: Number.NaN,
      insuranceMonthly: -50,
    });
    const fuel = r.breakdown.find((b) => b.name === "Combustible");
    const seguro = r.breakdown.find((b) => b.name === "Seguro");
    expect(fuel?.value).toBe(0);
    expect(seguro?.value).toBe(0);
  });
});

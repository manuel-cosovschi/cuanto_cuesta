"use client";

import { useMemo, useState } from "react";
import {
  calculateAutoCost,
  defaultAutoCostInputs,
  type AutoCostInputs,
} from "@/lib/calculators";
import { trackEvent } from "@/lib/analytics";
import { CalculatorInput } from "./CalculatorInput";
import { CalculatorResult } from "./CalculatorResult";

const vehicleOptions: Array<{ value: AutoCostInputs["vehicleType"]; label: string }> = [
  { value: "chico", label: "Auto chico" },
  { value: "mediano", label: "Auto mediano" },
  { value: "suv", label: "SUV / pickup" },
];

export function AutoCostCalculator() {
  const [inputs, setInputs] = useState<AutoCostInputs>(defaultAutoCostInputs);
  const [showResult, setShowResult] = useState(false);
  const [touched, setTouched] = useState(false);

  const result = useMemo(() => calculateAutoCost(inputs), [inputs]);

  function update<K extends keyof AutoCostInputs>(key: K, value: AutoCostInputs[K]) {
    if (!touched) {
      setTouched(true);
      trackEvent("calculator_started");
    }
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  function handleCalculate() {
    setShowResult(true);
    trackEvent("calculator_completed", {
      monthly: Math.round(result.monthlyTotal),
      km: inputs.kilometersPerMonth,
    });
  }

  function handleReset() {
    setInputs(defaultAutoCostInputs);
    setShowResult(false);
    setTouched(false);
    trackEvent("calculator_reset");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCalculate();
        }}
        className="space-y-4 rounded-xl border border-ink-200 bg-white p-5 shadow-card lg:col-span-3"
      >
        <div>
          <fieldset>
            <legend className="text-sm font-semibold text-ink-900">Tipo de vehículo</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {vehicleOptions.map((opt) => {
                const active = inputs.vehicleType === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm ${active ? "border-brand-600 bg-brand-600 text-white" : "border-ink-200 bg-white text-ink-700 hover:border-brand-300"}`}
                  >
                    <input
                      type="radio"
                      name="vehicleType"
                      value={opt.value}
                      checked={active}
                      onChange={() => update("vehicleType", opt.value)}
                      className="sr-only"
                    />
                    {opt.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <CalculatorInput
            id="kilometersPerMonth"
            label="Kilómetros por mes"
            suffix="km"
            value={inputs.kilometersPerMonth}
            onValueChange={(v) => update("kilometersPerMonth", v)}
            help="¿Cuántos km recorrés en promedio al mes?"
          />
          <CalculatorInput
            id="consumptionPer100Km"
            label="Consumo cada 100 km"
            suffix="L/100km"
            value={inputs.consumptionPer100Km}
            onValueChange={(v) => update("consumptionPer100Km", v)}
            help="Típico: 6 (chico), 8 (mediano), 11 (SUV)."
          />
          <CalculatorInput
            id="fuelPricePerLiter"
            label="Precio del combustible"
            suffix="ARS/L"
            value={inputs.fuelPricePerLiter}
            onValueChange={(v) => update("fuelPricePerLiter", v)}
          />
          <CalculatorInput
            id="insuranceMonthly"
            label="Seguro mensual"
            suffix="ARS"
            value={inputs.insuranceMonthly}
            onValueChange={(v) => update("insuranceMonthly", v)}
            help="Cuota mensual real o estimada."
          />
          <CalculatorInput
            id="patenteMonthly"
            label="Patente prorrateada (mes)"
            suffix="ARS"
            value={inputs.patenteMonthly}
            onValueChange={(v) => update("patenteMonthly", v)}
            help="Si la pagás anual, dividila por 12."
          />
          <CalculatorInput
            id="garageMonthly"
            label="Cochera mensual"
            suffix="ARS"
            value={inputs.garageMonthly}
            onValueChange={(v) => update("garageMonthly", v)}
            help="Poné 0 si guardás en la calle."
          />
          <CalculatorInput
            id="serviceAnnual"
            label="Service anual estimado"
            suffix="ARS/año"
            value={inputs.serviceAnnual}
            onValueChange={(v) => update("serviceAnnual", v)}
            help="Se divide automáticamente por 12 en el cálculo."
          />
          <CalculatorInput
            id="vtvAnnual"
            label="VTV anual"
            suffix="ARS/año"
            value={inputs.vtvAnnual}
            onValueChange={(v) => update("vtvAnnual", v)}
          />
          <CalculatorInput
            id="washesPerMonth"
            label="Lavados por mes"
            suffix="por mes"
            value={inputs.washesPerMonth}
            onValueChange={(v) => update("washesPerMonth", v)}
          />
          <CalculatorInput
            id="costPerWash"
            label="Costo por lavado"
            suffix="ARS"
            value={inputs.costPerWash}
            onValueChange={(v) => update("costPerWash", v)}
          />
          <CalculatorInput
            id="unexpectedMonthly"
            label="Imprevistos por mes"
            suffix="ARS"
            value={inputs.unexpectedMonthly}
            onValueChange={(v) => update("unexpectedMonthly", v)}
            help="Reserva mensual para fallas eventuales."
          />
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Calcular
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-md border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:border-ink-300"
          >
            Resetear
          </button>
        </div>
        <p className="text-xs text-ink-500">
          La calculadora corre 100% en tu dispositivo. No enviamos tus datos a ningún servidor.
        </p>
      </form>

      <div className="lg:col-span-2">
        {showResult ? (
          <CalculatorResult result={result} km={inputs.kilometersPerMonth} />
        ) : (
          <div
            className="flex h-full items-center justify-center rounded-xl border border-dashed border-ink-200 bg-white p-6 text-sm text-ink-500"
            aria-live="polite"
          >
            Completá los datos y tocá <span className="mx-1 font-medium text-ink-700">Calcular</span> para ver el resultado.
          </div>
        )}
      </div>
    </div>
  );
}

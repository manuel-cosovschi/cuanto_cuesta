import { describe, it, expect } from "vitest";
import { formatARS, formatDateAR, formatRange } from "@/lib/formatting";

describe("formatting", () => {
  it("formatea ARS sin decimales", () => {
    expect(formatARS(123456)).toMatch(/123\.456/);
    expect(formatARS(0)).toMatch(/0/);
  });

  it("formatea rangos como 'X – Y'", () => {
    const r = formatRange(1000, 2000);
    expect(r).toContain("–");
  });

  it("formatea fechas ISO en español", () => {
    expect(formatDateAR("2026-05-13")).toContain("2026");
  });

  it("tolera valores no finitos", () => {
    expect(formatARS(Number.NaN)).toBe("ARS 0");
  });
});

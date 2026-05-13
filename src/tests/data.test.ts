import { describe, it, expect } from "vitest";
import { articles, getArticleBySlug, getArticlesByCategory } from "@/data/articles";

describe("articles data", () => {
  it("incluye los 5 artículos de autos requeridos", () => {
    const slugs = articles.map((a) => a.slug).sort();
    expect(slugs).toEqual(
      [
        "cuanto-cuesta-el-seguro-de-auto-en-argentina",
        "cuanto-cuesta-la-vtv-en-argentina",
        "cuanto-cuesta-mantener-un-auto-en-argentina",
        "cuanto-cuesta-transferir-un-auto-en-argentina",
        "cuanto-cuesta-un-service-de-auto-en-argentina",
      ].sort(),
    );
  });

  it("cada artículo tiene los campos mínimos requeridos", () => {
    for (const a of articles) {
      expect(a.title.length).toBeGreaterThan(10);
      expect(a.description.length).toBeGreaterThan(40);
      expect(a.quickAnswer.length).toBeGreaterThan(40);
      expect(a.estimatedRange.length).toBeGreaterThan(20);
      expect(a.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(a.costItems.length).toBeGreaterThan(0);
      expect(a.sections.length).toBeGreaterThan(0);
      expect(a.faqs.length).toBeGreaterThan(0);
      expect(a.sources.length).toBeGreaterThan(0);
      expect(a.methodologyNotes.length).toBeGreaterThan(0);
    }
  });

  it("getArticleBySlug encuentra el artículo principal", () => {
    const a = getArticleBySlug("autos", "cuanto-cuesta-mantener-un-auto-en-argentina");
    expect(a?.category).toBe("autos");
  });

  it("getArticlesByCategory devuelve 5 artículos para autos", () => {
    expect(getArticlesByCategory("autos").length).toBe(5);
  });
});

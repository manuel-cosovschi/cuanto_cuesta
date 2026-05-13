import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/autos/",
    "/calculadoras/costo-mensual-auto/",
    "/metodologia/",
    "/sobre-nosotros/",
    "/contacto/",
    "/publicidad/",
    "/privacidad/",
    "/terminos/",
    "/cookies/",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/${a.category}/${a.slug}/`,
    lastModified: new Date(a.lastUpdated),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Categorías futuras: solo incluimos las disponibles para no servir 404.
  const categoryEntries: MetadataRoute.Sitemap = categories
    .filter((c) => c.available && c.slug !== "autos")
    .map((c) => ({
      url: `${SITE_URL}/${c.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticEntries, ...articleEntries, ...categoryEntries];
}

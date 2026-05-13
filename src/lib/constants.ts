function resolveSiteUrl(): string {
  // 1) Si el operador definió explícitamente NEXT_PUBLIC_SITE_URL, ganamos.
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  // 2) Si estamos corriendo en Vercel, usar la URL stable de producción del
  //    proyecto. Esto evita que canonicals/sitemap/robots apunten al
  //    placeholder cuando todavía no se compró un dominio propio.
  //    Importante: VERCEL_PROJECT_PRODUCTION_URL solo está disponible en
  //    server-side. Como SITE_URL se consume desde metadata/sitemap/robots/
  //    JSON-LD (todos server), está OK.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;

  // 3) Fallback de desarrollo / placeholder.
  return "https://cuantocuestaargentina.com";
}

export const SITE_NAME = "Cuánto Cuesta Argentina";
export const SITE_SHORT_NAME = "Cuánto Cuesta AR";
export const SITE_TAGLINE =
  "Guías actualizadas con rangos de precios, tablas, ejemplos y calculadoras simples para tomar mejores decisiones.";
export const SITE_DESCRIPTION =
  "Cuánto Cuesta Argentina es una guía editorial argentina con rangos estimativos de costos, tablas, ejemplos y calculadoras para autos, vivienda, trámites y más.";
export const SITE_LOCALE = "es_AR";
export const SITE_COUNTRY = "Argentina";

export const SITE_URL = resolveSiteUrl();

export const CONTACT_EMAIL = "contacto@cuantocuestaargentina.com";

export const ORG_LEGAL_NAME = "Cuánto Cuesta Argentina";

export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "";

export const ANALYTICS_PROVIDER =
  (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER as
    | "none"
    | "ga4"
    | "plausible"
    | undefined) || "none";

export const PRICE_DISCLAIMER =
  "Los valores publicados son estimativos y de referencia. Pueden variar por ciudad, provincia, inflación, tipo de cambio, proveedor, temporada, disponibilidad y cambios normativos. Verificá siempre con la fuente oficial o el proveedor correspondiente antes de tomar decisiones.";

export const REPORT_PRICE_CTA =
  "¿Viste un precio desactualizado? Avisanos para revisarlo.";

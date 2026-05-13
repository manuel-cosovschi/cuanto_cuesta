# Arquitectura

## Por qué Next.js + App Router

- SSR / Static Generation por defecto: bueno para SEO y Core Web Vitals.
- React Server Components: bajamos JS al cliente en páginas de contenido.
- Metadata por página y `sitemap`/`robots` nativos.
- Deploy simple en Vercel.

## Datos

Para el MVP, **no usamos base de datos**. Los artículos y categorías viven en
TypeScript dentro de `src/data`. Ventajas:

- Tipos garantizados en tiempo de compilación.
- Búsqueda interna trivial (en memoria).
- Sin runtime cost: build estático para la mayoría de las páginas.

Cuando crezca el catálogo o necesitemos editor sin commits, migramos a:

1. **Supabase / PostgreSQL** para artículos y precios.
2. **CMS headless** (Sanity, Strapi) si sumamos editores.
3. ISR (`revalidate`) en lugar de generación estática para precios dinámicos.

## Server vs Client Components

- Server por defecto.
- Client solo donde hay estado: `AutoCostCalculator`, `ContactForm`, `SearchBox`.
- Esto mantiene bajo el JS shipping y mejora INP en mobile.

## SEO

- `src/lib/seo.ts` centraliza title/description/canonical/OG.
- Cada página define su propio `metadata`.
- JSON-LD en `src/components/seo/JsonLd.tsx`:
  - `Organization`, `WebSite` global en layout.
  - `BreadcrumbList`, `Article`, `FAQPage` por página.
- URLs con barra al final, en línea con canonicals.

## Monetización

- `AdSlot` reserva espacio (anti-CLS) y solo carga anuncios reales cuando hay
  `NEXT_PUBLIC_ADSENSE_CLIENT_ID` + `slot`.
- `AdSenseScript` carga el loader de AdSense solo cuando hay client ID.
- Política de no incentivar clics: cero copy del tipo "ayudanos clickeando".

## Performance

- Sin imágenes pesadas en el MVP (los emojis cumplen el rol decorativo).
- Tipografía system (cero requests externos).
- HTML semántico, foco visible, skip link.
- Headers de seguridad básicos en `next.config.mjs`.

## Tests

- Vitest + Testing Library para lógica pura (`calculateAutoCost`,
  `formatting`) y componentes simples.
- Validación de contenido (datos): forzamos campos mínimos por artículo.

## Próximos pasos arquitectónicos

- Mover contenido a CMS o Supabase si pasamos los 30–50 artículos.
- Sumar comparador de seguros (page real con UI compleja).
- Implementar consentimiento de cookies (CMP) cuando AdSense esté activo.
- Sumar tracking de impresiones de slots (sin PII).

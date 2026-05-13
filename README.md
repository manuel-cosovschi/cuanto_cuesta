# Cuánto Cuesta Argentina

> Guía editorial argentina con rangos estimativos de costos, tablas y calculadoras
> simples. MVP enfocado en la categoría **Autos**, preparado para escalar a
> vivienda, construcción, mascotas, trámites, viajes, tecnología, fitness,
> estudios y emprendimientos.

Estado actual: MVP funcional listo para deploy en Vercel. Build, lint, tests y
typecheck pasan. AdSense queda preparado pero sin renderizar anuncios hasta
contar con un client ID real.

## Stack

- **Next.js 14** con App Router
- **TypeScript** estricto
- **Tailwind CSS**
- React Server Components por defecto, Client Components solo para interactividad
- Contenido estructurado en TypeScript en `src/data`
- **Vitest** + Testing Library para tests
- Preparado para deploy en **Vercel**
- Listo para **Google AdSense** (sin renderizar nada hasta tener client ID real)

## Estructura

```
src/
  app/
    page.tsx                                  # Home
    layout.tsx                                # Layout global
    globals.css
    autos/
      page.tsx                                # Categoría Autos
      [slug]/page.tsx                         # Artículos de Autos
    calculadoras/
      costo-mensual-auto/page.tsx             # Calculadora
    metodologia/page.tsx
    sobre-nosotros/page.tsx
    contacto/page.tsx
    publicidad/page.tsx
    privacidad/page.tsx
    terminos/page.tsx
    cookies/page.tsx
    not-found.tsx
    sitemap.ts                                # /sitemap.xml
    robots.ts                                 # /robots.txt

  components/
    ads/        AdSlot, AdSenseScript, AdDisclosure
    cards/      ArticleCard, CategoryCard
    calculator/ AutoCostCalculator, CalculatorInput, CalculatorResult, CostBreakdown
    content/    QuickAnswerBox, Badge, LastUpdated, DisclaimerBox, MethodologyBox,
                FAQAccordion, RelatedLinks, ReportPriceCTA, CalculatorCTA, SourceList
    forms/      ContactForm, SearchBox
    layout/     Header, Footer, Breadcrumbs, MainContainer, SkipLink
    seo/        JsonLd (Organization, Website, BreadcrumbList, Article, FAQPage)
    tables/     CostTable, SimpleTable

  data/
    autos.ts
    categories.ts
    articles/
      mantener-un-auto.ts
      transferir-un-auto.ts
      vtv.ts
      seguro-auto.ts
      service-auto.ts
      index.ts

  lib/
    analytics.ts
    calculators.ts
    constants.ts
    formatting.ts
    seo.ts

  types/
    article.ts
    pricing.ts

  tests/
    calculator.test.ts
    data.test.ts
    formatting.test.ts
    components.test.tsx
    setup.ts

docs/
  ADSENSE_SETUP.md
  ANALYTICS.md
  ARCHITECTURE.md
  CONTENT_GUIDELINES.md
  DEPLOY_VERCEL.md
  QA_CHECKLIST.md
  SEARCH_CONSOLE.md
```

## Comandos

```bash
npm install            # instalar dependencias
npm run dev            # dev server en http://localhost:3000
npm run lint           # eslint
npm run typecheck      # tsc --noEmit
npm test               # vitest run
npm run build          # build de producción
npm run start          # servir build
```

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá lo que necesites:

| Variable                          | Descripción                                                            |
| --------------------------------- | ---------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`            | URL pública del sitio sin barra final. Se usa para canonicals y JSON-LD. |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID`   | Publisher ID de AdSense (`ca-pub-XXXXXXXX`). Vacío hasta tener aprobación. |
| `NEXT_PUBLIC_ANALYTICS_PROVIDER`  | `none` (default), `ga4` o `plausible`.                                  |
| `NEXT_PUBLIC_GA_ID`               | Opcional, si usás GA4.                                                  |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`    | Opcional, si usás Plausible.                                            |

## Cómo agregar un artículo

1. Crear archivo en `src/data/articles/mi-articulo.ts` exportando un objeto `Article`.
2. Importarlo y agregarlo al array en `src/data/articles/index.ts`.
3. Si pertenece a una categoría nueva, agregar entradas en
   `src/data/categories.ts` y crear su página `src/app/<categoria>/page.tsx`.

## Cómo actualizar precios

- Editar el `costItems` y/o `estimatedRange` del artículo correspondiente.
- Actualizar `lastUpdated` con la fecha ISO `yyyy-mm-dd`.
- Si cambia la metodología, actualizar `methodologyNotes` y `src/app/metodologia/page.tsx`.

## AdSense

Ver `docs/ADSENSE_SETUP.md`. Mientras no haya `NEXT_PUBLIC_ADSENSE_CLIENT_ID`, los
slots se renderizan como contenedores vacíos (en producción) o con un cartel
discreto (en desarrollo). Nunca se simulan anuncios reales.

## Analytics

Ver `docs/ANALYTICS.md`. Por defecto, `none`: no se envía nada.

## Deploy

Ver `docs/DEPLOY_VERCEL.md`. El sitio está pensado para Vercel pero corre en
cualquier hosting compatible con Next.js 14.

## Checklist antes de publicar

Ver `docs/QA_CHECKLIST.md`.

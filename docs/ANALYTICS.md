# Analytics

El proyecto incluye un wrapper de analytics que **no envía datos por defecto**.

## Provider

Variable: `NEXT_PUBLIC_ANALYTICS_PROVIDER`

| Valor       | Comportamiento                                  |
| ----------- | ----------------------------------------------- |
| `none`      | No envía nada. Default.                         |
| `ga4`       | Llama a `window.gtag(...)` si está disponible.   |
| `plausible` | Llama a `window.plausible(...)` si está disponible. |

> Importante: el wrapper **no carga** automáticamente los scripts de GA4 o
> Plausible. Cuando decidas activarlos, agregá los `<Script>` correspondientes
> en `layout.tsx` siguiendo la política de cookies aplicable.

## Eventos definidos

- `calculator_started`: el usuario empezó a interactuar con la calculadora.
- `calculator_completed`: el usuario tocó "Calcular".
- `calculator_reset`: el usuario resetó la calculadora.
- `internal_search`: búsqueda interna desde el buscador de la home.
- `related_article_click`: clic en links a artículos relacionados.
- `report_price_click`: clic en el CTA de reporte de precios.
- `outbound_source_click`: clic en una fuente externa.
- `ad_slot_view_future`: reservado para impresiones de slots (no implementado).

## Privacidad

- No enviamos datos personales (nombre, email, etc.).
- Las queries de búsqueda interna se truncan a 60 caracteres.
- Si activás GA4 o Plausible, actualizá la **política de privacidad** y la
  **política de cookies** correspondientes.

# QA Checklist (Release Gate)

Antes de publicar el sitio, validá esta lista. Los puntos marcados con 🔴 son
**bloqueantes**.

## Build y tipos

- 🔴 `npm run typecheck` pasa sin errores.
- 🔴 `npm run lint` pasa.
- 🔴 `npm test` pasa.
- 🔴 `npm run build` finaliza sin errores.

## Contenido

- 🔴 Cada artículo tiene fecha de última actualización visible.
- 🔴 Cada artículo tiene disclaimer y metodología.
- 🔴 Hay 5 artículos completos en Autos.
- 🔴 No hay lorem ipsum ni placeholders visibles.
- 🔴 No hay precios presentados como oficiales sin fuente.
- Todos los artículos tienen tabla de costos.
- Todos los artículos tienen FAQ.

## SEO

- 🔴 Cada página tiene `title` y `meta description` único.
- 🔴 `sitemap.xml` accesible.
- 🔴 `robots.txt` accesible y permite indexación.
- Breadcrumbs visibles en categoría y artículos.
- JSON-LD `Organization`, `WebSite`, `BreadcrumbList` y `Article` presentes.
- `FAQPage` JSON-LD coincide con FAQs visibles.
- URLs limpias y consistentes.

## AdSense

- 🔴 No hay anuncios engañosos.
- 🔴 Cada slot está etiquetado como "Anuncio".
- 🔴 Sin contenido que incentive clics.
- Mientras no hay client ID real, los slots no muestran anuncios falsos.
- Página "Publicidad" accesible desde footer.

## Legales

- 🔴 Privacidad, Términos y Cookies publicadas.
- Páginas legales con nota de "base informativa, revisar con profesional".
- Política menciona Google AdSense y analytics futuros.

## Calculadora

- 🔴 Calcula mensual, anual y por kilómetro.
- 🔴 El botón Resetear vuelve a valores por defecto.
- No envía datos a ningún servidor.

## UX

- Mobile first verificado.
- Foco visible.
- Sin scroll horizontal en pantallas chicas.
- Skip link al inicio del body.

## Seguridad / configuración

- 🔴 No hay `.env` en el repo.
- Headers de seguridad presentes en `next.config.mjs`.
- Sin secretos hardcodeados.

# Search Console

Guía rápida para registrar el sitio en Google Search Console y empezar a
monitorear tráfico orgánico.

## 1. Verificación de propiedad

1. Ingresá a https://search.google.com/search-console
2. Agregá una nueva propiedad por dominio (`tudominio.com`).
3. Opciones de verificación recomendadas:
   - **DNS TXT**: agregás un registro en tu proveedor de dominio.
   - **HTML tag**: pegás una meta tag en el `<head>`. Para esto, exportá la
     constante en `src/lib/constants.ts` y agregala como `<meta name="google-site-verification" content="..." />` en `src/app/layout.tsx`.

## 2. Enviar el sitemap

1. En Search Console → Sitemaps.
2. Ingresá `sitemap.xml`.
3. Esperá unas horas a la primera lectura.

## 3. Qué revisar al inicio

- **Cobertura / Páginas**: ver qué URLs están indexadas y cuáles tienen
  problemas. Los artículos y la home deberían aparecer como "Indexada".
- **Rendimiento**: impresiones, clics, CTR y posición media por consulta.
- **Experiencia / Core Web Vitals**: LCP, INP, CLS en mobile y desktop.

## 4. Métricas clave a vigilar

- **Impresiones** por keyword principal de cada artículo
  (`cuánto cuesta mantener un auto en argentina`, etc.).
- **CTR** por página. Si una página tiene impresiones pero CTR bajo, suele
  mejorar reescribiendo `title` y `meta description`.
- **Posición media**: meta de mediano plazo, top 10 para keywords no muy competidas.
- **Core Web Vitals**: si alguna URL aparece como "Necesita mejoras" o
  "Deficiente", revisar performance.

## 5. Errores comunes

- **Indexada, aunque bloqueada por robots.txt**: revisar `robots.ts`.
- **Detectada, actualmente sin indexar**: paciencia y enlaces internos.
- **Página alternativa con etiqueta canónica correcta**: chequear que el
  canonical apunte a la URL final con barra al final.

## 6. Oportunidades SEO

- Buscar queries con muchas impresiones y baja posición → reforzar contenido.
- Buscar queries no cubiertas → planificar nuevos artículos.
- Detectar canibalización (dos URLs compitiendo por la misma query) → consolidar.

# Configuración de Google AdSense

Esta guía describe cómo dejar este sitio listo para mostrar anuncios de Google
AdSense de forma segura y respetando políticas. **No promete ingresos**: la
monetización depende del tráfico orgánico real y la aprobación de Google.

## 1. Crear cuenta en AdSense

1. Ingresá a https://www.google.com/adsense/start/
2. Iniciá sesión con la cuenta de Google que vas a usar para el sitio.
3. Agregá tu sitio: ingresá la URL exacta del dominio en producción
   (`https://cuantocuestaargentina.com` u otro).
4. Seleccioná país (Argentina) y aceptá los términos.

## 2. Pasos previos a la solicitud

Antes de pedir aprobación a AdSense, conviene tener:

- Dominio propio apuntado al sitio en producción.
- Al menos 5 artículos publicados con contenido sustancial.
- Páginas institucionales completas (Sobre nosotros, Contacto).
- Políticas legales accesibles (Privacidad, Términos, Cookies).
- Página de Publicidad accesible desde el footer.
- Sitemap enviado a Search Console y al menos un par de URLs indexadas.

Este repo ya entrega todo lo anterior listo.

## 3. Agregar el código de verificación

AdSense pide pegar un snippet en el `<head>`. En este proyecto, el snippet se
inyecta automáticamente cuando hay una variable de entorno definida.

1. Copiá tu Publisher ID (formato `ca-pub-XXXXXXXXXXXXXXXX`).
2. En Vercel, configurá la variable:

   ```
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
   ```

3. Redeployá. El componente `AdSenseScript` empieza a cargar
   `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`
   automáticamente.

## 4. Configurar los slots reales

Cuando AdSense apruebe el sitio:

1. Creá los bloques publicitarios desde el panel de AdSense.
2. Copiá el `data-ad-slot` numérico de cada bloque.
3. Pasalo como prop `slot` al componente `<AdSlot slot="1234567890" />` en
   el lugar correspondiente del código (los `slot` actuales son nombres
   internos como `home-bottom`, `autos-cat-mid`, etc.).

## 5. Buenas prácticas implementadas

- Cada bloque está etiquetado visualmente como **Anuncio**.
- Reservamos espacio (`min-height: 90px`) para evitar layout shift cuando el
  anuncio carga.
- No hay anuncios antes de la "respuesta rápida" en los artículos.
- No hay popups, intersticiales ni formatos que tapen el contenido.
- No mezclamos publicidad con tablas o navegación.
- Hay límite informal de anuncios por página (3-4 máximo en artículos largos).

## 6. Qué no hacer (políticas de Google)

- **No** pidas clics ("apoyanos haciendo click", "ayudanos clickeando").
- **No** ubiques anuncios dentro de botones, menús o tablas donde puedan
  confundirse con UI.
- **No** modifiques el código del anuncio para inflar impresiones.
- **No** hagas clic en tus propios anuncios ni le pidas a familiares.
- **No** uses bots ni tráfico comprado.
- **No** publiques contenido que viole políticas (derechos de autor, copia, etc.).

## 7. Cómo evitar clics inválidos

- No mostrar anuncios en páginas de error.
- Mantener un solo bloque visible "above the fold" como máximo.
- Detectar y filtrar tráfico anómalo si crecés mucho (Cloudflare, etc.).

## 8. Checklist de aprobación

Antes de pedir revisión:

- [ ] Dominio en producción y accesible.
- [ ] 5+ artículos publicados.
- [ ] Páginas legales completas.
- [ ] Página "Sobre nosotros" y "Contacto".
- [ ] Página "Publicidad" accesible desde footer.
- [ ] Sitemap enviado a Search Console.
- [ ] Sin contenido fino, copiado o engañoso.
- [ ] Sin promesas exageradas en titulares.
- [ ] Política de cookies y privacidad mencionan Google AdSense.

## 9. Soporte y referencias

- Centro de ayuda: https://support.google.com/adsense
- Políticas de programa: https://support.google.com/adsense/answer/48182
- Privacidad y cookies de Google Ads: https://policies.google.com/technologies/ads

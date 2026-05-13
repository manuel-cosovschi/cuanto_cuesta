import { ADSENSE_CLIENT_ID } from "@/lib/constants";

/**
 * Emite el script principal de Google AdSense directamente como tag HTML
 * server-side, en el HTML inicial servido al cliente y a los rastreadores.
 *
 * Importante: NO usamos next/script con strategy "afterInteractive" porque
 * inyecta el <script> recién después de la hidratación cliente, y el bot de
 * verificación de AdSense (que solo hace fetch HTTP plano, sin ejecutar JS)
 * no lo encuentra. Renderizamos un <script async ... crossOrigin="anonymous">
 * idéntico al snippet oficial para que el rastreador lo detecte en el HTML.
 *
 * Se monta dentro de <head> en RootLayout.
 */
export function AdSenseScript() {
  if (!ADSENSE_CLIENT_ID) return null;
  const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
    ADSENSE_CLIENT_ID,
  )}`;
  return (
    <script
      async
      src={src}
      crossOrigin="anonymous"
    />
  );
}

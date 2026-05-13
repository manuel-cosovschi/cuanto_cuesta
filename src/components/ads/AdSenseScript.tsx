import Script from "next/script";
import { ADSENSE_CLIENT_ID } from "@/lib/constants";

/**
 * Carga el script principal de Google AdSense solo cuando hay un client ID
 * configurado. Si no, no agrega ningún tag para no enviar requests innecesarios.
 */
export function AdSenseScript() {
  if (!ADSENSE_CLIENT_ID) return null;
  const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
    ADSENSE_CLIENT_ID,
  )}`;
  return (
    <Script
      id="adsense-loader"
      strategy="afterInteractive"
      src={src}
      crossOrigin="anonymous"
    />
  );
}

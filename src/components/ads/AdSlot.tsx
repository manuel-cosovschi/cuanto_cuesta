import { ADSENSE_CLIENT_ID } from "@/lib/constants";

interface AdSlotProps {
  /** ID del slot configurado en AdSense (numérico). */
  slot?: string;
  /** Formato AdSense ("auto", "rectangle", etc.). */
  format?: string;
  /** Habilita responsive. Default true. */
  responsive?: boolean;
  /** Clases extra para el contenedor. */
  className?: string;
  /** Etiqueta accesible (siempre "Anuncio" para cumplir políticas). */
  label?: string;
}

/** Un slot AdSense real es una cadena numérica. Si es un placeholder
 *  (p.ej. "home-bottom") devolvemos false y no renderizamos el <ins>. */
function isRealAdSenseSlot(slot: string | undefined): slot is string {
  return Boolean(slot && /^\d{6,}$/.test(slot));
}

/**
 * Contenedor para anuncios de AdSense. Reserva espacio para evitar CLS y
 * solo renderiza el bloque real cuando el slot es un ID numérico de AdSense.
 *
 * - Slot real (numérico) + client ID → bloque `<ins class="adsbygoogle">`
 *   etiquetado como "Anuncio". AdSense lo llena cuando el sitio está aprobado.
 * - Slot placeholder (string interno como "home-bottom") en producción →
 *   no renderiza nada. Estos slots viven en el código como marcadores de
 *   ubicación hasta que se creen las unidades reales en el panel de AdSense.
 * - Desarrollo con slot placeholder → muestra un placeholder visual para
 *   ver dónde van los ads al diseñar.
 *
 * Importante: nunca incentivamos clics. La etiqueta visible es siempre "Anuncio".
 */
export function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  label = "Anuncio",
}: AdSlotProps) {
  const hasClient = Boolean(ADSENSE_CLIENT_ID);
  const isRealSlot = isRealAdSenseSlot(slot);
  const isProd = process.env.NODE_ENV === "production";

  // Producción: solo renderizamos cuando hay client ID Y slot real.
  if (isProd && (!hasClient || !isRealSlot)) {
    return null;
  }

  if (hasClient && isRealSlot) {
    return (
      <aside
        role="complementary"
        aria-label={label}
        className={`my-6 rounded-md border border-dashed border-ink-200 bg-white p-2 ${className}`}
      >
        <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-ink-500">
          {label}
        </p>
        <ins
          className="adsbygoogle ad-reserve block"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT_ID}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </aside>
    );
  }

  // Desarrollo con slot placeholder: visual de diseño, no anuncio real.
  return (
    <aside
      aria-hidden
      className={`my-6 rounded-md border border-dashed border-ink-300 bg-ink-50 p-2 ${className}`}
    >
      <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-ink-500">
        Slot publicitario (solo en dev)
      </p>
      <div className="ad-reserve flex items-center justify-center rounded-sm text-xs text-ink-500">
        Slot: {slot || "no configurado"}. Reemplazar por el ID numérico real cuando AdSense apruebe el sitio.
      </div>
    </aside>
  );
}

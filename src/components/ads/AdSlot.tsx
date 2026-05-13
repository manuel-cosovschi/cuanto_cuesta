import { ADSENSE_CLIENT_ID } from "@/lib/constants";

interface AdSlotProps {
  /** ID del slot configurado en AdSense. */
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

/**
 * Contenedor para anuncios de AdSense. Reserva espacio para evitar CLS y
 * solo renderiza el bloque real cuando hay client ID y slot configurados.
 *
 * - Producción + sin client ID/slot → no renderiza absolutamente nada.
 *   Esto evita mostrar contenedores vacíos con la palabra "Anuncio" cuando
 *   no hay AdSense activo.
 * - Desarrollo + sin client ID/slot → placeholder discreto para visualizar
 *   la ubicación al diseñar.
 * - Producción + client ID + slot → bloque `<ins class="adsbygoogle">`
 *   etiquetado como "Anuncio".
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
  const hasSlot = Boolean(slot);
  const isProd = process.env.NODE_ENV === "production";

  // En producción sin configuración real, no renderizamos nada para no mostrar
  // contenedores vacíos al usuario.
  if (isProd && (!hasClient || !hasSlot)) {
    return null;
  }

  if (hasClient && hasSlot) {
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

  // Desarrollo sin configuración: placeholder claramente identificado como
  // herramienta interna de diseño, no como anuncio real.
  return (
    <aside
      aria-hidden
      className={`my-6 rounded-md border border-dashed border-ink-300 bg-ink-50 p-2 ${className}`}
    >
      <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-ink-500">
        Slot publicitario (solo en dev)
      </p>
      <div className="ad-reserve flex items-center justify-center rounded-sm text-xs text-ink-500">
        Espacio reservado. No se muestra en producción sin client ID y slot reales.
      </div>
    </aside>
  );
}

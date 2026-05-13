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
 * Mientras tanto muestra un placeholder discreto solo en desarrollo.
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

  return (
    <aside
      role="complementary"
      aria-label={label}
      className={`my-6 rounded-md border border-dashed border-ink-200 bg-white p-2 ${className}`}
    >
      <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-ink-500">
        {label}
      </p>

      {hasClient && hasSlot ? (
        // Renderizado real solo cuando hay ID + slot configurados.
        <ins
          className="adsbygoogle ad-reserve block"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT_ID}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      ) : (
        // Sin ID/slot: placeholder discreto solo en desarrollo, vacío en prod.
        <div className="ad-reserve flex items-center justify-center rounded-sm bg-ink-50 text-xs text-ink-500">
          {isProd ? "" : "Espacio reservado para anuncio (no se mostrará en prod sin ID)"}
        </div>
      )}
    </aside>
  );
}

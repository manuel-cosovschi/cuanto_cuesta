import { ANALYTICS_PROVIDER } from "./constants";

export type AnalyticsEvent =
  | "calculator_started"
  | "calculator_completed"
  | "calculator_reset"
  | "internal_search"
  | "related_article_click"
  | "report_price_click"
  | "outbound_source_click"
  | "ad_slot_view_future";

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Wrapper de analytics. No hace nada si el provider es "none".
 * No envía PII. Pensado para activar GA4 o Plausible más adelante.
 */
export function trackEvent(event: AnalyticsEvent, payload?: AnalyticsPayload): void {
  if (typeof window === "undefined") return;
  if (ANALYTICS_PROVIDER === "none") return;

  try {
    if (ANALYTICS_PROVIDER === "ga4") {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.("event", event, payload || {});
      return;
    }
    if (ANALYTICS_PROVIDER === "plausible") {
      const w = window as unknown as {
        plausible?: (event: string, opts?: { props?: AnalyticsPayload }) => void;
      };
      w.plausible?.(event, payload ? { props: payload } : undefined);
      return;
    }
  } catch {
    // Nunca dejar que analytics rompa la UI.
  }
}

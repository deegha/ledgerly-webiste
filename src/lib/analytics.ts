// Thin, typed wrapper around gtag.js. Every helper here is a safe no-op when
// analytics hasn't loaded (GA disabled, ad-blocker, SSR), so callers never have
// to guard. The <Analytics /> component (src/components/analytics.tsx) is what
// actually loads gtag and fires page_view; this module is only for the custom
// events wired into interactive components.

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Push a GA4 event. Uses window.gtag when gtag.js has initialised; otherwise
 * falls back to a raw dataLayer push so events fired during the first paint are
 * still picked up once gtag.js processes the queue.
 */
export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  } else {
    window.dataLayer.push(["event", name, params]);
  }
}

/** Any "Get started" / primary call-to-action click. `location` says which one. */
export function trackCtaClick(location: string, cta = "get_started"): void {
  trackEvent("cta_click", { cta, location });
}

/**
 * A click that leaves this site (the product app, a mailto:, any external URL).
 * `event` lets callers name the intent (e.g. "sign_in_click") while still
 * recording the destination.
 */
export function trackOutboundClick(
  event: string,
  params: { link_url: string; location: string } & GtagParams,
): void {
  trackEvent(event, params);
}

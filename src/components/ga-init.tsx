// GA4 init snippet (server component — no "use client"). See analytics.tsx for
// the loader and the page_view tracker.

import { gaDebug, gaEnabled, gaLinkerDomains, gaMeasurementId } from "@/lib/env";

/** The gtag snippet: queue stub, Consent Mode defaults, config. */
export function gaInitSnippet(): string {
  const config = {
    send_page_view: false,
    // No advertising features: Google signals (cross-device / demographics) and
    // ad personalisation are off. GA4 itself does not log or store IP addresses.
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    // Cross-domain: decorate links between the marketing site and the app with
    // _gl, and accept it on the way in.
    linker: { domains: gaLinkerDomains, accept_incoming: true },
    ...(gaDebug ? { debug_mode: true } : {}),
  };
  return `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  analytics_storage: 'granted',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});
gtag('js', new Date());
gtag('config', ${JSON.stringify(gaMeasurementId)}, ${JSON.stringify(config)});`;
}

/**
 * Rendered once in the root layout's <head> as a plain inline script, so it runs
 * while the HTML is parsed — before gtag.js loads and before React hydrates.
 * gaMeasurementId is validated against /^G-[A-Z0-9]+$/ in env.ts and
 * JSON-encoded, so nothing user-controlled reaches this script.
 */
export function GaInitScript() {
  if (!gaEnabled) return null;
  return <script id="ga-init" dangerouslySetInnerHTML={{ __html: gaInitSnippet() }} />;
}

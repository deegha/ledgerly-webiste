// Thin, typed wrapper around gtag.js. Every helper here is a safe no-op when
// analytics is disabled or hasn't loaded (ad-blocker, SSR), so callers never have
// to guard. The GA init script (src/components/analytics.tsx) defines
// window.gtag before React hydrates; this module is only for the custom events
// wired into interactive components.

import { gaEnabled } from "@/lib/env";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// GA4 caps event parameter values at 100 characters.
const MAX_PARAM_LENGTH = 100;
const EMAIL_RE = /[^\s@]+@[^\s@]+\.[^\s@]+/;
// 7+ digits, optionally separated by spaces, dashes, dots or brackets, e.g. a
// phone number or an NIC typed into the guide search box.
const LONG_NUMBER_RE = /(?:\d[\s\-().]*){7,}/;

// Params that carry free text a visitor typed.
const FREE_TEXT_PARAMS = new Set(["search_term"]);

/**
 * Drop anything that could be personal data before it leaves the browser: any
 * value that looks like an email address, and free text a visitor typed (the
 * guide search term) that looks like a phone/ID number, is replaced with
 * "[redacted]". Every string is capped at GA's 100-character limit, and
 * undefined values are removed.
 */
export function sanitizeParams(params: GtagParams): GtagParams {
  const out: GtagParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    if (typeof value === "string") {
      out[key] =
        EMAIL_RE.test(value) || (FREE_TEXT_PARAMS.has(key) && LONG_NUMBER_RE.test(value))
          ? "[redacted]"
          : value.slice(0, MAX_PARAM_LENGTH);
    } else {
      out[key] = value;
    }
  }
  return out;
}

/**
 * Push a GA4 event. If gtag.js hasn't defined window.gtag yet, install the
 * standard queueing stub (it pushes the `arguments` object, which is the only
 * shape gtag.js replays — a plain array push is silently ignored).
 */
export function trackEvent(name: string, params: GtagParams = {}): void {
  if (!gaEnabled || typeof window === "undefined") return;
  if (typeof window.gtag !== "function") {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  }
  window.gtag("event", name, sanitizeParams(params));
}

/**
 * Any "Get started" / primary call-to-action click. `cta_location` says where on
 * the page it was, `link_url` where it goes (a path on this site, or the app).
 */
export function trackCtaClick(ctaLocation: string, linkUrl: string, cta = "get_started"): void {
  trackEvent("cta_click", { cta, cta_location: ctaLocation, link_url: linkUrl });
}

/**
 * A click that leaves this site (the product app, a mailto:, any external URL).
 * `event` names the intent (e.g. "sign_in_click"). mailto: addresses are never
 * sent — only `link_type: "mailto"`.
 */
export function trackOutboundClick(event: string, href: string, ctaLocation: string): void {
  if (href.startsWith("mailto:")) {
    trackEvent(event, { cta_location: ctaLocation, link_type: "mailto" });
  } else {
    trackEvent(event, { cta_location: ctaLocation, link_url: href });
  }
}

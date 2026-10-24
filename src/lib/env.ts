// This marketing site's own public URL — used for metadataBase, canonical links,
// the sitemap, and structured data. Distinct from NEXT_PUBLIC_APP_URL, which points
// at the product itself.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ledgerly.lk").replace(
  /\/$/,
  "",
);

// The app's login page — for visitors who already have an account. A plain
// external link (not a Next.js Link — this crosses to a different app), same
// convention the old onboardingUrl helper used before self-serve signup was
// replaced by /get-started.
export const signInUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/login`;

// GA4 Measurement ID for this marketing site, from NEXT_PUBLIC_GA_MEASUREMENT_ID
// (NEXT_PUBLIC_GA_ID is still read as a legacy alias). Inlined at build time.
//
// Fallback: the live ID stays as the default ON PURPOSE. The deploy workflow
// (.github/workflows/deploy.yml) only passes NEXT_PUBLIC_APP_URL and
// NEXT_PUBLIC_SITE_URL into `next build` / `docker build`, so without this default
// a production build would silently ship with no analytics. Once the workflow
// passes NEXT_PUBLIC_GA_MEASUREMENT_ID (see ANALYTICS.md §2) the default can go.
//
// An empty value counts as unset (a Docker `ARG` with no value becomes ""), so it
// falls back too. To switch analytics off entirely, set the var to "off".
const LIVE_GA_MEASUREMENT_ID = "G-11VTYDPV9P";
const rawGaId = (
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  process.env.NEXT_PUBLIC_GA_ID ||
  LIVE_GA_MEASUREMENT_ID
).trim();
export const gaMeasurementId = /^G-[A-Z0-9]+$/i.test(rawGaId) ? rawGaId.toUpperCase() : "";

// Send hits from `next dev` / non-production builds too. Off by default so local
// clicking-around doesn't pollute the real reports — flip it on (with
// NEXT_PUBLIC_GA_DEBUG=1, which also enables GA DebugView) when you need to
// verify wiring locally.
export const gaDebug = process.env.NEXT_PUBLIC_GA_DEBUG === "1";

// Analytics only runs in production builds (or with NEXT_PUBLIC_GA_DEBUG=1), and
// only with a valid measurement ID. `next dev` sends nothing by default.
export const gaEnabled =
  gaMeasurementId !== "" && (process.env.NODE_ENV === "production" || gaDebug);

// Every hostname that shares the GA4 property. gtag's linker decorates links
// between them with `_gl` so the visitor keeps one client ID and attribution
// survives the hop from the marketing site to the app.
export const gaLinkerDomains = ["ledgerly.lk", "www.ledgerly.lk", "app.ledgerly.lk"];

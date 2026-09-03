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

// GA4 Measurement ID for this marketing site. Defaults to the live property so
// production works with no extra config (same pattern as siteUrl above); set
// NEXT_PUBLIC_GA_ID to point a preview/staging deploy at a different property,
// or to "" to disable analytics entirely. Inlined at build time.
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID ?? "G-11VTYDPV9P";

// Send hits from `next dev` / non-production builds too. Off by default so local
// clicking-around doesn't pollute the real reports — flip it on (with
// NEXT_PUBLIC_GA_DEBUG=1, which also enables GA DebugView) when you need to
// verify wiring locally.
export const gaDebug = process.env.NEXT_PUBLIC_GA_DEBUG === "1";

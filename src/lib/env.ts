// NEXT_PUBLIC_* vars are inlined at build time — see .env.example and the Dockerfile's
// build ARG. Falls back to a bare "/onboarding" so the button never points nowhere
// during local development before NEXT_PUBLIC_APP_URL is set.
export const onboardingUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/onboarding`;

// This marketing site's own public URL — used for metadataBase, canonical links,
// the sitemap, and structured data. Distinct from NEXT_PUBLIC_APP_URL, which points
// at the product itself.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ledgerly.lk").replace(
  /\/$/,
  "",
);

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

// This marketing site's own public URL — used for metadataBase, canonical links,
// the sitemap, and structured data. Distinct from NEXT_PUBLIC_APP_URL, which points
// at the product itself.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ledgerly.lk").replace(
  /\/$/,
  "",
);

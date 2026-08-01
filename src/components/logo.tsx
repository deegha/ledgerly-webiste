// The source asset is a white silhouette on a transparent background — used as a CSS
// mask (rather than an <img>) so it recolors via `currentColor` and stays legible in
// both the light and dark theme, instead of vanishing against a light background.
export function Logo({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Ledgerly.lk"
      className={`inline-block bg-current ${className ?? ""}`}
      style={{
        aspectRatio: "2447 / 518",
        WebkitMaskImage: "url(/images/logo.png)",
        maskImage: "url(/images/logo.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
      }}
    />
  );
}

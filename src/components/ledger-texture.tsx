export function LedgerTexture({ opacity = 0.6 }: { opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, var(--color-rule) 0px, var(--color-rule) 1px, transparent 1px, transparent 44px)",
        maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        opacity,
      }}
    />
  );
}

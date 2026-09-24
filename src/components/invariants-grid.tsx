export function InvariantsGrid({
  invariants,
  compact,
}: {
  invariants: { title: string; description: string }[];
  /** Tighter type and spacing for a glance-not-a-read presentation, e.g. the homepage. */
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact ? "grid gap-x-8 gap-y-2 sm:grid-cols-2" : "grid gap-x-10 gap-y-3.5 sm:grid-cols-2"
      }
    >
      {invariants.map((item) => (
        <div
          key={item.title}
          className={`border-rule flex gap-3 border-t ${compact ? "py-2.5" : "py-3.5"}`}
        >
          <svg
            width={compact ? "14" : "16"}
            height={compact ? "14" : "16"}
            viewBox="0 0 16 16"
            fill="none"
            className="mt-0.5 shrink-0 text-balance"
            aria-hidden="true"
          >
            <path
              d="M3 8.5L6.5 12L13 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p className={`text-ink font-semibold ${compact ? "text-sm" : "text-[0.95rem]"}`}>
              {item.title}
            </p>
            <p
              className={`text-ink-soft leading-relaxed ${compact ? "mt-0.5 text-xs" : "mt-1 text-sm"}`}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

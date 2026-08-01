export function InvariantsGrid({
  invariants,
}: {
  invariants: { title: string; description: string }[];
}) {
  return (
    <div className="grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
      {invariants.map((item) => (
        <div key={item.title} className="border-rule flex gap-3 border-t py-3.5">
          <svg
            width="16"
            height="16"
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
            <p className="text-ink text-[0.95rem] font-semibold">{item.title}</p>
            <p className="text-ink-soft mt-1 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

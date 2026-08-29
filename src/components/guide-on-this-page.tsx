import type { GuideHeading } from "@/lib/content";

export function GuideOnThisPage({ headings }: { headings: GuideHeading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="text-ink-faint text-xs font-semibold tracking-[0.08em] uppercase">
        On this page
      </p>
      <ul className="border-rule mt-3 flex flex-col gap-2 border-l pl-3">
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: (heading.depth - 2) * 12 }}>
            <a href={`#${heading.id}`} className="text-ink-soft hover:text-brand-ink block">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

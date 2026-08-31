"use client";

import Link from "next/link";
import MiniSearch, { type SearchResult } from "minisearch";
import { useEffect, useMemo, useRef, useState } from "react";
import type { GuideSearchItem } from "@/app/api/guide-search/route";

// Fuzzy client-side search over the combined Guide + Help index (see
// USER_GUIDE_PLAN.md §4 and §7.4 — minisearch is the one client-side
// search dependency this repo takes on). The index is built in the
// browser from /api/guide-search's JSON the first time the box is
// focused, then kept in memory for the session.
function buildIndex(items: GuideSearchItem[]): MiniSearch<GuideSearchItem> {
  const index = new MiniSearch<GuideSearchItem>({
    idField: "url",
    fields: ["title", "description", "section", "body"],
    storeFields: ["url", "title", "description", "section"],
    searchOptions: {
      boost: { title: 4, description: 2, section: 1.5 },
      prefix: true,
      fuzzy: 0.2,
      combineWith: "AND",
    },
  });
  index.addAll(items);
  return index;
}

export function GuideSearch() {
  const [index, setIndex] = useState<MiniSearch<GuideSearchItem> | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function ensureLoaded() {
    if (index || loading) return;
    setLoading(true);
    fetch("/api/guide-search")
      .then((res) => res.json())
      .then((data: GuideSearchItem[]) => setIndex(buildIndex(data)))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ensureLoaded();
        setOpen(true);
        requestAnimationFrame(() => inputRef.current?.focus());
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ensureLoaded only reads `index`/`loading` to skip a refetch
  }, [index, loading]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const trimmed = query.trim();
  const results = useMemo(() => {
    if (trimmed.length === 0 || !index) return [] as SearchResult[];
    return index.search(trimmed).slice(0, 8);
  }, [trimmed, index]);

  return (
    <div ref={containerRef} className="relative">
      <div className="border-rule bg-paper-raised focus-within:border-brand flex items-center gap-2 rounded-md border px-3.5 py-2.5 shadow-sm transition-colors">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="text-ink-faint shrink-0"
        >
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M11 11L14.5 14.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            ensureLoaded();
            setOpen(true);
          }}
          placeholder="Search the guide…"
          aria-label="Search the user guide"
          className="text-ink placeholder:text-ink-faint w-full bg-transparent text-sm outline-none"
        />
        <kbd className="text-ink-faint border-rule hidden shrink-0 rounded border px-1.5 py-0.5 font-mono text-[0.65rem] sm:block">
          ⌘K
        </kbd>
      </div>
      {open && trimmed.length > 0 && (
        <div className="border-rule bg-paper-raised absolute inset-x-0 top-full z-40 mt-2 max-h-96 overflow-y-auto rounded-md border shadow-lg">
          {results.length > 0 ? (
            <ul className="divide-rule divide-y">
              {results.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    onClick={() => setOpen(false)}
                    className="hover:bg-mist block px-4 py-3"
                  >
                    <span className="text-brand-ink block font-mono text-[0.65rem] font-semibold tracking-[0.08em] uppercase">
                      {item.section}
                    </span>
                    <span className="text-ink mt-0.5 block text-sm font-medium">{item.title}</span>
                    <span className="text-ink-soft mt-0.5 block text-xs">{item.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-ink-faint px-4 py-6 text-center text-sm">
              {index ? "No results." : "Loading…"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

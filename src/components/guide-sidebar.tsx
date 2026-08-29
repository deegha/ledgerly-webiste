"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { GuideNavChapter } from "@/lib/guide-structure";

function GuideNavList({ chapters, pathname }: { chapters: GuideNavChapter[]; pathname: string }) {
  return (
    <nav aria-label="User guide" className="flex flex-col gap-6">
      {chapters.map((chapter) => {
        const chapterHref = `/guide/${chapter.slug}`;
        const chapterActive = pathname === chapterHref;
        return (
          <div key={chapter.slug}>
            <Link
              href={chapterHref}
              aria-current={chapterActive ? "page" : undefined}
              className={`block text-xs font-semibold tracking-[0.08em] uppercase ${
                chapterActive ? "text-brand-ink" : "text-ink-faint hover:text-ink"
              }`}
            >
              {chapter.title}
            </Link>
            {chapter.articles.length > 0 ? (
              <ul className="border-rule mt-2.5 flex flex-col gap-1 border-l pl-3">
                {chapter.articles.map((article) => {
                  const href = `${chapterHref}/${article.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={article.slug}>
                      <Link
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={`block py-1 text-sm transition-colors ${
                          active ? "text-brand-ink font-medium" : "text-ink-soft hover:text-ink"
                        }`}
                      >
                        {article.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-ink-faint border-rule mt-2.5 border-l py-1 pl-3 text-sm italic">
                Coming soon
              </p>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export function GuideSidebar({ chapters }: { chapters: GuideNavChapter[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:block">
        <GuideNavList chapters={chapters} pathname={pathname} />
      </div>
      <div className="border-rule border-b pb-4 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="text-ink flex w-full items-center justify-between py-1 text-sm font-medium"
        >
          Guide contents
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M3 5.5L7 9.5L11 5.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {open && (
          <div className="mt-4">
            <GuideNavList chapters={chapters} pathname={pathname} />
          </div>
        )}
      </div>
    </>
  );
}

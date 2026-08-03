"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isNavActive, navLinks } from "@/lib/nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu on navigation. Adjusting state during render (rather than in an
  // effect) is React's recommended pattern for resetting state when a prop changes —
  // see https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="text-ink flex size-9 items-center justify-center rounded-md"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M3 3L17 17M17 3L3 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M3 5H17M3 10H17M3 15H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {open && (
        <div className="border-rule bg-paper absolute inset-x-0 top-full z-30 max-h-[calc(100vh-4rem)] overflow-y-auto border-t shadow-lg">
          <nav className="flex flex-col px-6 py-6">
            {navLinks.map((link) => {
              const active = isNavActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-rule border-b py-4 text-lg ${
                    active ? "text-brand-ink font-medium" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/get-started"
              className="bg-brand mt-6 rounded-md px-4 py-3 text-center text-sm font-medium text-white shadow-sm"
            >
              Get started
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

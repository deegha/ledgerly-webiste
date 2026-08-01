"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavActive, navLinks } from "@/lib/nav-links";

export function SiteNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-7 md:flex">
      {navLinks.map((link) => {
        const active = isNavActive(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`border-b-2 pb-1 text-sm transition-colors ${
              active
                ? "border-brand text-ink font-medium"
                : "text-ink-soft hover:text-ink border-transparent"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

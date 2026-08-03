import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { SiteNavLinks } from "@/components/site-nav-links";

export function SiteHeader() {
  return (
    <header className="border-rule bg-paper/85 sticky top-0 z-40 border-b backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" aria-label="Ledgerly.lk — home">
          <Logo className="text-ink h-7" />
        </Link>
        <SiteNavLinks />
        <div className="flex items-center gap-2">
          <Link
            href="/get-started"
            className="bg-brand rounded-md px-3.5 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90 sm:px-4"
          >
            Get started
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

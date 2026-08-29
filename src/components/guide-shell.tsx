import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GuideSidebar } from "@/components/guide-sidebar";
import { GuideSearch } from "@/components/guide-search";
import type { GuideNavChapter } from "@/lib/guide-structure";

export function GuideShell({
  chapters,
  aside,
  children,
}: {
  chapters: GuideNavChapter[];
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="mb-10 max-w-xl">
            <GuideSearch />
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <aside className="lg:sticky lg:top-24 lg:w-56 lg:shrink-0">
              <GuideSidebar chapters={chapters} />
            </aside>
            <div className="min-w-0 flex-1">{children}</div>
            {aside && (
              <aside className="hidden xl:sticky xl:top-24 xl:block xl:w-48 xl:shrink-0">
                {aside}
              </aside>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

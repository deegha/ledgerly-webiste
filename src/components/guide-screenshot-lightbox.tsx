"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

// Guide screenshots render as plain HTML (`.guide-screenshot` figures, see
// lib/content.ts's guide Marked renderer) rather than a per-image React
// component, since content is markdown → dangerouslySetInnerHTML like the
// rest of this site's content pipeline. This mounts once per article page
// and uses event delegation to make every such image zoomable, matching
// ZoomableShot's UX without needing one component instance per image.
export function GuideScreenshotLightbox() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const img = target.closest(".guide-screenshot img") as HTMLImageElement | null;
      if (!img) return;
      setActive({ src: img.currentSrc || img.src, alt: img.alt });
      trackEvent("screenshot_zoom", {
        screenshot_alt: img.alt,
        page_path: window.location.pathname,
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!active) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  if (!active) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={active.alt}
      onClick={() => setActive(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-10"
    >
      <button
        type="button"
        onClick={() => setActive(null)}
        aria-label="Close enlarged screenshot"
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M2 2L16 16M16 2L2 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element -- source is a clicked <img>'s already-resolved URL, not a static import next/image can optimise */}
      <img
        src={active.src}
        alt={active.alt}
        className="max-h-full max-w-full rounded-lg object-contain shadow-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { BrowserFrame } from "@/components/browser-frame";
import type { ShotImage } from "@/lib/site-content";

export function ZoomableShot({ image, priority }: { image: ShotImage; priority?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in text-left"
        aria-label={`Enlarge screenshot: ${image.alt}`}
      >
        <BrowserFrame {...image} priority={priority} />
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-10"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
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
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="max-h-full max-w-full rounded-lg object-contain shadow-lg"
            onClick={(e) => e.stopPropagation()}
            sizes="100vw"
          />
        </div>
      )}
    </>
  );
}

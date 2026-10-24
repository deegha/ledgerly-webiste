"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { trackCtaClick, trackOutboundClick } from "@/lib/analytics";
import { gaEnabled, gaMeasurementId } from "@/lib/env";

// GA4 loader + SPA page_view tracking.
//
// Why hand-rolled rather than @next/third-parties: this repo keeps its
// dependency list deliberately short, and all we need is the standard gtag
// snippet plus a route-change listener. gtag.js does NOT auto-fire page_view on
// App Router client navigations (there's no full document load), so we disable
// its automatic page_view (`send_page_view: false`) and send one ourselves on
// mount and on every path/query change — a single, predictable source of views.
//
// Ordering matters for the "(not set)" landing page in GA: a session's landing
// page is the page_location of its first page_view. The init snippet
// (GaInitScript in ga-init.tsx, an inline <script> in the root layout's <head>)
// defines window.gtag and queues consent + config BEFORE React hydrates, so the
// page_view below can never be dropped (window.gtag undefined) or queued ahead
// of the config.

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // One page_view for the landing page and one per client-side navigation. De-dupe
  // identical consecutive URLs (React strict-mode double-invoke, re-renders).
  const lastUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!gaEnabled || typeof window === "undefined") return;
    const query = searchParams.toString();
    const url = pathname + (query ? `?${query}` : "");
    if (lastUrl.current === url) return;
    lastUrl.current = url;

    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

const SITE_HOSTS = new Set(["ledgerly.lk", "www.ledgerly.lk"]);

function appHost(): string {
  try {
    return new URL(process.env.NEXT_PUBLIC_APP_URL || "https://app.ledgerly.lk").host;
  } catch {
    return "app.ledgerly.lk";
  }
}

/**
 * Links rendered from markdown (blog posts, guide and help articles) are plain
 * <a> tags, so they can't use <CtaLink>/<OutboundLink>. One delegated listener
 * picks up any click on a link to /get-started or to the app that isn't already
 * tracked (components mark theirs with data-ga-tracked) and fires the same
 * events, with cta_location "content_<section>" (e.g. content_blog).
 */
function ContentLinkTracker() {
  useEffect(() => {
    if (!gaEnabled) return;
    const app = appHost();
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!(a instanceof HTMLAnchorElement) || a.hasAttribute("data-ga-tracked")) return;
      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      const section = window.location.pathname.split("/")[1] || "home";
      const ctaLocation = `content_${section}`;
      const isSite = url.host === window.location.host || SITE_HOSTS.has(url.host);
      if (isSite && url.pathname.replace(/\/$/, "") === "/get-started") {
        trackCtaClick(ctaLocation, "/get-started");
      } else if (url.host === app) {
        const linkUrl = url.origin + url.pathname; // never the query string
        if (url.pathname.startsWith("/login")) {
          trackOutboundClick("sign_in_click", linkUrl, ctaLocation);
        } else {
          trackCtaClick(ctaLocation, linkUrl, "open_app");
        }
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}

export function Analytics() {
  if (!gaEnabled) return null;

  return (
    <>
      <Script
        id="ga-lib"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      <ContentLinkTracker />
    </>
  );
}

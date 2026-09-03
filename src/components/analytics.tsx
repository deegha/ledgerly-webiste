"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { gaDebug, gaMeasurementId } from "@/lib/env";

// GA4 loader + SPA page_view tracking.
//
// Why hand-rolled rather than @next/third-parties: this repo keeps its
// dependency list deliberately short, and all we need is the standard gtag
// snippet plus a route-change listener. gtag.js does NOT auto-fire page_view on
// App Router client navigations (there's no full document load), so we disable
// its automatic page_view (`send_page_view: false`) and send one ourselves on
// mount and on every path/query change — a single, predictable source of views.

const enabled = gaMeasurementId !== "" && (process.env.NODE_ENV === "production" || gaDebug);

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Skip the very first effect run: gtag('config') already logs the initial
  // view is suppressed, and we want exactly one page_view for the landing page
  // fired here — so we DON'T skip. Instead we de-dupe identical consecutive URLs
  // (React strict-mode double-invoke, redundant re-renders).
  const lastUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;
    const query = searchParams.toString();
    const url = pathname + (query ? `?${query}` : "");
    if (lastUrl.current === url) return;
    lastUrl.current = url;

    window.gtag?.("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  if (!enabled) return null;

  return (
    <>
      <Script
        id="ga-lib"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          // Consent Mode default. Primary audience is Sri Lanka (outside the
          // EEA), so storage is granted by default. If you later add an EEA
          // consent banner, set these to 'denied' here and call
          // gtag('consent','update',{...}) when the visitor accepts.
          gtag('consent', 'default', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            analytics_storage: 'granted'
          });
          gtag('config', '${gaMeasurementId}', {
            send_page_view: false${gaDebug ? ",\n            debug_mode: true" : ""}
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}

"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackCtaClick, trackOutboundClick } from "@/lib/analytics";

/**
 * Internal primary call-to-action (a Next.js <Link>). Fires `cta_click` with the
 * `location` it was placed in, then lets navigation proceed as normal.
 */
export function CtaLink({
  location,
  cta = "get_started",
  onClick,
  ...props
}: ComponentProps<typeof Link> & { location: string; cta?: string }) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackCtaClick(location, cta);
        onClick?.(e);
      }}
    />
  );
}

/**
 * A link that leaves the marketing site (the product app, mailto:, etc). Fires a
 * named event with the destination URL so outbound intent is measurable even
 * though GA can't see what happens after the click.
 */
export function OutboundLink({
  event,
  location,
  onClick,
  ...props
}: ComponentProps<"a"> & { event: string; location: string; href: string }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackOutboundClick(event, { link_url: props.href, location });
        onClick?.(e);
      }}
    />
  );
}

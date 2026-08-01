import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { siteUrl } from "@/lib/env";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Ledgerly.lk — Double-entry bookkeeping, built for Sri Lanka";
const description =
  "A general ledger with documents that post into it — not an invoicing app with reports bolted on. Every number on every screen traces back to a journal line.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s — Ledgerly.lk" },
  description,
  manifest: "/site.webmanifest",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Ledgerly.lk",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  // Metadata consumed by the browser chrome / PWA manifest, not CSS — there's no
  // way to reference a CSS custom property here, so this is exempt from the
  // no-hex rule (same category as the opengraph-image.tsx exception).
  // eslint-disable-next-line no-restricted-syntax
  themeColor: "#4338ca",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

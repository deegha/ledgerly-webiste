import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Every color token lives in src/app/globals.css and nowhere else — mirrors the
// discipline in the invoicegen product (SCREENS.md §1.2), carried over here because
// it's cheap and keeps a hand-built design system from drifting into inline hex values.
const hexColorLintConfig = {
  files: ["src/components/**/*.{ts,tsx}", "src/app/**/*.{ts,tsx}"],
  // opengraph-image.tsx renders via next/og's ImageResponse (a satori-based renderer,
  // not the DOM/CSS engine) — it has no access to Tailwind classes or CSS variables at
  // all, same category of exception as invoicegen's invoice-pdf.tsx.
  ignores: ["src/app/opengraph-image.tsx"],
  rules: {
    "no-restricted-syntax": [
      "error",
      {
        selector: "Literal[value=/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b/]",
        message: "No hex colour values outside globals.css — use a Tailwind utility or var().",
      },
      {
        selector: "TemplateElement[value.raw=/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b/]",
        message: "No hex colour values outside globals.css — use a Tailwind utility or var().",
      },
    ],
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  hexColorLintConfig,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;

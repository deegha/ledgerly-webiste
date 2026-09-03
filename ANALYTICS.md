# Analytics (GA4)

Google Analytics 4 for the Ledgerly.lk marketing site. Property/tag ID
**`G-11VTYDPV9P`**.

---

## 1. How it's wired

| Concern                                                                  | File                                   |
| ------------------------------------------------------------------------ | -------------------------------------- |
| gtag.js loader + Consent Mode default + SPA `page_view`                  | `src/components/analytics.tsx`         |
| `<Analytics />` mounted once for the whole site                          | `src/app/layout.tsx` (end of `<body>`) |
| Typed event helper (`trackEvent`, `trackCtaClick`, `trackOutboundClick`) | `src/lib/analytics.ts`                 |
| Config (measurement ID, debug flag)                                      | `src/lib/env.ts`                       |
| `<CtaLink>` / `<OutboundLink>` wrappers                                  | `src/components/cta-link.tsx`          |

**Why hand-rolled, not `@next/third-parties`:** the repo keeps its dependency
list short and all we need is the standard snippet plus a route-change listener.

**`page_view` handling:** gtag.js does **not** fire `page_view` on Next.js
App Router client navigations (no full document load). So automatic page views
are disabled (`send_page_view: false`) and `PageViewTracker` sends exactly one
`page_view` on mount and on every path/query change. This is the single source
of page-view data — verified for both hard loads and in-app `<Link>` clicks.

---

## 2. Environment variables

| Var                    | Default        | Purpose                                                                                                                                                       |
| ---------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_GA_ID`    | `G-11VTYDPV9P` | GA4 measurement ID. Set to a staging property's ID for previews, or `""` to disable analytics entirely.                                                       |
| `NEXT_PUBLIC_GA_DEBUG` | _(unset)_      | Set to `1` to send hits from `next dev` / non-prod builds **and** enable GA DebugView. Leave unset normally so local clicking-around doesn't pollute reports. |

In production (`NODE_ENV=production`) analytics loads automatically with no config.
In dev it's silent unless `NEXT_PUBLIC_GA_DEBUG=1`.

---

## 3. Event catalog — what we capture

`page_view` params: `page_path`, `page_location`, `page_title`.

| Event                 | Fires when                                                               | Parameters                                                                                           | Source                                               |
| --------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `page_view`           | Every page load + every client-side route change                         | `page_path`, `page_location`, `page_title`                                                           | `analytics.tsx`                                      |
| `cta_click`           | Any primary call-to-action click                                         | `cta` (`get_started` \| `see_how_it_works`), `location` (`header`, `hero`, `cta_band`, `mobile_nav`) | `cta-link.tsx`, `hero.tsx`                           |
| `sign_in_click`       | "Sign in" clicked (leaves to the product app)                            | `link_url`, `location` (`header` \| `mobile_nav`)                                                    | `site-header.tsx`, `mobile-nav.tsx`                  |
| `contact_email_click` | Footer `contact@ledgerly.lk` mailto clicked                              | `link_url`, `location` (`footer`)                                                                    | `site-footer.tsx`                                    |
| `lead_form_start`     | First focus on any field of the Get started form                         | `form_location` (`get_started`)                                                                      | `get-started-form.tsx`                               |
| `generate_lead`       | Get started form submitted successfully **(conversion)**                 | `form_location`                                                                                      | `get-started-form.tsx`                               |
| `lead_form_error`     | Form submission returns a validation/server error                        | `form_location`, `error_message`                                                                     | `get-started-form.tsx`                               |
| `search`              | Visitor stops typing in the Guide/Help search (≥3 chars, 600ms debounce) | `search_term`, `results_count`                                                                       | `guide-search.tsx`                                   |
| `search_result_click` | A search result link is clicked                                          | `search_term`, `link_url`, `link_text`                                                               | `guide-search.tsx`                                   |
| `screenshot_zoom`     | A product screenshot is opened in the lightbox                           | `screenshot_alt`, `page_path`                                                                        | `zoomable-shot.tsx`, `guide-screenshot-lightbox.tsx` |

Event/param names follow GA4 conventions: `generate_lead` and `search` are
[recommended events](https://support.google.com/analytics/answer/9267735) and
get some reporting for free; the rest are custom.

### Also captured automatically (GA4 Enhanced Measurement — keep ON)

Scroll (90% depth), outbound link clicks, file downloads, form interactions,
site search _if_ configured with a query param (ours isn't — we send the
`search` event explicitly instead). Session/user counts, geo, device, tech,
acquisition source/medium, and Google Signals demographics all come for free.

---

## 4. One-time GA4 setup

### 4a. Register custom dimensions

**Admin → Data display → Custom definitions → Create custom dimension.**
Custom parameters only appear in standard reports once registered (they're
visible in DebugView/Realtime immediately regardless). All **event-scoped**:

| Dimension name       | Event parameter  |
| -------------------- | ---------------- |
| CTA name             | `cta`            |
| CTA / link location  | `location`       |
| Form location        | `form_location`  |
| Form error message   | `error_message`  |
| Search term          | `search_term`    |
| Search results count | `results_count`  |
| Link URL             | `link_url`       |
| Link text            | `link_text`      |
| Screenshot alt       | `screenshot_alt` |

(`search_term` also feeds GA4's built-in search reporting without registration.)

### 4b. Mark Key events (conversions)

**Admin → Data display → Key events → New key event** — type the name exactly:

- **`generate_lead`** — the primary conversion.
- **`sign_in_click`** — returning-user intent (secondary).
- Optional: **`cta_click`** if you want CTA clicks counted as micro-conversions
  (noisier; consider leaving off and using it as a funnel step instead).

### 4c. Data retention & settings

- **Admin → Data settings → Data retention:** set event data to **14 months**
  (default is 2 months).
- **Admin → Data streams → (web stream) → Enhanced measurement:** leave **ON**.
- **Admin → Data streams → Configure tag settings → Define internal traffic:**
  add your office/home IP so internal visits can be filtered; then
  **Data settings → Data filters** activate the "Internal Traffic" filter.
- Link **Google Search Console** (Admin → Product links) for organic-query data.

### 4d. Consent Mode

`analytics.tsx` sets Consent Mode v2 defaults to **granted** (primary audience is
Sri Lanka, outside the EEA). If you later add an EEA cookie banner: change the
four `gtag('consent','default',{...})` values to `'denied'` and call
`gtag('consent','update',{...})` when the visitor accepts.

---

## 5. Where to check what in GA4

| Question                                                     | Where in GA4                                                                                                                                                                                                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is the tag live / are events arriving right now?             | **Admin → DebugView** (needs `NEXT_PUBLIC_GA_DEBUG=1` locally, or the GA Debugger Chrome extension on prod) — or **Reports → Realtime**                                                                                                     |
| Traffic over time, top pages                                 | **Reports → Engagement → Pages and screens** (uses our `page_view`)                                                                                                                                                                         |
| Every event + its count                                      | **Reports → Engagement → Events**. Click an event name to see its parameter breakdowns (after §4a)                                                                                                                                          |
| Lead conversions — how many, from which pages/sources        | **Reports → Engagement → Key events**, or **Reports → Acquisition → Traffic acquisition** with "Key events" = `generate_lead`                                                                                                               |
| Lead form funnel: start → submit → error                     | **Explore → Funnel exploration**. Steps: `lead_form_start` → `generate_lead`; add `lead_form_error` as a breakdown. Also build a **free-form** exploration to read `error_message` values                                                   |
| Which CTA drives leads                                       | **Explore → Free-form**: rows = `CTA / link location`, values = event count of `cta_click` and (as a second exploration) users who later fired `generate_lead`. Or **Reports → Engagement → Events → cta_click → by "CTA / link location"** |
| What people search in the Guide, and searches with 0 results | **Reports → Engagement → Events → `search`**, break down by **Search term** and **Search results count**. `results_count = 0` rows = content gaps                                                                                           |
| Which search results get clicked                             | Event **`search_result_click`**, broken down by **Link URL** / **Search term**                                                                                                                                                              |
| Which product screenshots get zoomed                         | Event **`screenshot_zoom`**, broken down by **Screenshot alt** and **Page path**                                                                                                                                                            |
| Sign-in vs sign-up intent                                    | Compare **`sign_in_click`** (returning) against **`generate_lead`** (new)                                                                                                                                                                   |
| Where visitors come from                                     | **Reports → Acquisition → Traffic acquisition** (session source/medium, campaign)                                                                                                                                                           |
| Scroll depth / content engagement                            | Event **`scroll`** (auto), per page path                                                                                                                                                                                                    |
| Blog performance                                             | **Reports → Engagement → Pages and screens**, filter `Page path` contains `/blog/`                                                                                                                                                          |
| Guide/Help performance                                       | Same report, filter `/guide/` or `/help/`                                                                                                                                                                                                   |
| Custom dashboard for the team                                | **Reports → Library → Create report / collection**, or an **Explore** shared with edit-view                                                                                                                                                 |

### Suggested first Explorations to build

1. **Lead funnel** (Funnel exploration): `page_view` (any) → `lead_form_start`
   → `generate_lead`, segmented by first user source/medium.
2. **CTA → lead attribution** (Path or Free-form): `cta_click` by location,
   then `generate_lead` — which entry points actually convert.
3. **Search content gaps** (Free-form): `search` rows by `search_term`,
   metric = event count, filter `results_count` = 0.

---

## 6. Testing changes

```bash
NEXT_PUBLIC_GA_DEBUG=1 npm run dev
```

Open the site, then watch **GA4 → Admin → DebugView**. Every interaction above
should show up within a few seconds. Locally you can also inspect
`window.dataLayer` in the browser console — each entry is
`["event", "<name>", { ...params }]`.

Smoke-tested on 2026-09-03: `page_view` (hard load + client nav), `cta_click`,
`lead_form_start`, `search`, `search_result_click`, `screenshot_zoom` all
confirmed firing with correct parameters.

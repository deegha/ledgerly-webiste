# Analytics (GA4)

Google Analytics 4 for the Ledgerly.lk marketing site. Property **ledgerly.lk**
(p552653161), web stream "ledgerly.lk", Measurement ID **`G-11VTYDPV9P`**. The
product app (app.ledgerly.lk, deegha/invoiceGen) reports into the same property
through its own web stream, so the website → sign-up journey is in one place.

---

## 1. How it's wired

| Concern                                                                       | File                           |
| ----------------------------------------------------------------------------- | ------------------------------ |
| Init snippet: `gtag` stub, Consent Mode defaults, `config` (inline, `<head>`) | `src/components/ga-init.tsx`   |
| gtag.js loader + SPA `page_view` + content-link CTA listener                  | `src/components/analytics.tsx` |
| Both mounted once for the whole site                                          | `src/app/layout.tsx`           |
| Typed event helpers + PII scrubbing (`trackEvent`, `trackCtaClick`, …)        | `src/lib/analytics.ts`         |
| Config (measurement ID, enabled flag, debug flag, linker domains)             | `src/lib/env.ts`               |
| `<CtaLink>` / `<OutboundLink>` wrappers                                       | `src/components/cta-link.tsx`  |

**Why hand-rolled, not `@next/third-parties`:** the repo keeps its dependency
list short and all we need is the standard snippet plus a route-change listener.

**`page_view` handling:** gtag.js does **not** fire `page_view` on Next.js
App Router client navigations (no full document load). So automatic page views
are disabled (`send_page_view: false`) and `PageViewTracker` sends exactly one
`page_view` on mount and on every path/query change.

**Init order (the "(not set)" landing page fix):** a session's landing page is
the `page_location` of its first `page_view`. The init snippet used to be a
`next/script` `afterInteractive` script, i.e. injected after hydration, racing
the React effect that sends the landing `page_view` (`window.gtag?.(…)` silently
dropped it if it lost). Events fired before gtag existed were pushed as plain
arrays, which gtag.js ignores. Now the snippet is an inline `<script>` in
`<head>`, so `window.gtag` exists and `consent` → `js` → `config` are queued
before any event, and `trackEvent` installs the standard `arguments` stub if it
ever runs first.

Other "(not set)" landing pages GA itself produces that code can't fix: a
session that times out (30 min idle) and restarts on a non-`page_view` event
(scroll, click, `user_engagement`) on an already-open tab, and bots/crawlers
that run JS partially. Expect a small residual number.

**Cross-domain:** `config` sets `linker: { domains: ["ledgerly.lk",
"www.ledgerly.lk", "app.ledgerly.lk"], accept_incoming: true }`. All three are
subdomains of ledgerly.lk, so the `_ga` cookie (domain `.ledgerly.lk`) is already
shared; the linker adds `_gl` to links between them as a belt-and-braces (it is
also what GA's own _Configure your domains_ admin setting does). Our click
handlers never `preventDefault`, and the app link URLs we log (`link_url`) are
the undecorated hrefs. The app reads `_gl` from `document.location`, so it
survives even though the app strips query strings from what it reports.

---

## 2. Environment variables

| Var                             | Default        | Purpose                                                                                                                                      |
| ------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-11VTYDPV9P` | GA4 measurement ID, inlined at build time. Empty counts as unset. `off` disables analytics. (`NEXT_PUBLIC_GA_ID` is still read as an alias.) |
| `NEXT_PUBLIC_GA_DEBUG`          | _(unset)_      | `1` = also send from `next dev` / non-prod builds and enable DebugView. Leave unset normally.                                                |

Analytics only loads in production builds (`NODE_ENV=production`) or with
`NEXT_PUBLIC_GA_DEBUG=1`, and only with a valid `G-…` ID.

**Why the live ID is still the fallback:** `.github/workflows/deploy.yml` passes
only `NEXT_PUBLIC_APP_URL` and `NEXT_PUBLIC_SITE_URL` to `next build` and to
`docker build`. Without the fallback, the next deploy would silently ship with
no analytics. The `Dockerfile` now accepts an optional
`NEXT_PUBLIC_GA_MEASUREMENT_ID` build arg. To make the env var the only source:

1. GitHub → deegha/ledgerly-webiste → Settings → Secrets and variables →
   Actions → **Variables** → New repository variable
   `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-11VTYDPV9P` (it is public, so a variable,
   not a secret).
2. In `deploy.yml` add `NEXT_PUBLIC_GA_MEASUREMENT_ID: ${{ vars.NEXT_PUBLIC_GA_MEASUREMENT_ID }}`
   to the `env:` of the "Build (sanity check)" step, and
   `NEXT_PUBLIC_GA_MEASUREMENT_ID=${{ vars.NEXT_PUBLIC_GA_MEASUREMENT_ID }}`
   to `build-args:` of "Build and push image".
3. Then drop `LIVE_GA_MEASUREMENT_ID` from `src/lib/env.ts`.

---

## 3. Event catalog — what we capture

| Event                 | Fires when                                                                            | Parameters                                                                            | Source                                               |
| --------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `page_view`           | Every page load + every client-side route change                                      | `page_location`, `page_path`, `page_title`                                            | `analytics.tsx`                                      |
| `cta_click`           | A primary call-to-action click, including `/get-started` links inside blog/guide/help | `cta` (`get_started` \| `see_how_it_works` \| `open_app`), `cta_location`, `link_url` | `cta-link.tsx`, `hero.tsx`, `analytics.tsx`          |
| `sign_in_click`       | "Sign in" clicked (leaves to app.ledgerly.lk/login)                                   | `cta_location`, `link_url`                                                            | `site-header.tsx`, `mobile-nav.tsx`, `analytics.tsx` |
| `contact_email_click` | A `contact@ledgerly.lk` mailto clicked                                                | `cta_location`, `link_type` (`mailto`); the address is never sent                     | `site-footer.tsx`, `home-close.tsx`                  |
| `lead_form_start`     | First focus on any field of the Get started form                                      | `form_location` (`get_started`)                                                       | `get-started-form.tsx`                               |
| `generate_lead`       | **Once**, after the server confirms the lead was accepted **(key event)**             | `form_location`                                                                       | `get-started-form.tsx`                               |
| `lead_form_error`     | Submission returned a validation/server error (no `generate_lead`)                    | `form_location`, `error_message` (fixed server strings)                               | `get-started-form.tsx`                               |
| `search`              | Visitor stops typing in the Guide/Help search (≥3 chars, 600ms debounce)              | `search_term` (emails / 7+ digit numbers → `[redacted]`), `results_count`             | `guide-search.tsx`                                   |
| `search_result_click` | A search result link is clicked                                                       | `search_term`, `link_url`, `link_text`                                                | `guide-search.tsx`                                   |
| `screenshot_zoom`     | A product screenshot is opened in the lightbox                                        | `screenshot_alt`, `page_path`                                                         | `zoomable-shot.tsx`, `guide-screenshot-lightbox.tsx` |

`cta_location` values: `header`, `mobile_nav`, `hero`, `cta_band`, `pricing`,
`home_close`, `footer`, and `content_<section>` (`content_blog`,
`content_guide`, `content_help`) for links inside markdown.

**Renamed on 2026-10-24:** `location` → `cta_location`, and `cta_click` gained
`link_url`. Re-register the custom dimensions below; old rows keep `location`.

**No PII:** no form values are ever sent (only `form_location`). Every string
param goes through `sanitizeParams()` (emails → `[redacted]`, 100-char cap).

Event/param names follow GA4 conventions: `generate_lead` and `search` are
[recommended events](https://support.google.com/analytics/answer/9267735).

### Also captured automatically (GA4 Enhanced Measurement)

Scroll (90% depth), outbound link clicks, file downloads, form interactions
(`form_start` / `form_submit`, which overlap `lead_form_start`). Turn **off**
_Page views → Page changes based on browser history events_ (we send SPA page
views ourselves, so leaving it on can double-count client navigations).

---

## 4. One-time GA4 setup

The full admin checklist (key events, app stream, cross-domain, unwanted
referrals, internal traffic, retention, env vars) is in §7.

### 4a. Register custom dimensions

**Admin → Data display → Custom definitions → Create custom dimension**, all
**event-scoped**:

| Dimension name       | Event parameter  |
| -------------------- | ---------------- |
| CTA name             | `cta`            |
| CTA location         | `cta_location`   |
| Link URL             | `link_url`       |
| Link type            | `link_type`      |
| Form location        | `form_location`  |
| Form error message   | `error_message`  |
| Search term          | `search_term`    |
| Search results count | `results_count`  |
| Link text            | `link_text`      |
| Screenshot alt       | `screenshot_alt` |

### 4b. Consent Mode and privacy defaults

Set in `ga-init.tsx`: `analytics_storage: granted`; `ad_storage`,
`ad_user_data`, `ad_personalization`: **denied** (we run no ads);
`allow_google_signals: false`; `allow_ad_personalization_signals: false`. GA4
does not log or store IP addresses, so there is no `anonymize_ip` to set. See
§8 for why there is no consent banner (Sri Lanka PDPA) and what would change.

---

## 5. Where to check what in GA4

| Question                                                     | Where in GA4                                                                                                                                                                                                                  |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is the tag live / are events arriving right now?             | **Admin → DebugView** (needs `NEXT_PUBLIC_GA_DEBUG=1` locally, or the GA Debugger Chrome extension on prod) — or **Reports → Realtime**                                                                                       |
| Traffic over time, top pages                                 | **Reports → Engagement → Pages and screens** (uses our `page_view`)                                                                                                                                                           |
| Every event + its count                                      | **Reports → Engagement → Events**. Click an event name to see its parameter breakdowns (after §4a)                                                                                                                            |
| Lead conversions — how many, from which pages/sources        | **Reports → Engagement → Key events**, or **Reports → Acquisition → Traffic acquisition** with "Key events" = `generate_lead`                                                                                                 |
| Lead form funnel: start → submit → error                     | **Explore → Funnel exploration**. Steps: `lead_form_start` → `generate_lead`; add `lead_form_error` as a breakdown. Also build a **free-form** exploration to read `error_message` values                                     |
| Which CTA drives leads                                       | **Explore → Free-form**: rows = `CTA location`, values = event count of `cta_click` and (as a second exploration) users who later fired `generate_lead`. Or **Reports → Engagement → Events → cta_click → by "CTA location"** |
| What people search in the Guide, and searches with 0 results | **Reports → Engagement → Events → `search`**, break down by **Search term** and **Search results count**. `results_count = 0` rows = content gaps                                                                             |
| Which search results get clicked                             | Event **`search_result_click`**, broken down by **Link URL** / **Search term**                                                                                                                                                |
| Which product screenshots get zoomed                         | Event **`screenshot_zoom`**, broken down by **Screenshot alt** and **Page path**                                                                                                                                              |
| Sign-in vs sign-up intent                                    | Compare **`sign_in_click`** (returning) against **`generate_lead`** (new)                                                                                                                                                     |
| Where visitors come from                                     | **Reports → Acquisition → Traffic acquisition** (session source/medium, campaign)                                                                                                                                             |
| Scroll depth / content engagement                            | Event **`scroll`** (auto), per page path                                                                                                                                                                                      |
| Blog performance                                             | **Reports → Engagement → Pages and screens**, filter `Page path` contains `/blog/`                                                                                                                                            |
| Guide/Help performance                                       | Same report, filter `/guide/` or `/help/`                                                                                                                                                                                     |
| Custom dashboard for the team                                | **Reports → Library → Create report / collection**, or an **Explore** shared with edit-view                                                                                                                                   |

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
`window.dataLayer` in the browser console — each entry is an `arguments` object;
`Array.from(window.dataLayer[i])` gives `["event", "<name>", { ...params }]`.
Never point a local build at the live ID while clicking around: use
`NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TEST000000` (a dummy) with network calls to
Google blocked, or `off`.

Smoke-tested on 2026-10-24 (production build, dummy ID, all Google requests
blocked in a headless browser): init order (consent → js → config → first event
is `page_view`), one landing `page_view` + one per client nav, `cta_click`
(header, content link), `sign_in_click`, `contact_email_click` (no address),
`search` (email redacted), `lead_form_error` on a failed submit with no
`generate_lead`, exactly one `generate_lead` on success, no form values in
`dataLayer`; with `NEXT_PUBLIC_GA_MEASUREMENT_ID=off` nothing loads.

Earlier smoke test on 2026-09-03: `page_view` (hard load + client nav), `cta_click`,
`lead_form_start`, `search`, `search_result_click`, `screenshot_zoom` all
confirmed firing with correct parameters.

---

## 7. GA admin checklist (Deegha only)

Property **ledgerly.lk** (p552653161). "Data streams" lives at **Admin → Data collection and modification → Data streams** (shortened to _Data streams_ below).

1. **Add the app stream.** _Data streams → Add stream → Web_: URL `app.ledgerly.lk`, name `app.ledgerly.lk`. Before you click _Create stream_, click the gear on _Enhanced measurement_ and switch it **off**. It would send search terms (`?q=` holds customer names), form names and raw history-change page views. Then copy the stream's **Measurement ID** (`G-…`) into `GA_MEASUREMENT_ID` for the app (item 9).
2. **Key events.** _Admin → Data display → Key events → New key event_: add `generate_lead` and `sign_up`, and `onboarding_complete` if you want it. You can create `sign_up` before it has ever fired. Optional: `first_invoice_created`.
3. **Unstar the unused ones.** On the same _Key events_ list, click the star next to `qualify_lead` and next to `close_convert_lead` to unmark them. They never fire. You can't delete events in GA4; unmarking them is enough.
4. **Cross-domain.** For each stream (ledgerly.lk and app.ledgerly.lk): _Data streams → (stream) → Configure tag settings → Configure your domains_. Add three conditions, each "Exactly matches": `ledgerly.lk`, `www.ledgerly.lk`, `app.ledgerly.lk`.
5. **Unwanted referrals.** For each stream: _Data streams → (stream) → Configure tag settings → Show more → List unwanted referrals_. Add: match type "Referral domain ends with", value `ledgerly.lk`. This stops the website showing up as the "referral" source for app sessions.
6. **Internal traffic.** For each stream: _Data streams → (stream) → Configure tag settings → Show more → Define internal traffic → Create_. Use rule name "Office/home", `traffic_type` = `internal`, IP address "equals" your office/home IP(s). The KL visits in Rojer's report count too. Then go to _Admin → Data collection and modification → Data filters_ and open "Internal Traffic". Leave it on _Testing_ for a few days, check it in reports (comparison "Test data filter name"), then set it to **Active**. Set the "Developer traffic" filter to Active as well.
7. **Data retention.** _Admin → Data collection and modification → Data retention_: Event data retention **14 months**, "Reset user data on new activity" **on**. The default is 2 months, which makes year-on-year Explorations impossible. This is the period stated in the privacy notice.
8. **Privacy defaults**, which code can't set:
   - _Admin → Data collection and modification → Data collection_: keep **Google signals off**. The code sends `allow_google_signals: false` anyway.
   - App stream only: _Data streams → app.ledgerly.lk → Redact data_ (under "Google tag"). Turn on **Email** redaction, and **Query parameters** redaction with `q, token, email, next`, as a server-side backstop for the code's redaction.
   - Website stream: _Data streams → ledgerly.lk → Enhanced measurement (gear) → Page views → Show advanced settings_. Untick **Page changes based on browser history events**. The site sends its own SPA page views, so leaving this on double-counts.
   - Optional: _Admin → Account settings → Account details → Data processing terms_. Review and accept Google's data processing terms. They are the cross-border safeguard the PDPA s.26 asks for. Check the label in your UI; Google renames it from time to time.
9. **Env vars to set**, one per deployment:
   - **Website** (deegha/ledgerly-webiste): `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-11VTYDPV9P`. It's build-time. **Nothing is required today**, because the code falls back to this ID. To make the env var the only source, add a repository **variable** (_GitHub → Settings → Secrets and variables → Actions → Variables_) `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-11VTYDPV9P`. Then in `.github/workflows/deploy.yml`, add `NEXT_PUBLIC_GA_MEASUREMENT_ID: ${{ vars.NEXT_PUBLIC_GA_MEASUREMENT_ID }}` under the `env:` of "Build (sanity check)", and `NEXT_PUBLIC_GA_MEASUREMENT_ID=${{ vars.NEXT_PUBLIC_GA_MEASUREMENT_ID }}` under `build-args:` of "Build and push image". The Dockerfile already accepts it. After that, drop the fallback in `src/lib/env.ts`.
   - **App** (deegha/invoiceGen): `GA_MEASUREMENT_ID=<app stream ID from step 1>`. It's runtime. **GA stays off until this is set.** Both deploy workflows rewrite the server's `.env` on every run, so the variable has to come from GitHub. Add a repository **variable** `GA_MEASUREMENT_ID`. Then in **both** `.github/workflows/deploy.yml` and `deploy-manual.yml`, in the SSH deploy step: add `GA_MEASUREMENT_ID: ${{ vars.GA_MEASUREMENT_ID }}` to its `env:`, append `,GA_MEASUREMENT_ID` to `envs:`, and add the line `GA_MEASUREMENT_ID=${GA_MEASUREMENT_ID}` to the `.env` heredoc next to `APP_ENV=production`. invoiceGen's `docker-compose.yml` already passes it to the container. Leave it unset locally, in CI and in tests.
10. **Custom dimensions** (website): _Admin → Data display → Custom definitions → Create custom dimension_, event-scoped: `cta_location`, `link_url`, `link_type`, plus any from ANALYTICS.md §4a you haven't registered yet. App: `method` (for `sign_up`).

---

## 8. PDPA (Sri Lanka Personal Data Protection Act No. 9 of 2022): what analytics needs

**Status (checked 24 Oct 2026).**

- Amendment Act No. 22 of 2025 (certified 30 Oct 2025) replaced the Act's fixed commencement dates with dates set by Gazette order. [Amendment Act](https://documents.gov.lk/api/content-file-proxy?file=%2Fact-content%2F22-2025_E_1784553020.pdf), [Parliament](https://www.parliament.lk/en/home/parliament-news/view/4888)
- Gazette Extraordinary No. 2498/16 (22 Jul 2026) brings ss.2–3, **Part I** (lawful, transparent processing) and **Part III** (controllers/processors: DPO, breach notification, DPIA, processor contracts, cross-border) into operation on **1 January 2027**. Part II (data-subject rights) isn't in that order. [DPA announcement](https://www.linkedin.com/posts/data-protection-authority_dataprotection-pdpa-srilanka-activity-7487080583370620928-lhfV), [Daily FT, 10 Aug 2026](https://www.ft.lk/front-page/Data-protection-compliance-regime-takes-effect-on-1-Jan-2027/44-795776)
- **No cookie or online-tracking guidance exists.** The DPA's guidelines page lists only Circular 01/2026 (public sector) and 2024 drafts on DPIA, breach notification, cross-border instruments, the DPO, rights, inquiries and fees. [dpa.gov.lk/guidelines](https://www.dpa.gov.lk/guidelines.php). The Act itself has no cookie rule. [DLA Piper, Sri Lanka](https://www.dlapiperdataprotection.com/guide.pdf?c=LK): "no requirements specifically applicable to … cookies".

**What the Act requires of GA.** [PDPA text](https://www.trc.gov.lk/content/files/policy/data-protection-act.pdf)

- A GA client ID in a cookie is an **"online identifier"**, so it counts as personal data (s.56 definitions).
- Processing it needs one Schedule I basis. That can be **consent** (a), or **legitimate interests** (f). Item (h)(ii) counts what "a data subject reasonably expects … in the context of the collection" as a legitimate interest.
- Under **s.11 + Schedule V**, people must be told, "in a concise, transparent, intelligible and easily accessible form": who we are and how to contact us, the purposes and legal basis, the legitimate interest relied on, the categories of data, recipients, any cross-border transfer, the retention period, their rights, and the right to complain to the DPA.
- Under **s.26** (as amended), a cross-border transfer (Google processes outside Sri Lanka) is allowed when the controller complies with Parts I/II and ss.20–25 and uses the instruments the DPA specifies. That directive is still a 2024 draft. The exceptions are explicit consent or necessity for a contract.

**Recommendation.**

1. **No consent banner, for now.** Rely on legitimate interests. That holds up because the setup is first-party, aggregate, analytics-only measurement with every advertising feature off, Google signals off, no user ID, no names, emails or accounting data, and ids/tokens stripped from URLs.
   - Consent Mode defaults: `analytics_storage: granted`; `ad_storage`, `ad_user_data` and `ad_personalization` all **denied**. Both repos set this in code.
   - Revisit if the DPA issues cookie/online-identifier guidance, when Part II commences, or if you start targeting EU/UK visitors. GDPR/ePrivacy would then require prior consent for analytics cookies.
2. **A privacy notice is required, and neither site has one today.** ledgerly.lk has no privacy page, even though the /get-started form collects name, email and phone. Publish `ledgerly.lk/privacy` before 1 Jan 2027 and link it from the site footer, the get-started form, and the app's login and onboarding screens. The analytics section is drafted below. The rest of the notice (lead form, the app itself, the controller's legal name, a DPO contact) is a separate job.
3. Set GA **data retention to 14 months** (checklist item 7) and state it in the notice.
4. Offer an **opt-out**: Google's browser add-on link in the notice. It supports the legitimate-interests balancing test and the s.14 objection right once it commences.

**Decision for you: banner or not?** If you'd rather rely on consent (the stricter reading, or EU traffic), the banner would work like this:

- A small bottom bar on both sites with two equal buttons, "Allow analytics" and "No thanks", and a link to the privacy notice.
- `analytics_storage` defaults to **denied** until the visitor clicks Allow. Then `gtag('consent','update',{analytics_storage:'granted'})`.
- The choice is stored in a first-party cookie on `.ledgerly.lk` for 12 months, so one answer covers the site and the app.
- A "Cookie settings" link in both footers reopens it.
- Expect GA numbers to drop by whatever share of visitors clicks No. Consent Mode "advanced" keeps cookieless modelled pings; "basic" sends nothing.

It's not built; it's about half a day per repo.

**Draft privacy-notice wording (analytics section)**

> **Analytics.** We use Google Analytics 4 on ledgerly.lk and app.ledgerly.lk to understand how people find and use Ledgerly: which pages are visited, which buttons are clicked, and whether sign-ups and onboarding are completed. We use what we learn to improve the website and the service.
>
> Google Analytics stores a random identifier in first-party cookies (`_ga`, `_ga_<ID>`) on your device. It does **not** receive your name, email address, phone number, organisation name, TIN, or any of your accounting data. Before a page address is sent, we remove account, document and invitation identifiers and any search terms. Google Analytics 4 does not log or store IP addresses. We have turned off Google signals and all advertising features, so the data isn't used for ads.
>
> **Legal basis:** our legitimate interest in measuring and improving our website and service (Personal Data Protection Act No. 9 of 2022, Schedule I(f)).
>
> **Recipient:** Google, as our service provider. Google may process this data on servers outside Sri Lanka, including in the United States, under its data processing terms.
>
> **Retention:** event data is kept for 14 months, then deleted automatically.
>
> **Your choices:** you can block or delete cookies in your browser, or install Google's opt-out add-on (https://tools.google.com/dlpage/gaoptout). To object or ask about your data, email [privacy@ledgerly.lk]. You can also complain to the Data Protection Authority of Sri Lanka (https://www.dpa.gov.lk).

(Put the controller's legal name and address in the notice's header. This isn't legal advice; have it reviewed before 1 Jan 2027.)

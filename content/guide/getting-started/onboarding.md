---
title: "Signing up and onboarding"
description: "How a new organization is created in Ledgerly, and what each step of the setup wizard decides."
order: 2
verifiedAgainst: "invoicegen @ 2026-08-31, Riverstone Ceramics (onboarding walkthrough)"
related:
  - /guide/getting-started/first-week-checklist
  - /guide/getting-started/what-is-ledgerly
---

## What this is

Ledgerly organizations aren't self-serve. You request one from the
[ledgerly.lk/get-started](https://ledgerly.lk/get-started) form, and Ledgerly emails you a
one-time onboarding link. Opening that link starts a **six-step wizard** that has to be
completed before the ledger is usable. This page walks each step and explains what it decides.

The link is tied to your email address and expires after 14 days — if it lapses, ask Ledgerly
support for a new one.

## Step 1 — Organization

Your organization's identity and your own account, on one screen.

![Onboarding step 1: Organization name, legal name, TIN, business registration number, address, and phone fields, followed by a "Your account" section for the owner's name](/guide/getting-started/onboarding-step1-organization.jpg "Step 1 — the organization's legal details and the owner account")

- **Organization name** is what you'll see in the app; **legal name** is what prints on
  documents. Both are required.
- **TIN** and **business registration number** are optional here but needed later for
  compliant invoices — add them now if you have them.
- The **address** appears on your invoices, so enter it as it should appear to customers.

Then, under **Your account**, you become the organization's first **Owner**:

![Onboarding step 1: the "Your account" section — first name, last name, a locked email field, and a password field requiring at least 12 characters with upper, lower and a digit](/guide/getting-started/onboarding-step1-account.jpg "Your email is fixed by the onboarding link; you choose the password")

The **email is locked** to the address the link was issued to. Your **password** must be at
least 12 characters with an uppercase letter, a lowercase letter, and a digit.

## Step 2 — Fiscal setup

![Onboarding step 2: base currency shown as LKR — Sri Lankan Rupee, fiscal year shown as April 1, 2026 – March 31, 2027, both read-only, with a note that 12 monthly periods will be created automatically](/guide/getting-started/onboarding-step2-fiscal.jpg "Step 2 — base currency and fiscal year, both fixed at this stage")

- **Base currency** is **LKR** and can't be changed here. You can enable additional
  transaction currencies later in Settings; the base currency stays LKR.
- **Fiscal year** runs **1 April – 31 March** — the Sri Lankan default. Ledgerly creates your
  first fiscal year and its **12 monthly periods** automatically when the organization is
  created.

## Step 3 — VAT

![Onboarding step 3: a "VAT registered" toggle switched on, revealing a VAT registration number field and a filing-frequency dropdown set to Monthly, with a note that default Sri Lankan tax codes are seeded either way](/guide/getting-started/onboarding-step3-vat.jpg "Step 3 — VAT registration status; the tax codes are seeded regardless")

Turn on **VAT registered** if your business is registered, then enter your **VAT registration
number** and choose a **filing frequency** (monthly or quarterly).

Either way, Ledgerly seeds the standard Sri Lankan tax codes — **VAT18, VAT0, VATEX, SSCL,
WHT5, WHT14** — so you can start invoicing immediately. If you register for VAT later, you add
the registration number in Settings then.

## Step 4 — Chart of accounts

![Onboarding step 4: a table of seeded accounts with editable Name fields and fixed Code and Type columns, above Back and "Create organization" buttons](/guide/getting-started/onboarding-step4-coa.jpg "Step 4 — rename seeded accounts before the organization is created; codes and types are fixed")

Ledgerly seeds a standard Sri Lankan SME **chart of accounts**. You can **rename** any account
on this screen, but **codes and types are fixed** — the posting logic depends on them. Don't
try to rebuild the tree here; you can add your own accounts once you're in.

**Clicking "Create organization" is the point of no return for this step** — it creates the
organization, your owner account, the fiscal year, the 12 periods, the tax codes, and the
chart of accounts, all in one go. The remaining two steps operate on the organization that now
exists.

## Step 5 — Opening balances (optional)

If you're moving to Ledgerly from another system, this step posts a single balanced journal
entry with your account balances as at your start date. It has to balance — Ledgerly shows a
running debit/credit total and an out-of-balance figure until it does.

If you're starting from zero, **skip it**. You can post opening balances later from
**Settings**; see the [first-week checklist](/guide/getting-started/first-week-checklist) for
when you'd want to.

## Step 6 — Team (optional)

Invite your first teammates by email, each with a role (Accountant, Bookkeeper, Approver,
Auditor, or Viewer). You can also skip this and add people later from **Settings → Team** —
see [Inviting your team](/guide/getting-started/inviting-your-team).

## Where you land

Finishing the wizard drops you on your **Dashboard** — every figure at zero, no activity yet.
That's a correctly empty ledger, ready for its first document.

![A freshly onboarded dashboard for Riverstone Ceramics: all six stat cards reading LKR 0.00 and an empty activity feed](/guide/getting-started/onboarding-landed.jpg "A new organization's dashboard — an empty ledger, not a broken one")

## Common questions

**Can I change the fiscal year or base currency later?** Not casually. Both are set here for a
reason — changing them after you've posted entries is disruptive. Get them right now.

**I closed the wizard partway through.** Steps 1–3 are held in the browser and submitted
together at step 4, so closing before "Create organization" loses them — reopen the link and
start again. After the organization is created, the optional steps are always available from
Settings.

**Do I have to be VAT-registered to use Ledgerly?** No. Answer "no" at step 3 and the tax
codes are still there for when you register.

## See also

- [A first-week checklist](/guide/getting-started/first-week-checklist)
- [What Ledgerly is](/guide/getting-started/what-is-ledgerly)

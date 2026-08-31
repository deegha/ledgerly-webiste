---
title: "Active sessions and security"
description: "See every device signed in to your account, and sign out the ones you don't recognise."
order: 8
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/settings/your-profile
  - /guide/getting-started/inviting-your-team
---

## Where to find it

**Settings → Sessions.** This shows _your own_ sessions — not the whole team's.

![Settings → Sessions: an "Active sessions" table listing each signed-in device by browser/OS, IP address, sign-in time and expiry, with a Revoke action per row and "(this device)" marking the current one](/guide/settings/security-and-sessions.jpg "Every device currently signed in to your account, with a Revoke button on each")

## What's here

Each row is one active sign-in:

- **Device / browser** — parsed from the browser's user-agent. The one you're on is marked
  **(this device)**.
- **IP address** it signed in from.
- **Signed in** — when the session started.
- **Expires** — sessions don't last forever; this is when it lapses on its own.
- **Revoke** — ends that session immediately. The device is signed out and has to log in
  again.

## When to use it

- You signed in on a shared or public computer and forgot to sign out — **revoke** it from
  here.
- You see a session you don't recognise — **revoke** it, then change your
  [password](/guide/settings/your-profile).
- You've lost a device — revoke every session except this one.

## See also

- [Your profile](/guide/settings/your-profile)
- [Inviting your team](/guide/getting-started/inviting-your-team)

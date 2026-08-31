---
title: "Inviting your team"
description: "Add people to your organization, give them a role, and change or revoke access later."
order: 5
verifiedAgainst: "invoicegen @ 2026-08-31, Acme Trading"
related:
  - /guide/getting-started/roles-and-permissions
---

## What this is

Everyone who works in your books needs their own login — never a shared one, because every
entry in Ledgerly is stamped with the person who made it. Adding someone is a two-part
handshake: you send an invitation with a role attached, they accept it and set their own
password.

## Where to find it

**Settings → Team.** You need to be an **Owner** to invite, remove, or re-role people.

![Settings → Team: a table of current members with their email and role, above an "Invite a member" form with email, first name, last name and role fields](/guide/getting-started/inviting-your-team.jpg "The Team screen — current members on top, the invite form below")

## Sending an invitation

1. In **Invite a member**, enter the person's **email**. It's the only required field, and it
   becomes their login.
2. Optionally add their **first and last name** so they show up by name in the members list
   straight away.
3. Choose a **role**. It defaults to Bookkeeper — the most limited working role. If you're not
   sure which to pick, read [Users, roles, and
   permissions](/guide/getting-started/roles-and-permissions) first; you can change it later
   in one click.
4. Click **Send invite**. Ledgerly emails the person a link to join your organization and set
   a password.

Until they accept, they appear in the members list as invited but can't sign in.

## Changing someone's access

In the members table, each person (except yourself) has:

- A **role dropdown** — change it and it takes effect immediately. Their past entries are
  untouched; only what they can do next changes.
- A **Deactivate** link — this removes their access without deleting anything they've done.
  Every invoice, payment, and journal entry they posted stays in the ledger, still attributed
  to them.

You can't change your own role or deactivate yourself from this screen — that's the guard
against an organization ending up with no Owner.

## Common questions

**Can two people share one login?** They can, but don't. The audit trail and every "posted
by" stamp would then be meaningless, and an auditor will notice.

**The invite email didn't arrive.** Check the address in the members list is right. Removing
the invited person and re-inviting sends a fresh link.

**Someone left the company.** Deactivate them. Don't wait — an active login you're not using
is a way in for someone else.

## See also

- [Users, roles, and permissions](/guide/getting-started/roles-and-permissions)

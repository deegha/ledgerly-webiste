---
title: "Signing in, lockouts, and two-factor authentication"
description: "What each sign-in message means, how long a lockout lasts, and how to turn two-factor authentication on and off."
order: 10
verifiedAgainst: "invoicegen @ fd6950f (2026-10-24)"
related:
  - /guide/settings/security-and-sessions
  - /guide/settings/your-profile
---

## Signing in

Sign in with your **Email** and **Password**. If you've turned on two-factor authentication
(below), Ledgerly then asks for a **Two-factor code** — "Enter the 6-digit code from your
authenticator app" — and you click **Verify**. **Back to password** returns to the first step.

A wrong email or password gives "Incorrect email or password." Ledgerly doesn't say which of
the two was wrong.

## When Ledgerly stops accepting attempts

| Message                                                         | What triggers it                                                                                                          | What to do                                                                                                   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| "Too many failed attempts. Try again in 15 minutes."            | After five failed sign-ins for the same email within 15 minutes. A wrong password and a wrong two-factor code both count. | Wait 15 minutes, then sign in carefully. While it lasts, even the right password is refused.                 |
| "Too many sign-in attempts from this network. Try again later." | More than 50 sign-in attempts — successful or not, for any accounts — from one network address within 15 minutes.         | Wait up to 15 minutes and try again.                                                                         |
| "That code didn't match. Try again."                            | A wrong two-factor code.                                                                                                  | Enter the current code from your authenticator app. Each wrong code counts towards the five failed attempts. |

A few things worth knowing about the 15-minute lockout:

- It applies to the email, whether or not an account exists for it, so the message never
  reveals whether an email is registered.
- **Resetting your password doesn't lift it early.** If you've forgotten your password, use
  **Forgot password?** and **Send reset link** — the link expires in 1 hour — but you still
  have to wait out the lockout before signing in.
- Until you next sign in successfully, Ledgerly keeps counting the failures. Once a lockout has
  passed, one more wrong attempt locks the account again for 15 minutes, so make sure you have
  the right password before you try.

## Two-factor authentication

Two-factor authentication (2FA) asks for a 6-digit code from an authenticator app every time
you sign in, as well as your password. You manage it in the **Two-factor authentication**
card on **Settings → Profile**. It's per person: each user turns it on for their own account.

### Turning it on

1. Click **Set up**.
2. Scan the QR code with your authenticator app, or type in the **Manual entry key** shown
   below it.
3. Enter the 6-digit code the app shows in **Verification code** and click **Verify &
   enable**.

A wrong code gives "Incorrect code — check your authenticator app and try again". After ten
wrong codes within 15 minutes, Ledgerly stops accepting them: "Too many incorrect attempts.
Try again in 15 minutes."

Ledgerly doesn't issue **backup codes**, and there's no self-service way to reset 2FA if you
lose your phone. Keep the manual entry key somewhere safe, or add it to a second device, when
you set it up. If you've lost access to your authenticator app, contact Ledgerly support.

### Turning it off

1. Click **Disable** and confirm "Disable two-factor authentication?" ("Your account will only
   be protected by your password.").
2. Enter your **Current password** and click **Disable 2FA**.

The password check is there so that someone using a session you left signed in can't strip the
second factor. A wrong password gives "Current password is incorrect". After five wrong
passwords within 15 minutes, Ledgerly stops accepting them: "Too many incorrect attempts. Try
again in 15 minutes." This is the same limit that protects changing your password on
[Your profile](/guide/settings/your-profile), and the wrong tries in both places count
together.

## See also

- [Active sessions and security](/guide/settings/security-and-sessions)
- [Your profile](/guide/settings/your-profile)

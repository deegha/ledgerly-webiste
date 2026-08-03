"use client";

import { useActionState } from "react";
import { submitLeadAction, type SubmitLeadActionState } from "@/server/actions/submit-lead";

const initialState: SubmitLeadActionState = { status: "idle" };

const inputClass =
  "border-rule bg-paper-raised text-ink w-full rounded-md border px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-ink-soft text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

export function GetStartedForm() {
  const [state, formAction, pending] = useActionState(submitLeadAction, initialState);

  if (state.status === "success") {
    return (
      <div className="border-rule bg-mist rounded-lg border p-8 text-center">
        <p className="text-ink text-lg font-medium">Thanks — we&apos;ve got it.</p>
        <p className="text-ink-soft mt-2 text-sm">
          We&apos;ll be in touch shortly with an onboarding link.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {/* Honeypot — hidden from real visitors via CSS, not display:none (some
          bots skip fields hidden that way); left blank by anyone who isn't a
          bot filling in every field it can see. 1x1px + clipped rather than
          pushed off-screen, so it can't introduce horizontal page overflow. */}
      <div
        className="absolute h-px w-px overflow-hidden whitespace-nowrap"
        style={{ clip: "rect(0,0,0,0)" }}
        aria-hidden="true"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name">
          <input
            type="text"
            name="contactName"
            required
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field label="Work email">
          <input type="email" name="email" required autoComplete="email" className={inputClass} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Organization name">
          <input type="text" name="organizationName" className={inputClass} />
        </Field>
        <Field label="Phone">
          <input type="tel" name="phone" autoComplete="tel" className={inputClass} />
        </Field>
      </div>

      <Field label="What are you looking for?">
        <textarea name="message" rows={4} className={inputClass} />
      </Field>

      {state.status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="bg-brand mt-2 rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Get started"}
      </button>
    </form>
  );
}

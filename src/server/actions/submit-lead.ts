"use server";

// This site has no database of its own — leads are posted server-to-server
// to the Ledgerly app's public /api/leads route (invoicegen repo), which is
// the system of record. Doing the fetch from a Server Action rather than a
// browser-side call keeps this same-origin from the visitor's perspective
// (no CORS) and keeps NEXT_PUBLIC_APP_URL server-side here.
export type SubmitLeadActionState =
  { status: "idle" } | { status: "error"; message: string } | { status: "success" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitLeadAction(
  _prevState: SubmitLeadActionState,
  formData: FormData,
): Promise<SubmitLeadActionState> {
  const contactName = String(formData.get("contactName") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const organizationName = String(formData.get("organizationName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim(); // honeypot

  if (!contactName || !email) {
    return { status: "error", message: "Name and email are required." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contactName,
        email,
        organizationName: organizationName || undefined,
        phone: phone || undefined,
        message: message || undefined,
        website,
      }),
    });
    if (!res.ok) {
      return { status: "error", message: "Something went wrong — try again." };
    }
    return { status: "success" };
  } catch {
    return { status: "error", message: "Something went wrong — try again." };
  }
}

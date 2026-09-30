import { CtaLink, OutboundLink } from "@/components/cta-link";

const CONTACT_EMAIL = "contact@ledgerly.lk";

export function HomeClose() {
  return (
    <section className="border-rule bg-mist border-t">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl">Stop guessing. Start knowing.</h2>
        <p className="text-ink-soft mx-auto mt-4 max-w-xl text-lg leading-relaxed">
          Start free, or talk to us first if you&apos;d rather ask a question before you do.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CtaLink
            location="home_close"
            href="/get-started"
            className="bg-brand rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Get started
          </CtaLink>
          <OutboundLink
            event="contact_email_click"
            location="home_close"
            href={`mailto:${CONTACT_EMAIL}`}
            className="border-rule-strong text-ink hover:bg-paper-raised rounded-md border px-6 py-3 text-sm font-medium transition-colors"
          >
            Talk to us
          </OutboundLink>
        </div>
      </div>
    </section>
  );
}

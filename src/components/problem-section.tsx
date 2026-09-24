import Image from "next/image";

export function ProblemSection() {
  return (
    <section className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
          How this usually happens
        </span>
        <div className="bg-brand mt-4 mb-5 h-[3px] w-11 rounded-full" />
        <h2 className="max-w-[26ch] text-3xl sm:text-4xl">
          An invoice gets edited. Nobody notices. Then the auditor does.
        </h2>
        <p className="text-ink-soft mt-6 max-w-2xl text-lg leading-relaxed">
          Someone corrects a mistake on an invoice that&apos;s already been paid against. It feels
          harmless — the total&apos;s still right. Three months later, your accountant can&apos;t
          explain why the numbers in two reports don&apos;t agree, and now every figure you&apos;ve
          filed is in question. This isn&apos;t a hypothetical. It&apos;s the single most common
          reason small business books don&apos;t hold up.
        </p>

        <div className="border-rule-strong bg-paper-raised mt-10 overflow-hidden rounded-[10px] border shadow-lg sm:flex">
          <figure className="flex-1">
            <Image
              src="/images/section-2-edited-vs-locked-left.jpg"
              alt="Illustration of a document mid-edit with a pencil and faint disturbance lines, representing most software's editable records"
              width={1344}
              height={768}
              className="block h-auto w-full"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            <figcaption className="border-rule border-t px-5 py-4">
              <p className="text-ink-faint font-mono text-xs font-semibold tracking-[0.1em] uppercase">
                Most software
              </p>
              <p className="text-ink-soft mt-2 text-sm leading-relaxed">
                Line quietly edited after it was posted
                <br />
                Other totals no longer explain themselves
              </p>
            </figcaption>
          </figure>

          <div className="border-rule sm:border-l" aria-hidden="true" />

          <figure className="flex-1">
            <Image
              src="/images/section-2-edited-vs-locked-right.jpg"
              alt="Illustration of an undisturbed document with a padlock and an attached correction note, representing Ledgerly's locked, correctable records"
              width={1344}
              height={768}
              className="block h-auto w-full"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            <figcaption className="border-rule border-t px-5 py-4">
              <p className="text-ink-faint font-mono text-xs font-semibold tracking-[0.1em] uppercase">
                Ledgerly
              </p>
              <p className="text-ink-soft mt-2 text-sm leading-relaxed">
                Invoice stays exactly as it was posted
                <br />
                Credit note explains what changed, and why
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

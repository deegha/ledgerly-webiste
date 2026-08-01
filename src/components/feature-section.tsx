import { ZoomableShot } from "@/components/zoomable-shot";
import type { FeatureChapter } from "@/lib/site-content";

export function FeatureSection({ chapter }: { chapter: FeatureChapter }) {
  const { id, eyebrow, title, body, images, tinted } = chapter;

  return (
    <section id={id} className={`border-rule border-b ${tinted ? "bg-mist" : ""}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-[62ch]">
          <span className="text-brand-ink font-mono text-xs font-semibold tracking-[0.14em] uppercase">
            {eyebrow}
          </span>
          <div className="bg-brand mt-4 mb-5 h-[3px] w-11 rounded-full" />
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <p className="text-ink-soft mt-4 text-base leading-relaxed">{body}</p>
        </div>
        <div className="mt-10 flex flex-col gap-6">
          {images.map((image) => (
            <ZoomableShot key={image.src} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function BrowserFrame({
  src,
  alt,
  width,
  height,
  url,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  url: string;
  priority?: boolean;
}) {
  return (
    <div className="border-rule-strong bg-paper-raised overflow-hidden rounded-[10px] border shadow-lg">
      <div className="border-rule bg-mist-strong flex items-center gap-2 border-b px-3.5 py-2.5">
        <span className="bg-dot-red size-2 rounded-full" />
        <span className="bg-dot-yellow size-2 rounded-full" />
        <span className="bg-dot-green size-2 rounded-full" />
        <span className="border-rule bg-paper text-ink-faint ml-1 max-w-xs flex-1 truncate rounded border px-2.5 py-0.5 font-mono text-[0.68rem]">
          {url}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="block h-auto w-full"
        sizes="(min-width: 1024px) 1050px, 100vw"
        quality={90}
      />
    </div>
  );
}

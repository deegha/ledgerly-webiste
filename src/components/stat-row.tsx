export function StatRow({ stats }: { stats: { n: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1">
          <span className="text-ink font-mono text-3xl font-semibold tracking-tight">{stat.n}</span>
          <span className="text-ink-soft max-w-[22ch] text-sm">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

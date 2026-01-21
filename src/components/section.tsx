export function Section({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm leading-relaxed text-slate-700">{subtitle}</p> : null}
    </div>
  );
}

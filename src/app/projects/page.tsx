import { Section } from "@/components/section";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <Section
        title="Projects"
        subtitle="Short, clear, and engineering-focused. Recruiters love that. Humans too, sometimes."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.oneLiner}</p>
              </div>
              <span className="shrink-0 rounded-full border border-slate-200 px-2 py-1 text-xs text-slate-600">
                {p.dateLabel}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

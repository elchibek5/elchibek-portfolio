// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/ui/button-link";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return { title: "Project" };
  return { title: p.title, description: p.oneLiner };
}

export default function ProjectDetail({ params }: Params) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <div className="space-y-10">
      <Section title={p.title} subtitle={p.oneLiner} />

      <div className="flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="grid gap-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Problem</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{p.problem}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">What I built</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {p.built.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Engineering decisions</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {p.decisions.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Impact</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {p.impact.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          {p.links.github && (
            <ButtonLink href={p.links.github} external>
              GitHub
            </ButtonLink>
          )}
          {p.links.demo && (
            <ButtonLink variant="secondary" href={p.links.demo} external>
              Live Demo
            </ButtonLink>
          )}
          <ButtonLink variant="ghost" href="/projects">
            Back to Projects
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

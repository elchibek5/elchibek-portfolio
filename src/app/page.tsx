// src/app/page.tsx
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="space-y-14">
      <section className="space-y-6">
        <p className="text-sm font-medium text-slate-600">Backend • Reliability • AI Systems</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hi, I’m <span className="text-slate-900">{site.name}</span>.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-700">
          {site.hero}
        </p>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/projects">View Projects</ButtonLink>
          <ButtonLink variant="secondary" href="/experience">
            Experience
          </ButtonLink>
          <ButtonLink variant="secondary" href={site.links.resume} external>
            Resume (PDF)
          </ButtonLink>
          <ButtonLink variant="ghost" href={`mailto:${site.email}`} external>
            Email Me
          </ButtonLink>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          <a className="underline underline-offset-4 hover:text-slate-900" href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>•</span>
          <a className="underline underline-offset-4 hover:text-slate-900" href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      <Section title="What I care about" subtitle="The stuff that actually makes software survive real users.">
        <div className="grid gap-4 sm:grid-cols-2">
          {site.focus.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section title="Featured projects" subtitle="Concrete systems work. Not vibes.">
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <a
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:underline group-hover:underline-offset-4">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{p.oneLiner}</p>
                </div>
                <span className="shrink-0 rounded-full border border-slate-200 px-2 py-1 text-xs text-slate-600">
                  {p.dateLabel}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.slice(0, 5).map((t) => (
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

        <div className="pt-4">
          <ButtonLink variant="secondary" href="/projects">
            See all projects
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}

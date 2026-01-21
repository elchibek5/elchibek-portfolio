import { Section } from "@/components/section";
import { experience } from "@/lib/experience";

export const metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <Section
        title="Experience & Leadership"
        subtitle="Execution, performance, reliability. The unglamorous stuff that makes teams trust you."
      />

      <div className="space-y-4">
        {experience.map((e) => (
          <div key={e.org} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">{e.org}</h3>
                <p className="text-sm text-slate-600">{e.role}</p>
              </div>
              <p className="text-sm text-slate-600">{e.date}</p>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

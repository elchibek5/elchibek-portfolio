import { Section } from "@/components/section";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <Section
        title="Contact"
        subtitle="If you want someone who cares about reliability, performance, and shipping, we should talk."
      />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-700">
          Email:{" "}
          <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${site.email}`} external>
            Email Me
          </ButtonLink>
          <ButtonLink variant="secondary" href={site.links.linkedin} external>
            LinkedIn
          </ButtonLink>
          <ButtonLink variant="secondary" href={site.links.github} external>
            GitHub
          </ButtonLink>
          <ButtonLink variant="ghost" href={site.links.resume} external>
            Resume (PDF)
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

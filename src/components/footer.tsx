import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. Built with Next.js.</p>
        <div className="flex gap-3">
          <a className="hover:text-slate-900 underline underline-offset-4" href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-slate-900 underline underline-offset-4" href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

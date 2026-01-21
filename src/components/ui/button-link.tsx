import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

const styles: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800",
  secondary:
    "inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50",
  ghost:
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900",
};

export function ButtonLink({ href, children, external, variant = "primary" }: Props) {
  const className = styles[variant];

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

import { ReactNode } from "react";

type Props = {
  id: string;
  overline: string;
  title: string;
  subtitle?: string;
  surface?: "surf1" | "surf2";
  children: ReactNode;
  className?: string;
};

export default function Section({ id, overline, title, subtitle, surface = "surf1", children, className }: Props) {
  const surfaceClass =
    surface === "surf2"
      ? "bg-[color:var(--surf2)]"
      : "bg-[color:var(--surf1)]";

  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl scroll-mt-24 px-6 py-12 mt-8 border border-[color:var(--border)] rounded-2xl ${surfaceClass} ${className || ""}`}
    >
      <p className="text-[11px] uppercase tracking-widest text-[color:var(--accent)]/90">{overline}</p>
      <h2 className="mt-1 text-3xl font-semibold text-[color:var(--heading)]">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm text-[color:var(--muted)]">{subtitle}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
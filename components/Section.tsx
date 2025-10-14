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

export default function Section({
  id,
  overline,
  title,
  subtitle,
  surface = "surf1",
  children,
  className,
}: Props) {
  const surfaceClass =
    surface === "surf2" ? "bg-[color:var(--surf2)]/78" : "bg-[color:var(--surf1)]/78";

  return (
    <section
      id={id}
      className={`group relative mx-auto mt-10 max-w-6xl scroll-mt-32 overflow-hidden rounded-[1.5rem] border border-white/12 px-6 py-12 shadow-[0_35px_80px_-40px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:px-10 sm:py-14 ${surfaceClass} ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-90 [mask-image:radial-gradient(circle_at_top,black,transparent_78%)]">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_-10%,rgba(102,224,194,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05),transparent_65%)]" />
      </div>
      <div className="pointer-events-none absolute -bottom-32 right-[-20%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)] opacity-70 transition-transform duration-700 group-hover:translate-y-6" />

      <div className="relative z-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--accent)]/80">
          {overline}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[color:var(--heading)] sm:text-[2.5rem]">
          {title}
        </h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-sm text-[color:var(--muted)]">{subtitle}</p> : null}

        <div className="mt-8 space-y-6">{children}</div>
      </div>
    </section>
  );
}

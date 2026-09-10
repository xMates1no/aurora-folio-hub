import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="aurora top-[-6rem] left-[-4rem] h-72 w-72 bg-primary" aria-hidden />
      <div className="aurora top-24 right-[-6rem] h-80 w-80 bg-violet" aria-hidden />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet" />
          Available for freelance work
        </span>

        <h1 className="mt-6 text-4xl leading-tight font-bold sm:text-6xl">
          I design & build <span className="text-gradient">digital products</span> that feel alive
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Product designer and front-end developer crafting fast, accessible interfaces — from first
          sketch to shipped release.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#work"
            className="bg-brand-gradient group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)] sm:w-auto"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:border-violet hover:bg-secondary sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>

        <dl className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4">
          {[
            ["8+", "Years"],
            ["120+", "Projects"],
            ["40+", "Clients"],
          ].map(([value, label]) => (
            <div key={label} className="glass-card rounded-xl px-3 py-4">
              <dt className="text-gradient text-2xl font-bold">{value}</dt>
              <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

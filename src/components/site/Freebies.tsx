import { Download, FileText, Palette, Wrench } from "lucide-react";
import { toast } from "sonner";
import { Section, SectionHeading } from "./Section";

const freebies = [
  {
    icon: Palette,
    title: "Dark UI Kit",
    description: "80+ components in a ready-to-use dark design system with tokens.",
    meta: "Figma · 12 MB",
  },
  {
    icon: FileText,
    title: "Launch Checklist",
    description: "The 42-point checklist I run before shipping any client project.",
    meta: "PDF · 1.4 MB",
  },
  {
    icon: Wrench,
    title: "Tailwind Snippets",
    description: "Gradient, glow and glass utility recipes you can paste anywhere.",
    meta: "ZIP · 220 KB",
  },
];

export function Freebies() {
  return (
    <Section id="freebies">
      <SectionHeading
        eyebrow="Free Resources"
        title={
          <>
            Freebies, <span className="text-gradient">no strings</span>
          </>
        }
        description="Assets, tools and guides I give away for free. No email wall."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {freebies.map((f) => (
          <div key={f.title} className="glass-card flex flex-col rounded-xl p-6">
            <span className="bg-brand-gradient grid h-11 w-11 place-items-center rounded-xl">
              <f.icon className="h-5 w-5 text-primary-foreground" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{f.description}</p>
            <span className="mt-4 text-xs tracking-wide text-muted-foreground uppercase">
              {f.meta}
            </span>
            <button
              type="button"
              onClick={() => toast.success(`Downloading “${f.title}”`, { description: f.meta })}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-violet hover:bg-secondary"
            >
              <Download className="h-4 w-4" />
              Download free
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}

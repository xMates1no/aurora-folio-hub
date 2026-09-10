import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import pRajce from "@/assets/project-rajce.jpg";

const projects = [
  {
    image: pRajce,
    title: "Rajče.pro",
    tag: "Minecraft Server",
    description:
      "Custom Blockbench models, textures and animations for one of the biggest Czech & Slovak Minecraft servers.",
  },
];

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="My Work"
        title={<>Selected projects</>}
        description="A few recent builds across product design, front-end engineering and brand."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="glass-card group overflow-hidden rounded-xl">
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                width={1024}
                height={768}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
              />
            </div>
            <div className="p-6">
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                {p.tag}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors hover:text-foreground"
              >
                View details
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import rajceLogo from "@/assets/logo-rajce.webp.asset.json";
import rajceIcon from "@/assets/rajce-icon.png.asset.json";
import hestreng from "@/assets/hestreng.webp.asset.json";

const projects = [
  {
    image: rajceLogo.url,
    fit: "contain" as const,
    gradient:
      "radial-gradient(120% 120% at 20% 0%, color-mix(in oklab, var(--violet) 45%, transparent) 0%, transparent 60%), linear-gradient(135deg, oklch(0.28 0.12 275), oklch(0.22 0.1 240))",
    title: "Rajče.pro — Server logo",
    tag: "Branding",
    description:
      "Pixel-perfect logo treatment used across the server's site, launcher and socials.",
  },
  {
    image: rajceIcon.url,
    fit: "contain" as const,
    gradient:
      "radial-gradient(120% 120% at 80% 10%, color-mix(in oklab, var(--primary) 40%, transparent) 0%, transparent 60%), linear-gradient(135deg, oklch(0.24 0.11 250), oklch(0.2 0.13 300))",
    title: "Rajče.pro — Server icon",
    tag: "Icon Art",
    description:
      "Stylised tomato mascot icon designed to stand out in the Minecraft server list.",
  },
  {
    image: hestreng.url,
    fit: "contain" as const,
    gradient:
      "radial-gradient(120% 120% at 50% 0%, color-mix(in oklab, var(--violet) 40%, transparent) 0%, transparent 65%), linear-gradient(160deg, oklch(0.22 0.1 265), oklch(0.18 0.08 230))",
    title: "Hestreng — Character render",
    tag: "Blockbench Model",
    description:
      "Custom character model, textures and pose render made for the Rajče.pro community.",
  },
];

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="My Work"
        title={<>Selected projects</>}
        description="Models, icons and branding built for Minecraft servers."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="glass-card group overflow-hidden rounded-xl">
            <div
              className="relative flex h-52 items-center justify-center overflow-hidden p-6 sm:h-56"
              style={{ backgroundImage: p.gradient }}
            >
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                className="max-h-full max-w-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-105"
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

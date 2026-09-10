import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import rajceLogo from "@/assets/logo-rajce.webp.asset.json";
import rajceIcon from "@/assets/rajce-icon.png.asset.json";
import hestreng from "@/assets/hestreng.webp.asset.json";

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="My Work"
        title={<>Selected projects</>}
        description="Models, textures and animations built for Minecraft servers."
      />

      <div className="mx-auto max-w-3xl">
        <article className="glass-card group overflow-hidden rounded-xl">
          <div
            className="relative flex h-64 items-center justify-center overflow-hidden px-8 sm:h-72"
            style={{
              backgroundImage:
                "radial-gradient(120% 120% at 20% 0%, color-mix(in oklab, var(--violet) 45%, transparent) 0%, transparent 60%), linear-gradient(135deg, oklch(0.28 0.12 275), oklch(0.2 0.1 240))",
            }}
          >
            <img
              src={rajceIcon.url}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute -bottom-8 -left-6 h-40 w-40 opacity-60 blur-[0.5px] transition-transform duration-500 group-hover:-translate-y-2 sm:h-48 sm:w-48"
            />
            <img
              src={hestreng.url}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute right-2 bottom-0 h-52 drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-2 sm:right-6 sm:h-60"
            />
            <img
              src={rajceLogo.url}
              alt="Rajče.pro logo"
              loading="lazy"
              className="relative z-10 w-48 max-w-[60%] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] sm:w-64"
            />
          </div>
          <div className="p-6">
            <span className="text-xs tracking-widest text-muted-foreground uppercase">
              Minecraft Server
            </span>
            <h3 className="mt-2 text-xl font-semibold">Rajče.pro</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Custom Blockbench models, textures and animations for one of the biggest Czech &amp;
              Slovak Minecraft servers.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors hover:text-foreground"
            >
              View details
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </article>
      </div>
    </Section>
  );
}

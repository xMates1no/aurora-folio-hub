import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const includes = [
  "Custom Blockbench models built to your brief",
  "Textures and simple animations",
  "Resource pack files ready to drop in",
  "7 revisions included, €5 per extra revision",
];

export function Checkout() {
  return (
    <Section id="checkout">
      <SectionHeading
        eyebrow="Get started"
        title={
          <>
            The <span className="text-gradient">Basic Pack</span>
          </>
        }
        description="No payment on the spot — take a look at what you get, then message me."
      />

      <div className="glass-card mx-auto grid max-w-4xl gap-8 rounded-xl p-6 sm:p-8 md:grid-cols-[1fr_1fr]">
        <div>
          <div className="flex items-end gap-2">
            <span className="text-gradient text-4xl font-bold">€50</span>
            <span className="pb-1 text-xs text-muted-foreground">per pack</span>
          </div>
          <ul className="mt-6 space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-3 rounded-xl border border-border bg-secondary/30 p-6">
          <p className="text-sm text-muted-foreground">
            Tell me what you need and I&apos;ll send back a timeline and a fixed price within 24
            hours.
          </p>
          <a
            href="#contact"
            className="bg-brand-gradient group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
          >
            Contact me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://discord.gg/r8r4DVjbfh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:border-violet hover:bg-secondary"
          >
            <MessageCircle className="h-4 w-4" />
            Join my Discord
          </a>
        </div>
      </div>
    </Section>
  );
}

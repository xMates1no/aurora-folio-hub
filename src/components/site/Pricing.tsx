import { Check } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const plans = [
  {
    name: "Basic Pack",
    price: "€50",
    cadence: "per pack",
    blurb: "A full set of custom Blockbench models for your Minecraft server.",
    features: [
      "Custom models & textures",
      "Ready-to-use resource pack files",
      "7 revisions included (€5 each after)",
      "About one week delivery",
    ],
    popular: true,
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title={<>Simple, honest packages</>}
        description="Fixed scope, fixed price. No surprise invoices."
      />

      <div className="grid items-start gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`glass-card relative flex flex-col rounded-xl p-7 ${
              plan.popular ? "border-violet/60 shadow-[var(--shadow-glow-violet)] md:-mt-4" : ""
            }`}
          >
            {plan.popular ? (
              <span className="bg-brand-gradient absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most popular
              </span>
            ) : null}
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-gradient text-4xl font-bold">{plan.price}</span>
              <span className="pb-1 text-xs text-muted-foreground">{plan.cadence}</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#checkout"
              className={`mt-7 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                plan.popular
                  ? "bg-brand-gradient text-primary-foreground hover:shadow-[var(--shadow-glow)]"
                  : "border border-border bg-secondary/60 hover:border-violet hover:bg-secondary"
              }`}
            >
              Choose {plan.name}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

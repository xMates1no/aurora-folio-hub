import { Check } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const plans = [
  {
    name: "Starter",
    price: "€890",
    cadence: "per project",
    blurb: "A focused landing page or a single feature, designed and shipped.",
    features: ["1 page design", "Responsive build", "2 revision rounds", "7-day delivery"],
    popular: false,
  },
  {
    name: "Pro",
    price: "€2 400",
    cadence: "per project",
    blurb: "A complete product site or app UI with a reusable design system.",
    features: [
      "Up to 6 pages",
      "Design system & tokens",
      "Front-end implementation",
      "Unlimited revisions",
      "3-week delivery",
    ],
    popular: true,
  },
  {
    name: "Retainer",
    price: "€3 200",
    cadence: "per month",
    blurb: "Ongoing design & development capacity for growing teams.",
    features: ["Dedicated weekly hours", "Priority support", "Async standups", "Cancel anytime"],
    popular: false,
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

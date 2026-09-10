import { useState } from "react";
import { CreditCard, Lock, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const packages = [
  { id: "starter", label: "Starter", amount: "€890" },
  { id: "pro", label: "Pro", amount: "€2 400" },
  { id: "retainer", label: "Retainer", amount: "€3 200" },
];

const inputClass =
  "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-violet focus:ring-2 focus:ring-ring/40";

export function Checkout() {
  const [selected, setSelected] = useState("pro");
  const [status, setStatus] = useState<"idle" | "processing" | "paid">("idle");

  const chosen = packages.find((p) => p.id === selected)!;

  const pay = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("processing");
    setTimeout(() => setStatus("paid"), 1800);
  };

  return (
    <Section id="checkout">
      <SectionHeading
        eyebrow="Checkout"
        title={
          <>
            Reserve your <span className="text-gradient">project slot</span>
          </>
        }
        description="A demo checkout — no real card is charged."
      />

      <div className="glass-card mx-auto grid max-w-4xl gap-8 rounded-xl p-6 sm:p-8 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Select package</p>
          <div className="mt-3 space-y-3">
            {packages.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelected(p.id)}
                className={`grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                  selected === p.id
                    ? "border-violet bg-secondary"
                    : "border-border bg-secondary/40 hover:bg-secondary/70"
                }`}
              >
                <span className="truncate text-sm font-medium">{p.label} package</span>
                <span className="shrink-0 text-sm font-semibold">{p.amount}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-2 rounded-xl border border-border bg-secondary/30 p-4 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>{chosen.amount}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>VAT</span>
              <span>Included</span>
            </div>
            <div className="flex justify-between border-t border-border pt-2 font-semibold">
              <span>Total today</span>
              <span className="text-gradient">{chosen.amount}</span>
            </div>
          </div>
        </div>

        <form onSubmit={pay} className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-violet" />
            Secure demo payment
            <span className="ml-auto flex items-center gap-1.5">
              <span className="rounded-md border border-border bg-secondary/60 px-2 py-1 text-[10px] font-semibold">
                VISA
              </span>
              <span className="rounded-md border border-border bg-secondary/60 px-2 py-1 text-[10px] font-semibold">
                MC
              </span>
              <span className="rounded-md border border-border bg-secondary/60 px-2 py-1 text-[10px] font-semibold">
                AMEX
              </span>
            </span>
          </div>

          <input className={inputClass} placeholder="Name on card" required />
          <input className={inputClass} type="email" placeholder="Email address" required />
          <div className="relative">
            <input
              className={`${inputClass} pl-11`}
              placeholder="4242 4242 4242 4242"
              inputMode="numeric"
              required
            />
            <CreditCard className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input className={inputClass} placeholder="MM / YY" required />
            <input className={inputClass} placeholder="CVC" required />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="bg-brand-gradient inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)] disabled:opacity-80"
          >
            {status === "idle" ? (
              <>
                <Lock className="h-4 w-4" /> Pay {chosen.amount}
              </>
            ) : null}
            {status === "processing" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Processing…
              </>
            ) : null}
            {status === "paid" ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Payment confirmed
              </>
            ) : null}
          </button>

          {status === "paid" ? (
            <p className="text-center text-xs text-muted-foreground">
              Demo only — no card was charged. I&apos;ll be in touch within 24 hours.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}

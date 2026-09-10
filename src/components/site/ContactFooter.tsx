import { useState } from "react";
import { Github, Linkedin, Twitter, Dribbble, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Section, SectionHeading } from "./Section";

const inputClass =
  "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-violet focus:ring-2 focus:ring-ring/40";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "X", href: "https://x.com" },
  { icon: Dribbble, label: "Dribbble", href: "https://dribbble.com" },
];

export function ContactFooter() {
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Message sent", { description: "I'll reply within 24 hours." });
    }, 1200);
  };

  return (
    <>
      <Section id="contact">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">good</span>
            </>
          }
          description="Tell me about your project and I'll get back to you within a day."
        />

        <form onSubmit={submit} className="glass-card mx-auto max-w-2xl space-y-3 rounded-xl p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-2">
            <input className={inputClass} placeholder="Your name" required />
            <input className={inputClass} type="email" placeholder="Email address" required />
          </div>
          <input className={inputClass} placeholder="Subject" required />
          <textarea className={`${inputClass} min-h-32 resize-y`} placeholder="Your message" required />
          <button
            type="submit"
            disabled={sending}
            className="bg-brand-gradient inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)] disabled:opacity-80"
          >
            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      </Section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="min-w-0">
            <p className="font-display text-lg font-bold">Matúš Hlobil</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Product design & front-end development · Bratislava
            </p>
          </div>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary/50 transition-colors duration-300 hover:border-violet hover:bg-secondary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} Matúš Hlobil. All rights reserved.
        </p>
      </footer>
    </>
  );
}

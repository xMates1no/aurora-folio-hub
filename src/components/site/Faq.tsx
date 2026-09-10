import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, SectionHeading } from "./Section";

const faqs = [
  {
    q: "How do we start working together?",
    a: "Send a short brief through the contact form. I reply within 24 hours with a scope proposal, timeline and a fixed price.",
  },
  {
    q: "What is your typical turnaround?",
    a: "A landing page takes about a week. Full product work usually runs two to four weeks depending on the number of screens.",
  },
  {
    q: "Do you work with existing design systems?",
    a: "Yes. I can extend your current system or build one from scratch with documented tokens and components.",
  },
  {
    q: "How does payment work?",
    a: "50% up front to reserve the slot, 50% on delivery. Retainers are billed monthly and can be cancelled any time.",
  },
  {
    q: "Are the free resources really free?",
    a: "Completely. No email required, no license fee — use them in personal and commercial work.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title={<>Questions, answered</>}
        description="The things clients ask me most often before we kick off."
      />

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="glass-card rounded-xl border px-5"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

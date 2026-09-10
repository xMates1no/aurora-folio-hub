import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, SectionHeading } from "./Section";

const faqs = [
  {
    q: "How do we start working together?",
    a: "Send a short brief through the contact form or my Discord server. I reply within 24 hours with a scope proposal, timeline and a fixed price.",
  },
  {
    q: "What is your typical turnaround?",
    a: "A full Blockbench set takes about a week. You have 7 revisions included, with every additional revision costing €5.",
  },
  {
    q: "How does payment work?",
    a: "50% up front to reserve the slot, 50% on delivery.",
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

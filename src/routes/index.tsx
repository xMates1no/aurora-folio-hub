import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { Freebies } from "@/components/site/Freebies";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { Checkout } from "@/components/site/Checkout";
import { ContactFooter } from "@/components/site/ContactFooter";

const title = "Matúš Hlobil — Product Designer & Front-End Developer";
const description =
  "Portfolio of Matúš Hlobil: product design and front-end development. Selected work, free resources, pricing and a contact form.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <Work />
      <Freebies />
      <Pricing />
      <Faq />
      <Checkout />
      <ContactFooter />
    </main>
  );
}

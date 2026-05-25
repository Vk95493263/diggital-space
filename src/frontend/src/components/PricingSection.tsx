import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import type { PricingTier } from "@/types";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$1,499",
    period: "/mo",
    description: "Perfect for small businesses starting their digital journey.",
    features: [
      "SEO Audit & Keyword Research",
      "3 Social Channels Managed",
      "Basic Performance Reporting",
      "Email Support",
      "Monthly Strategy Review",
      "Competitor Analysis",
    ],
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$3,999",
    period: "/mo",
    description: "Ideal for growing brands ready to scale aggressively.",
    features: [
      "Full SEO & Content Strategy",
      "All Social Channels Managed",
      "Google & Meta Ads Management",
      "Content Marketing (8 posts/mo)",
      "Priority Email & Chat Support",
      "Custom Analytics Dashboard",
      "Landing Page Optimization",
      "Weekly Performance Reports",
    ],
    highlighted: true,
    cta: "Start Growing",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "Tailored solutions for large organizations with complex needs.",
    features: [
      "Everything in Growth Plan",
      "Dedicated Account Manager",
      "White-label Client Reports",
      "Custom Growth Strategy",
      "24/7 Priority Phone Support",
      "API Access & Integrations",
      "Multi-location Campaign Management",
      "On-site Training & Workshops",
    ],
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="pricing" bg="muted">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
          Pricing
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Transparent <span className="text-gradient-premium">Pricing</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          No hidden fees, no surprises. You pay exactly what you see — and you
          see exactly what you get.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            className={`relative rounded-2xl border p-8 transition-smooth ${
              tier.highlighted
                ? "border-primary/60 bg-card shadow-glow-purple scale-[1.03] md:scale-105 z-10"
                : "border-border bg-card/50 hover:border-primary/30 hover:shadow-luxury hover:-translate-y-1"
            }`}
            data-ocid={`pricing.card.${tier.id}`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-premium px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
                Most Popular
              </div>
            )}

            <h3 className="font-display text-xl font-semibold text-foreground">
              {tier.name}
            </h3>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-foreground">
                {tier.price}
              </span>
              {tier.period && (
                <span className="text-muted-foreground text-sm">
                  {tier.period}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {tier.description}
            </p>

            <ul className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`mt-8 w-full rounded-full py-5 font-semibold transition-smooth ${
                tier.highlighted
                  ? "bg-gradient-premium text-primary-foreground shadow-glow-purple hover:shadow-glow-cyan hover:scale-[1.02]"
                  : "border border-border bg-transparent text-foreground hover:bg-muted/50 hover:border-primary/30"
              }`}
              variant={tier.highlighted ? "default" : "outline"}
              onClick={scrollToContact}
              data-ocid={`pricing.cta.${tier.id}`}
            >
              {tier.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

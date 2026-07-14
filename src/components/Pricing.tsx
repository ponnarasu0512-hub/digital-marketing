import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, ShieldAlert, Zap, Award, Info, HelpCircle } from "lucide-react";

interface PricingProps {
  onBookClick: () => void;
}

export default function Pricing({ onBookClick }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      sub: "Perfect for startups and rising creators.",
      priceMonthly: 9999,
      priceYearly: 7999,
      features: [
        "Essential SEO Optimization",
        "Social Media Content Framework",
        "1 Active Channel Managed",
        "Basic Meta Ad Setup",
        "Monthly Progress Telemetry",
        "Email Support Response (24h)"
      ],
      cta: "Choose Starter Plan",
      badge: "",
      icon: Info
    },
    {
      id: "growth",
      name: "Growth",
      sub: "Advanced scaling for high-intent companies.",
      priceMonthly: 19999,
      priceYearly: 15999,
      features: [
        "Complete Technical & Local SEO",
        "Meta & Google Ads Scaling",
        "3 Active Channels Managed",
        "Complete LinkedIn Copywriting",
        "Dedicated Marketing Strategist",
        "Weekly Status Sync Nodes",
        "Priority Slack Channel Access"
      ],
      cta: "Choose Growth Plan",
      badge: "POPULAR",
      icon: Zap
    },
    {
      id: "premium",
      name: "Pro",
      sub: "Complete omnichannel category dominance.",
      priceMonthly: 39999,
      priceYearly: 31999,
      features: [
        "Full Omnichannel Authority Grid",
        "Advanced PR & Media Placements",
        "Speaking & Podcast Guest Sourcing",
        "Autonomous AI Lead Automation",
        "Custom Visual Production Maps",
        "Dedicated CMO Advisory Access",
        "Instant Slack Response (Sub-1h)"
      ],
      cta: "Choose Premium Plan",
      badge: "DOMINATE",
      icon: Award
    }
  ];

  return (
    <section id="pricing" className="relative py-20 bg-brand-black overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            PRICING SCHEDULER
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Our Pricing Plans
          </h2>
          {/* Japanese subtitle */}
          <div className="mt-2 font-display text-xs tracking-[0.25em] text-brand-accent/80 font-medium">
            最適なプランで、あなたのビジネスをサポート。
          </div>
          <p className="mt-4 text-brand-gray text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Choose a tactical scaling block built to generate conversions and build category authority. No hidden terms.
          </p>
        </div>

        {/* Toggle Switcher Monthly / Yearly */}
        <div className="flex justify-center items-center space-x-3 mb-16">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all ${
              billingCycle === "monthly"
                ? "bg-white text-brand-black shadow"
                : "text-brand-gray hover:text-white"
            }`}
          >
            Monthly
          </button>
          
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all flex items-center space-x-1.5 ${
              billingCycle === "yearly"
                ? "bg-brand-accent text-white shadow shadow-brand-accent/20"
                : "text-brand-gray hover:text-white"
            }`}
          >
            <span>Yearly</span>
            <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white font-black">
              Save 20%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.badge === "POPULAR";
            const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;
            const PlanIcon = plan.icon;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 ${
                  isPopular
                    ? "bg-brand-secondary border-brand-accent shadow-xl shadow-brand-accent/5 box-glow"
                    : "bg-brand-secondary/40 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <span className={`absolute top-5 right-5 text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase ${
                    isPopular ? "bg-brand-accent text-white" : "bg-white/10 text-white"
                  }`}>
                    {plan.badge}
                  </span>
                )}

                <div>
                  {/* Plan Identifier */}
                  <div className="flex items-center space-x-2.5 mb-4">
                    <div className="w-8 h-8 rounded bg-brand-accent/10 border border-brand-accent/25 flex items-center justify-center">
                      <PlanIcon className="w-4 h-4 text-brand-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-brand-gray text-xs leading-relaxed font-semibold mb-6">
                    {plan.sub}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline mb-6 border-b border-white/5 pb-6">
                    <span className="font-display text-3xl sm:text-4xl font-black text-white font-numbers text-glow">
                      ₹{price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-brand-gray text-xs font-semibold ml-2">
                      / month
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-3 text-xs font-semibold text-white/90">
                        <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing CTA */}
                <button
                  onClick={onBookClick}
                  className={`mt-8 w-full py-3.5 rounded-xl font-sans text-xs font-black tracking-widest uppercase transition-all ${
                    isPopular
                      ? "bg-brand-accent text-white hover:bg-brand-accent-light shadow shadow-brand-accent/20 hover:scale-102"
                      : "bg-white/5 text-white border border-white/10 hover:border-brand-accent hover:bg-brand-accent/5"
                  }`}
                  id={`pricing-${plan.id}-btn`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Tail note */}
        <div className="mt-12 text-center text-xs font-medium text-brand-gray">
          Need a custom scaling matrix for enterprise grids?{" "}
          <button
            onClick={onBookClick}
            className="text-brand-accent font-bold hover:underline"
          >
            Contact us
          </button>{" "}
          for a bespoke campaign layout.
        </div>
      </div>
    </section>
  );
}

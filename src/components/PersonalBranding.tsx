import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ShieldCheck, HeartHandshake, Eye, Sparkles, MessageSquare, Mic, PenTool, Radio, Newspaper } from "lucide-react";

export default function PersonalBranding() {
  const [selectedRole, setSelectedRole] = useState<string>("Founders");

  const roles = ["Founders", "CEOs", "Creators", "Doctors", "Lawyers", "Influencers", "Coaches", "Freelancers"];

  const roleDetails: Record<string, { desc: string; metrics: string; statement: string }> = {
    Founders: {
      desc: "Connect directly with angel investors, VC networks, and prospective hires by becoming an authoritative thought leader.",
      metrics: "3.5x inbound inbound investment loops • +200% talent pipeline",
      statement: "Build category authority that translates directly to funding round traction and strategic brand value."
    },
    CEOs: {
      desc: "Surgical LinkedIn publishing and PR vectors to command massive sector weight, outshining enterprise competition.",
      metrics: "15M+ organic impressions • Brand premium pricing power",
      statement: "Leverage executive authority to build brand confidence, mitigate sales friction, and lead public sector dialogue."
    },
    Creators: {
      desc: "Transform simple views into a high-converting digital infrastructure, monetization funnels, and enterprise partnerships.",
      metrics: "50K+ newsletter growth • 4.5% conversion to paid memberships",
      statement: "Own your audience. We build high-retention newsletter lists, digital schools, and brand deal packages on autopilot."
    },
    Doctors: {
      desc: "Establish undisputed medical authority and clinic trust through HIPAA-compliant content, Reels, and local SEO leadership.",
      metrics: "+300% private patient bookings • Medical category supremacy",
      statement: "Position your expertise safely. We manage premium clinical filming, medical copywriting, and local clinic map authority."
    },
    Lawyers: {
      desc: "Win high-stakes institutional cases by projecting unparalleled legal mastery and specialized case summaries.",
      metrics: "Rank #1 for high-value legal searches • Authority PR",
      statement: "Command boardroom presence before the first meeting. Flawless LinkedIn briefs and legal category dominance."
    },
    Influencers: {
      desc: "Transition from simple brand sponsorships into owning scalable DTC merchandise networks and premium ventures.",
      metrics: "8.2% engagement coefficient • Private enterprise setups",
      statement: "Own the equity. We help you launch and scale private brands using high-conversion, highly loyal demographic grids."
    },
    Coaches: {
      desc: "Sell out high-ticket advisory circles and masterminds through automated webinar nodes and trust matrices.",
      metrics: "₹10L+ program launches • 100% automated booking calendar",
      statement: "Replace hours with scale. High-ticket authority campaigns that pre-sell leads before they get on call."
    },
    Freelancers: {
      desc: "Shift from freelance bidding sites to booking retainer projects with enterprise clients on auto-pilot.",
      metrics: "3x average contract size • Consistent inbound client queue",
      statement: "Position as an elite consultant. Elevate your portfolio and command premium enterprise pricing grids."
    }
  };

  const brandingServices = [
    { name: "LinkedIn Branding", icon: MessageSquare, desc: "Surgical copywriting and graphic layouts designed for professional networks." },
    { name: "Instagram Growth", icon: Sparkles, desc: "Algorithm-optimized content grids to turn visual views into brand customers." },
    { name: "PR & Media Placements", icon: Newspaper, desc: "Earning features in authoritative online and print news publications." },
    { name: "Podcast Strategy", icon: Radio, desc: "Securing key guest interviews and building private high-retention audio channels." },
    { name: "Reels Strategy", icon: PenTool, desc: "High-hook, hyper-kinetic short-form video plans utilizing custom visual templates." },
    { name: "Speaking Opportunities", icon: Mic, desc: "Sourcing and booking high-impact keynote stages and institutional events." }
  ];

  return (
    <section id="personal-branding" className="relative py-20 bg-brand-black overflow-hidden">
      {/* Background soft lighting overlays */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            EXECUTIVE PRESENCE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-none">
            Build Your Personal Brand
          </h2>
          <p className="mt-4 text-brand-gray text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Become the undisputed icon in your space. We craft high-end personal narrative nodes for leaders, creators, and professionals.
          </p>
        </div>

        {/* Roles Selector Horizontal Bar */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2.5 mb-12">
          {roles.map((role) => {
            const isActive = selectedRole === role;
            return (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-brand-accent text-white shadow-md shadow-brand-accent/20"
                    : "bg-white/5 text-brand-gray hover:text-white"
                }`}
              >
                For {role}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel for selected role */}
        <div className="bg-brand-secondary/50 border border-white/5 rounded-3xl p-6 md:p-10 glassmorphism mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRole}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Description & Metrics */}
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[10px] font-black tracking-widest text-brand-accent uppercase block">
                  STRATEGIC ALIGNMENT FOR {selectedRole.toUpperCase()}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-black text-white">
                  {roleDetails[selectedRole].statement}
                </h3>
                <p className="text-brand-gray text-xs md:text-sm font-medium leading-relaxed max-w-2xl">
                  {roleDetails[selectedRole].desc}
                </p>

                {/* KPI stats tag */}
                <div className="inline-flex items-center space-x-2 bg-brand-accent/5 border border-brand-accent/20 px-3.5 py-2 rounded-xl mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-xs font-bold text-white font-numbers uppercase tracking-wider">
                    {roleDetails[selectedRole].metrics}
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Callout (Luxury Icon Card) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center w-full max-w-[280px]">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-brand-accent" />
                  </div>
                  <span className="text-xs font-black text-white block uppercase tracking-widest mb-1">
                    ACT ON VIP GRID
                  </span>
                  <p className="text-[11px] text-brand-gray font-semibold leading-relaxed">
                    Personalized consultation with elite specialists. Sub-day onboarding.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Branding Services Sub-Grid */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            BRAND MODULES
          </span>
          <h3 className="font-display text-2xl font-black text-white">
            Our Personal Branding Suite
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandingServices.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-brand-secondary/30 border border-white/5 p-6 rounded-2xl glassmorphism hover:border-brand-accent/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-brand-accent/10 border border-brand-accent/15 flex items-center justify-center mb-4">
                    <ServiceIcon className="w-4 h-4 text-brand-accent" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-white mb-2 tracking-tight">
                    {service.name}
                  </h4>
                  <p className="text-brand-gray text-[11px] leading-relaxed font-semibold">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

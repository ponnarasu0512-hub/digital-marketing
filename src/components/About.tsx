import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Compass, Eye, Shield, Target, Award, Cpu, TrendingUp, Users, Clock, Flame } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
}

function Counter({ end, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <span className="font-display text-4xl md:text-5xl font-black tracking-tight text-white font-numbers text-glow">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const pillars = [
    { icon: Cpu, title: "Creative Thinking", desc: "Unleashing bold, out-of-the-box creative ideas that make your brand stand out." },
    { icon: TrendingUp, title: "Performance Marketing", desc: "Surgical ad spend optimization engineered to maximize lead velocity and return on ad spend." },
    { icon: Target, title: "Data Driven Strategy", desc: "No guesswork. Every campaign and asset is optimized against real conversion data." },
    { icon: Users, title: "Experienced Team", desc: "A collective of specialized content creators, video editors, and digital marketers." },
    { icon: Clock, title: "Fast Delivery", desc: "Rapid asset generation and campaign deployment operating with sub-day onboarding velocity." },
    { icon: Shield, title: "Dedicated Support", desc: "Operative WhatsApp and direct communications with ultra-fast, dedicated response teams." },
    { icon: Award, title: "Affordable Solutions", desc: "Premium digital agency value streamlined to support startups, creators, and scale-ups." },
    { icon: Flame, title: "Results Focused", desc: "Obsessed with metrics that matter: click-through rates, client acquisition costs, and total revenue." }
  ];

  return (
    <section id="about" className="relative py-20 bg-brand-black overflow-hidden">
      {/* Background neon dots/grid element */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main Container - Curved Slate Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-secondary/40 border border-white/5 rounded-[40px] p-8 md:p-16 glassmorphism">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Content (Grayscale Cyberpunk samurai overlay) */}
            <div className="lg:col-span-5 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
                alt="Cyberpunk Tokyo Street"
                className="w-full h-full object-cover grayscale contrast-125 brightness-40 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              
              {/* Abstract visual mask glow */}
              <div className="absolute inset-0 border-[2px] border-brand-accent/20 rounded-3xl pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-1">
                  EASTERN CODEX
                </span>
                <p className="font-display text-sm font-bold text-white leading-tight">
                  Discipline. Execution. Supremacy.
                </p>
              </div>
            </div>

            {/* Right Information Block */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
                About ACT ON Creation
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
                About ACT ON Creation
              </h2>
              <p className="mt-4 text-brand-gray text-xs md:text-sm font-medium leading-relaxed">
                ACT ON Creation is a creative-first digital agency dedicated to helping brands grow through innovative marketing strategies, engaging visual content, and impactful digital experiences.
              </p>
              <p className="mt-2 text-brand-gray text-xs md:text-sm font-medium leading-relaxed">
                We combine creativity, storytelling, branding, and performance marketing to build brands that people remember and trust.
              </p>

              {/* Core Checklists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Result-Driven Strategies",
                  "Creative & Modern Approach",
                  "Transparent Communication",
                  "Dedicated Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white/5 border border-white/5 p-3 rounded-xl">
                    <div className="w-5 h-5 rounded bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-brand-accent" />
                    </div>
                    <span className="text-xs font-bold text-white/95">{item}</span>
                  </div>
                ))}
              </div>

              {/* Real-time counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 border-t border-white/5 pt-8">
                <div className="flex flex-col">
                  <Counter end={150} suffix="+" />
                  <span className="text-[10px] font-black text-brand-gray tracking-wider uppercase mt-1">
                    Projects Done
                  </span>
                </div>
                <div className="flex flex-col">
                  <Counter end={50} suffix="+" />
                  <span className="text-[10px] font-black text-brand-gray tracking-wider uppercase mt-1">
                    Active Clients
                  </span>
                </div>
                <div className="flex flex-col">
                  <Counter end={6} suffix="+" />
                  <span className="text-[10px] font-black text-brand-gray tracking-wider uppercase mt-1">
                    Years Exp
                  </span>
                </div>
                <div className="flex flex-col">
                  <Counter end={98} suffix="%" />
                  <span className="text-[10px] font-black text-brand-gray tracking-wider uppercase mt-1">
                    ROI Success
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values tabs */}
          <div className="mt-20 border-t border-white/5 pt-12">
            <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
              {[
                { id: "mission", name: "Our Mission", icon: Target },
                { id: "vision", name: "Our Vision", icon: Eye },
                { id: "values", name: "Core Values", icon: Compass }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/20"
                        : "bg-white/5 text-brand-gray border border-white/5 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 border border-white/5 p-6 md:p-8 rounded-2xl"
                >
                  {activeTab === "mission" && (
                    <p className="text-xs md:text-sm font-semibold leading-relaxed text-white/90">
                      "To empower ambitious companies, startups, and elite leaders with algorithm-defying branding and visual frameworks, translating clicks directly into sustainable enterprise value."
                    </p>
                  )}
                  {activeTab === "vision" && (
                    <p className="text-xs md:text-sm font-semibold leading-relaxed text-white/90">
                      "To be recognized globally as the premier Japanese-cyberpunk inspired growth studio, pioneering immersive, high-conversion interfaces and predictive AI workflows for total market dominance."
                    </p>
                  )}
                  {activeTab === "values" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                      <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold text-brand-accent block mb-1">01 / DISCIPLINE</span>
                        <p className="text-[11px] text-brand-gray font-semibold">Flawless execution codes with zero tolerance for visual or strategic compromises.</p>
                      </div>
                      <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold text-brand-accent block mb-1">02 / AUTHENTICITY</span>
                        <p className="text-[11px] text-brand-gray font-semibold">Constructing bold, highly memorable personal blueprints for category leaders.</p>
                      </div>
                      <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold text-brand-accent block mb-1">03 / VELOCITY</span>
                        <p className="text-[11px] text-brand-gray font-semibold">Scaling paid campaigns and organic search supremacy with maximum throughput speed.</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bento Grid: Why Choose ACT ON Creation */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
              THE ACT ON ADVANTAGE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Why Choose Us
            </h2>
            <p className="mt-3 text-brand-gray text-xs">
              We replace guesswork with creative depth and high-performance execution. Here is how we separate your brand from the noise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-brand-secondary/50 border border-white/5 p-6 rounded-2xl glassmorphism hover:border-brand-accent/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/5 border border-brand-accent/15 flex items-center justify-center mb-4">
                    <PillarIcon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-white mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-brand-gray text-[11px] leading-relaxed font-semibold">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

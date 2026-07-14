import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, FileText, Compass, Play, Target, Gauge, TrendingUp } from "lucide-react";

export default function TimelineProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Discovery",
      japanese: "発見と現状分析",
      icon: Eye,
      desc: "Deep intelligence audits of your current brand footprint, competitor strategies, and target audience demographic segments.",
      time: "Step 1"
    },
    {
      title: "Research",
      japanese: "詳細調査",
      icon: FileText,
      desc: "Analyzing high-retention content hooks, search trends, and successful industry ad funnels to build our foundational playbook.",
      time: "Step 2"
    },
    {
      title: "Strategy",
      japanese: "戦略設計",
      icon: Compass,
      desc: "Constructing algorithm-defying conversion pathways, high-ticket branding architectures, and scalable performance ad models.",
      time: "Step 3"
    },
    {
      title: "Content Creation",
      japanese: "コンテンツ制作",
      icon: Play,
      desc: "Fusing premium video editing, dynamic motion graphics, scroll-stopping social media creatives, and cohesive copywriting.",
      time: "Step 4"
    },
    {
      title: "Campaign Launch",
      japanese: "ローンチ",
      icon: Target,
      desc: "Launching multi-channel marketing campaigns across Meta, Google, and curated organic visual loops with deep conversion tracking.",
      time: "Step 5"
    },
    {
      title: "Optimization",
      japanese: "最適化ループ",
      icon: Gauge,
      desc: "Surgically split-testing ad creative variations, adjusting bidding structures, and analyzing cohort engagement logs to maximize ROAS.",
      time: "Step 6"
    },
    {
      title: "Growth",
      japanese: "規模拡大と成長",
      icon: TrendingUp,
      desc: "Aggressive budget scale-ups, organic brand placement authority expansion, and fully automated customer acquisition streams.",
      time: "Step 7"
    }
  ];

  return (
    <section id="process" className="relative py-20 bg-brand-black overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-[30%] right-[20%] w-[350px] h-[350px] bg-brand-accent/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            EXECUTION PIPELINE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Our Digital Scaling Process
          </h2>
          <p className="mt-4 text-brand-gray text-xs sm:text-sm font-medium max-w-xl mx-auto">
            A surgical 30-day lifecycle engineered to transform your current web channels into absolute acquisition engines.
          </p>
        </div>

        {/* Desktop Connected Progress line */}
        <div className="hidden lg:flex items-center justify-between relative mb-12">
          {/* Background trace line */}
          <div className="absolute left-[5%] right-[5%] top-[24px] h-[2px] bg-white/10 z-0" />
          
          {/* Animated active progress line */}
          <motion.div
            className="absolute left-[5%] top-[24px] h-[2px] bg-brand-accent z-0"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 90}%` }}
            transition={{ duration: 0.5 }}
          />

          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = activeStep === index;
            const isCompleted = index < activeStep;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className="flex flex-col items-center z-10 focus:outline-none group relative"
              >
                {/* Stage circle bubble */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isActive
                      ? "bg-brand-accent border-brand-accent shadow-lg shadow-brand-accent/30 text-white"
                      : isCompleted
                      ? "bg-brand-secondary border-brand-accent text-brand-accent"
                      : "bg-brand-secondary border-white/10 text-brand-gray group-hover:border-white/35"
                  }`}
                >
                  <StepIcon className="w-5 h-5" />
                </div>
                
                <span className={`text-[10px] font-black tracking-wider uppercase mt-3 transition-colors ${
                  isActive ? "text-white" : "text-brand-gray group-hover:text-white"
                }`}>
                  {step.title}
                </span>
                <span className="text-[8px] font-bold text-brand-accent/60 font-numbers">
                  {step.time}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic description box for active step */}
        <div className="bg-brand-secondary/40 border border-white/5 rounded-3xl p-6 md:p-8 glassmorphism max-w-3xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-numbers font-black text-brand-accent text-glow text-xl">
                    0{activeStep + 1}
                  </span>
                  <span className="text-[10px] font-black bg-brand-accent/10 border border-brand-accent/25 text-brand-accent px-2 py-0.5 rounded uppercase tracking-wider">
                    {steps[activeStep].time}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  {steps[activeStep].title} • <span className="text-sm text-brand-gray font-normal">{steps[activeStep].japanese}</span>
                </h3>
                <p className="text-brand-gray text-xs md:text-sm font-semibold leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>

              {/* Icon badge */}
              <div className="hidden md:flex w-16 h-16 rounded-2xl bg-white/5 border border-white/10 items-center justify-center flex-shrink-0">
                {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 text-brand-accent" })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile vertical timeline fallback */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div
                key={idx}
                className="bg-brand-secondary/30 border border-white/5 p-5 rounded-2xl flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/15 flex items-center justify-center flex-shrink-0">
                  <StepIcon className="w-5 h-5 text-brand-accent" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black text-brand-accent uppercase tracking-wider">
                      {step.time}
                    </span>
                    <span className="text-[9px] text-white/50">{step.japanese}</span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="text-brand-gray text-[11px] leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "motion/react";
import { Award, Compass, HeartHandshake, Eye, Sparkles, MessageSquare, BarChart, Trophy, ShieldCheck } from "lucide-react";

export default function Team() {
  const mindsets = [
    { name: "Strategy First", desc: "Every campaign is mapped to clear financial cohorts and conversion pathways.", icon: Compass },
    { name: "Creative Mindset", desc: "Awwwards-quality premium visuals to establish sector authority and user trust.", icon: Sparkles },
    { name: "Data Focused", desc: "Strict, objective telemetry tracing directly to client pipeline and cash flow.", icon: BarChart },
    { name: "Client Success", desc: "Dedicated growth partners operating on priority sub-hour communication speeds.", icon: Trophy }
  ];

  return (
    <section id="team" className="relative py-20 bg-brand-black overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            LEADERSHIP GRID
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Our Team
          </h2>
          {/* Japanese subtitle */}
          <div className="mt-2 font-display text-xs tracking-[0.25em] text-brand-accent/80 font-medium">
            私たちのチームがあなたの成功を支えます。
          </div>
          <p className="mt-4 text-brand-gray text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Meet the elite growth architects, cohort mathematical scientists, and brand visionaries driving conversion supremacy.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-brand-secondary/40 border border-white/5 rounded-2xl overflow-hidden glassmorphism flex flex-col justify-between group hover:border-brand-accent/25 hover:shadow-[0_0_25px_rgba(255,45,45,0.06)] transition-all duration-300"
            >
              {/* Premium Blank Placeholder Area with Cyber vibes */}
              <div className="h-[280px] overflow-hidden relative bg-gradient-to-br from-brand-secondary/80 via-black/50 to-brand-black/90 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
                
                {/* Subtle digital grid background overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                {/* Horizontal glowing neon visor details when hovering to give extreme Japanese Cyberpunk vibes! */}
                <div className="absolute top-[40%] left-[30%] w-[40%] h-[2px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 box-glow shadow-[0_0_8px_#ff2d2d]" />
                
                {/* Stylized plus placeholder with premium transition */}
                <div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.01] flex items-center justify-center text-white/20 group-hover:text-brand-accent/50 group-hover:border-brand-accent/30 group-hover:bg-brand-accent/[0.03] transition-all duration-300">
                  <span className="text-lg font-light font-sans">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tactical Mindsets Row Checklist */}
        <div className="border-t border-white/5 pt-12">
          <div className="text-center mb-10">
            <span className="text-[9px] font-black tracking-widest text-brand-accent uppercase block mb-1">
              OPERATIONAL CODE
            </span>
            <h3 className="font-display text-xl font-bold text-white">
              The Mindset behind our Dominance
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mindsets.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-secondary/20 border border-white/5 p-5 rounded-xl glassmorphism hover:border-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-3">
                    <IconComp className="w-4 h-4 text-brand-accent" />
                  </div>
                  <h4 className="font-display text-xs font-black text-white uppercase tracking-wider mb-1.5">
                    {item.name}
                  </h4>
                  <p className="text-brand-gray text-[11px] leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

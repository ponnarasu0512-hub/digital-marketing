import React from "react";
import { motion } from "motion/react";
import { teamData } from "../data";
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
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -6 }}
              className="bg-brand-secondary/40 border border-white/5 rounded-2xl overflow-hidden glassmorphism flex flex-col justify-between group hover:border-brand-accent/20 transition-all"
            >
              {/* Member Visual with Cyber red-tint filters on hover */}
              <div className="h-[280px] overflow-hidden relative">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent" />
                
                {/* Horizontal glowing neon visor details when hovering to give extreme Japanese Cyberpunk vibes! */}
                <div className="absolute top-[40%] left-[30%] w-[40%] h-[2px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 box-glow shadow-[0_0_8px_#ff2d2d]" />
              </div>

              {/* Body Content */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-display text-base font-bold text-white tracking-tight group-hover:text-brand-accent transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider block">
                    {member.role}
                  </span>
                </div>

                <p className="text-brand-gray text-[10px] leading-relaxed font-semibold">
                  {member.bio}
                </p>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-1 mt-3 border-t border-white/5 pt-3">
                  {member.specialties.slice(0, 2).map((spec, i) => (
                    <span key={i} className="text-[8px] font-bold text-white/60 bg-white/5 px-2 py-0.5 rounded uppercase">
                      {spec}
                    </span>
                  ))}
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

import React, { useState } from "react";
import { motion } from "motion/react";
import { servicesData } from "../data";
import * as Icons from "lucide-react";

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Dynamically resolve lucide icons
  const renderIcon = (iconName: string, isHovered: boolean) => {
    const IconComponent = (Icons as any)[iconName];
    if (!IconComponent) return <Icons.HelpCircle className="w-6 h-6 text-brand-accent" />;
    return (
      <IconComponent
        className={`w-6 h-6 transition-transform duration-300 ${
          isHovered ? "text-brand-accent scale-110" : "text-brand-accent"
        }`}
      />
    );
  };

  // Primary curated highlights matching the white stage container
  const primaryServices = servicesData.slice(0, 4);
  // Detailed secondary offerings matching the dark grid
  const technicalServices = servicesData.slice(4);

  return (
    <section id="services" className="relative py-20 bg-brand-black overflow-hidden">
      {/* SECTION 1: Rounded White Stage (Apple Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white text-brand-black rounded-[40px] px-6 py-16 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle light watermarks */}
          <div className="absolute right-0 bottom-0 text-[100px] md:text-[140px] font-display font-black text-black/[0.02] leading-none pointer-events-none select-none tracking-tighter">
            ACT ON CREATIONS
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
            <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
              OUR SERVICES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-black leading-tight">
              Complete Digital Solutions For Growth &amp; Brand
            </h2>
            <p className="mt-4 text-brand-black/60 text-sm max-w-xl mx-auto font-medium">
              Achieve undisputed dominance in your category using mathematical marketing funnels and luxury creative design.
            </p>
          </div>

          {/* Grid of 4 main dark cards inside the white block */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {primaryServices.map((service) => {
              const isHovered = hoveredCard === service.id;
              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-brand-secondary text-white rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:border-brand-accent/30 flex flex-col justify-between h-[300px] hover:shadow-[0_15px_30px_rgba(255,45,45,0.08)]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-accent/20">
                      {renderIcon(service.iconName, isHovered)}
                    </div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-brand-gray text-xs leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-4 border-t border-white/5 pt-4">
                    {service.details.slice(0, 2).map((det, index) => (
                      <span key={index} className="text-[9px] font-bold text-brand-accent bg-brand-accent/5 border border-brand-accent/10 px-2 py-0.5 rounded">
                        {det}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center relative z-10">
            <button
              onClick={onBookClick}
              className="px-8 py-3.5 bg-brand-black text-white font-sans text-xs font-black tracking-widest uppercase rounded-full hover:bg-brand-accent hover:box-glow transition-all duration-300"
            >
              Explore All Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* SECTION 2: Dark Cyberpunk Tactical Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            TECHNICAL INTEGRATION GRID
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
            Algorithm-Defying Scaling Modules
          </h2>
          <p className="mt-3 text-brand-gray text-xs max-w-lg mx-auto">
            Surgical execution pipelines configured on clean modern stacks to expand lead acquisition, search footprints, and campaign ROAS.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalServices.map((service) => {
            const isHovered = hoveredCard === service.id;
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glassmorphism p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-[280px] hover:border-brand-accent/20 hover:box-glow transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/5 border border-brand-accent/10 flex items-center justify-center mb-5">
                    {renderIcon(service.iconName, isHovered)}
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray text-xs leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-3 mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.details.map((det, idx) => (
                      <span key={idx} className="text-[8px] font-bold tracking-wide uppercase text-white/70 bg-white/5 px-2 py-1 rounded">
                        {det}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data";
import { PortfolioProject } from "../types";
import { X, ExternalLink, ArrowUpRight, Award, Flame, CheckCircle } from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const categories = ["All", "Branding", "Social Media", "Content Creation", "Video Editing", "Marketing Campaigns", "Google Ads", "Meta Ads", "Web Design"];

  const filteredProjects = selectedCategory === "All"
    ? portfolioData
    : portfolioData.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-20 bg-brand-black overflow-hidden">
      {/* Background radial soft red spotlight */}
      <div className="absolute top-[50%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            PORTFOLIO GRID
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Our Portfolio
          </h2>
          {/* Japanese subtitle */}
          <div className="mt-2 font-display text-xs tracking-[0.25em] text-brand-accent/80 font-medium">
            私たちの実績をご覧ください。
          </div>
          <p className="mt-4 text-brand-gray text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Here are some of the amazing projects we've worked on for our clients. We build scroll-stopping brands and digital pipelines.
          </p>
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/25"
                  : "bg-white/5 text-brand-gray border-white/5 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveProject(project)}
                className="group relative h-[360px] rounded-2xl overflow-hidden border border-white/5 bg-brand-secondary cursor-pointer hover:border-brand-accent/30 transition-all duration-300"
              >
                {/* Visual Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cyber Red Grayscale overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-brand-black/10 group-hover:via-brand-black/40 transition-colors" />

                {/* Top Metrics tag */}
                <div className="absolute top-4 left-4 bg-brand-accent text-white text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow shadow-brand-accent/20">
                  {project.metrics}
                </div>

                {/* Bottom detail hover slide up */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-black text-white group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="mt-2 text-xs text-brand-gray line-clamp-2 font-semibold">
                    {project.description}
                  </div>
                  
                  {/* Action prompt */}
                  <div className="mt-4 flex items-center space-x-1 text-[10px] font-black tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
                    <span>LAUNCH BLUEPRINT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Details Popup Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-brand-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-brand-secondary border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Image banner */}
              <div className="h-[250px] sm:h-[350px] relative">
                <img
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Overlay details */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-black tracking-widest text-brand-accent uppercase block mb-1">
                      {activeProject.category}
                    </span>
                    <h2 className="font-display text-2xl sm:text-4xl font-black text-white leading-none">
                      {activeProject.title}
                    </h2>
                  </div>
                  <div className="bg-brand-accent text-white font-numbers font-black px-4 py-2.5 rounded-xl shadow-lg shadow-brand-accent/20">
                    {activeProject.metrics}
                  </div>
                </div>
              </div>

              {/* Core Content */}
              <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Overview Column */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xs font-black tracking-widest text-brand-accent uppercase mb-2">
                      PROJECT SYNOPSIS
                    </h4>
                    <p className="text-sm font-medium text-brand-gray leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black tracking-widest text-brand-accent uppercase mb-3">
                      KEY DELIVERABLES
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeProject.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-white/5 border border-white/5 p-3 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-brand-accent" />
                          <span className="text-xs font-semibold text-white/90">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Info Card Column */}
                <div className="space-y-6 bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <div>
                    <span className="text-[10px] font-black text-brand-accent uppercase block mb-1">
                      CLIENT
                    </span>
                    <span className="text-sm font-bold text-white tracking-wide">
                      {activeProject.client}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-brand-accent uppercase block mb-1">
                      LAUNCH STATUS
                    </span>
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Optimized Live</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-brand-accent uppercase block mb-1">
                      TECH INTENSITY
                    </span>
                    <span className="text-xs font-bold text-white leading-relaxed">
                      98% conversion-engineered stack. Autopilot marketing nodes active.
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setActiveProject(null);
                      const contactSect = document.querySelector("#contact");
                      if (contactSect) contactSect.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-3 rounded-xl bg-brand-accent hover:bg-brand-accent-light text-white font-sans text-xs font-black tracking-widest uppercase transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Request Similar Strategy</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

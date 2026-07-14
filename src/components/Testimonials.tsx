import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonialsData } from "../data";
import { Star, ArrowRight, TrendingUp, ShieldCheck, Zap, Globe, Users, DollarSign } from "lucide-react";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [growthMetric, setGrowthMetric] = useState<"traffic" | "leads" | "revenue">("revenue");

  const brands = [
    { name: "NEO-TOKYO APPAREL", rating: "4.8x ROAS" },
    { name: "SATO TECHNOLOGIES", rating: "+150% Leads" },
    { name: "SHINJUKU RESIDENCES", rating: "₹5Cr Sales" },
    { name: "KAIZEN FIGHT CLUB", rating: "+300% Members" },
    { name: "AURA SKINCARE", rating: "120K Fans" }
  ];

  // Custom data arrays for our SVG Growth chart
  const chartsData = {
    traffic: {
      label: "Organic Traffic Velocity (Monthly Visits)",
      before: [12000, 14000, 15000, 14500, 16000, 15500],
      after: [16000, 28000, 45000, 68000, 92000, 125000],
      months: ["M1", "M2", "M3", "M4", "M5", "M6"],
      kpi: "+706% Growth",
      icon: Globe
    },
    leads: {
      label: "Qualified Sales Inquiries",
      before: [150, 170, 165, 180, 175, 190],
      after: [190, 310, 480, 720, 950, 1420],
      months: ["M1", "M2", "M3", "M4", "M5", "M6"],
      kpi: "+647% Conversion Gain",
      icon: Users
    },
    revenue: {
      label: "Attributed Revenue Pipeline",
      before: [800000, 850000, 920000, 880000, 950000, 910000],
      after: [910000, 1850000, 3200000, 4800000, 6500000, 8900000],
      months: ["M1", "M2", "M3", "M4", "M5", "M6"],
      kpi: "9.7x ROI Sourced",
      icon: DollarSign
    }
  };

  const currentChart = chartsData[growthMetric];

  // Helpers to draw the SVG paths smoothly
  const maxVal = Math.max(...currentChart.after) * 1.1;
  const height = 180;
  const width = 450;

  const beforePoints = currentChart.before.map((val, idx) => {
    const x = (idx / (currentChart.before.length - 1)) * width;
    const y = height - (val / maxVal) * height;
    return `${x},${y}`;
  }).join(" ");

  const afterPoints = currentChart.after.map((val, idx) => {
    const x = (idx / (currentChart.after.length - 1)) * width;
    const y = height - (val / maxVal) * height;
    return `${x},${y}`;
  }).join(" ");

  return (
    <section id="testimonials" className="relative py-20 bg-brand-black overflow-hidden">
      {/* Background soft red grid lines */}
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            CLIENT TELEMETRY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Our Happy Clients
          </h2>
          {/* Japanese subtitle */}
          <div className="mt-2 font-display text-xs tracking-[0.25em] text-brand-accent/80 font-medium">
            クライアントの成功事例をご覧ください。
          </div>
        </div>

        {/* Brand Logos Infinite Marquee Row */}
        <div className="border-y border-white/5 py-8 mb-20 overflow-hidden relative">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {/* Double the list to support seamless scrolling */}
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="inline-flex flex-col items-center justify-center mx-6">
                <span className="font-display text-xs font-black text-white/50 hover:text-white transition-colors tracking-widest">
                  {brand.name}
                </span>
                <span className="text-[9px] font-bold text-brand-accent uppercase font-numbers mt-1 bg-brand-accent/5 border border-brand-accent/15 px-2 py-0.5 rounded">
                  {brand.rating}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Glass Testimonial Cards Slider */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-black tracking-widest text-brand-accent uppercase block">
              VALIDATED SUCCESS
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-black text-white leading-tight">
              What Category Leaders Say About Act On Creations
            </h3>

            {/* Testimonials Container */}
            <div className="relative h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-brand-secondary/50 border border-white/5 p-6 md:p-8 rounded-3xl glassmorphism flex flex-col justify-between h-full hover:border-brand-accent/20 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Star ratings */}
                    <div className="flex space-x-1">
                      {[...Array(testimonialsData[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-brand-accent fill-brand-accent" />
                      ))}
                    </div>

                    <p className="text-brand-gray text-xs md:text-sm font-semibold leading-relaxed italic">
                      "{testimonialsData[activeTestimonial].quote}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 border-t border-white/5 pt-4 mt-4">
                    <img
                      src={testimonialsData[activeTestimonial].avatarUrl}
                      alt={testimonialsData[activeTestimonial].name}
                      className="w-10 h-10 rounded-full border border-white/10 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-display text-xs font-black text-white">
                        {testimonialsData[activeTestimonial].name}
                      </h4>
                      <p className="text-[10px] font-bold text-brand-gray">
                        {testimonialsData[activeTestimonial].role} • <span className="text-brand-accent">{testimonialsData[activeTestimonial].company}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2 mt-4 justify-start">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx ? "w-8 bg-brand-accent" : "w-2 bg-white/15"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Case Studies Interactive Chart Dashboard */}
          <div className="lg:col-span-6 bg-brand-secondary/40 border border-white/5 p-6 md:p-8 rounded-[30px] glassmorphism">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-brand-accent" />
                <span className="text-[10px] font-black tracking-widest text-white uppercase">
                  GROWTH TELEMETRY MATRIX
                </span>
              </div>
              <span className="text-[10px] font-black bg-brand-accent/15 border border-brand-accent/25 text-brand-accent px-2.5 py-1 rounded font-numbers">
                {currentChart.kpi}
              </span>
            </div>

            {/* Metric Selector Tabs */}
            <div className="flex space-x-2 mb-6">
              {[
                { id: "revenue", name: "Revenue" },
                { id: "leads", name: "Leads" },
                { id: "traffic", name: "Traffic" }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setGrowthMetric(m.id as any)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${
                    growthMetric === m.id
                      ? "bg-brand-accent text-white"
                      : "bg-white/5 text-brand-gray hover:text-white"
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>

            <div className="space-y-1 mb-4">
              <h4 className="text-xs font-bold text-white">
                {currentChart.label}
              </h4>
              <p className="text-[11px] text-brand-gray font-semibold">
                6-Month trajectory comparing pre-onboarding vs active scaling cycle.
              </p>
            </div>

            {/* Core Custom SVG Line Chart */}
            <div className="relative h-[200px] w-full border border-white/5 rounded-2xl bg-black/40 p-4 flex flex-col justify-end">
              <svg className="w-full h-[180px]" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
                <defs>
                  {/* Red neon shadow gradient */}
                  <linearGradient id="neonGlowGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ff2d2d" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid horizontal lines */}
                {[0, 1, 2, 3].map((idx) => {
                  const y = (idx / 3) * height;
                  return (
                    <line
                      key={idx}
                      x1="0"
                      y1={y}
                      x2={width}
                      y2={y}
                      stroke="rgba(255,255,255,0.03)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Fill Area for active scaling */}
                <path
                  d={`M0,${height} L${afterPoints} L${width},${height} Z`}
                  fill="url(#neonGlowGrad)"
                />

                {/* Baseline trace line */}
                <polyline
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                  points={beforePoints}
                />

                {/* High performance active trajectory line */}
                <polyline
                  fill="none"
                  stroke="#ff2d2d"
                  strokeWidth="3.5"
                  points={afterPoints}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shadow-lg shadow-brand-accent/50"
                />

                {/* Highlight node circles */}
                {currentChart.after.map((val, idx) => {
                  const x = (idx / (currentChart.after.length - 1)) * width;
                  const y = height - (val / maxVal) * height;
                  return (
                    <circle
                      key={idx}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#ffffff"
                      stroke="#ff2d2d"
                      strokeWidth="2.5"
                    />
                  );
                })}
              </svg>

              {/* Month X-axis coordinates */}
              <div className="flex justify-between mt-3 px-1 text-[8px] font-black text-brand-gray font-numbers">
                {currentChart.months.map((m, idx) => (
                  <span key={idx}>{m}</span>
                ))}
              </div>
            </div>

            {/* Explanatory legend indicator */}
            <div className="flex items-center justify-center space-x-6 text-[10px] font-black text-brand-gray tracking-wider uppercase">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 border-t border-dashed border-white/40" />
                <span>Pre-ACT ON baseline</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-1 bg-brand-accent rounded-full" />
                <span className="text-white">Active Scaling grid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqsData } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="relative py-20 bg-brand-black overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-brand-accent/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            INTELLIGENCE GRID
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          {/* Japanese subtitle */}
          <div className="mt-2 font-display text-xs tracking-[0.25em] text-brand-accent/80 font-medium">
            よくある質問。
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-brand-secondary border-brand-accent/40 box-glow"
                    : "bg-brand-secondary/40 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-display text-xs md:text-sm font-bold text-white tracking-wide">
                    {faq.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? "border-brand-accent text-brand-accent" : "border-white/10 text-brand-gray"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Expanding Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="text-brand-gray text-[11px] md:text-xs font-semibold leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

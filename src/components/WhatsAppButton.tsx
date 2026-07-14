import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Pre-configured agency number
  const message = encodeURIComponent("Hi ACT ON Creation, I am interested in your digital marketing and creative solutions!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 group">
      {/* Sleek radar glowing pulse background */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none scale-125" />
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 rounded-full bg-emerald-500 border border-emerald-400/35 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        
        {/* Hover Tooltip display */}
        <span className="absolute left-14 bg-brand-secondary border border-white/10 text-[10px] font-black tracking-widest text-white uppercase px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
          CONNECT ON WHATSAPP
        </span>
      </a>
    </div>
  );
}

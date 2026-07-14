import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  showText?: boolean;
}

export default function Logo({ 
  className = "h-8", 
  iconOnly = false,
  showText = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* ACT ON Creation Image Logo */}
      <img
        src="https://cdn.phototourl.com/free/2026-07-14-b67e4974-8296-4643-894e-962ed15ec5b0.png"
        referrerPolicy="no-referrer"
        alt="ACT ON Creation Logo"
        className="h-full w-auto max-h-[44px] object-contain filter drop-shadow-[0_0_12px_rgba(255,45,45,0.4)]"
      />

      {showText && !iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-display text-xl font-black tracking-tight text-white uppercase">
            ACT ON
          </span>
          <span className="text-[9px] font-black tracking-[0.22em] text-brand-accent uppercase mt-1">
            CREATION
          </span>
        </div>
      )}
    </div>
  );
}

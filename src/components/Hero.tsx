import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Play, ArrowRight, ShieldCheck, Zap, Sparkles, Globe } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  onWorkClick: () => void;
}

export default function Hero({ onBookClick, onWorkClick }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Floating red cherry blossom (sakura) petals canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const petalsCount = 45;
    const petals: Array<{
      x: number;
      y: number;
      r: number;
      d: number;
      horizontalSpeed: number;
      verticalSpeed: number;
      opacity: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    for (let i = 0; i < petalsCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        r: Math.random() * 4 + 2, // particle size
        d: Math.random() * petalsCount,
        horizontalSpeed: Math.random() * 1.5 - 0.5 + 0.5,
        verticalSpeed: Math.random() * 1.2 + 0.8,
        opacity: Math.random() * 0.6 + 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 2 - 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petalsCount; i++) {
        const p = petals[i];

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        // Draw curved neon red blossom petal
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(p.r * 1.5, -p.r * 1.5, p.r * 3, 0);
        ctx.quadraticCurveTo(p.r * 1.5, p.r * 1.5, 0, 0);
        ctx.closePath();

        // Cyber neon red / pink gradient
        const grad = ctx.createRadialGradient(p.r, 0, 0, p.r, 0, p.r * 2);
        grad.addColorStop(0, "rgba(255, 45, 45, 0.95)");
        grad.addColorStop(0.6, "rgba(255, 80, 80, 0.7)");
        grad.addColorStop(1, "rgba(255, 45, 45, 0)");
        ctx.fillStyle = grad;

        // Apply blur glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255, 45, 45, 0.8)";
        ctx.fill();
        ctx.restore();

        // Physics update
        p.y += p.verticalSpeed;
        p.x += p.horizontalSpeed + Math.sin(p.d) * 0.3;
        p.rotation += p.rotationSpeed;
        p.d += 0.01;

        // Recycle petals that fall off the screen
        if (p.y > height || p.x > width || p.x < -20) {
          petals[i] = {
            x: Math.random() * width,
            y: -20,
            r: Math.random() * 4 + 2,
            d: Math.random() * petalsCount,
            horizontalSpeed: Math.random() * 1.5 - 0.5 + 0.5,
            verticalSpeed: Math.random() * 1.2 + 0.8,
            opacity: Math.random() * 0.6 + 0.3,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 2 - 1,
          };
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-brand-black flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient radial neon red glow */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-accent/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Sakura Petals Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Typography Block */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full w-fit mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
            <span className="font-sans text-[10px] font-black tracking-widest uppercase text-brand-accent">
              AGENCY OF THE FUTURE
            </span>
          </motion.div>

          {/* Huge typography */}
          <h1 className="font-display text-4xl sm:text-6xl xl:text-7.5xl font-black tracking-tight text-white leading-[0.95] flex flex-col uppercase">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We Create.
            </motion.span>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              We Market.
            </motion.span>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-brand-accent text-glow"
            >
              We Scale Brands.
            </motion.span>
          </h1>

          {/* Alternative subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 font-display text-xs sm:text-sm tracking-[0.18em] text-brand-accent font-black uppercase flex items-center gap-2"
          >
            <span>Creative Marketing • Digital Growth • Content That Converts</span>
          </motion.div>

          {/* Japanese subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-2 font-display text-xs tracking-[0.25em] text-brand-gray font-medium flex items-center gap-2"
          >
            <span>クリエイティブとデジタルの力で、ブランドを成長へと導く。</span>
          </motion.div>

          {/* Tagline / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-brand-gray text-sm sm:text-base max-w-xl font-medium leading-relaxed"
          >
            ACT ON Creation is a creative digital agency helping businesses, startups, creators, and entrepreneurs build powerful online brands through content creation, strategic marketing, branding, and performance-driven digital campaigns.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={onBookClick}
              className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-light text-white font-sans text-xs font-black tracking-widest uppercase rounded-full shadow-lg shadow-brand-accent/30 transition-all duration-300 hover:scale-105 hover:box-glow-strong flex items-center gap-2"
              id="hero-get-started"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onWorkClick}
              className="flex items-center space-x-3 text-white group hover:text-brand-accent transition-colors"
              id="hero-view-work"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-brand-accent/40 flex items-center justify-center bg-white/5 transition-all duration-300 group-hover:scale-105 relative">
                <Play className="w-4 h-4 fill-white group-hover:fill-brand-accent text-white group-hover:text-brand-accent translate-x-[1px]" />
                <span className="absolute inset-0 rounded-full border border-brand-accent/20 animate-ping opacity-0 group-hover:opacity-100" />
              </div>
              <span className="font-sans text-xs font-black tracking-widest uppercase">
                Explore Our Services
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right Samurai Visual Column */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[550px] lg:h-[650px] z-20">
          {/* Main Samurai Graphic Base */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full h-[85%] rounded-3xl overflow-hidden border border-white/10 group"
          >
            {/* Dark Samurai-vibe image from Unsplash */}
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
              alt="Cyberpunk Japanese Warrior"
              className="w-full h-full object-cover grayscale contrast-125 brightness-50 scale-105 group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            
            {/* Absolute overlay elements for cyberpunk warrior mood */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/30" />
            
            {/* Interactive Neon Red Visor Beam Overlay (Japanese Cyberpunk Samurai detail) */}
            <div className="absolute top-[42%] left-[45%] w-[18%] h-[3px] bg-brand-accent box-glow-strong animate-pulse shadow-[0_0_15px_#ff2d2d]" />
            <div className="absolute top-[41.5%] left-[43%] w-[22%] h-[6px] bg-brand-accent-light/40 blur-[3px] rounded-full" />

            {/* Glowing vertical Kanji graphic overlay */}
            <div className="absolute right-6 top-8 font-display text-[10px] text-brand-accent/60 flex flex-col space-y-1 font-black leading-none bg-brand-black/50 p-2 border border-brand-accent/20 rounded backdrop-blur">
              <span>武</span>
              <span>士</span>
              <span>道</span>
              <span className="text-white font-black">極</span>
            </div>

            {/* Bottom floating details */}
            <div className="absolute bottom-6 left-6 right-6 p-4 glassmorphism rounded-xl">
              <span className="text-[10px] font-bold text-brand-accent tracking-widest uppercase block mb-1">
                ACT ON CREATION
              </span>
              <p className="text-xs font-semibold text-white/90">
                We Help Brands Grow Through Creative &amp; Digital Solutions
              </p>
            </div>
          </motion.div>

          {/* Floating Strategy Card 1 (Content Creation, Video Editing, Creative Strategy) */}
          <motion.div
            initial={{ x: -50, y: 50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-12 left-[-10%] md:left-[-15%] glassmorphism p-5 rounded-2xl w-[220px] shadow-2xl border border-white/10 hidden sm:block hover:scale-105 transition-transform"
          >
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="w-4 h-4 text-brand-accent animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-white uppercase">
                CONTENT LAB
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Content Creation", "Video Editing", "Creative Strategy"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold bg-white/5 border border-white/5 px-2.5 py-1 rounded-full text-brand-gray hover:text-white hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Floating Strategy Card 2 (Social Media, Brand Growth, Performance Marketing) */}
          <motion.div
            initial={{ x: -40, y: -40, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-[40%] left-[-12%] glassmorphism p-5 rounded-2xl w-[220px] shadow-2xl border border-white/10 hidden lg:block hover:scale-105 transition-transform"
          >
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span className="text-[10px] font-black tracking-widest text-white uppercase">
                GROWTH HUB
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Social Media", "Brand Growth", "Performance Marketing"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold bg-white/5 border border-white/5 px-2.5 py-1 rounded-full text-brand-gray hover:text-white hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Floating Metrics Card 3 */}
          <motion.div
            initial={{ x: 50, y: -50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-16 right-[-10%] md:right-[-15%] glassmorphism p-5 rounded-2xl w-[240px] shadow-2xl border border-white/10 hidden sm:block hover:scale-105 transition-transform"
          >
            <div className="flex items-center space-x-2 mb-3">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase">
                PERFORMANCE INDEX
              </span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                <span className="text-[10px] text-brand-gray font-semibold">Projects Delivered</span>
                <span className="text-xs font-black text-white font-numbers">500+</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                <span className="text-[10px] text-brand-gray font-semibold">Happy Clients</span>
                <span className="text-xs font-black text-white font-numbers">100+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-brand-gray font-semibold">Client Rating</span>
                <span className="text-xs font-black text-brand-accent text-glow font-numbers">5★</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

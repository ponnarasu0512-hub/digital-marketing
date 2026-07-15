import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    
    { name: "About", href: "#about" },
    { name: "Personal Branding", href: "#personal-branding" },
    
    
    { name: "Contact", href: "#booking" }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-black/75 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <Logo className="h-9" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="font-sans text-xs font-semibold tracking-wider uppercase text-brand-gray hover:text-white transition-colors duration-200 relative py-1"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent origin-right scale-x-0 transition-transform duration-300 hover:origin-left hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/919994951620?text=Hello%20ACT%20ON%20Creation,%0A%0AI%27m%20interested%20in%20your%20digital%20marketing%20services.%0ACan%20we%20discuss%20my%20project%3F"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 text-xs font-bold tracking-wider uppercase text-brand-gray hover:text-emerald-400 transition-colors py-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500 mr-1" />
              <span>WhatsApp</span>
            </a>
            
            <button
              onClick={onBookClick}
              className="relative px-5 py-2.5 rounded-full overflow-hidden group bg-transparent border border-white/10 text-white font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:border-brand-accent/50 hover:box-glow"
              id="nav-book-btn"
            >
              <span className="relative z-10 flex items-center gap-1">
                Book Strategy Call
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-accent-light opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-gray hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[72px] left-0 w-full bg-brand-black/95 backdrop-blur-xl border-b border-white/5 z-40 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase text-brand-gray hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 flex flex-col space-y-3">
                <a
                  href="https://wa.me/919994951620?text=Hello%20ACT%20ON%20Creation,%0A%0AI%27m%20interested%20in%20your%20digital%20marketing%20services.%0ACan%20we%20discuss%20my%20project%3F"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 px-3 py-3 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full py-3 rounded-lg bg-brand-accent text-white font-bold text-xs tracking-wider uppercase transition-colors hover:bg-brand-accent-light shadow-lg shadow-brand-accent/20"
                >
                  Book Strategy Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

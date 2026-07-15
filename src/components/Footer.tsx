import React from "react";
import { ArrowUp, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-black text-white border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Local Business JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "ACT ON Creation",
          "telephone": "+91 99949 51620",
          "email": "actoncreation@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kanathur, ECR Road",
            "addressLocality": "Chennai",
            "addressCountry": "India"
          }
        })}
      </script>

      {/* Background radial spotlight */}
      <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center">
              <Logo className="h-9" />
            </div>
            
            <p className="text-brand-gray text-[11px] font-semibold leading-relaxed max-w-xs">
              We Help Brands Grow Through Creative &amp; Digital Solutions.<br />
              Creative Marketing • Digital Growth • Content That Converts
            </p>

            {/* Social media handles */}
            <div className="flex space-x-3 pt-2">
              {[
                { icon: Instagram, href: "#", name: "Instagram" },
                { icon: Linkedin, href: "#", name: "LinkedIn" },
                { icon: Twitter, href: "#", name: "Twitter" },
                { icon: Youtube, href: "#", name: "YouTube" },
                { icon: MessageCircle, href: "https://wa.me/919994951620?text=Hello%20ACT%20ON%20Creation,%0A%0AI%27m%20interested%20in%20your%20digital%20marketing%20services.%0ACan%20we%20discuss%20my%20project%3F", name: "WhatsApp" }
              ].map((soc, i) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-accent border border-white/5 hover:border-brand-accent flex items-center justify-center text-brand-gray hover:text-white transition-all duration-300"
                    title={soc.name}
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-black text-brand-accent tracking-widest uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-bold text-brand-gray">
              {[
                { name: "Home", href: "#" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Courses", href: "#courses" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#booking" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-black text-brand-accent tracking-widest uppercase">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-[11px] font-semibold text-brand-gray">
              {[
                "Content Creation",
                "Video Editing",
                "Social Media Marketing",
                "Content Planning",
                "Branding",
                "Creative Design",
                "Digital Marketing",
                "Performance Marketing"
              ].map((srv) => (
                <li key={srv} className="hover:text-white transition-colors cursor-pointer">
                  {srv}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Courses */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-black text-brand-accent tracking-widest uppercase">
              ACADEMY COURSES
            </h4>
            <ul className="space-y-2 text-[11px] font-semibold text-brand-gray">
              {[
                "Digital Marketing",
                "Meta Ads",
                "Google Ads",
                "Funnel Marketing",
                "Video Editing",
                "Content Creation"
              ].map((crs) => (
                <li key={crs} className="hover:text-white transition-colors cursor-pointer">
                  {crs}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-black text-brand-accent tracking-widest uppercase">
              CONTACT INFO
            </h4>
            <ul className="space-y-3 text-xs font-semibold text-brand-gray">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a href="tel:+919994951620" className="hover:text-white transition-colors font-numbers">
                  +91 99949 51620
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a href="mailto:actoncreation@gmail.com" className="hover:text-white transition-colors">
                  actoncreation@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>
                  Kanathur, ECR Road, Chennai
                </span>
              </li>
            </ul>

            <button
              onClick={onBookClick}
              className="mt-6 px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-light text-white font-sans text-[10px] font-black tracking-widest uppercase rounded-xl transition-all shadow-md shadow-brand-accent/20"
            >
              Get Free Consultation
            </button>
          </div>
        </div>

        {/* Bottom border & Copy area */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] font-bold text-brand-gray tracking-wider uppercase">
            © {currentYear} ACT ON CREATION. ALL RIGHTS RESERVED • CODES COMPILED LIVE
          </div>
          
          <div className="flex items-center space-x-6 text-[10px] font-bold text-brand-gray tracking-wider uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Codex</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Operations</a>
            
            {/* Scroll back to top bubble */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-brand-gray hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

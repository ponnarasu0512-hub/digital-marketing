import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import PersonalBranding from "./components/PersonalBranding";
import TimelineProcess from "./components/TimelineProcess";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import BookingForm from "./components/BookingForm";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

export default function App() {
  const handleScrollToBooking = () => {
    const bookingSect = document.getElementById("booking");
    if (bookingSect) {
      bookingSect.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToPortfolio = () => {
    const portfolioSect = document.getElementById("portfolio");
    if (portfolioSect) {
      portfolioSect.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-white overflow-hidden select-none">
      {/* Absolute Film Grain Noise overlay */}
      <div className="noise-bg pointer-events-none" />

      {/* Floating Header Navigation Bar */}
      <Header onBookClick={handleScrollToBooking} />

      {/* Main Agency Sections */}
      <main className="relative z-10">
        
        {/* Hero Landing Stage */}
        <Hero onBookClick={handleScrollToBooking} onWorkClick={handleScrollToPortfolio} />

        {/* Curated highlights and detailed service matrix */}
        <Services onBookClick={handleScrollToBooking} />

        {/* Tactical Story, Milestones, Mission vision values, Why choose us */}
        <About />

        {/* Portfolio Category Showcase Grid + Case details modal */}
        <Portfolio />

        {/* Dedicated Executive Personal Branding Matrix */}
        <PersonalBranding />

        {/* Day-by-Day pipeline timeline */}
        <TimelineProcess />

        {/* Packages with Switcher & Checklists */}
        <Pricing onBookClick={handleScrollToBooking} />

        {/* Testimonials Marquee & SVG Before/After comparison charts */}
        <Testimonials />

        {/* Team bios & tactical mindset bar */}
        <Team />

        {/* Expandable FAQs accordion */}
        <FAQ />

        {/* Dynamic newsroom cards & article reader panel */}
        <Blog />

        {/* Interactive Strategy booking scheduler */}
        <BookingForm />
      </main>

      {/* Footer Navigation Index */}
      <Footer onBookClick={handleScrollToBooking} />

      {/* Chatbot Assistant */}
      <Chatbot />
    </div>
  );
}

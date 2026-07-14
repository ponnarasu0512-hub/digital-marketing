import React, { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Target, Video, Layers, Sparkles, Award, ArrowUpRight } from "lucide-react";

interface CourseItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<any>;
  level: string;
}

export default function Courses() {
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  const courses: CourseItem[] = [
    {
      id: "dm-masterclass",
      title: "Digital Marketing Masterclass",
      description: "Learn complete digital marketing from beginner to advanced. Master foundational and strategic methodologies to scale brands.",
      tags: ["Full Stack Marketing", "Beginner to Advanced", "Case Studies"],
      icon: GraduationCap,
      level: "All Levels"
    },
    {
      id: "meta-ads",
      title: "Meta Ads Mastery",
      description: "Master Facebook and Instagram advertising networks. Build surgical precision cohorts and optimize campaign metrics to maximize ROAS.",
      tags: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Campaign Optimization"],
      icon: Target,
      level: "Intermediate"
    },
    {
      id: "google-ads",
      title: "Google Ads Certification",
      description: "Dominate Google search results. Launch hyper-targeted display ads, search ads, and Performance Max modules backed by thorough keyword research.",
      tags: ["Search Ads", "Display Ads", "Shopping Ads", "Performance Max", "Keyword Research"],
      icon: Target,
      level: "Intermediate"
    },
    {
      id: "funnel-marketing",
      title: "Funnel Marketing Architect",
      description: "Design automated customer pipelines that acquire leads and close deals. Includes landing pages, email workflows, and sales automation.",
      tags: ["Landing Pages", "Sales Funnels", "Lead Funnels", "Email Funnels", "Automation"],
      icon: Layers,
      level: "Advanced"
    },
    {
      id: "ads-mastery",
      title: "Ads Campaign Mastery",
      description: "Aggressive scaling strategies for high-budget marketers. Master portfolio bidding models, budget optimization, and advanced ROAS physics.",
      tags: ["Campaign Planning", "Budget Optimization", "ROAS", "Scaling Strategies"],
      icon: Award,
      level: "Expert"
    },
    {
      id: "video-editing",
      title: "Cinematic Video Editing",
      description: "Post-production mastery for creators and professionals. Edit viral short-form and high-retention long-form videos with industry-standard apps.",
      tags: ["Premiere Pro", "After Effects", "CapCut", "Short-form Editing", "Long-form Editing"],
      icon: Video,
      level: "Beginner to Pro"
    },
    {
      id: "content-creation",
      title: "Creative Content & AI",
      description: "Build a memorable online voice. Learn narrative storytelling, custom visual strategy, and next-generation AI-assisted content tools.",
      tags: ["Instagram Content", "YouTube Content", "AI Content Creation", "Storytelling", "Content Strategy"],
      icon: Sparkles,
      level: "All Levels"
    }
  ];

  return (
    <section id="courses" className="relative py-20 bg-brand-black overflow-hidden border-t border-white/5">
      {/* Background visual spotlight */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            ACADEMY OF DIGITAL EXCELLENCE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Professional Digital Marketing Courses
          </h2>
          {/* Japanese subtitle */}
          <div className="mt-2 font-display text-xs tracking-[0.25em] text-brand-accent/80 font-medium">
            プロフェッショナルなデジタルマーケティング講座
          </div>
          <p className="mt-4 text-brand-gray text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Master industry-leading digital skills with practical, real-world training designed for students, professionals, entrepreneurs, and business owners.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => {
            const CourseIcon = course.icon;
            const isHovered = hoveredCourse === course.id;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                className={`relative bg-brand-secondary/40 border p-6 rounded-2xl glassmorphism flex flex-col justify-between h-[360px] cursor-pointer transition-all duration-300 ${
                  isHovered
                    ? "border-brand-accent/40 shadow-[0_15px_30px_rgba(255,45,45,0.08)] -translate-y-1.5"
                    : "border-white/5"
                }`}
              >
                <div>
                  {/* Icon and Level block */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/5 border border-brand-accent/15 flex items-center justify-center">
                      <CourseIcon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-[8px] font-black tracking-widest uppercase bg-white/5 border border-white/5 text-brand-gray px-2.5 py-1 rounded">
                      {course.level}
                    </span>
                  </div>

                  {/* Course Title & Description */}
                  <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-brand-gray text-[11px] leading-relaxed font-semibold line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Subskills Tag list */}
                <div className="border-t border-white/5 pt-4 mt-4">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] font-bold tracking-wide uppercase bg-brand-accent/5 border border-brand-accent/10 text-brand-accent/90 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {course.tags.length > 3 && (
                      <span className="text-[8px] font-bold text-white/40 px-1 py-0.5">
                        +{course.tags.length - 3} More
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between text-[9px] font-black tracking-widest uppercase text-white/50 group-hover:text-white transition-colors">
                    <span>EXPLORE CURRICULUM</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isHovered ? "translate-x-0.5 -translate-y-0.5 text-brand-accent" : ""
                    }`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action bar */}
        <div className="mt-16 text-center">
          <p className="text-brand-gray text-xs font-semibold mb-4">
            Want a custom corporate training blueprint? We design custom modules for business teams.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-accent hover:bg-brand-accent-light text-white font-sans text-xs font-black tracking-widest uppercase rounded-full shadow-lg shadow-brand-accent/20 transition-all duration-300 hover:scale-105"
          >
            <span>Inquire About Courses</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { blogPostsData } from "../data";
import { BlogPostItem } from "../types";
import { X, Clock, Calendar, ArrowRight, BookOpen, Heart, Share2 } from "lucide-react";

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPostItem | null>(null);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter((pid) => pid !== id));
    } else {
      setLikedPosts([...likedPosts, id]);
    }
  };

  return (
    <section id="blog" className="relative py-20 bg-brand-black overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-[10%] left-[-15%] w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-sans text-[10px] font-black tracking-widest text-brand-accent uppercase block mb-3">
            KNOWLEDGE GRID
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Our Blog
          </h2>
          {/* Japanese subtitle */}
          <div className="mt-2 font-display text-xs tracking-[0.25em] text-brand-accent/80 font-medium">
            最新のデジタルマーケティング情報をお届け。
          </div>
          <p className="mt-4 text-brand-gray text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Stay updated with the latest trends, conversion algorithms, and personal brand building playbooks from our senior partners.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => {
            const isLiked = likedPosts.includes(post.id);
            return (
              <motion.article
                key={post.id}
                whileHover={{ y: -6 }}
                onClick={() => setActivePost(post)}
                className="bg-brand-secondary/40 border border-white/5 rounded-2xl overflow-hidden glassmorphism flex flex-col justify-between h-[450px] cursor-pointer hover:border-brand-accent/25 transition-all group"
              >
                <div>
                  {/* Article Banner image */}
                  <div className="h-[200px] overflow-hidden relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 to-transparent" />
                    
                    {/* Category tag */}
                    <span className="absolute bottom-4 left-4 bg-brand-accent text-white text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>

                  {/* Article Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center space-x-4 text-[10px] font-black text-brand-gray tracking-wider uppercase font-numbers">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-accent" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-brand-gray" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-base font-bold text-white group-hover:text-brand-accent transition-colors line-clamp-2 tracking-tight">
                      {post.title}
                    </h3>

                    <p className="text-brand-gray text-[11px] leading-relaxed line-clamp-3 font-semibold">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Action items */}
                <div className="px-5 pb-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-widest uppercase text-white/50 group-hover:text-white transition-colors flex items-center space-x-1.5">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  {/* Actions buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => toggleLike(post.id, e)}
                      className={`p-1.5 rounded bg-white/5 hover:bg-brand-accent/10 border border-white/5 transition-colors ${
                        isLiked ? "text-brand-accent border-brand-accent/20" : "text-brand-gray"
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-brand-accent" : ""}`} />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Expanded Article Drawer Popup Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"
            />

            {/* Content box */}
            <motion.div
              initial={{ scale: 0.96, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-3xl bg-brand-secondary border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto z-10"
            >
              {/* Header Visual */}
              <div className="h-[220px] sm:h-[320px] relative">
                <img
                  src={activePost.imageUrl}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/40 to-transparent" />
                
                {/* Close btn */}
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Meta details */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-black tracking-widest text-brand-accent uppercase block mb-1.5">
                    {activePost.category}
                  </span>
                  <h2 className="font-display text-xl sm:text-3xl font-black text-white leading-tight">
                    {activePost.title}
                  </h2>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-10 space-y-6">
                <div className="flex items-center space-x-6 text-[11px] font-black text-brand-gray tracking-wider uppercase border-b border-white/5 pb-4 font-numbers">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-4 h-4 text-brand-accent" />
                    <span>{activePost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-brand-gray" />
                    <span>{activePost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4 text-brand-gray" />
                    <span>AUTHORITATIVE GRID</span>
                  </div>
                </div>

                {/* Article body text */}
                <div className="text-xs sm:text-sm font-medium text-brand-gray leading-relaxed space-y-4">
                  <p>{activePost.content}</p>
                  <p>In addition, our tactical conversion modeling proves that brands integrating cohesive personal narrative blocks on networks like LinkedIn scale inorganic customer trust indicators by 300%. We advise scaling budgets during peak validation cycles to ensure maximum CTR efficiency.</p>
                  <p>Check back next week for deeper breakdowns of our technical SEO indexing codes and Meta campaign attribution setups.</p>
                </div>

                {/* Back CTA */}
                <div className="border-t border-white/5 pt-6 mt-8 flex justify-between items-center">
                  <button
                    onClick={() => setActivePost(null)}
                    className="px-6 py-3 rounded-full bg-white/5 text-white text-xs font-bold tracking-wider uppercase hover:bg-brand-accent hover:text-white transition-all"
                  >
                    Close Reading Node
                  </button>
                  <div className="flex items-center space-x-2 text-brand-gray text-[10px] font-bold">
                    <span>SHARE THIS BRIEF</span>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

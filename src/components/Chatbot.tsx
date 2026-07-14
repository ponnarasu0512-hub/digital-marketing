import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, Loader2, Zap, ArrowRight, ArrowUpRight } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  isFallback?: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "bot",
      text: "Hi 👋 I'm Act On AI. How can I help grow your brand and scale your business today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const suggestedQuestions = [
    "Academy Courses",
    "Content Creation",
    "Meta Ads Pricing",
    "Book Strategy Session",
    "Video Editing"
  ];

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Append User Message
    const userMsg: Message = {
      id: `usr_${Date.now()}`,
      sender: "user",
      text
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();
      
      const botMsg: Message = {
        id: `bot_${Date.now()}`,
        sender: "bot",
        text: data.text,
        isFallback: data.isFallback
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Failed to query chatbot server:", err);
      // Local safety fallback
      const botMsg: Message = {
        id: `bot_err_${Date.now()}`,
        sender: "bot",
        text: "Apologies, my neural connection is slightly unstable right now. You can reach out directly via WhatsApp using the button on the right, or book a strategy call using our session calendar!"
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedClick = (q: string) => {
    handleSendMessage(q);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Floating Toggle Button with Red Glow Pulse */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-brand-accent hover:bg-brand-accent-light text-white flex items-center justify-center shadow-xl shadow-brand-accent/25 relative focus:outline-none border border-white/10 box-glow"
        id="chatbot-toggle-btn"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="absolute top-[-3px] right-[-3px] w-3 h-3 bg-emerald-400 rounded-full border-2 border-brand-accent animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Pane Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 left-0 w-[340px] sm:w-[380px] h-[520px] bg-brand-secondary border border-white/10 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-2xl glassmorphism"
            id="chatbot-container"
          >
            {/* Header */}
            <div className="bg-brand-secondary/80 border-b border-white/5 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-brand-accent animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-black text-white tracking-wide flex items-center gap-1.5">
                    Act On AI <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <span className="text-[9px] font-bold text-brand-gray uppercase tracking-widest block">
                    Growth Concierge
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-brand-gray hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation Messages Board */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => {
                const isBot = msg.sender === "bot";
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed font-semibold shadow-sm ${
                        isBot
                          ? "bg-white/5 border border-white/5 text-white/95 rounded-tl-none whitespace-pre-line"
                          : "bg-brand-accent text-white rounded-tr-none"
                      }`}
                    >
                      {msg.text}
                      
                      {/* Live API Key Hint Indicator */}
                      {msg.isFallback && (
                        <div className="mt-3 pt-2.5 border-t border-white/5 text-[9px] font-bold text-brand-accent uppercase tracking-wider flex items-center gap-1">
                          <Zap className="w-3 h-3 animate-bounce" />
                          <span>SANDBOX ACTIVE • ADD API KEY IN SECRETS</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 text-xs text-brand-gray flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-accent" />
                    <span>Analyzing growth matrix...</span>
                  </div>
                </div>
              )}
              <div ref={messageEndRef} />
            </div>

            {/* Suggested Chips (Only shown when input is empty and no loading is active) */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 py-2 border-t border-white/5 bg-black/20">
                <span className="text-[8px] font-black tracking-widest text-brand-accent uppercase block mb-1.5">
                  SUGGESTED PATHS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestedClick(q)}
                      className="text-[9px] font-black tracking-wide uppercase px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-brand-gray hover:text-white hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Message Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="bg-brand-secondary/90 border-t border-white/5 px-4 py-3.5 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Act On AI anything..."
                className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-brand-accent/40 transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="w-10 h-10 rounded-xl bg-brand-accent hover:bg-brand-accent-light text-white flex items-center justify-center transition-colors disabled:opacity-45 focus:outline-none"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

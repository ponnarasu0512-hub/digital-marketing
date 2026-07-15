import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY" && apiKey.trim() !== "") {
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// In-memory data store for submissions
const bookings: any[] = [];
const contactSubmissions: any[] = [];

// API: Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// API: AI Chatbot Proxy using Gemini API
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const ai = getGeminiClient();
    if (!ai) {
      throw new Error("GEMINI_API_KEY is not configured or holds a placeholder value");
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are "Act On AI", the elite virtual growth partner and AI concierge for ACT ON Creation, a premier Digital Marketing & Personal Branding Agency.
Our Tagline: "We Help Brands Grow Through Creative & Digital Solutions"
Alternative Subtitle: "Creative Marketing • Digital Growth • Content That Converts"

Brand Persona:
- Futuristic, ultra-premium, authoritative, but friendly and direct.
- Use a slight cyberpunk/neo-tokyo tech tone (words like "neural node", "optimization grid", "brand velocity", "algorithm-defying").
- Keep responses short, punchy, elegant, and highly structured with clean markdown bullets. Do not write long blocks of text.

Our Contact Info:
- Name: ACT ON Creation
- Address: Kanathur, ECR Road, Chennai
- Phone: +91 99949 51620
- Email: actoncreation@gmail.com

Our core offerings:
1. **Digital Marketing & SEO**: Result-oriented strategies, ranking #1 organically, aggressive Google/Meta Ads growth.
2. **Personal Branding**: Elevating CEOs, founders, creators, and high-profile professionals (LinkedIn, Instagram growth, PR, podcast strategies).
3. **Web Development**: Awwwards-quality, fast, beautiful, responsive, animated web layouts (like the one they are visiting right now!).
4. **AI Automation**: Streamlining business processes, lead generation grids.

Pricing Tiers:
- Starter: ₹9,999/month (Essential branding, basic SEO, content plan).
- Growth: ₹19,999/month (Most popular! Advanced SEO, Meta/Google ads, LinkedIn growth, dedicated strategist).
- Premium: ₹39,999/month (Full scale omnichannel domination, PR integration, speaking gig sourcing, VIP branding).

If the user wants to book, guide them to use our booking form or tell them they can book right away through the floating WhatsApp connector or the strategy form.

Current user question: "${message}"`,
            },
          ],
        },
      ],
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.log("Gemini API falling back to intelligent offline assistant:", error.message || error);
    
    // Custom responsive intelligent rules based on keywords
    const lowerMessage = message.toLowerCase();
    let reply = "";

    if (lowerMessage.includes("location") || lowerMessage.includes("located") || lowerMessage.includes("where are you") || lowerMessage.includes("address") ||
        lowerMessage.includes("phone") || lowerMessage.includes("number") || lowerMessage.includes("call") || lowerMessage.includes("tel") ||
        lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("reach") || lowerMessage.includes("write")) {
      reply = `### ACT ON Creation

📍 **Kanathur, ECR Road, Chennai**

📞 **+91 99949 51620**

✉️ **actoncreation@gmail.com**`;
    } else if (lowerMessage.includes("price") || lowerMessage.includes("pricing") || lowerMessage.includes("cost") || lowerMessage.includes("plan")) {
      reply = `### ACT ON Creation Pricing Grid
We offer three scalable tiers tailored to accelerate your growth:

*   🔴 **Starter Plan (₹9,999/mo)**: Perfect for startups and growing creators. Essential SEO, social content framework, and monthly strategy reports.
*   🔥 **Growth Plan (₹19,999/mo) [POPULAR]**: Advanced SEO, Meta & Google Ads optimization, complete LinkedIn growth roadmap, and a dedicated strategist.
*   👑 **Premium Plan (₹39,999/mo)**: Full-scale omnichannel dominance. Comprehensive PR, personal branding, lead automation, and priority support.

Would you like to book a **Free Strategy Session** to discuss which fits you best?`;
    } else if (lowerMessage.includes("seo") || lowerMessage.includes("search") || lowerMessage.includes("rank")) {
      reply = `### Search Engine Domination
Our **SEO Neural Grid** is designed to take you to #1 on Google:

*   **Audit & Strategy**: Uncovering untapped keywords with massive buying intent.
*   **On-Page & Technical SEO**: Ultra-fast load times, semantic HTML, and schema optimizations.
*   **Premium Link Acquisition**: Building search authority that competitors can't touch.

We focus strictly on conversions and organic traffic velocity. Let's optimize your visibility!`;
    } else if (lowerMessage.includes("brand") || lowerMessage.includes("personal")) {
      reply = `### Personal Branding for Leaders
We elevate Founders, CEOs, Creators, and elite professionals into industry icons:

*   **LinkedIn & Instagram Domination**: Scroll-stopping content grids and writing frameworks.
*   **Podcast & Public Speaking**: Sourcing high-impact speaking slots and interview loops.
*   **PR & Media Grid**: Placing your brand story inside authoritative publications.

Become the undisputed voice in your sector. Shall we craft your blueprint?`;
    } else if (lowerMessage.includes("book") || lowerMessage.includes("consult") || lowerMessage.includes("strategy") || lowerMessage.includes("session")) {
      reply = `### Secure Your Strategy Slot
Excellent decision. You can lock in a free **30-Minute Growth Session** with our strategists:

1. Use the **Strategy Booking form** directly below the services page.
2. Hit the **"Let's Talk"** or **"Book Strategy Call"** button in our navbar.
3. Chat with us instantly on WhatsApp using the button on the right!

We will analyze your current brand and hand you a customized 30-day action plan.`;
    } else {
      reply = `### Welcome to the ACT ON Creation Growth Grid ⛩️
I'm **Act On AI**, your premium digital strategist. 

I can guide you through:
*   📈 **Digital Marketing & Ads** (Scaling conversions & ROAS)
*   🎯 **Personal Branding** (For CEOs, Creators, Founders)
*   💻 **Awwwards-Grade Web Dev** (High-fidelity, animated experiences)
*   🔍 **SEO Packages** (First-page Google supremacy)

*What scaling challenge can I resolve for you today?*`;
    }

    res.json({
      text: reply,
      isFallback: true,
      hint: "Configure GEMINI_API_KEY in the Secrets panel to activate live AI reasoning.",
    });
  }
});

// API: Save strategy call booking
app.post("/api/bookings", (req, res) => {
  const { fullName, email, phone, businessType, serviceRequired, preferredDate, preferredTime, budget, message, companyName } = req.body;
  
  if (!fullName || !email || !phone) {
    return res.status(400).json({ error: "Missing required booking details (Name, Email, Phone)" });
  }

  const newBooking = {
    id: `bk_${Date.now()}`,
    fullName,
    companyName: companyName || "N/A",
    email,
    phone,
    businessType: businessType || "Not Specified",
    serviceRequired: serviceRequired || "General Scaling",
    preferredDate: preferredDate || new Date().toISOString().split("T")[0],
    preferredTime: preferredTime || "10:00 AM",
    budget: budget || "Not Disclosed",
    message: message || "",
    status: "Confirmed",
    createdAt: new Date().toISOString()
  };

  bookings.push(newBooking);
  console.log("New booking processed successfully:", newBooking);
  res.json({ success: true, booking: newBooking });
});

// API: Get current bookings (for visual verification/dashboard)
app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});

// API: Save contact submissions
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, Email, and Message are required" });
  }

  const newContact = {
    id: `co_${Date.now()}`,
    name,
    email,
    phone: phone || "N/A",
    message,
    createdAt: new Date().toISOString()
  };

  contactSubmissions.push(newContact);
  console.log("New contact submission received:", newContact);
  res.json({ success: true, submission: newContact });
});

// API: Get contact submissions
app.get("/api/contact", (req, res) => {
  res.json(contactSubmissions);
});

// Mount Vite middleware or static files
async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[ACT ON Creation Server] Running on http://localhost:${PORT}`);
  });
}

initServer().catch((err) => {
  console.error("Failed to initialize ACT ON Creation fullstack server:", err);
});

import { ServiceItem, PortfolioProject, TestimonialItem, TeamMemberItem, BlogPostItem, FaqItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns that scale conversions and accelerate multi-channel growth velocities.",
    iconName: "TrendingUp",
    details: ["Growth Strategy Maps", "Funnel Architecture", "Conversion Rate Optimization", "Analytical Intelligence"]
  },
  {
    id: "personal-branding",
    title: "Personal Branding",
    description: "Positioning founders, creators, and CEOs as leading industry voices with authority and influence.",
    iconName: "Award",
    details: ["LinkedIn Authority grids", "Executive Content Strategy", "Media Placements", "Podcast Sourcing"]
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description: "Dominate search results organically through technically flawless schema architectures and backlink nodes.",
    iconName: "Search",
    details: ["Intent-Based Audits", "Core Web Vitals Engineering", "Authority Backlinking", "Local Supremacy Grid"]
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Fostering loyal brand evangelists on Instagram, LinkedIn, and YouTube through scroll-stopping creative content.",
    iconName: "Instagram",
    details: ["Interactive Content Grids", "Algorithm-Defying Playbooks", "Community Nurturing", "Direct Lead Sourcing"]
  },
  {
    id: "paid-advertising",
    title: "Paid Advertising",
    description: "Surgical Meta and Google Ads campaigns optimized for maximum return on ad spend (ROAS) and velocity.",
    iconName: "Target",
    details: ["Bid Optimization Models", "Precision Retargeting", "Ad Creative Pipelines", "ROI Telemetry Boards"]
  },
  {
    id: "web-development",
    title: "Website Development",
    description: "Awwwards-grade custom front-ends that combine buttery-smooth interaction physics with conversions.",
    iconName: "Code",
    details: ["React & Framer Physics", "SEO Semantic Codebases", "Interactive Product Journeys", "Mobile-First Fluidity"]
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Automate lead generation and operations using next-generation intelligent conversational pipelines.",
    iconName: "Cpu",
    details: ["Autonomous CRM Workflows", "Intelligent Chat Nodes", "Scraping & Lead Harvesters", "Workflow Synthesis"]
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "Populating your sales pipeline with highly qualified executive decision-makers ready to close.",
    iconName: "Users",
    details: ["SDR Outbound Systems", "Premium Gated Content", "Webinar Funnels", "High-Value Calendly Slots"]
  },
  {
    id: "video-marketing",
    title: "Video Marketing",
    description: "Cinematic short-form reels, TikToks, and YouTube videos designed to maximize retention and visual viral coefficients.",
    iconName: "Play",
    details: ["Script Hook Blueprints", "Dynamic Cyberpunk Visuals", "Audio Accent Design", "Viral Hooks Integration"]
  }
];

export const portfolioData: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "E-Commerce Growth Campaign",
    category: "Websites",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    metrics: "4.8x ROAS • +180% Revenue",
    description: "An end-to-end redevelopment and paid media takeover for an premium streetwear brand, fusing Japanese aesthetics with optimized checkout pipelines.",
    deliverables: ["E-Commerce Architecture", "Meta Scaling Grid", "Cinematic Reels Production"],
    client: "NEO-TOKYO APPAREL"
  },
  {
    id: "proj-2",
    title: "Personal Brand Launch",
    category: "Personal Branding",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    metrics: "120K LinkedIn • 3 Venture Deals",
    description: "Transforming a quiet Silicon Valley tech founder into an authoritative visual voice on AI ethics and decentralized venture finance.",
    deliverables: ["LinkedIn Content Systems", "PR & Speaking Sourcing", "Personal Podcast Setup"],
    client: "DR. ARISU SATO"
  },
  {
    id: "proj-3",
    title: "Real Estate Marketing",
    category: "Ads",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    metrics: "+420 High-Net-Worth Leads",
    description: "Surgical Google Search and YouTube Ads targeting premium penthouse buyers with interactive virtual 3D tours.",
    deliverables: ["Precision Geo-targeting", "Interactive 3D Landers", "Auto-Dial CRM Connectors"],
    client: "SHINJUKU SKYE RESIDENCES"
  },
  {
    id: "proj-4",
    title: "Social Media Strategy",
    category: "Social Media",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    metrics: "+15M Views • 240K Followers",
    description: "Designing a high-retention short-form video pipeline utilizing cyberpunk visuals, synth wave loops, and hyper-kinetic hooks.",
    deliverables: ["Short-form Scripting", "3D Motion Elements", "Influencer Seed Matrices"],
    client: "NIGHT CITY ELECTRONICS"
  },
  {
    id: "proj-5",
    title: "Fitness Brand Promotion",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    metrics: "+300% Member Influx",
    description: "A complete visual rebrand of a boutique premium boxing gym. Blended gritty neon brutalism details with high-end luxury storytelling.",
    deliverables: ["Brand Guideline Framework", "Interactive Booking UI", "Local SEO Maps Domination"],
    client: "KAIZEN FIGHT CLUB"
  },
  {
    id: "proj-6",
    title: "Local Business SEO",
    category: "SEO",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    metrics: "Rank #1 for 45 Local Keywords",
    description: "Targeted localized technical SEO overhauls coupled with hyper-targeted citations to establish total organic presence in Chennai.",
    deliverables: ["Schema Markup Node Injection", "Review Velocity Automation", "Backlink Velocity Grid"],
    client: "CHENTEC MEDICAL SYSTEMS"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Arisato Takahashi",
    role: "Managing Director",
    company: "Sato Technologies",
    quote: "AXOWEB completely overhauled our brand presence. Within 3 months, our organic inquiries surged by 150%, and our paid campaigns hit an all-time high ROAS of 5.2x. Their team possesses an elite understanding of visual aesthetics and marketing math.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    role: "Founder",
    company: "Aura Skincare",
    quote: "As a creator, establishing a cohesive personal brand on LinkedIn felt overwhelming. AXOWEB took the reins, designed an absolute masterpiece of a content grid, and booked me on two major national tech podcasts. Life-changing experience.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-3",
    name: "Vikram Malhotra",
    role: "VP of Growth",
    company: "Zenith Real Estate",
    quote: "Their performance marketing team doesn't just 'run ads'—they analyze raw cohorts like rocket scientists. Our lead-to-opportunity velocity doubled, and the custom landing pages they built operate like sales machines.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  }
];

export const teamData: TeamMemberItem[] = [
  {
    id: "team-1",
    name: "Arjun Prakash",
    role: "Founder & CEO",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80", // Using stylish avatar
    bio: "Ex-Big 4 Marketing Strategist with over 10 years of scaling high-velocity startups. Arjun fuses business engineering with premium creative aesthetics.",
    specialties: ["Venture Scale Mechanics", "Brand Placement Architecture", "Omnichannel Funnel Integration"]
  },
  {
    id: "team-2",
    name: "Kavya Nair",
    role: "Digital Marketing Head",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    bio: "Analytical wizard with over $12M in ad spend under management. Kavya orchestrates predictive audience models that break records across Meta and Google.",
    specialties: ["Cohort Performance Math", "Custom Attribution Node Coding", "Paid Funnel Synthesis"]
  },
  {
    id: "team-3",
    name: "Rohit Sharma",
    role: "Brand Strategist",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    bio: "Visual storyteller obsessed with brutalist design and organic brand positioning. Rohit is the mastermind behind our luxury cyberpunk identity.",
    specialties: ["Narrative Design Matrix", "Aesthetic Alignment", "Creator Placement Mapping"]
  },
  {
    id: "team-4",
    name: "Vikram Reddy",
    role: "SEO Specialist",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    bio: "A technical SEO specialist who lives inside Google search logs and structured markup nodes. Vikram turns search engines into client fountains.",
    specialties: ["Semantic Schema Injectors", "Technical Indexing Overhauls", "Local Map Supre-Nodes"]
  }
];

export const blogPostsData: BlogPostItem[] = [
  {
    id: "blog-1",
    title: "10 Digital Marketing Trends to Watch in 2026",
    excerpt: "Explore how predictive AI model synthesis and decentralized media hubs are completely rewriting the rules of client acquisition and brand velocity.",
    category: "Marketing",
    date: "July 12, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=500&q=80",
    content: "The marketing landscape of 2026 is governed by AI agent frameworks and hyper-personalized visual grids. Brands that rely on generic templated copy are seeing click-through rates plunge by 80%. Survival requires algorithm-defying authentic visual identities and custom vector embeddings to intercept high-intent buyers..."
  },
  {
    id: "blog-2",
    title: "How to Build a Strong Personal Brand Online",
    excerpt: "A tactical guide for founders and executives on leveraging curated LinkedIn content matrices to source investment capital, clients, and authority.",
    category: "Branding",
    date: "July 08, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80",
    content: "Your digital personal brand is your ultimate leverage node. By positioning yourself as an authentic leader, you reduce sales friction by up to 70%. Learn the exact 4-part framework we use to write viral technical threads, design scroll-stopping personal decks, and gain editorial media features..."
  },
  {
    id: "blog-3",
    title: "SEO Best Practices for Higher Rankings",
    excerpt: "Move beyond standard keywords. Learn how to write semantic schema nodes and engineer core web vital latency to claim undisputed rank #1 on Google.",
    category: "SEO",
    date: "July 01, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    content: "Modern search engines do not read strings; they parse semantic entities. To secure ranking supremacy, you must map your brand as a core node in Google's Knowledge Graph. We breakdown technical schema injection, backlink velocity curves, and how to maintain sub-second server load speeds..."
  }
];

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: "How long does it take to see tangible marketing results?",
    answer: "For Paid Advertising (Meta/Google), optimization loops conclude within 14 days, with initial leads launching within the first 48 hours. For organic Search Engine Supremacy (SEO) and Personal Branding, expect exponential scaling and authority positioning within 60 to 90 days."
  },
  {
    id: "faq-2",
    question: "What makes AXOWEB different from a standard agency?",
    answer: "Standard agencies guess; we engineer. We merge high-fidelity luxury cyberpunk aesthetics (for unbeatable conversion visual psychology) with rigid data science. Every design choice is backed by cognitive conversion math, and our AI automation grids are custom-built server-side to slash your SDR expenses."
  },
  {
    id: "faq-3",
    question: "Do you offer custom enterprise marketing packages?",
    answer: "Absolutely. While our Starter, Growth, and Premium plans align with most high-growth models, we custom-architect omnichannel grids for Fortune-level brands, high-net-worth creators, and Series-A tech companies. Contact us for custom pipeline scoping."
  },
  {
    id: "faq-4",
    question: "How does the Strategy Session booking work?",
    answer: "Select a date and hour grid on our consultation calendar, and input your business telemetry. Our systems auto-provision a Google Calendar meeting with a specialized partner who will review your brand and deliver a custom 30-day scaling blueprint during the call."
  }
];

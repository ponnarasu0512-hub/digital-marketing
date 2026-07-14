import { ServiceItem, PortfolioProject, TestimonialItem, TeamMemberItem, BlogPostItem, FaqItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Build a highly engaging visual presence with professional social media content and creative campaigns that tell your brand's unique story.",
    iconName: "Sparkles",
    details: ["Professional social media content", "Creative campaigns", "Reels", "Graphics", "Visual storytelling"]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Elevate your long and short-form video content with cinematic post-production, motion graphics, and engaging audio design.",
    iconName: "Play",
    details: ["YouTube videos", "Instagram Reels", "Commercial videos", "Corporate videos", "Podcast editing", "Motion graphics"]
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Cultivate hyper-active online communities and scale your accounts organically with custom high-impact platform playbooks.",
    iconName: "Instagram",
    details: ["Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "YouTube Growth", "Social Media Strategy"]
  },
  {
    id: "content-planning",
    title: "Content Planning",
    description: "End-to-end management, scheduling, and profile optimizations designed to foster growth and streamline monthly operations.",
    iconName: "Calendar",
    details: ["Social Media Management", "Content Scheduling", "Community Management", "Profile Optimization", "Growth Strategy", "Monthly Reports", "Audience Engagement"]
  },
  {
    id: "branding",
    title: "Branding",
    description: "Establish absolute authority and trust with cohesive logo systems, visual guidelines, and high-end brand identities.",
    iconName: "Award",
    details: ["Brand Identity", "Logo Design", "Visual Identity", "Brand Guidelines", "Packaging Design", "Business Profiles"]
  },
  {
    id: "creative-design",
    title: "Creative Design",
    description: "Aesthetic marketing collateral ranging from posters, flyers, advertisement graphics, to high-fidelity website imagery.",
    iconName: "Palette",
    details: ["Posters", "Flyers", "Social Media Creatives", "Advertisement Designs", "Brochures", "Website Graphics"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Surgical lead generation, Search Engine Optimization (SEO), programmatic email systems, and multi-channel marketing automation.",
    iconName: "Globe",
    details: ["Search Engine Optimization (SEO)", "Google Ads", "Meta Ads", "Lead Generation", "Email Marketing", "Marketing Automation"]
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description: "High-ROAS Meta and Google ad campaigns optimized daily against deep conversion tracking and analytics telemetry.",
    iconName: "Target",
    details: ["Meta Advertising", "Google Advertising", "Campaign Optimization", "Conversion Tracking", "Remarketing Campaigns", "Analytics Reporting"]
  }
];

export const portfolioData: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "Aura Premium Brand Identity",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    metrics: "Cohesive Visual Guidelines • 100% Brand Recall",
    description: "Crafted a luxury, high-contrast visual identity and brand package system that established immediate sector trust.",
    deliverables: ["Logo System", "Visual Identity", "Packaging Design"],
    client: "AURA SKINCARE"
  },
  {
    id: "proj-2",
    title: "Omnipresent LinkedIn Grid",
    category: "Social Media",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    metrics: "+150% Organic Inquiries",
    description: "Engineered a masterfully curated content grid for managing directors to build executive authority on LinkedIn.",
    deliverables: ["LinkedIn Strategy", "Content Scheduling", "Profile Optimization"],
    client: "SATO TECHNOLOGIES"
  },
  {
    id: "proj-3",
    title: "High-Retention Visual Storytelling",
    category: "Content Creation",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    metrics: "10M+ Combined Views",
    description: "Designed an interactive creative campaign using Reels, graphics, and scroll-stopping visual storytelling.",
    deliverables: ["Reels Design", "Creative Campaigns", "Custom Graphics"],
    client: "CREATIVE HUB"
  },
  {
    id: "proj-4",
    title: "Cinematic YouTube & Reels Pipeline",
    category: "Video Editing",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    metrics: "95% Average View Retention",
    description: "Cinematic video editing and motion graphics post-production for high-performing long and short-form videos.",
    deliverables: ["YouTube Post-Production", "Instagram Reels Editing", "Motion Graphics"],
    client: "VELOCITY MEDIA"
  },
  {
    id: "proj-5",
    title: "Creative Launch Campaign",
    category: "Marketing Campaigns",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    metrics: "3.2x Campaign ROI",
    description: "An end-to-end promotional launch campaign combining creative design, influencer coordination, and email funnels.",
    deliverables: ["Campaign Strategy", "Social Media Creatives", "Email Marketing"],
    client: "NEXUS APPAREL"
  },
  {
    id: "proj-6",
    title: "High-Intent Google Search Domination",
    category: "Google Ads",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    metrics: "+300% High-Value Leads",
    description: "Surgical Google Search, Display, and Performance Max campaigns targeting high-intent decision-makers.",
    deliverables: ["Keyword Research", "Performance Max", "Conversion Tracking"],
    client: "APEX CORP"
  },
  {
    id: "proj-7",
    title: "High-ROAS Meta Advertising Grid",
    category: "Meta Ads",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    metrics: "5.2x All-Time High ROAS",
    description: "Scale-driven Meta advertising campaigns optimized using precision cohort targeting and landing page funnels.",
    deliverables: ["Facebook Ads", "Instagram Ads", "Ad Campaign Mastery"],
    client: "SKINCARE DIRECT"
  },
  {
    id: "proj-8",
    title: "Awwwards-Quality Web Architecture",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    metrics: "Sub-0.5s Load Velocity",
    description: "A luxury glassmorphism React website combining smooth interaction physics with high-converting layouts.",
    deliverables: ["React Front-end", "Framer Physics", "SEO Schema Injection"],
    client: "KAIZEN INTERACTIVES"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Arisato Takahashi",
    role: "Managing Director",
    company: "Sato Technologies",
    quote: "ACT ON Creation completely overhauled our brand presence. Within 3 months, our organic inquiries surged by 150%, and our paid campaigns hit an all-time high ROAS of 5.2x. Their team possesses an elite understanding of visual aesthetics and marketing math.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    role: "Founder",
    company: "Aura Skincare",
    quote: "As a creator, establishing a cohesive personal brand on LinkedIn felt overwhelming. ACT ON Creation took the reins, designed an absolute masterpiece of a content grid, and booked me on two major national tech podcasts. Life-changing experience.",
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
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
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
    content: "The marketing landscape of 2026 is governed by AI agent frameworks and hyper-personalized visual grids. Brands that rely on generic copy are seeing click-through rates plunge. Survival requires algorithm-defying authentic visual identities and custom vector embeddings to intercept high-intent buyers..."
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
    question: "What services do you provide?",
    answer: "ACT ON Creation offers Content Creation, Video Editing, Social Media Marketing, Content Planning, Branding, Creative Design, Digital Marketing, and Performance Marketing services, along with Professional Digital Marketing Courses."
  },
  {
    id: "faq-2",
    question: "How long does a project take?",
    answer: "Most creative design and branding assets are ready within 1 to 2 weeks. Video editing and social media campaigns onboard within 48 to 72 hours, and digital ad campaigns launch optimization loops in under 14 days."
  },
  {
    id: "faq-3",
    question: "Do you manage social media monthly?",
    answer: "Yes! We offer monthly retainer services covering complete Social Media Management, Content Planning, Content Scheduling, Community Management, Profile Optimization, Monthly Reports, and Audience Engagement."
  },
  {
    id: "faq-4",
    question: "Do you provide Meta Ads services?",
    answer: "Absolutely. We build, manage, and optimize scale-driven Meta Ads (Facebook & Instagram Ads) focusing on surgical cohort targeting, creative ad design, Conversion Tracking, Remarketing, and maximizing your return on ad spend (ROAS)."
  },
  {
    id: "faq-5",
    question: "Can you create video content?",
    answer: "Yes, Content Creation and Video Editing are our primary strengths. We create professional social media videos, YouTube videos, Instagram Reels, Commercial videos, Corporate videos, and Podcast edits accompanied by premium motion graphics."
  },
  {
    id: "faq-6",
    question: "Do you offer training courses?",
    answer: "Yes! We offer specialized, real-world Professional Digital Marketing Courses. This includes our Digital Marketing Masterclass, Meta Ads Campaign Mastery, Google Ads keyword & search modules, Funnel Marketing, Video Editing, and Content Creation."
  }
];

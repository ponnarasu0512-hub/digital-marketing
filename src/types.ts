export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: "Branding" | "Social Media" | "Content Creation" | "Video Editing" | "Marketing Campaigns" | "Google Ads" | "Meta Ads" | "Web Design" | "Websites" | "SEO" | "Personal Branding";
  imageUrl: string;
  metrics: string;
  description: string;
  deliverables: string[];
  client: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl: string;
  videoUrl?: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  specialties: string[];
}

export interface BlogPostItem {
  id: string;
  title: string;
  excerpt: string;
  category: "SEO" | "Marketing" | "AI" | "Branding" | "Instagram" | "LinkedIn";
  date: string;
  readTime: string;
  imageUrl: string;
  content: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormInput {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  businessType: string;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: string;
  budget: string;
  message?: string;
}

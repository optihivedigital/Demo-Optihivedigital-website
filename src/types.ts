export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: 'ad-ops' | 'performance' | 'growth' | 'creative' | 'analytics';
  tag: string;
  iconName: string;
  highlights: string[];
  metrics: string;
  deliverables: string[];
  tools: string[];
  caseSnippet: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  service: string;
  headline: string;
  description: string;
  stats: {
    label: string;
    value: string;
    trend: string;
  }[];
  tags: string[];
  duration: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  companyName: string;
  comments: string;
  services: string[];
  budget: string;
}

export interface LeadRecord extends LeadFormData {
  id: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'audit_pending';
  targetRecipient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  results: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

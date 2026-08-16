import { ServiceItem, CaseStudy, Testimonial, FaqItem } from '../types';

export const AGENCY_INFO = {
  name: 'OptiHive Digital',
  legalName: 'OptiHive Digital Marketing Agency',
  tagline: 'GROW • ATTRACT • CONVERT',
  subTagline: 'DIGITAL MARKETING AGENCY',
  contactEmail: 'optihivedigital@gmail.com',
  phone: '+1 (800) 492-HIVE / +1 (555) 890-4483',
  address: 'Suite 400, Global Media Hub, Tech Corridor & Remote Worldwide Operations',
  workingHours: '24/7 Global Campaign Operations & Monitoring',
  stats: {
    adSpendManaged: '$68M+',
    averageRoasLift: '+380%',
    campaignsLaunched: '2,400+',
    clientRetention: '98.6%',
    impressionsDelivered: '2.4B+',
    countriesReached: '45+'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'programmatic-ad-ops',
    title: 'Programmatic Advertising & Ad Ops',
    category: 'ad-ops',
    tag: 'Flagship Core',
    iconName: 'Cpu',
    shortDesc: 'End-to-end programmatic media buying, real-time bidding (RTB), private marketplace deals (PMP), CTV/OTT, and 24/7 ad trafficking QA.',
    metrics: '+42% Lower eCPM & 0% Ad Fraud',
    highlights: [
      'Demand-Side Platform (DSP) orchestration across DV360, The Trade Desk, Amazon DSP & MediaMath',
      'Connected TV (CTV), OTT, Audio Ads, and Dynamic Digital Out-Of-Home (DOOH)',
      'Brand safety guardrails, fraud prevention (IAS & DoubleVerify), and supply path optimization (SPO)',
      '24/7 Campaign QA, pixel tag audits, creative wrapping, and pacing governance'
    ],
    deliverables: [
      'Multi-DSP Campaign Architecture & Setup',
      'Audience Segment Ingestion (1st, 2nd, 3rd party DMPs)',
      'Real-Time Bid & Frequency Cap Optimization',
      'Custom White-Label Attribution & Pacing Dashboards'
    ],
    tools: ['Google DV360', 'The Trade Desk', 'Amazon DSP', 'Google Ad Manager (GAM)', 'IAS', 'DoubleVerify'],
    caseSnippet: 'Scaled global DTC electronics brand across 14 European markets with a 38% reduction in cost per acquisition via programmatic PMP deals.'
  },
  {
    id: 'performance-marketing',
    title: 'Paid Search & Performance Social (PPC)',
    category: 'performance',
    tag: 'High ROI',
    iconName: 'TrendingUp',
    shortDesc: 'Hyper-targeted Google Search, Performance Max, Meta Ads (FB & IG), TikTok, and LinkedIn B2B campaigns engineered for maximum ROAS.',
    metrics: '3.9x Average ROAS Multiplier',
    highlights: [
      'Google Ads Mastery: High-intent Search, Shopping, YouTube Ads, and Performance Max (PMax)',
      'Paid Social Scalability: Meta Advantage+, TikTok Spark Ads, and LinkedIn Thought Leader Ads',
      'Granular audience sculpting: Lookalikes, custom intent, in-market segments & retargeting ladders',
      'Aggressive dayparting, negative keyword sculpting, and automated bidding scripts'
    ],
    deliverables: [
      'Comprehensive Ad Account Audit & Re-structuring',
      'Weekly Creative Refresh & Copy Testing Matrix',
      'Custom Bid Strategy & Smart Target CPA/ROAS Calibration',
      'Daily Budget Pacing & Discrepancy Reconciliation'
    ],
    tools: ['Google Ads Editor', 'Meta Ads Manager', 'TikTok Ads Center', 'LinkedIn Campaign Manager', 'Triple Whale', 'Northbeam'],
    caseSnippet: 'Generated $1.85M in revenue for a luxury beauty brand with a sustained 4.6x blended ROAS during peak holiday quarters.'
  },
  {
    id: 'seo-content-engine',
    title: 'SEO & Organic Growth Engine',
    category: 'growth',
    tag: 'Compounding Traffic',
    iconName: 'Search',
    shortDesc: 'Dominating organic search through technical core web vitals optimization, topical authority clusters, and high-impact digital PR.',
    metrics: '+310% Organic Pipeline Growth',
    highlights: [
      'Technical SEO audits: JavaScript rendering, crawl budget optimization, indexation hygiene, schema markup',
      'Topical authority semantic mapping & AI-assisted high-intent search content production',
      'Digital PR, contextual editorial backlinks, and brand mention outreach',
      'Local SEO, Google Business Profile scaling & multi-location schema setup'
    ],
    deliverables: [
      'Complete Technical SEO Architecture Roadmap',
      '12-Month Content Hub & Keyword Dominance Matrix',
      'High-DR Editorial Backlink Acquisition Strategy',
      'Core Web Vitals & PageSpeed Performance Fixes'
    ],
    tools: ['Ahrefs Enterprise', 'Semrush', 'Screaming Frog', 'Google Search Console', 'SurferSEO', 'Clearscope'],
    caseSnippet: 'Propelled a B2B SaaS platform from page 4 to top 3 rankings for 42 high-intent enterprise keywords in 5 months.'
  },
  {
    id: 'cro-web-ops',
    title: 'Conversion Rate Optimization (CRO) & Web Ops',
    category: 'growth',
    tag: 'Revenue Multiplier',
    iconName: 'Zap',
    shortDesc: 'Transforming clicks into buyers through scientific A/B split testing, UX teardowns, high-converting landing pages, and friction elimination.',
    metrics: '+46% Lift in Checkout Completion',
    highlights: [
      'Full-funnel user journey heatmaps, session recordings, and click friction analysis',
      'High-velocity A/B & multivariate landing page experimentation via Optimizely & VWO',
      'Sub-second page speed engineering for mobile ads traffic',
      'Frictionless checkout, micro-copy enhancements, and 1-click payment upsells'
    ],
    deliverables: [
      'Weekly A/B Testing Execution & Statistical Significance Reports',
      'Bespoke High-Converting Advertorial & VSL Landing Pages',
      'Cart Abandonment & Exit-Intent Flow Re-engineering',
      'Mobile UX Speed & Responsiveness Optimization'
    ],
    tools: ['Hotjar', 'Microsoft Clarity', 'VWO', 'Optimizely', 'Figma', 'Next.js / Tailwind'],
    caseSnippet: 'Increased conversion rate on a fintech signup funnel from 2.1% to 4.8%, boosting monthly revenue by $140,000 without increasing ad spend.'
  },
  {
    id: 'creative-rich-media',
    title: 'Creative Studio & Rich Media Ads',
    category: 'creative',
    tag: 'High CTR',
    iconName: 'Sparkles',
    shortDesc: 'High-impact HTML5 interactive banners, dynamic creative optimization (DCO), short-form UGC video ads, and scroll-stopping visuals.',
    metrics: '3.2x Higher CTR vs Industry Benchmarks',
    highlights: [
      'Interactive HTML5 rich media formats: 3D cubes, peel-downs, video expanding banners & gamified units',
      'Dynamic Creative Optimization (DCO) personalized by weather, geotag, time, and user segment',
      'High-converting short-form TikTok & Instagram Reels video ad production',
      'Direct-response ad copywriting, hook variations & visual psychology'
    ],
    deliverables: [
      'IAB Standard & Custom Rich Media Ad Unit Suites',
      'DCO Feed Setup & Rule Engine Implementation',
      'Monthly Batch of 20+ UGC Video & Motion Ads',
      'Rapid Creative Iteration & Angle Testing'
    ],
    tools: ['Adobe After Effects', 'Figma', 'Google Web Designer', 'Celtra', 'Blender 3D'],
    caseSnippet: 'Deployed dynamic interactive expandable units for an automotive client, delivering a 74% engagement rate and 2.8x higher test-drive bookings.'
  },
  {
    id: 'data-analytics-attribution',
    title: 'Data Analytics & Server-Side Attribution',
    category: 'analytics',
    tag: 'Precision Truth',
    iconName: 'BarChart3',
    shortDesc: 'Flawless measurement with Google Analytics 4 (GA4), Server-Side Tag Manager (sGTM), Meta Conversions API (CAPI), and custom Looker dashboards.',
    metrics: '100% Signal Resilience & Ad Accuracy',
    highlights: [
      'Server-Side GTM & Meta/TikTok/Google Conversions API (CAPI) implementation for cookie resilience',
      'Multi-touch attribution modeling (First Touch, Last Touch, Linear, Algorithmic / Data-Driven)',
      'Automated real-time business intelligence dashboards in Looker Studio & Tableau',
      'Customer Lifetime Value (LTV) cohort analysis and churn prediction modeling'
    ],
    deliverables: [
      'Server-Side Event Tracking Infrastructure',
      'Executive ROAS & Blended MER Dashboard',
      'Cross-Channel Attribution Model Setup',
      'Data Layer & Enhanced E-commerce Integration'
    ],
    tools: ['Google Analytics 4', 'Server GTM', 'Looker Studio', 'BigQuery', 'Segment CDP', 'Mixpanel'],
    caseSnippet: 'Eliminated 32% signal loss caused by iOS privacy updates for an omnichannel retailer, immediately stabilizing ad bidding algorithms.'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'case-1',
    client: 'LuxeLiving E-Commerce',
    industry: 'Modern Furniture & Home Decor',
    service: 'Programmatic Ad Ops + Performance Social',
    headline: 'Scaling from $30k to $240k/mo in Profitable Ad Spend at 4.4x ROAS',
    description: 'LuxeLiving struggled with rising acquisition costs on Meta. OptiHive rebuilt their media architecture with programmatic high-impact display, dynamic catalog retargeting, and full-funnel Google PMax campaigns.',
    stats: [
      { label: 'Blended ROAS', value: '4.4x', trend: '+140% vs benchmark' },
      { label: 'Monthly Revenue', value: '$1.05M', trend: 'Scaled 8x' },
      { label: 'Customer CPA', value: '$38.20', trend: '-42% reduction' }
    ],
    tags: ['Programmatic DSP', 'Meta Advantage+', 'Google PMax', 'DCO Ads'],
    duration: '6 Months Engagement',
    quote: {
      text: "OptiHive Digital completely overhauled our ad operations. Their precision targeting and daily bid optimizations unlocked profitable scale we thought was impossible.",
      author: 'Marcus Vance',
      role: 'Chief Marketing Officer, LuxeLiving'
    }
  },
  {
    id: 'case-2',
    client: 'CloudFlow Technologies',
    industry: 'Enterprise B2B SaaS',
    service: 'Paid Search + Technical SEO & CRO',
    headline: 'Generated 1,420+ Enterprise SQLs with a 51% Lower Cost per Pipeline Opportunity',
    description: 'Faced with fierce competition in the cloud security niche, CloudFlow partnered with OptiHive to sculpt high-intent Google Search campaigns and re-engineer their demo landing pages.',
    stats: [
      { label: 'Qualified Pipeline', value: '$8.4M', trend: '+280% YoY' },
      { label: 'Demo Conversion Rate', value: '6.2%', trend: 'Up from 1.9%' },
      { label: 'Cost Per SQL', value: '$162', trend: '-51% reduction' }
    ],
    tags: ['Google Search', 'LinkedIn Ads', 'CRO Teardown', 'HubSpot Ops'],
    duration: '8 Months Engagement',
    quote: {
      text: "The lead quality skyrocketed within 30 days of working with OptiHive. They don't just send traffic—they engineer actual paying enterprise clients.",
      author: 'Elena Rostova',
      role: 'VP of Growth, CloudFlow'
    }
  },
  {
    id: 'case-3',
    client: 'PulseFit Nutrition',
    industry: 'DTC Health & Wellness',
    service: 'Creative Studio + Omnichannel Ad Ops',
    headline: '18.5M+ Video Impressions and $3.2M Annual Run-Rate in 90 Days',
    description: 'Leveraging our rapid creative production flywheel, OptiHive deployed over 120 variations of TikTok and Reels hooks paired with automated real-time bidding algorithms.',
    stats: [
      { label: 'Total Impressions', value: '18.5M', trend: 'Global Reach' },
      { label: 'Subscription LTV', value: '$248', trend: '+65% increase' },
      { label: 'First-Order ROAS', value: '3.65x', trend: 'Profitable on Day 0' }
    ],
    tags: ['TikTok Spark', 'UGC Creative Engine', 'GA4 Server-Side', 'Meta Scaling'],
    duration: '90-Day Sprint',
    quote: {
      text: "OptiHive's creative team produces hooks that stop the scroll, while their media buyers know how to milk every dollar of ad spend.",
      author: 'Jordan Reed',
      role: 'Co-Founder & CEO, PulseFit'
    }
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'David Steinberg',
    role: 'Managing Director',
    company: 'Nexus Media Capital',
    content: 'OptiHive Digital is hands-down the most technical and commercially sharp digital marketing agency we have ever partnered with. Their programmatic ad ops capabilities rival the top global holding companies.',
    rating: 5,
    results: '+420% Annual ROAS Growth',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    name: 'Sophia Chen',
    role: 'Head of Growth Marketing',
    company: 'Velox Payments',
    content: 'Their server-side attribution setup and relentless A/B testing on our paid search funnels dropped our CAC by half. The team communicates with total transparency and feels like a dedicated in-house squad.',
    rating: 5,
    results: '-48% Customer Acquisition Cost',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    name: 'Alexander Knight',
    role: 'CEO & Founder',
    company: 'Aether Automotive Tech',
    content: 'The rich media campaigns and hyper-local programmatic geotargeting designed by OptiHive delivered 3x higher dealership walk-ins than our previous agency. Exceptional ROI and support.',
    rating: 5,
    results: '3.4x Higher Foot Traffic & Leads',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  }
];

export const PARTNERS_DATA = [
  { name: 'Google Premier Partner', tier: 'Top 3% Global', category: 'Search, Shopping, DV360' },
  { name: 'Meta Business Partner', tier: 'Tier 1 Agency', category: 'Facebook & Instagram Ads' },
  { name: 'The Trade Desk Certified', tier: 'Enterprise DSP', category: 'Programmatic RTB' },
  { name: 'TikTok Ads Partner', tier: 'Gold Badge', category: 'Viral Video Performance' },
  { name: 'Amazon Ads Verified', tier: 'Accredited', category: 'Sponsored & DSP Ads' },
  { name: 'Shopify Plus Partner', tier: 'E-Commerce Tech', category: 'Conversion & Funnels' },
  { name: 'HubSpot Elite Partner', tier: 'B2B CRM & RevOps', category: 'Inbound Automation' },
  { name: 'GA4 & Server-Side GTM', tier: 'Analytics Partner', category: 'Cookieless Attribution' }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'How does OptiHive Digital ensure high ROAS on programmatic and paid media?',
    answer: 'We deploy an algorithmic, data-first methodology. We start with rigorous tracking hygiene (Server-Side GTM, GA4, Meta CAPI), eliminate click fraud through verification filters (DoubleVerify/IAS), run multivariate creative testing weekly, and optimize bids in real time based on bottom-funnel revenue rather than vanity impressions.',
    category: 'strategy'
  },
  {
    question: 'What is the minimum monthly ad spend you manage?',
    answer: 'We typically partner with growing brands, high-growth startups, and enterprises with ad spends ranging from $5,000/month up to $500,000+/month. For custom audits or specific channel sprints (e.g. Programmatic Ad Ops or CRO overhauls), we offer bespoke project scopes.',
    category: 'pricing'
  },
  {
    question: 'How quickly can we launch campaigns with OptiHive?',
    answer: 'Our typical onboarding sprint takes 5 to 7 business days. This includes pixel verification, audience segmentation mapping, creative asset QA, conversion tracking checks, and initial campaign configuration. For urgent time-sensitive launches, we offer an expedited 48-hour onboarding sprint.',
    category: 'onboarding'
  },
  {
    question: 'How do you handle reporting and client communication?',
    answer: 'You get 24/7 access to a dedicated real-time Looker Studio dashboard tracking blended ROAS, CAC, spend pacing, and conversions. We hold bi-weekly strategic growth syncs and maintain a direct dedicated communication channel (Slack / WhatsApp / Email) with your assigned Lead Media Buyer and Strategist.',
    category: 'reporting'
  },
  {
    question: 'Where will my inquiry go when I submit the contact form?',
    answer: 'Your submission is routed immediately to our principal strategy desk at optihivedigital@gmail.com. A senior performance strategist will analyze your website, review your goals, and reply within 4 to 12 business hours with an initial audit breakdown and proposed roadmap.',
    category: 'contact'
  }
];

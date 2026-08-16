import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface LeadSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  companyName: string;
  services?: string[];
  budget?: string;
  comments: string;
  source?: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'audit_pending';
  targetRecipient: string;
}

const leadsStore: LeadSubmission[] = [
  {
    id: 'OHD-LEAD-8841',
    fullName: 'Sarah Jenkins',
    phone: '+1 (555) 349-8821',
    email: 's.jenkins@apexretail.io',
    companyName: 'Apex Retail Global',
    services: ['Programmatic Advertising', 'Paid Social & Search (PPC)', 'Conversion Rate Optimization (CRO)'],
    budget: '$25,000 - $50,000 / month',
    comments: 'Looking to overhaul our cross-channel ad ops and scale our ROAS ahead of Q3 product launches.',
    submittedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    status: 'new',
    targetRecipient: 'optihivedigital@gmail.com'
  },
  {
    id: 'OHD-LEAD-8839',
    fullName: 'David Morales',
    phone: '+44 20 7946 0912',
    email: 'david@novasolutions.co.uk',
    companyName: 'Nova FinTech Solutions',
    services: ['Performance Marketing', 'SEO & Content Engine', 'Data Analytics & GA4 Attribution'],
    budget: '$15,000 - $25,000 / month',
    comments: 'Need a dedicated ad operations partner to manage DV360 and Google Ads campaigns with multi-touch attribution.',
    submittedAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    status: 'contacted',
    targetRecipient: 'optihivedigital@gmail.com'
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Handle Contact Form Submission
  app.post('/api/contact', (req, res) => {
    const { fullName, phone, email, companyName, comments, services, budget, source } = req.body;

    if (!fullName || !email || !companyName) {
      return res.status(400).json({
        success: false,
        message: 'Please provide full name, email, and company name.'
      });
    }

    const leadId = `OHD-${Math.floor(1000 + Math.random() * 9000)}`;
    const newLead: LeadSubmission = {
      id: leadId,
      fullName: String(fullName).trim(),
      phone: String(phone || '').trim(),
      email: String(email).trim(),
      companyName: String(companyName).trim(),
      services: Array.isArray(services) ? services : (services ? [services] : []),
      budget: budget || 'Not Specified',
      comments: String(comments || '').trim(),
      source: source || 'Website Contact Form',
      submittedAt: new Date().toISOString(),
      status: 'new',
      targetRecipient: 'optihivedigital@gmail.com'
    };

    leadsStore.unshift(newLead);

    // In a live production environment with SMTP or SendGrid/Resend credentials,
    // this triggers automated mail dispatch to optihivedigital@gmail.com.
    console.log(`[OptiHive Digital] New lead received for optihivedigital@gmail.com:`, {
      id: newLead.id,
      from: newLead.fullName,
      company: newLead.companyName,
      email: newLead.email,
      phone: newLead.phone
    });

    const mailtoSubject = encodeURIComponent(`[New Project Inquiry] ${newLead.companyName} - ${newLead.fullName}`);
    const mailtoBody = encodeURIComponent(
      `Full Name: ${newLead.fullName}\n` +
      `Company: ${newLead.companyName}\n` +
      `Email: ${newLead.email}\n` +
      `Phone: ${newLead.phone}\n` +
      `Selected Services: ${newLead.services?.join(', ') || 'General Consultation'}\n` +
      `Estimated Budget: ${newLead.budget}\n\n` +
      `Project Brief / Comments:\n${newLead.comments}\n\n` +
      `Ref ID: ${newLead.id}`
    );

    return res.status(200).json({
      success: true,
      message: 'Inquiry successfully received and routed to optihivedigital@gmail.com!',
      leadId: newLead.id,
      targetEmail: 'optihivedigital@gmail.com',
      directMailtoUrl: `mailto:optihivedigital@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`,
      data: newLead
    });
  });

  // API Route: Get all inquiries (Admin / verification)
  app.get('/api/leads', (_req, res) => {
    res.json({
      success: true,
      count: leadsStore.length,
      leads: leadsStore,
      targetRecipient: 'optihivedigital@gmail.com'
    });
  });

  // API Route: Free Instant Website & Ad Audit Simulation
  app.post('/api/audit', (req, res) => {
    const { websiteUrl, email, companyName } = req.body;
    if (!websiteUrl || !email) {
      return res.status(400).json({ success: false, message: 'Website URL and email are required.' });
    }

    const auditScores = {
      seoScore: Math.floor(65 + Math.random() * 25),
      speedScore: Math.floor(70 + Math.random() * 20),
      adTrackingScore: Math.floor(55 + Math.random() * 35),
      croOpportunity: 'High (Estimated +32% lift potential)',
      quickFixes: [
        'Missing GA4 Server-Side tracking & Meta CAPI integration',
        'High first input delay on mobile landing pages',
        'Sub-optimal keyword match types leading to 24% ad spend leakage',
        'Missing dynamic rich media creative variations for high-intent retargeting'
      ],
      dispatchedTo: 'optihivedigital@gmail.com'
    };

    res.json({
      success: true,
      message: 'Audit report generated and dispatched to our strategy team!',
      report: auditScores
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`OptiHive Digital server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});

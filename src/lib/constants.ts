export const SITE_CONFIG = {
  name: 'RepTwin',
  tagline: 'AI-Powered Pharma Engagement',
  description: 'Transform healthcare engagement with compliant, always-on AI agents for pharmaceutical companies.',
  url: 'https://reptwin.ai',
} as const;

export const NAV_LINKS = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Platform', href: '/platform' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SOLUTIONS = [
  {
    id: 'medical-information',
    title: 'Medical Information Agent',
    shortTitle: 'Medical Info',
    description: 'Instant, compliant answers for HCPs and patients with 24/7 availability. Includes optional AI Rep Clone add-on.',
    href: '/solutions/medical-information',
    icon: 'Stethoscope',
    metrics: ['24/7 Availability', '600% ROI', 'AI Rep Clone'],
    featured: true,
  },
  {
    id: 'clinical-trials',
    title: 'Clinical Trial Agent',
    shortTitle: 'Clinical Trials',
    description: 'Accelerate recruitment, improve retention, and streamline participant engagement.',
    href: '/solutions/clinical-trials',
    icon: 'ClipboardList',
    metrics: ['34% Faster Screening', '11% Higher Enrollment', 'Improved Retention'],
    featured: false,
  },
  {
    id: 'access-reimbursement',
    title: 'Access & Reimbursement',
    shortTitle: 'Access & Reimb.',
    description: 'Automate prior authorizations and guide patients through coverage and affordability.',
    href: '/solutions/access-reimbursement',
    icon: 'Shield',
    metrics: ['50-75% PA Automation', 'Faster Time-to-Therapy', 'Higher Approval Rates'],
    featured: false,
  },
  {
    id: 'pharmacovigilance',
    title: 'Pharmacovigilance Agent',
    shortTitle: 'Pharmacovigilance',
    description: 'Streamlined adverse event reporting with real-time intake and automated case processing.',
    href: '/solutions/pharmacovigilance',
    icon: 'AlertCircle',
    metrics: ['24/7 AE Intake', 'Complete Reports', 'Faster Processing'],
    featured: false,
  },
] as const;

export const TRUST_BADGES = [
  { label: 'HIPAA Compliant', icon: 'ShieldCheck' },
  { label: 'GDPR Ready', icon: 'Lock' },
  { label: 'SOC2 Certified', icon: 'BadgeCheck' },
  { label: 'PHI Protected', icon: 'FileKey' },
  { label: 'MLR Approved', icon: 'CheckCircle' },
] as const;

export const INTEGRATIONS = [
  { name: 'Veeva CRM', logo: '/images/integrations/veeva.svg' },
  { name: 'Salesforce', logo: '/images/integrations/salesforce.svg' },
  { name: 'Epic EHR', logo: '/images/integrations/epic.svg' },
  { name: 'Argus Safety', logo: '/images/integrations/argus.svg' },
] as const;


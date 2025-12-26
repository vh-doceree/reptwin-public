'use client';

import { LandingHero } from '@/components/sections/LandingHero';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { WorkflowComparison } from '@/components/sections/WorkflowComparison';
import { SolutionIntegrations } from '@/components/sections/SolutionIntegrations';
import { ComplianceSection } from '@/components/sections/ComplianceSection';
import { CTASection } from '@/components/sections/CTASection';
import { TrustBar } from '@/components/sections/TrustBar';
import { RepCloneAddon } from '@/components/sections/RepCloneAddon';
import { 
  Zap, 
  Shield, 
  RefreshCw, 
  AlertTriangle, 
  BookOpen, 
  Clock,
  MessageSquare,
  FileCheck,
  Users,
  Search,
  Phone,
  FileText,
  UserCheck,
  CheckCircle,
  Database,
  Headphones
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Query Response',
    description: 'Provides HCPs and patients with immediate, 24/7 answers to medical questions using approved data and labels.',
  },
  {
    icon: Shield,
    title: 'Compliance & Auditability',
    description: 'Delivers only pre-approved, on-label information with complete audit trails for regulatory review.',
  },
  {
    icon: AlertTriangle,
    title: 'Smart Escalation',
    description: 'Automatically routes complex or off-label queries to live medical professionals for follow-up.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Updates',
    description: 'Knowledge base refreshes with new prescribing info, clinical trials, and FAQs automatically.',
  },
  {
    icon: BookOpen,
    title: 'Standard Responses',
    description: 'Draws from enterprise content repositories for consistent, approved answers every time.',
  },
  {
    icon: Clock,
    title: 'Zero Wait Time',
    description: 'Near-instant responses with 24/7 availability, handling surges without extra staffing.',
  },
];

const traditionalWorkflow = {
  title: 'Traditional Way',
  steps: [
    {
      icon: Phone,
      title: 'HCP Submits Query',
      description: 'Healthcare professional calls the medical information hotline or sends an email inquiry.',
      painPoint: '2-24 hour response time',
    },
    {
      icon: Search,
      title: 'Manual Research',
      description: 'Med Info team manually searches through documents, labels, and clinical data.',
      painPoint: 'Time-consuming lookup',
    },
    {
      icon: FileText,
      title: 'Draft Response',
      description: 'Specialist drafts a response based on findings and available documentation.',
      painPoint: 'Requires human availability',
    },
    {
      icon: UserCheck,
      title: 'MLR Review',
      description: 'Complex queries require Medical-Legal-Regulatory review before responding.',
      painPoint: 'Additional delays',
    },
    {
      icon: Headphones,
      title: 'Response Delivered',
      description: 'Finally, the response is delivered back to the HCP via phone or email.',
      painPoint: 'Inconsistent quality',
    },
  ],
};

const reptwinWorkflow = {
  title: 'With RepTwin',
  steps: [
    {
      icon: MessageSquare,
      title: 'HCP Asks via Any Channel',
      description: 'Healthcare professional submits question via chat, portal, app, or messaging platform.',
      improvement: 'Instant acknowledgment',
      metric: { value: '24/7', label: 'availability' },
    },
    {
      icon: Database,
      title: 'AI Searches Approved Content',
      description: 'Natural language processing understands intent and retrieves from pre-approved knowledge base.',
      improvement: 'Sub-second retrieval',
      metric: { value: '<1s', label: 'response time' },
    },
    {
      icon: FileCheck,
      title: 'Pre-Approved Response Generated',
      description: 'System generates compliant response using only approved, on-label information.',
      improvement: 'Always compliant',
      metric: { value: '85%+', label: 'auto-resolution' },
    },
    {
      icon: Users,
      title: 'Smart Escalation',
      description: 'Complex or off-label queries automatically routed to appropriate medical specialists.',
      improvement: 'Intelligent routing',
      metric: { value: '100%', label: 'proper escalation' },
    },
    {
      icon: CheckCircle,
      title: 'Complete Audit Trail',
      description: 'Every interaction logged with full audit trail for compliance and regulatory review.',
      improvement: 'Zero gaps',
      metric: { value: '600%', label: 'ROI' },
    },
  ],
};

const metrics = [
  { value: '600%', label: 'ROI', description: 'Faster responses, higher engagement' },
  { value: '90%+', label: 'Satisfaction', description: 'HCP and patient ratings' },
  { value: '85%+', label: 'Auto-Resolution', description: 'Queries answered by AI' },
  { value: '24/7', label: 'Availability', description: 'Zero downtime' },
];

const integrations = [
  { name: 'Veeva Vault', description: 'Standard response documents', logo: '/images/logos/integrations/Veeva_Systems_Logo.svg' },
  { name: 'Veeva CRM', description: 'HCP inquiry tracking', logo: '/images/logos/integrations/Veeva_Systems_Logo.svg' },
  { name: 'Salesforce', description: 'CRM integration', logo: '/images/logos/integrations/Salesforce.com_logo.svg' },
  { name: 'Safety DB', description: 'PV system integration', color: 'bg-purple-500' },
  { name: 'Calendar', description: 'Scheduling sync', color: 'bg-green-500' },
  { name: 'Multichannel', description: 'Web, app, messaging', color: 'bg-indigo-500' },
];

const integrationBenefits = [
  'Answers drawn from single source of truth',
  'Each interaction logged for compliance',
  'Adverse events automatically captured',
  'Deploy across web, mobile, and messaging',
  'Real-time content synchronization',
  'Seamless handoff to human specialists',
  'Rep visibility into all AI conversations',
  'Meeting scheduling without double-booking',
];

export default function MedicalInformationPage() {
  return (
    <>
      <LandingHero
        badge="Medical Information"
        title="Instant, Compliant Medical Answers"
        highlight="24/7"
        description="Provide healthcare professionals and patients with immediate, accurate, and compliant answers to medical questions—anytime, anywhere."
        primaryCTA="Request Demo"
        secondaryCTA="Learn More"
      />
      <TrustBar />
      <MetricsSection metrics={metrics} />
      <WorkflowComparison
        title="End-to-End Workflow Comparison"
        subtitle="See how RepTwin transforms the traditional medical information process into an efficient, always-on service"
        traditionalFlow={traditionalWorkflow}
        reptwinFlow={reptwinWorkflow}
      />
      <FeaturesGrid
        title="Key Capabilities"
        subtitle="Everything you need for compliant, efficient medical information delivery"
        features={features}
      />
      <RepCloneAddon />
      <SolutionIntegrations
        title="Enterprise Content Integration"
        subtitle="Connects with your medical content systems for accurate, approved responses"
        integrations={integrations}
        benefits={integrationBenefits}
      />
      <ComplianceSection />
      <CTASection />
    </>
  );
}

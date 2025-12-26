'use client';

import { LandingHero } from '@/components/sections/LandingHero';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { WorkflowComparison } from '@/components/sections/WorkflowComparison';
import { SolutionIntegrations } from '@/components/sections/SolutionIntegrations';
import { ComplianceSection } from '@/components/sections/ComplianceSection';
import { CTASection } from '@/components/sections/CTASection';
import { TrustBar } from '@/components/sections/TrustBar';
import { 
  UserPlus, 
  FileSignature, 
  Heart, 
  Bell, 
  BarChart2, 
  Globe,
  Search,
  ClipboardCheck,
  HeartPulse,
  Calendar,
  FileSearch,
  UserX,
  Clock,
  Phone,
  Sparkles,
  MessageSquare,
  CheckCircle,
  Activity
} from 'lucide-react';

const features = [
  {
    icon: UserPlus,
    title: 'Patient Pre-Screening',
    description: 'Match patients to trials and perform eligibility screening with protocol-specific questions.',
  },
  {
    icon: FileSignature,
    title: 'Consent Guidance',
    description: 'Walk patients through informed consent in plain language, answering questions interactively.',
  },
  {
    icon: Heart,
    title: 'Participant Support',
    description: '24/7 virtual study concierge for visit reminders, medication prompts, and symptom capture.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Automated visit reminders, medication prompts, and follow-up scheduling to reduce no-shows.',
  },
  {
    icon: BarChart2,
    title: 'Real-Time Data',
    description: 'Capture patient-reported outcomes and symptoms in real time between visits.',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Engage diverse populations with multi-language support across various platforms.',
  },
];

const traditionalWorkflow = {
  title: 'Traditional Way',
  steps: [
    {
      icon: Search,
      title: 'Limited Trial Awareness',
      description: 'Patients learn about trials through scattered sources—ads, referrals, or chance encounters.',
      painPoint: 'Low awareness & reach',
    },
    {
      icon: FileSearch,
      title: 'Manual Eligibility Screening',
      description: 'Site staff manually reviews patient records and conducts lengthy screening interviews.',
      painPoint: '34% longer screening time',
    },
    {
      icon: FileSignature,
      title: 'Paper Consent Process',
      description: 'Dense consent documents with complex medical terminology cause confusion and delays.',
      painPoint: 'Confusion & drop-offs',
    },
    {
      icon: UserX,
      title: 'Minimal Ongoing Support',
      description: 'Enrolled patients receive limited support between site visits, leading to poor adherence.',
      painPoint: 'High dropout risk',
    },
    {
      icon: Phone,
      title: 'Infrequent Check-Ins',
      description: 'Occasional phone calls from coordinators are the primary touchpoint between visits.',
      painPoint: 'Poor retention rates',
    },
  ],
};

const reptwinWorkflow = {
  title: 'With RepTwin',
  steps: [
    {
      icon: Sparkles,
      title: 'AI-Powered Trial Matching',
      description: 'AI proactively matches patients to eligible trials based on their condition and profile.',
      improvement: 'Expanded reach',
      metric: { value: '11%', label: 'more enrollments' },
    },
    {
      icon: ClipboardCheck,
      title: 'Automated Pre-Screening',
      description: 'Conversational AI asks protocol-specific questions and determines eligibility instantly.',
      improvement: 'Instant eligibility check',
      metric: { value: '34%', label: 'faster screening' },
    },
    {
      icon: MessageSquare,
      title: 'Interactive Consent Guidance',
      description: 'AI explains consent in plain language, answers questions, and ensures understanding.',
      improvement: 'Clear explanations',
      metric: { value: '↑', label: 'completion rate' },
    },
    {
      icon: HeartPulse,
      title: '24/7 Study Concierge',
      description: 'Always-on virtual assistant for questions, medication reminders, and symptom reporting.',
      improvement: 'Round-the-clock support',
      metric: { value: '24/7', label: 'availability' },
    },
    {
      icon: Activity,
      title: 'Smart Engagement & Retention',
      description: 'Proactive reminders, check-ins, and real-time data capture keep participants engaged.',
      improvement: 'Reduced dropouts',
      metric: { value: '↓', label: 'dropout rate' },
    },
  ],
};

const metrics = [
  { value: '34%', label: 'Faster Screening', description: 'Reduced screening time' },
  { value: '11%', label: 'Higher Enrollment', description: 'Improved recruitment' },
  { value: '↓', label: 'Dropout Rate', description: 'Improved retention' },
  { value: '24/7', label: 'Patient Support', description: 'Always available' },
];

const integrations = [
  { name: 'Epic', description: 'EHR integration', logo: '/images/logos/integrations/Epic.png' },
  { name: 'Cerner', description: 'Health record access', logo: '/images/logos/integrations/2011.Cerner.logo.png' },
  { name: 'AWS', description: 'Cloud infrastructure', logo: '/images/logos/integrations/Amazon_Web_Services_Logo.svg' },
  { name: 'Azure', description: 'Cloud platform', logo: '/images/logos/integrations/Microsoft_Azure_Logo.svg' },
];

const integrationBenefits = [
  'Real-time trial listing and enrollment status',
  'Patient data flows directly to EDC systems',
  'EHR integration for eligibility checking',
  'Virtual visit scheduling and reminders',
  'Multi-platform deployment (web, app, SMS)',
  'Compliance with GCP and 21 CFR Part 11',
];

export default function ClinicalTrialsPage() {
  return (
    <>
      <LandingHero
        badge="Clinical Trials"
        title="Accelerate Recruitment,"
        highlight="Maximize Retention"
        description="AI-powered patient engagement that accelerates screening, simplifies consent, and keeps participants engaged throughout the entire clinical trial lifecycle."
        primaryCTA="Request Demo"
        secondaryCTA="Learn More"
      />
      <TrustBar />
      <MetricsSection metrics={metrics} />
      <WorkflowComparison
        title="End-to-End Workflow Comparison"
        subtitle="See how RepTwin transforms the clinical trial patient journey from recruitment to retention"
        traditionalFlow={traditionalWorkflow}
        reptwinFlow={reptwinWorkflow}
      />
      <FeaturesGrid
        title="Key Capabilities"
        subtitle="Everything you need to streamline clinical trial patient engagement"
        features={features}
      />
      <SolutionIntegrations
        title="Clinical Systems Integration"
        subtitle="Connects with your trial management ecosystem for seamless data flow"
        integrations={integrations}
        benefits={integrationBenefits}
      />
      <ComplianceSection />
      <CTASection />
    </>
  );
}

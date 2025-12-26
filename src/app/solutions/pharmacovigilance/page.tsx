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
  MessageSquare, 
  AlertTriangle, 
  HelpCircle, 
  FileText, 
  Bell, 
  Database,
  UserCheck,
  FileWarning,
  Send,
  RotateCcw,
  Phone,
  Clock,
  ClipboardList,
  Users,
  Sparkles,
  CheckCircle,
  Zap,
  Calendar,
  Activity
} from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Conversational Intake',
    description: 'Guided chat interface collects all required adverse event details through natural conversation.',
  },
  {
    icon: AlertTriangle,
    title: 'Real-Time Escalation',
    description: 'Serious cases immediately flagged and routed to PV team for expedited handling.',
  },
  {
    icon: HelpCircle,
    title: 'Side Effect Guidance',
    description: 'Answer common questions about side effects with compliant, approved responses.',
  },
  {
    icon: FileText,
    title: 'Auto-Report Generation',
    description: 'Automatically compile structured ICSR reports with MedDRA coding.',
  },
  {
    icon: Bell,
    title: 'Follow-Up Coordination',
    description: 'Schedule follow-up interactions and gather additional information when needed.',
  },
  {
    icon: Database,
    title: 'Direct Database Entry',
    description: 'Cases entered directly into safety database, eliminating manual transcription.',
  },
];

const traditionalWorkflow = {
  title: 'Traditional Way',
  steps: [
    {
      icon: HelpCircle,
      title: 'Patient Experiences AE',
      description: 'Patient or HCP notices an adverse event but is unsure how or where to report it.',
      painPoint: 'Unclear reporting path',
    },
    {
      icon: Phone,
      title: 'Phone Call to Report',
      description: 'Reporter calls the safety hotline, often facing long hold times or limited hours.',
      painPoint: 'Long wait times',
    },
    {
      icon: ClipboardList,
      title: 'Manual Data Collection',
      description: 'PV specialist manually asks questions and documents information, often missing key details.',
      painPoint: 'Incomplete information',
    },
    {
      icon: Users,
      title: 'Follow-Up Calls Needed',
      description: 'Missing information requires multiple follow-up calls to complete the case.',
      painPoint: '50% need follow-up',
    },
    {
      icon: Clock,
      title: 'Manual Database Entry',
      description: 'Data manually transcribed into safety database, introducing delays and potential errors.',
      painPoint: 'Days to process',
    },
  ],
};

const reptwinWorkflow = {
  title: 'With RepTwin',
  steps: [
    {
      icon: Sparkles,
      title: 'Easy Chat-Based Reporting',
      description: 'Patient or HCP initiates report via accessible chat interface—available 24/7.',
      improvement: 'Always available',
      metric: { value: '24/7', label: 'AE intake' },
    },
    {
      icon: MessageSquare,
      title: 'Guided Conversation',
      description: 'AI asks all required questions through natural dialogue, ensuring complete data capture.',
      improvement: 'No missing details',
      metric: { value: '↑20%', label: 'more reports' },
    },
    {
      icon: CheckCircle,
      title: 'Real-Time Data Validation',
      description: 'System validates and codes information in real-time with MedDRA terminology.',
      improvement: 'Auto-coded data',
      metric: { value: '↓50%', label: 'follow-ups needed' },
    },
    {
      icon: Calendar,
      title: 'Automated Follow-Up',
      description: 'If additional information is needed, system schedules and conducts follow-up automatically.',
      improvement: 'Seamless coordination',
      metric: { value: '100%', label: 'case completion' },
    },
    {
      icon: Activity,
      title: 'Direct Database Entry',
      description: 'Structured case data flows directly into safety database within minutes.',
      improvement: 'Near real-time',
      metric: { value: 'Minutes', label: 'to database' },
    },
  ],
};

const metrics = [
  { value: '↑ 20%', label: 'More Reports', description: 'Increased capture rate' },
  { value: '↓ 50%', label: 'Follow-Ups', description: 'More complete initial data' },
  { value: 'Minutes', label: 'To Database', description: 'Near real-time entry' },
  { value: '24/7', label: 'AE Intake', description: 'Always available' },
];

const integrations = [
  { name: 'Argus', description: 'Safety database', logo: '/images/logos/integrations/oracleargusdatamining.png' },
  { name: 'ArisGlobal', description: 'LifeSphere integration', logo: '/images/logos/integrations/AG_White_bgnd.svg' },
  { name: 'Veeva Safety', description: 'Vault Safety', logo: '/images/logos/integrations/Veeva_Systems_Logo.svg' },
  { name: 'Med Info', description: 'Cross-channel intake', color: 'bg-blue-500' },
];

const integrationBenefits = [
  'Direct case creation in safety database',
  'Automatic duplicate checking',
  'MedDRA coding applied automatically',
  'Cross-channel AE detection and capture',
  'Regulatory submission-ready data format',
  'Complete audit trail for every case',
];

export default function PharmacovigilancePage() {
  return (
    <>
      <LandingHero
        badge="Pharmacovigilance"
        title="Streamlined Adverse Event"
        highlight="Reporting"
        description="An AI-powered intake system that makes adverse event reporting easy for patients and HCPs while ensuring complete, accurate data capture for your safety team."
        primaryCTA="Request Demo"
        secondaryCTA="Learn More"
      />
      <TrustBar />
      <MetricsSection metrics={metrics} />
      <WorkflowComparison
        title="End-to-End Workflow Comparison"
        subtitle="See how RepTwin transforms adverse event reporting from a cumbersome process to seamless, complete data capture"
        traditionalFlow={traditionalWorkflow}
        reptwinFlow={reptwinWorkflow}
      />
      <FeaturesGrid
        title="Key Capabilities"
        subtitle="Everything you need for efficient, complete adverse event capture"
        features={features}
      />
      <SolutionIntegrations
        title="Safety Database Integration"
        subtitle="Direct connection to your pharmacovigilance systems"
        integrations={integrations}
        benefits={integrationBenefits}
      />
      <ComplianceSection />
      <CTASection />
    </>
  );
}

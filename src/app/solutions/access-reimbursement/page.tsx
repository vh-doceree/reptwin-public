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
  Search, 
  FileCheck, 
  DollarSign, 
  Clock, 
  HelpCircle, 
  Truck,
  ClipboardList,
  CheckCircle,
  CreditCard,
  MapPin,
  FileText,
  Phone,
  AlertCircle,
  Timer,
  Sparkles,
  Database,
  Zap,
  Bell,
  Package
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Coverage Inquiry',
    description: 'Instantly check insurance coverage, formulary status, and prior authorization requirements.',
  },
  {
    icon: FileCheck,
    title: 'PA Automation',
    description: 'Auto-fill PA forms, predict approval likelihood, and ensure complete, accurate submissions.',
  },
  {
    icon: DollarSign,
    title: 'Affordability Programs',
    description: 'Guide patients through co-pay coupons, free trials, and financial assistance eligibility.',
  },
  {
    icon: Clock,
    title: 'Status Tracking',
    description: 'Real-time updates on benefits verification, PA status, and medication delivery.',
  },
  {
    icon: HelpCircle,
    title: 'Issue Resolution',
    description: 'Handle denials, suggest appeals, and triage complex cases to specialists.',
  },
  {
    icon: Truck,
    title: 'Fulfillment Coordination',
    description: 'Track specialty pharmacy orders and coordinate medication delivery.',
  },
];

const traditionalWorkflow = {
  title: 'Traditional Way',
  steps: [
    {
      icon: FileText,
      title: 'Prescription Written',
      description: 'Provider writes prescription, but coverage and requirements are unknown.',
      painPoint: 'No visibility into coverage',
    },
    {
      icon: Phone,
      title: 'Manual Benefits Verification',
      description: 'Staff spends hours on hold with payers to verify insurance coverage and requirements.',
      painPoint: 'Hours of phone calls',
    },
    {
      icon: ClipboardList,
      title: 'PA Forms Filled Manually',
      description: 'Staff manually completes prior authorization forms, often missing required information.',
      painPoint: 'Errors cause rejections',
    },
    {
      icon: Timer,
      title: 'Status Check Calls',
      description: 'Repeated calls to check PA status, leaving patients frustrated and uninformed.',
      painPoint: 'Days of uncertainty',
    },
    {
      icon: AlertCircle,
      title: 'Delayed Fulfillment',
      description: 'Medication fulfillment delayed due to incomplete paperwork or insurance issues.',
      painPoint: 'Weeks of patient wait',
    },
  ],
};

const reptwinWorkflow = {
  title: 'With RepTwin',
  steps: [
    {
      icon: Sparkles,
      title: 'AI-Assisted Prescription',
      description: 'AI instantly checks coverage, formulary status, and PA requirements at point of prescribing.',
      improvement: 'Instant coverage check',
      metric: { value: 'Real-time', label: 'payer data' },
    },
    {
      icon: Database,
      title: 'Automated Benefits Query',
      description: 'System automatically queries payer databases for complete coverage information.',
      improvement: 'No phone calls needed',
      metric: { value: '30-60%', label: 'labor savings' },
    },
    {
      icon: Zap,
      title: 'Smart PA Submission',
      description: 'AI auto-fills PA forms with clinical data and submits electronically to payers.',
      improvement: 'Complete submissions',
      metric: { value: '50-75%', label: 'automation' },
    },
    {
      icon: Bell,
      title: 'Proactive Status Updates',
      description: 'Real-time notifications on PA status, approvals, and any required actions.',
      improvement: 'No status calls needed',
      metric: { value: '↑', label: 'approval rate' },
    },
    {
      icon: Package,
      title: 'Coordinated Fulfillment',
      description: 'Seamless coordination with specialty pharmacy for fast medication delivery.',
      improvement: 'Days faster access',
      metric: { value: '↓', label: 'time-to-therapy' },
    },
  ],
};

const metrics = [
  { value: '50-75%', label: 'PA Automation', description: 'Tasks automated' },
  { value: '↓ Days', label: 'Time-to-Therapy', description: 'Faster patient access' },
  { value: '↑', label: 'Approval Rate', description: 'First-pass approvals' },
  { value: '30-60%', label: 'Labor Savings', description: 'Staff efficiency gains' },
];

const integrations = [
  { name: 'Hub CRM', description: 'Case management', logo: '/images/logos/integrations/Salesforce.com_logo.svg' },
  { name: 'Epic', description: 'EHR integration', logo: '/images/logos/integrations/Epic.png' },
  { name: 'Cerner', description: 'Patient data access', logo: '/images/logos/integrations/2011.Cerner.logo.png' },
  { name: 'Specialty Rx', description: 'Pharmacy systems', color: 'bg-purple-500' },
];

const integrationBenefits = [
  'Real-time payer data and formulary access',
  'Electronic PA submission and tracking',
  'Automatic case updates and documentation',
  'Specialty pharmacy fulfillment coordination',
  'Patient consent and privacy management',
  'Complete audit trail for all transactions',
];

export default function AccessReimbursementPage() {
  return (
    <>
      <LandingHero
        badge="Access & Reimbursement"
        title="Automate Prior Authorization,"
        highlight="Accelerate Access"
        description="AI-powered support that automates the most tedious parts of patient access—from benefits verification to PA submission to medication fulfillment."
        primaryCTA="Request Demo"
        secondaryCTA="Learn More"
      />
      <TrustBar />
      <MetricsSection metrics={metrics} />
      <WorkflowComparison
        title="End-to-End Workflow Comparison"
        subtitle="See how RepTwin transforms the patient access journey from prescription to medication delivery"
        traditionalFlow={traditionalWorkflow}
        reptwinFlow={reptwinWorkflow}
      />
      <FeaturesGrid
        title="Key Capabilities"
        subtitle="Everything you need to simplify patient access and reimbursement"
        features={features}
      />
      <SolutionIntegrations
        title="Hub & Payer Integration"
        subtitle="Connects with your patient support ecosystem for unified access management"
        integrations={integrations}
        benefits={integrationBenefits}
      />
      <ComplianceSection />
      <CTASection />
    </>
  );
}

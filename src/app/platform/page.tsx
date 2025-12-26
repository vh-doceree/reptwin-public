'use client';

import { LandingHero } from '@/components/sections/LandingHero';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { ComplianceSection } from '@/components/sections/ComplianceSection';
import { IntegrationsSection } from '@/components/sections/IntegrationsSection';
import { CTASection } from '@/components/sections/CTASection';
import { TrustBar } from '@/components/sections/TrustBar';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  BarChart3,
} from 'lucide-react';

const platformFeatures = [
  {
    icon: Brain,
    title: 'Purpose-Built AI',
    description: 'Large language models fine-tuned specifically for pharmaceutical and healthcare use cases.',
  },
  {
    icon: Shield,
    title: 'Compliance-First Design',
    description: 'Every feature built with regulatory requirements in mind—HIPAA, GDPR, MLR, and more.',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Sub-second response times for instant engagement across all channels.',
  },
  {
    icon: Globe,
    title: 'Global Deployment',
    description: 'Multi-region infrastructure with data residency options for global pharma operations.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'End-to-end encryption, audit trails, and role-based access control.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights into engagement, compliance metrics, and ROI tracking.',
  },
];

const platformMetrics = [
  { value: '99.9%', label: 'Uptime SLA', description: 'Enterprise reliability' },
  { value: '<100ms', label: 'Response Time', description: 'Sub-second processing' },
  { value: '100%', label: 'Audit Coverage', description: 'Complete traceability' },
  { value: '50+', label: 'Integrations', description: 'Enterprise systems' },
];

export default function PlatformPage() {
  return (
    <>
      <LandingHero
        badge="Platform"
        title="Enterprise AI Infrastructure for"
        highlight="Pharmaceutical Excellence"
        description="A purpose-built AI platform that delivers compliance, security, and performance for the most demanding pharmaceutical use cases."
        primaryCTA="Schedule Demo"
        secondaryCTA="View Architecture"
      />
      <TrustBar />
      <MetricsSection 
        title="Built for Enterprise Scale"
        subtitle="The reliability and performance pharma demands"
        metrics={platformMetrics} 
      />
      <TechnologySection />
      <FeaturesGrid
        title="Platform Capabilities"
        subtitle="Everything you need to deploy AI safely and effectively"
        features={platformFeatures}
      />
      <IntegrationsSection />
      <ComplianceSection 
        title="Security & Compliance"
        subtitle="Enterprise-grade security with complete regulatory coverage"
      />
      <CTASection />
    </>
  );
}


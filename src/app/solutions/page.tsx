'use client';

import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTASection } from '@/components/sections/CTASection';
import { LandingHero } from '@/components/sections/LandingHero';

export default function SolutionsPage() {
  return (
    <>
      <LandingHero
        badge="AI-Powered Solutions"
        title="Enterprise AI Agents for"
        highlight="Pharmaceutical Excellence"
        description="From medical information to pharmacovigilance, our AI agents help pharmaceutical companies deliver better outcomes while maintaining rigorous compliance standards."
        primaryCTA="Schedule a Demo"
        secondaryCTA="Explore Solutions"
      />
      <TrustBar />
      <SolutionsGrid />
      <CTASection />
    </>
  );
}


import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { WhyRepTwin } from '@/components/sections/WhyRepTwin';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { IntegrationsSection } from '@/components/sections/IntegrationsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SolutionsGrid />
      <WhyRepTwin />
      <TechnologySection />
      <IntegrationsSection />
      <CTASection />
    </>
  );
}


import { Metadata } from 'next';
import { AboutContent } from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: 'About RepTwin - AI for Pharmaceutical Excellence',
  description: 'Learn about RepTwin, powered by Doceree. We\'re pioneering AI-powered engagement solutions for pharmaceutical companies with compliance-first design.',
  openGraph: {
    title: 'About RepTwin - AI for Pharmaceutical Excellence',
    description: 'Learn about RepTwin, powered by Doceree. We\'re pioneering AI-powered engagement solutions for pharmaceutical companies.',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

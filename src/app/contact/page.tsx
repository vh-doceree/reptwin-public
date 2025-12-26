import { Metadata } from 'next';
import { ContactContent } from '@/components/sections/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - Request a Demo',
  description: 'Schedule a personalized demo of RepTwin\'s AI-powered pharma engagement solutions. Contact our team to learn how we can transform your HCP engagement.',
  openGraph: {
    title: 'Contact RepTwin - Request a Demo',
    description: 'Schedule a personalized demo of RepTwin\'s AI-powered pharma engagement solutions.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

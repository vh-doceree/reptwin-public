'use client';

import { motion } from 'framer-motion';
import { LandingHero } from '@/components/sections/LandingHero';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Compliance First',
    description: 'Every decision starts with regulatory requirements. We build guardrails, not workarounds.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Complete audit trails and explainable AI. Know exactly what your AI is saying and why.',
  },
  {
    icon: Heart,
    title: 'Patient-Centric',
    description: 'Better HCP engagement means better patient outcomes. That\'s our ultimate measure of success.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work alongside your teams, not around them. Your expertise plus our technology.',
  },
];

const stats = [
  { value: '2018', label: 'Founded' },
  { value: '150+', label: 'Employees' },
  { value: '50+', label: 'Pharma Clients' },
  { value: '10M+', label: 'HCP Interactions' },
];

export function AboutContent() {
  return (
    <>
      <LandingHero
        badge="About Us"
        title="Pioneering AI for"
        highlight="Pharmaceutical Excellence"
        description="We're on a mission to transform how pharmaceutical companies engage with healthcare professionals—with AI that's compliant, transparent, and effective."
        primaryCTA="Join Our Team"
        secondaryCTA="Contact Us"
      />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                RepTwin, powered by Doceree, is building the future of pharmaceutical engagement. 
                We believe that AI can transform how pharma companies connect with healthcare 
                professionals—making interactions more timely, more relevant, and always compliant.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform enables pharmaceutical companies to be present for HCPs whenever 
                they need support, with AI agents that understand the unique requirements of 
                healthcare communication and regulatory compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-2xl p-6 text-center"
                >
                  <div className="gradient-text text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we build and how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doceree Section */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Award size={48} className="text-accent" />
              <Globe size={48} className="text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Powered by Doceree
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Doceree is the global leader in programmatic messaging for healthcare professionals. 
              With the largest network of HCPs and deep expertise in pharmaceutical marketing, 
              Doceree brings unmatched reach and compliance expertise to RepTwin.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Together, we&apos;re creating the next generation of AI-powered pharmaceutical engagement—
              combining Doceree&apos;s HCP network and pharma marketing expertise with cutting-edge 
              conversational AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}


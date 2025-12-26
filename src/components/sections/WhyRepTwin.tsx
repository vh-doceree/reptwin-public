'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, RefreshCw, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Always-On Availability',
    description: 'Engage HCPs and patients 24/7, 365 days a year. No more missed opportunities outside business hours.',
  },
  {
    icon: Shield,
    title: 'Compliance-First Design',
    description: 'Built with HIPAA, GDPR, and SOC2 compliance baked in. MLR-approved responses from day one.',
  },
  {
    icon: RefreshCw,
    title: 'Seamless Integrations',
    description: 'Connect with Veeva, Salesforce, EHR systems, and more. Fits into your existing tech stack.',
  },
  {
    icon: BarChart3,
    title: 'Measurable ROI',
    description: 'Track engagement, response times, and outcomes. Proven results with up to 600% ROI.',
  },
];

export function WhyRepTwin() {
  return (
    <section className="section-padding bg-gray-50 bg-grid-pattern">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Leading Pharma Companies Choose{' '}
              <span className="gradient-text">RepTwin</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We understand the unique challenges of pharmaceutical engagement. 
              Our AI agents are purpose-built for healthcare, with compliance and 
              accuracy at their core.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-cta rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              
              {/* Stats */}
              <div className="relative space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">Response Time</span>
                  <span className="text-2xl font-bold gradient-text">&lt; 3 sec</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">Compliance Rate</span>
                  <span className="text-2xl font-bold gradient-text">100%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">HCP Satisfaction</span>
                  <span className="text-2xl font-bold gradient-text">90%+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">ROI Increase</span>
                  <span className="text-2xl font-bold gradient-text">600%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


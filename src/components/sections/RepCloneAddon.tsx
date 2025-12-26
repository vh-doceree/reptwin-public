'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  Calendar, 
  Activity, 
  Target, 
  BarChart3,
  Sparkles
} from 'lucide-react';

const addonFeatures = [
  {
    icon: Sparkles,
    title: 'Digital Twin Creation',
    description: 'Create a personalized AI clone of your sales rep that mirrors their communication style and expertise.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Integrates with rep calendars to book meetings automatically, eliminating back-and-forth logistics.',
  },
  {
    icon: Activity,
    title: 'Rep CRM Sync',
    description: 'Every interaction automatically logged with complete details and full rep visibility in real-time.',
  },
  {
    icon: Target,
    title: 'Personalized Content',
    description: 'Tailors responses to HCP profile and interests while remaining fully compliant with MLR guidelines.',
  },
  {
    icon: BarChart3,
    title: 'Engagement Analytics',
    description: 'Track HCP interactions, identify trends, and optimize your engagement strategy with real-time data.',
  },
];

export function RepCloneAddon() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/5 via-white to-purple-50">
      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge variant="accent" className="mb-4">
            Optional Add-On
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enhance with <span className="text-accent">AI Rep Clone</span>
          </h2>
          <p className="text-lg text-gray-600">
            Transform your Medical Information agent into a personalized digital representative. 
            Create an AI clone that mirrors your sales rep&apos;s expertise with 24/7 availability.
          </p>
        </motion.div>

        {/* Add-on Benefits Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-accent to-purple-600 rounded-2xl p-6 md:p-8 mb-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-white/80 text-sm">Rep Availability</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">3x</div>
              <div className="text-white/80 text-sm">More Touchpoints</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">80%+</div>
              <div className="text-white/80 text-sm">Resolution Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-white/80 text-sm">CRM Data Capture</div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addonFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-accent/10 hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Ready to give your HCPs a personalized digital rep experience?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Learn more about the AI Rep Clone add-on →
          </a>
        </motion.div>
      </div>
    </section>
  );
}


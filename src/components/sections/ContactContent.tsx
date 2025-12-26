'use client';

import { motion } from 'framer-motion';
import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import { Card } from '@/components/ui/Card';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Headquarters',
    details: ['123 Pharma Innovation Way', 'New York, NY 10001', 'United States'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['sales@reptwin.ai', 'support@reptwin.ai'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (888) REP-TWIN', '+1 (888) 737-8946'],
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Monday - Friday', '9:00 AM - 6:00 PM EST'],
  },
];

export function ContactContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-accent/20 py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/30 via-purple-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Transform Your{' '}
              <span className="gradient-text">Pharma Engagement</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Ready to see RepTwin in action? Schedule a personalized demo and discover 
              how AI can transform your HCP engagement strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request a Demo
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will reach out within 24 hours 
                to schedule a personalized demonstration.
              </p>
              <Card className="p-8">
                <DemoRequestForm />
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions? Our team is here to help. Reach out through any of 
                the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon size={24} className="text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-accent/5 rounded-2xl border border-accent/10">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Enterprise Inquiries
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  For large-scale deployments, custom integrations, or partnership 
                  opportunities, please contact our enterprise team directly.
                </p>
                <a 
                  href="mailto:enterprise@reptwin.ai"
                  className="text-accent font-medium hover:underline"
                >
                  enterprise@reptwin.ai
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Additional Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Global Offices
            </h2>
            <p className="text-gray-600 mb-8">
              With offices across North America, Europe, and Asia-Pacific, we&apos;re 
              positioned to serve pharmaceutical companies worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>New York</span>
              <span>•</span>
              <span>London</span>
              <span>•</span>
              <span>Singapore</span>
              <span>•</span>
              <span>Mumbai</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}


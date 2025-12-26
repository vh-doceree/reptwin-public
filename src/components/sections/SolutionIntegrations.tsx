'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface Integration {
  name: string;
  description: string;
  color?: string;
  logo?: string;
}

interface SolutionIntegrationsProps {
  title?: string;
  subtitle?: string;
  integrations: Integration[];
  benefits?: string[];
}

export function SolutionIntegrations({ 
  title = "Enterprise Integrations",
  subtitle = "Seamlessly connects with your existing systems",
  integrations,
  benefits = []
}: SolutionIntegrationsProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Integrations Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {subtitle}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  {integration.logo ? (
                    <div className="h-10 mb-3 flex items-center">
                      <Image
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        width={100}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className={`w-10 h-10 ${integration.color || 'bg-gray-500'} rounded-lg flex items-center justify-center text-white text-xs font-bold mb-3`}>
                      {integration.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                  <h4 className="font-semibold text-gray-900 mb-1">{integration.name}</h4>
                  <p className="text-sm text-gray-500">{integration.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Benefits */}
          {benefits.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Integration Benefits
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { Database, Cloud, Lock, Plug } from 'lucide-react';
import Image from 'next/image';

const integrations = [
  { name: 'Veeva', logo: '/images/logos/integrations/Veeva_Systems_Logo.svg' },
  { name: 'Salesforce', logo: '/images/logos/integrations/Salesforce.com_logo.svg' },
  { name: 'Epic', logo: '/images/logos/integrations/Epic.png' },
  { name: 'Cerner', logo: '/images/logos/integrations/2011.Cerner.logo.png' },
  { name: 'McKesson', logo: '/images/logos/integrations/mck_logo_blue.svg' },
  { name: 'Medidata', logo: '/images/logos/integrations/medidata.png' },
  { name: 'Argus', logo: '/images/logos/integrations/oracleargusdatamining.png' },
  { name: 'ArisGlobal', logo: '/images/logos/integrations/AG_White_bgnd.svg' },
  { name: 'AWS', logo: '/images/logos/integrations/Amazon_Web_Services_Logo.svg' },
  { name: 'Azure', logo: '/images/logos/integrations/Microsoft_Azure_Logo.svg' },
];

export function IntegrationsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seamless Enterprise Integrations
          </h2>
          <p className="text-lg text-gray-600">
            RepTwin connects with the systems you already use, ensuring 
            smooth data flow and unified experiences.
          </p>
        </motion.div>

        {/* Integration Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Database, label: 'CRM Systems', desc: 'Veeva, Salesforce' },
            { icon: Cloud, label: 'EHR Platforms', desc: 'Epic, Cerner' },
            { icon: Lock, label: 'Safety Databases', desc: 'Argus, ArisGlobal' },
            { icon: Plug, label: 'Content Systems', desc: 'Veeva Vault, DAM' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-2xl"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Integration Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-gray-100"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-center px-6 py-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={integration.logo}
                alt={`${integration.name} logo`}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, BadgeCheck, FileKey, CheckCircle, Scale } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ComplianceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const defaultCompliance: ComplianceItem[] = [
  {
    icon: ShieldCheck,
    title: 'HIPAA Compliant',
    description: 'Full compliance with healthcare data protection standards',
  },
  {
    icon: Lock,
    title: 'GDPR Ready',
    description: 'European data privacy regulations fully supported',
  },
  {
    icon: BadgeCheck,
    title: 'SOC2 Certified',
    description: 'Enterprise-grade security and availability controls',
  },
  {
    icon: FileKey,
    title: 'PHI Protected',
    description: 'Protected Health Information secured and encrypted',
  },
  {
    icon: CheckCircle,
    title: 'MLR Approved',
    description: 'Medical, Legal, Regulatory reviewed content only',
  },
  {
    icon: Scale,
    title: 'Audit Trails',
    description: 'Complete logging for regulatory compliance',
  },
];

interface ComplianceSectionProps {
  title?: string;
  subtitle?: string;
  items?: ComplianceItem[];
}

export function ComplianceSection({ 
  title = "Built for Compliance",
  subtitle = "Every interaction is secure, auditable, and regulatory-ready",
  items = defaultCompliance
}: ComplianceSectionProps) {
  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-400">
            {subtitle}
          </p>
        </motion.div>

        {/* Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <item.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


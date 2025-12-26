'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, BadgeCheck, FileKey, CheckCircle } from 'lucide-react';

const trustBadges = [
  { label: 'HIPAA Compliant', Icon: ShieldCheck },
  { label: 'GDPR Ready', Icon: Lock },
  { label: 'SOC2 Certified', Icon: BadgeCheck },
  { label: 'PHI Protected', Icon: FileKey },
  { label: 'MLR Approved', Icon: CheckCircle },
];

export function TrustBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-8">
      <div className="container-wide mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-2 text-gray-600"
            >
              <badge.Icon size={20} className="text-accent" />
              <span className="text-sm font-medium">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


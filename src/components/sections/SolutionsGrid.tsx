'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Stethoscope, 
  ClipboardList, 
  Shield, 
  AlertCircle,
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SOLUTIONS } from '@/lib/constants';

const iconMap: { [key: string]: LucideIcon } = {
  Stethoscope,
  ClipboardList,
  Shield,
  AlertCircle,
};

export function SolutionsGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Agents Built for Pharma
          </h2>
          <p className="text-lg text-gray-600">
            From HCP engagement to clinical trials, our suite of AI agents 
            helps pharmaceutical companies deliver better outcomes while 
            maintaining compliance.
          </p>
        </motion.div>

        {/* Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((solution, index) => {
            const Icon = iconMap[solution.icon];
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={solution.href}>
                  <Card className={`h-full group cursor-pointer ${solution.featured ? 'ring-2 ring-accent/20 bg-accent/[0.02]' : ''}`}>
                    {solution.featured && (
                      <Badge variant="accent" className="mb-4">
                        Flagship Product
                      </Badge>
                    )}
                    
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      {Icon && <Icon size={24} className="text-accent" />}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {solution.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {solution.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-accent font-medium text-sm group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


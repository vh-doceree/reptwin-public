'use client';

import { motion } from 'framer-motion';

interface Metric {
  value: string;
  label: string;
  description?: string;
}

interface MetricsSectionProps {
  title?: string;
  subtitle?: string;
  metrics: Metric[];
  dark?: boolean;
}

export function MetricsSection({ 
  title = "Proven Results",
  subtitle,
  metrics, 
  dark = false 
}: MetricsSectionProps) {
  return (
    <section className={`section-padding ${dark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Section Header */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="gradient-text text-4xl md:text-5xl font-bold mb-2">
                {metric.value}
              </div>
              <div className={`font-semibold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>
                {metric.label}
              </div>
              {metric.description && (
                <div className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {metric.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


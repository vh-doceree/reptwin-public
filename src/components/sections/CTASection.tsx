'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Calendar } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container-narrow mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{' '}
            <span className="gradient-text">Pharma Engagement?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Join leading pharmaceutical companies using RepTwin to deliver 
            compliant, always-on engagement across every touchpoint.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              <Calendar size={20} className="mr-2" />
              Schedule a Demo
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white hover:bg-white/10">
              Contact Sales
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            No commitment required. See RepTwin in action with your use case.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowDown, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

interface WorkflowStep {
  icon: LucideIcon;
  title: string;
  description: string;
  painPoint?: string;
  improvement?: string;
  metric?: {
    value: string;
    label: string;
  };
}

interface WorkflowComparisonProps {
  title: string;
  subtitle: string;
  traditionalFlow: {
    title: string;
    steps: WorkflowStep[];
  };
  reptwinFlow: {
    title: string;
    steps: WorkflowStep[];
  };
}

export function WorkflowComparison({ 
  title, 
  subtitle, 
  traditionalFlow, 
  reptwinFlow 
}: WorkflowComparisonProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Traditional Flow Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Column Header */}
            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-xl flex items-center justify-center">
                  <AlertTriangle size={20} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700">{traditionalFlow.title}</h3>
                  <p className="text-sm text-gray-500">Manual, time-consuming process</p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {traditionalFlow.steps.map((step, index) => (
                <motion.div
                  key={`traditional-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                            <step.icon size={22} className="text-gray-500" />
                          </div>
                          <div className="absolute -top-2 -left-2 w-6 h-6 bg-gray-400 text-white text-xs font-bold rounded-full flex items-center justify-center">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {step.description}
                        </p>
                        
                        {/* Pain Point */}
                        {step.painPoint && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 border border-red-100 rounded-lg">
                            <AlertTriangle size={14} className="text-red-500" />
                            <span className="text-sm font-medium text-red-600">
                              {step.painPoint}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  {index < traditionalFlow.steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown size={20} className="text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RepTwin Flow Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Column Header */}
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{reptwinFlow.title}</h3>
                  <p className="text-sm text-gray-600">AI-powered, efficient workflow</p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {reptwinFlow.steps.map((step, index) => (
                <motion.div
                  key={`reptwin-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white border border-accent/20 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-accent/40 transition-all">
                    <div className="flex items-start gap-4">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                            <step.icon size={22} className="text-accent" />
                          </div>
                          <div className="absolute -top-2 -left-2 w-6 h-6 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {step.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {/* Improvement Badge */}
                          {step.improvement && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-100 rounded-lg">
                              <CheckCircle size={14} className="text-green-500" />
                              <span className="text-sm font-medium text-green-600">
                                {step.improvement}
                              </span>
                            </div>
                          )}
                          
                          {/* Metric Badge */}
                          {step.metric && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-lg">
                              <TrendingUp size={14} className="text-accent" />
                              <span className="text-sm font-bold text-accent">
                                {step.metric.value}
                              </span>
                              <span className="text-sm text-gray-600">
                                {step.metric.label}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  {index < reptwinFlow.steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown size={20} className="text-accent/40" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
            <TrendingUp size={18} className="text-accent" />
            <span className="text-sm font-medium text-gray-700">
              Transform your workflow with AI-powered automation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { 
  Mic, 
  MessageSquare, 
  Video, 
  Database, 
  ShieldCheck, 
  FlaskConical, 
  CheckCircle2, 
  Zap,
  Stethoscope,
  Building2,
  LineChart,
  FileCheck,
  HeartPulse,
  Briefcase,
  ArrowRightLeft
} from 'lucide-react';
import Image from 'next/image';

// Left side - External stakeholders who interact with agents
const externalStakeholders = [
  {
    id: 'hcp',
    icon: Stethoscope,
    label: 'Healthcare Professionals',
    description: 'Physicians, nurses, pharmacists seeking product information',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'patient',
    icon: HeartPulse,
    label: 'Patients & Caregivers',
    description: 'Seeking support, education, and treatment guidance',
    color: 'from-rose-500 to-pink-500',
  },
  {
    id: 'sites',
    icon: Building2,
    label: 'Clinical Trial Sites',
    description: 'Coordinators and investigators managing trials',
    color: 'from-emerald-500 to-teal-500',
  },
];

// Center - AI capabilities
const aiCapabilities = [
  { 
    icon: Mic, 
    label: 'Voice', 
    description: 'Natural voice conversations',
  },
  { 
    icon: MessageSquare, 
    label: 'Chat', 
    description: 'Text-based interactions',
  },
  { 
    icon: Video, 
    label: 'Video', 
    description: 'Face-to-face engagement',
  },
  { 
    icon: Database, 
    label: 'Grounded', 
    description: 'Source-attributed responses',
  },
  { 
    icon: ShieldCheck, 
    label: 'Compliant', 
    description: 'MLR-approved content only',
  },
  { 
    icon: FlaskConical, 
    label: 'MLR Testing', 
    description: 'Pre-submission validation',
  },
];

// Right side - Internal pharma stakeholders
const pharmaStakeholders = [
  {
    id: 'medaffairs',
    icon: FileCheck,
    label: 'Medical Affairs',
    description: 'Ensuring scientific accuracy and compliance',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'commercial',
    icon: LineChart,
    label: 'Commercial Teams',
    description: 'Sales enablement and HCP engagement insights',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'operations',
    icon: Briefcase,
    label: 'Patient Services',
    description: 'Access, reimbursement, and hub operations',
    color: 'from-indigo-500 to-blue-500',
  },
];

// Bottom - Enterprise integrations
const integrations = [
  { name: 'Veeva', logo: '/images/logos/integrations/Veeva_Systems_Logo.svg' },
  { name: 'Salesforce', logo: '/images/logos/integrations/Salesforce.com_logo.svg' },
  { name: 'McKesson', logo: '/images/logos/integrations/mck_logo_blue.svg' },
  { name: 'Epic', logo: '/images/logos/integrations/Epic.png' },
  { name: 'Cerner', logo: '/images/logos/integrations/2011.Cerner.logo.png' },
  { name: 'Medidata', logo: '/images/logos/integrations/medidata.png' },
];

export function TechnologySection() {
  return (
    <section className="section-padding bg-gray-50 bg-grid-pattern overflow-hidden">
      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            Technology Platform
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Complete Engagement Ecosystem
          </h2>
          <p className="text-lg text-gray-600">
            Connecting healthcare stakeholders to pharma teams through 
            intelligent, compliant AI — all powered by seamless enterprise integrations.
          </p>
        </motion.div>

        {/* Main Infographic Container */}
        <div className="relative">
          {/* Desktop Layout - Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="relative" style={{ minHeight: '520px' }}>
              
              {/* Left Column - External Stakeholders */}
              <div className="absolute left-0 top-0 w-[280px] h-full flex flex-col justify-center gap-4 z-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-2"
                >
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    External Stakeholders
                  </span>
                </motion.div>
                
                {externalStakeholders.map((stakeholder, index) => (
                  <motion.div
                    key={stakeholder.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stakeholder.color} flex items-center justify-center flex-shrink-0`}>
                        <stakeholder.icon size={20} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">{stakeholder.label}</h4>
                        <p className="text-xs text-gray-500 line-clamp-2">{stakeholder.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Left Connector Bar */}
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute left-[290px] top-1/2 -translate-y-1/2 w-[calc(50%-290px-190px)] h-16 z-5"
                style={{ transformOrigin: 'left' }}
              >
                <div className="relative h-full flex items-center">
                  {/* Main connector bar */}
                  <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-accent to-accent rounded-full relative overflow-hidden">
                    {/* Animated pulse effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                  </div>
                  {/* Arrow head */}
                  <div className="absolute -right-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-accent" />
                </div>
                {/* Flow label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                    Engagement
                  </span>
                </div>
              </motion.div>

              {/* Center - RepTwin AI Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] z-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="relative"
                >
                  {/* Outer glow */}
                  <div className="absolute -inset-4 bg-gradient-cta opacity-10 rounded-3xl blur-2xl" />
                  
                  {/* Main hub card */}
                  <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-white px-6 py-5 text-center border-b border-gray-100">
                      <div className="flex items-center justify-center">
                        <Image
                          src="/images/logos/reptwin-logo.png"
                          alt="RepTwin AI"
                          width={160}
                          height={40}
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                      <p className="text-gray-600 text-sm mt-2">Intelligent Pharma Engagement</p>
                    </div>
                    
                    {/* Capabilities Grid */}
                    <div className="p-5">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 text-center">
                        Core Capabilities
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {aiCapabilities.map((cap, index) => (
                          <motion.div
                            key={cap.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                            className="flex flex-col items-center text-center p-2 rounded-lg bg-gray-50 hover:bg-accent/5 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-1.5 group-hover:bg-accent/20 transition-colors">
                              <cap.icon size={16} className="text-accent" />
                            </div>
                            <span className="text-xs font-medium text-gray-700">{cap.label}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Key Benefits */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 size={12} className="text-green-500" />
                            24/7 Available
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle2 size={12} className="text-green-500" />
                            100% Compliant
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle2 size={12} className="text-green-500" />
                            Fully Auditable
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Connector Bar */}
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute right-[290px] top-1/2 -translate-y-1/2 w-[calc(50%-290px-190px)] h-16 z-5"
                style={{ transformOrigin: 'right' }}
              >
                <div className="relative h-full flex items-center">
                  {/* Arrow head */}
                  <div className="absolute -left-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[12px] border-r-accent" />
                  {/* Main connector bar */}
                  <div className="w-full h-1 bg-gradient-to-r from-accent via-accent to-purple-400 rounded-full relative overflow-hidden">
                    {/* Animated pulse effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                  </div>
                </div>
                {/* Flow label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                    Insights
                  </span>
                </div>
              </motion.div>

              {/* Right Column - Pharma Stakeholders */}
              <div className="absolute right-0 top-0 w-[280px] h-full flex flex-col justify-center gap-4 z-10">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-2"
                >
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Pharma Teams
                  </span>
                </motion.div>
                
                {pharmaStakeholders.map((stakeholder, index) => (
                  <motion.div
                    key={stakeholder.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stakeholder.color} flex items-center justify-center flex-shrink-0`}>
                        <stakeholder.icon size={20} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">{stakeholder.label}</h4>
                        <p className="text-xs text-gray-500 line-clamp-2">{stakeholder.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Vertical Connection to Integrations - Desktop */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center py-8"
            >
              <div className="flex flex-col items-center gap-2">
                {/* Vertical connector line */}
                <div className="w-1 h-12 bg-gradient-to-b from-accent to-indigo-500 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
                </div>
                {/* Powered by label */}
                <div className="flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-full">
                  <ArrowRightLeft size={14} className="text-accent" />
                  <span className="text-xs font-medium text-accent">Powered By</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile/Tablet Layout - Vertical Flow */}
          <div className="lg:hidden">
            {/* External Stakeholders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-4">
                External Stakeholders
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {externalStakeholders.map((stakeholder, index) => (
                  <motion.div
                    key={stakeholder.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stakeholder.color} flex items-center justify-center`}>
                        <stakeholder.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{stakeholder.label}</h4>
                        <p className="text-xs text-gray-500">{stakeholder.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Connector to RepTwin AI */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center mb-6"
            >
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-accent rounded-full" />
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-accent" />
            </motion.div>

            {/* RepTwin AI Hub - Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-md mx-auto">
                <div className="bg-white px-6 py-5 text-center border-b border-gray-100">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/logos/reptwin-logo.png"
                      alt="RepTwin AI"
                      width={160}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Intelligent Pharma Engagement</p>
                </div>
                
                <div className="p-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 text-center">
                    Core Capabilities
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {aiCapabilities.map((cap) => (
                      <div
                        key={cap.label}
                        className="flex flex-col items-center text-center p-2 rounded-lg bg-gray-50"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-1.5">
                          <cap.icon size={16} className="text-accent" />
                        </div>
                        <span className="text-xs font-medium text-gray-700">{cap.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-green-500" />
                        24/7 Available
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-green-500" />
                        100% Compliant
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-green-500" />
                        Fully Auditable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connector to Pharma Teams */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center mb-6"
            >
              <div className="w-1 h-8 bg-gradient-to-b from-accent to-purple-400 rounded-full" />
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-purple-400" />
            </motion.div>

            {/* Pharma Stakeholders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-4">
                Pharma Teams
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pharmaStakeholders.map((stakeholder, index) => (
                  <motion.div
                    key={stakeholder.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stakeholder.color} flex items-center justify-center`}>
                        <stakeholder.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{stakeholder.label}</h4>
                        <p className="text-xs text-gray-500">{stakeholder.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Connection to Integrations - Mobile */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center mb-6"
            >
              <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-full" />
              <div className="flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-full mt-2">
                <ArrowRightLeft size={14} className="text-accent" />
                <span className="text-xs font-medium text-accent">Powered By</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom - Enterprise Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
        >
          <div className="text-center mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Enterprise Integrations
            </p>
            <p className="text-sm text-gray-600">
              Bi-directional data sync with your existing systems
            </p>
          </div>
          
          {/* Integration logos */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-md transition-all hover:border-accent/30 group"
              >
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  width={100}
                  height={32}
                  className="h-6 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Data flow indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-6"
          >
            <div className="flex items-center gap-2 text-xs text-gray-500 bg-green-50 px-3 py-1.5 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Real-time data synchronization active
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

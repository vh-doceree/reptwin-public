import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Bot, Shield, Clock } from 'lucide-react';
import Image from 'next/image';

const pharmaLogos = [
  { name: 'Pfizer', src: '/images/logos/pharma/pfizer.svg' },
  { name: 'Johnson & Johnson', src: '/images/logos/pharma/johnson-johnson.svg' },
  { name: 'Novartis', src: '/images/logos/pharma/novartis.svg' },
  { name: 'Roche', src: '/images/logos/pharma/roche.svg' },
  { name: 'Merck', src: '/images/logos/pharma/merck.svg' },
  { name: 'Sanofi', src: '/images/logos/pharma/sanofi.svg' },
];

const features = [
  { icon: Bot, text: 'AI-Powered Engagement' },
  { icon: Shield, text: 'Built-in Compliance' },
  { icon: Clock, text: '24/7 Availability' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.png"
          alt="Doctor consulting with AI-powered pharmaceutical representative"
          fill
          className="object-cover object-center md:object-right"
          priority
        />
        {/* Strong gradient overlay for text readability - always visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30 md:via-white/80 md:to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col">
        {/* Main Content - Left aligned */}
        <div className="flex-1 flex items-center">
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-24 md:py-32">
            <div className="max-w-lg md:max-w-xl lg:max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/20 shadow-sm">
                <Sparkles size={16} className="text-accent" />
                AI-Powered Pharma Engagement
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-6">
                Your AI Rep,{' '}
                <span className="gradient-text">Always Available</span>{' '}
                for Every HCP
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                RepTwin creates intelligent digital twins of your pharmaceutical representatives. 
                Engage healthcare professionals 24/7 with personalized, compliant conversations 
                that never miss a beat.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                {features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 border border-gray-200/60 shadow-sm"
                  >
                    <feature.icon size={14} className="text-accent" />
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-accent/25">
                  Request Demo
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/90 backdrop-blur-sm">
                  Explore Solutions
                </Button>
              </div>

              {/* Availability Badge - Inline */}
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-100">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                  <Bot size={14} className="text-white" />
                </div>
                <span className="text-sm font-bold text-gray-900">24/7</span>
                <span className="text-xs text-gray-500">Always Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Bar - Fixed at bottom */}
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/60">
          <div className="container-wide mx-auto px-4 md:px-8 py-4 sm:py-6">
            <p className="text-xs text-gray-500 text-center mb-3 sm:mb-4">Trusted by leading pharmaceutical companies</p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
              {pharmaLogos.map((company) => (
                <div
                  key={company.name}
                  className="h-6 sm:h-7 w-auto flex items-center"
                >
                  <Image
                    src={company.src}
                    alt={`${company.name} logo`}
                    width={100}
                    height={28}
                    className="h-5 sm:h-6 md:h-7 object-contain"
                    style={{ width: 'auto', maxWidth: '100px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


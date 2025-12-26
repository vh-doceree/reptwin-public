'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Stethoscope, Users, ClipboardList, Shield, AlertCircle, ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, SOLUTIONS } from '@/lib/constants';

const solutionIcons: { [key: string]: LucideIcon } = {
  Stethoscope,
  Users,
  ClipboardList,
  Shield,
  AlertCircle,
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setSolutionsOpen(false);
    if (solutionsOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [solutionsOpen]);

  const isActive = (href: string) => {
    if (href === '/solutions') {
      return pathname.startsWith('/solutions');
    }
    return pathname === href;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <nav className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/reptwin-logo.png"
              alt="RepTwin - powered by Doceree"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              link.label === 'Solutions' ? (
                <div key={link.href} className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSolutionsOpen(!solutionsOpen);
                    }}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all ${
                      isActive(link.href)
                        ? 'text-accent bg-accent/5'
                        : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {/* Solutions Dropdown */}
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="p-2">
                          {SOLUTIONS.map((solution) => {
                            const Icon = solutionIcons[solution.icon];
                            return (
                              <Link
                                key={solution.id}
                                href={solution.href}
                                onClick={() => setSolutionsOpen(false)}
                                className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                                  pathname === solution.href
                                    ? 'bg-accent/5 text-accent'
                                    : 'hover:bg-gray-50'
                                }`}
                              >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                  solution.featured ? 'bg-accent/10' : 'bg-gray-100'
                                }`}>
                                  {Icon && <Icon size={20} className={solution.featured ? 'text-accent' : 'text-gray-600'} />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-900 text-sm">{solution.shortTitle}</span>
                                    {solution.featured && (
                                      <span className="text-[10px] bg-accent/10 text-accent px-1.5 py-0.5 rounded-full font-medium">
                                        Featured
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{solution.description}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="border-t border-gray-100 p-3 bg-gray-50">
                          <Link
                            href="/solutions"
                            onClick={() => setSolutionsOpen(false)}
                            className="flex items-center justify-between text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                          >
                            View all solutions
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive(link.href)
                      ? 'text-accent bg-accent/5'
                      : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button size="md">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {/* Solutions Section */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Solutions
                  </div>
                  {SOLUTIONS.map((solution) => {
                    const Icon = solutionIcons[solution.icon];
                    return (
                      <Link
                        key={solution.id}
                        href={solution.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mx-1 ${
                          pathname === solution.href
                            ? 'bg-accent/5 text-accent'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          {Icon && <Icon size={16} className="text-gray-600" />}
                        </div>
                        <span className="font-medium">{solution.shortTitle}</span>
                        {solution.featured && (
                          <span className="text-[10px] bg-accent/10 text-accent px-1.5 py-0.5 rounded-full font-medium ml-auto">
                            Featured
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Other Links */}
                <div className="pt-4 border-t border-gray-100 mt-4 space-y-1">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Company
                  </div>
                  {NAV_LINKS.filter(link => link.label !== 'Solutions').map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2.5 rounded-lg mx-1 font-medium ${
                        isActive(link.href)
                          ? 'bg-accent/5 text-accent'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 px-3">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full">
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

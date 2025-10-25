'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Logo } from '../Logo';

const navLinks = [
  { 
    name: 'Features', 
    href: '/features',
    description: 'Powerful tools for your business'
  },
  { 
    name: 'Modules', 
    href: '/modules',
    description: 'Complete business suite'
  },
  { 
    name: 'Pricing', 
    href: '/pricing',
    description: 'Simple, transparent pricing'
  },
  { 
    name: 'Contact', 
    href: '/contact',
    description: 'Get in touch with us'
  },
];

export function ModernPublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();
  const { scrollY } = useScroll();

  // Smart scroll behavior
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Set scrolled state for background change
    setScrolled(latest > 50);
    
    // Hide/show navbar based on scroll direction
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <>
      {/* Main Floating Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
        }}
        transition={{ 
          duration: 0.3, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Logo size="default" />
            </motion.div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={link.href}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                      >
                        <Button
                          variant="ghost"
                          className={`relative px-4 py-2 rounded-xl transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400'
                              : 'hover:bg-black/5 dark:hover:bg-white/5'
                          }`}
                        >
                          <span className="font-medium">{link.name}</span>
                        </Button>
                        
                        {/* Hover Tooltip */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        >
                          {link.description}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-white rotate-45" />
                        </motion.div>
                        
                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center gap-3"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  onClick={() => router.push('/login')}
                  className="rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
                >
                  Sign In
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => router.push('/signup')}
                  className="relative rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group overflow-hidden"
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-purple-600 to-blue-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Get Started Free
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/20 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl"
            >
              <div className="px-4 py-6 space-y-3">
                {/* Navigation Links */}
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={link.href} onClick={() => setIsOpen(false)}>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className={`flex flex-col px-4 py-3 rounded-xl transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                              : 'hover:bg-black/5 dark:hover:bg-white/5'
                          }`}
                        >
                          <span className={`font-medium ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                            {link.name}
                          </span>
                          <span className="text-xs text-muted-foreground mt-1">
                            {link.description}
                          </span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3 border-t border-white/20 dark:border-white/10">
                  <Button
                    variant="outline"
                    onClick={() => {
                      router.push('/login');
                      setIsOpen(false);
                    }}
                    className="w-full rounded-xl"
                  >
                    Sign In
                  </Button>
                  
                  <Button
                    onClick={() => {
                      router.push('/signup');
                      setIsOpen(false);
                    }}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 hover:shadow-lg"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get Started Free
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop Blur Overlay for Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

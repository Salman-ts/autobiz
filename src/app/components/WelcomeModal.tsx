'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Users, FileText, Package, MessageCircle, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('autobiz_welcome_seen');
    if (!hasSeenWelcome) {
      // Show welcome after a brief delay
      setTimeout(() => setIsOpen(true), 1000);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('autobiz_welcome_seen', 'true');
    setIsOpen(false);
  };

  const features = [
    { icon: Users, title: 'CRM', description: 'Manage clients and contacts' },
    { icon: FileText, title: 'Invoices', description: 'Track payments and billing' },
    { icon: Package, title: 'Inventory', description: 'Monitor stock levels' },
    { icon: MessageCircle, title: 'WhatsApp', description: 'Automate communications' },
    { icon: BarChart3, title: 'Analytics', description: 'Business insights' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <Card className="w-full max-w-2xl p-8 shadow-2xl relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="inline-flex items-center justify-center gap-3 mb-4"
                >
                  <Sparkles className="h-12 w-12 text-blue-600" />
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                    Welcome to AutoBiz!
                  </h1>
                </motion.div>
                <p className="text-lg text-muted-foreground">
                  Your complete AI-powered business automation platform
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 rounded-xl border hover:border-primary/50 transition-colors"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    🚀 Quick Start Tips:
                  </h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Demo data is pre-loaded for you to explore</li>
                    <li>• Use the AI Assistant (bottom-right) for help anytime</li>
                    <li>• All features work in demo mode - no setup required!</li>
                  </ul>
                </div>

                <Button onClick={handleClose} className="w-full" size="lg">
                  Get Started
                </Button>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

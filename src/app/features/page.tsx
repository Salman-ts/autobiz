'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Users, 
  FileText, 
  Package, 
  MessageSquare, 
  BarChart3, 
  Zap,
  Shield,
  Cloud,
  Smartphone,
  Globe,
  Lock,
  RefreshCw,
  Bell,
  Languages,
  TrendingUp,
  Database,
  CheckCircle2
} from 'lucide-react';

export default function FeaturesPage() {
  const mainFeatures = [
    {
      category: 'CRM Management',
      icon: Users,
      color: 'from-blue-600 to-cyan-600',
      tagline: 'Build lasting customer relationships',
      description: 'Complete customer relationship management system designed for Pakistani traders. Track every interaction, manage contacts, and never miss a follow-up.',
      image: 'https://images.unsplash.com/photo-1753161618091-b4cf35b9aa99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjA5Njc5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      items: [
        'Complete client database with contact details',
        'Purchase history and transaction tracking',
        'Payment status and credit management',
        'Custom client categories and tags',
        'Quick search and advanced filtering',
        'Client activity timeline and notes'
      ]
    },
    {
      category: 'Smart Invoicing',
      icon: FileText,
      color: 'from-purple-600 to-pink-600',
      tagline: 'Professional invoices in seconds',
      description: 'Create, send, and track invoices with ease. Automated calculations, payment reminders, and beautiful templates that make your business look professional.',
      image: 'https://images.unsplash.com/photo-1729184648234-7650c1484905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYwODg2MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      items: [
        'Professional invoice generation with templates',
        'Automated tax and discount calculations',
        'Multiple payment methods support',
        'Scheduled payment reminders via WhatsApp',
        'PDF export and email delivery',
        'Payment tracking and reconciliation'
      ]
    },
    {
      category: 'Inventory Control',
      icon: Package,
      color: 'from-green-600 to-emerald-600',
      tagline: 'Never run out of stock again',
      description: 'Real-time inventory tracking with smart alerts. Know exactly what you have, what you need, and when to reorder.',
      image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnZlbnRvcnklMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2MDk1MDk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      items: [
        'Real-time stock level tracking',
        'Low stock alerts and notifications',
        'Product categorization and SKU management',
        'Automatic reorder suggestions',
        'Supplier management and tracking',
        'Comprehensive stock movement history'
      ]
    },
    {
      category: 'WhatsApp Automation',
      icon: MessageSquare,
      color: 'from-orange-600 to-red-600',
      tagline: 'Automate customer communication',
      description: 'Connect with customers where they are. Send automated messages, confirmations, and reminders through WhatsApp.',
      image: 'https://images.unsplash.com/flagged/photo-1581390476351-b5d89504a5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGJ1c2luZXNzJTIwYXBwfGVufDF8fHx8MTc2MDk2Nzk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      items: [
        'Automated order confirmation messages',
        'Payment reminder scheduling',
        'Customer inquiry auto-responses',
        'Bulk messaging campaigns',
        'Pre-built message template library',
        'Chat history and analytics dashboard'
      ]
    },
    {
      category: 'Analytics Dashboard',
      icon: BarChart3,
      color: 'from-indigo-600 to-blue-600',
      tagline: 'Make data-driven decisions',
      description: 'Powerful insights at your fingertips. Track revenue, analyze trends, and understand your business performance with beautiful visualizations.',
      image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYwODgzNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      items: [
        'Real-time revenue and sales tracking',
        'Customer behavior insights and patterns',
        'Product performance metrics',
        'Payment collection analytics',
        'Beautiful visual charts and graphs',
        'Custom report generation and export'
      ]
    },
    {
      category: 'AI Assistant',
      icon: Zap,
      color: 'from-yellow-600 to-orange-600',
      tagline: '24/7 intelligent business support',
      description: 'Your personal AI business assistant. Get instant answers to queries, automated suggestions, and smart insights in both Urdu and English.',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjByZXByZXNlbnRhdGl2ZXxlbnwxfHx8fDE3NjA5NDI2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      items: [
        '24/7 availability for business queries',
        'Automated response suggestions',
        'Natural language processing',
        'Full Urdu and Roman Urdu support',
        'Context-aware assistance',
        'Continuous learning from interactions'
      ]
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-level encryption and data protection' },
    { icon: Cloud, title: 'Cloud Backup', description: 'Automatic secure cloud storage' },
    { icon: Smartphone, title: 'Mobile Ready', description: 'Works perfectly on all devices' },
    { icon: Globe, title: 'Multi-Location', description: 'Manage multiple branches easily' },
    { icon: Lock, title: 'Role-Based Access', description: 'Control who sees what' },
    { icon: RefreshCw, title: 'Real-Time Sync', description: 'Instant data synchronization' },
    { icon: Bell, title: 'Smart Notifications', description: 'Never miss important updates' },
    { icon: Languages, title: 'Urdu Support', description: 'Full Urdu and English interface' },
    { icon: TrendingUp, title: 'Business Insights', description: 'AI-powered recommendations' },
    { icon: Database, title: 'Unlimited Data', description: 'No limits on your growth' }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6">Complete Feature Set</Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Powerful Features for
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage, automate, and grow your trading or distribution business in Pakistan
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="space-y-32 mb-32">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.category}
                        className="w-full h-auto"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} opacity-10`}></div>
                    </div>
                    {/* Floating Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: 'spring' }}
                      className={`absolute -top-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Badge className="mb-4" variant="outline">
                    {feature.tagline}
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    {feature.category}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-4">
                    {feature.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0 mt-0.5`}>
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-base">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">And More</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Everything Else You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Additional features to make your business run smoothly and securely
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-6 h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

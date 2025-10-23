'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Users, 
  FileText, 
  Package, 
  MessageSquare, 
  BarChart3, 
  Zap,
  Settings,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ModulesPage() {
  const router = useRouter();

  const modules = [
    {
      icon: Users,
      title: 'CRM Module',
      color: 'from-blue-600 to-cyan-600',
      badge: 'Customer Management',
      description: 'Complete client relationship management system to track all your customer interactions, purchase history, and payment status in one centralized location.',
      longDescription: 'Build stronger relationships with your customers using our comprehensive CRM system. Track every interaction, manage contacts efficiently, and never miss a follow-up opportunity. Perfect for businesses that value customer relationships.',
      features: [
        'Client Database Management',
        'Contact Information & History',
        'Purchase Tracking',
        'Payment Status Monitoring',
        'Credit Management',
        'Client Categorization'
      ],
      image: 'https://images.unsplash.com/photo-1753161618091-b4cf35b9aa99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjA5Njc5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: FileText,
      title: 'Invoice Management',
      color: 'from-purple-600 to-pink-600',
      badge: 'Billing & Payments',
      description: 'Streamlined invoicing system with automated calculations, professional templates, and integrated payment tracking for efficient billing management.',
      longDescription: 'Create professional invoices in seconds with our smart invoicing system. Automated tax calculations, beautiful templates, and integrated payment tracking make billing a breeze.',
      features: [
        'Professional Invoice Generation',
        'Automated Tax Calculations',
        'Multiple Payment Methods',
        'Payment Reminders',
        'PDF Export & Email',
        'Invoice Templates'
      ],
      image: 'https://images.unsplash.com/photo-1729184648234-7650c1484905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYwODg2MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Package,
      title: 'Inventory Control',
      color: 'from-green-600 to-emerald-600',
      badge: 'Stock Management',
      description: 'Real-time inventory tracking system with automated stock alerts, supplier management, and comprehensive product catalog for efficient warehouse operations.',
      longDescription: 'Never run out of stock or overstock again. Our intelligent inventory system tracks everything in real-time and alerts you when it\'s time to reorder.',
      features: [
        'Real-time Stock Tracking',
        'Low Stock Alerts',
        'Product Catalog',
        'SKU Management',
        'Supplier Tracking',
        'Stock History Reports'
      ],
      image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnZlbnRvcnklMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2MDk1MDk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Automation',
      color: 'from-orange-600 to-red-600',
      badge: 'Communication',
      description: 'Automated WhatsApp messaging system for order confirmations, payment reminders, and customer support with template management and bulk messaging.',
      longDescription: 'Connect with customers where they are. Automate order confirmations, payment reminders, and customer support through WhatsApp.',
      features: [
        'Order Confirmations',
        'Payment Reminders',
        'Customer Support Chat',
        'Bulk Messaging',
        'Template Library',
        'Chat Analytics'
      ],
      image: 'https://images.unsplash.com/flagged/photo-1581390476351-b5d89504a5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGJ1c2luZXNzJTIwYXBwfGVufDF8fHx8MTc2MDk2Nzk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      color: 'from-indigo-600 to-blue-600',
      badge: 'Business Intelligence',
      description: 'Comprehensive analytics dashboard with revenue tracking, sales trends, customer insights, and customizable reports for data-driven decision making.',
      longDescription: 'Turn data into insights. Our powerful analytics dashboard gives you a complete view of your business performance with beautiful visualizations.',
      features: [
        'Revenue Tracking',
        'Sales Analytics',
        'Customer Insights',
        'Product Performance',
        'Visual Charts & Graphs',
        'Custom Reports'
      ],
      image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYwODgzNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Zap,
      title: 'AI Assistant',
      color: 'from-yellow-600 to-orange-600',
      badge: 'Artificial Intelligence',
      description: '24/7 AI-powered business assistant for handling queries, providing insights, and automating responses with support for Urdu and Roman Urdu.',
      longDescription: 'Your personal AI business assistant that works 24/7. Get instant answers, smart insights, and automated responses in both Urdu and English.',
      features: [
        '24/7 Availability',
        'Natural Language Processing',
        'Urdu Support',
        'Context-Aware Responses',
        'Business Insights',
        'Learning Capability'
      ],
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjByZXByZXNlbnRhdGl2ZXxlbnwxfHx8fDE3NjA5NDI2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Settings,
      title: 'Settings & Configuration',
      color: 'from-gray-600 to-slate-600',
      badge: 'System Management',
      description: 'Comprehensive settings module for user management, role-based access control, business preferences, and system customization.',
      longDescription: 'Complete control over your system. Manage users, set permissions, customize preferences, and configure everything to match your business needs.',
      features: [
        'User Management',
        'Role-Based Access',
        'Business Profile',
        'Notification Settings',
        'Theme Customization',
        'Security Settings'
      ],
      image: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwOTUwNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
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
          <Badge className="mb-6">7 Powerful Modules</Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Complete Business
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Management Suite
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seven integrated modules working together to automate and streamline every aspect of your business operations
          </p>
        </motion.div>

        {/* Modules */}
        <div className="space-y-32">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={module.image}
                        alt={module.title}
                        className="w-full h-auto"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-20`}></div>
                    </div>
                    
                    {/* Floating Icon Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      className={`absolute -bottom-6 ${index % 2 === 1 ? '-right-6' : '-left-6'} z-10`}
                    >
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${module.color} shadow-2xl flex items-center justify-center`}>
                        <module.icon className="h-12 w-12 text-white" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Badge className="mb-4" variant="outline">
                    {module.badge}
                  </Badge>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    {module.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                    {module.longDescription}
                  </p>

                  {/* Features Grid */}
                  <Card className="p-6 mb-6 border-2">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Key Features
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {module.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${module.color} mt-2 shrink-0`}></div>
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </Card>

                  <Button variant="outline" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <Card className="relative overflow-hidden border-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="relative p-12 lg:p-16 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Experience All Modules?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Start your 14-day free trial and get instant access to all seven powerful modules
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6"
                  onClick={() => router.push('/signup')}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
                  onClick={() => router.push('/pricing')}
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

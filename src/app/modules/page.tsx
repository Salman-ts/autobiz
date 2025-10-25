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
import { IMAGES } from '../utils/images';

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
      image: IMAGES.crm.main
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
      image: IMAGES.invoice.main
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
      image: IMAGES.inventory.main
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
      image: IMAGES.whatsapp.main
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
      image: IMAGES.analytics.main
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
      image: IMAGES.ai.main
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
      image: IMAGES.settings.main
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
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Complete Business
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pb-2">
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

        {/* Industry Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4">Industry Solutions</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Perfect for Every Business Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how different industries use AutoBiz modules
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3">Distributors & Traders</h3>
              <p className="text-muted-foreground mb-4">
                Manage bulk orders, track inventory across warehouses, automate invoicing
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Bulk order management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Multi-warehouse inventory</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Credit management</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold mb-3">Hotels & Restaurants</h3>
              <p className="text-muted-foreground mb-4">
                Track supplies, manage vendors, automate ordering and billing
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Supplier management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Perishable item tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Daily consumption reports</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-3">Retail Chains</h3>
              <p className="text-muted-foreground mb-4">
                Multi-location inventory, customer loyalty, sales analytics
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Multi-store management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Customer loyalty programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Sales performance tracking</span>
                </li>
              </ul>
            </Card>
          </div>
        </motion.div>

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

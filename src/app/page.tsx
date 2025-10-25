'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Badge } from './components/ui/badge';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Package, 
  FileText,
  ArrowRight,
  CheckCircle2,
  Users,
  Star,
  TrendingUp,
  Clock,
  Award,
  Quote
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { PublicLayout } from './components/layout/PublicLayout';
import { WhatsAppDemo } from './components/WhatsAppDemo';
import { TrustBadges, PaymentMethods } from './components/TrustBadges';
import { IMAGES } from './utils/images';

export default function HomePage() {
  const router = useRouter();

  const features = [
    {
      icon: Users,
      title: 'CRM Management',
      description: 'Track every customer interaction and build lasting relationships'
    },
    {
      icon: FileText,
      title: 'Smart Invoicing',
      description: 'Create professional invoices in seconds with automated calculations'
    },
    {
      icon: Package,
      title: 'Inventory Control',
      description: 'Never run out of stock with real-time tracking and alerts'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Automation',
      description: 'Send automated messages and never miss a customer inquiry'
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Make data-driven decisions with powerful insights'
    },
    {
      icon: Zap,
      title: 'AI Assistant',
      description: '24/7 AI support for your business queries in Urdu and English'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Malik',
      role: 'Trading Company Owner',
      company: 'Karachi',
      image: IMAGES.people.man1,
      quote: 'AutoBiz transformed how we manage inventory. We saved 15 hours per week and reduced errors by 80%.',
      rating: 5
    },
    {
      name: 'Fatima Khan',
      role: 'Distribution Manager',
      company: 'Lahore',
      image: IMAGES.people.woman1,
      quote: 'The WhatsApp automation feature alone paid for itself. Our customer response time improved dramatically.',
      rating: 5
    },
    {
      name: 'Bilal Hussain',
      role: 'Wholesale Business',
      company: 'Islamabad',
      image: IMAGES.people.man2,
      quote: 'Finally, a business system built for Pakistani traders. The Urdu support makes it easy for our entire team.',
      rating: 5
    }
  ];

  const stats = [
    { value: '500+', label: 'Active Businesses', icon: Users },
    { value: '50K+', label: 'Invoices Generated', icon: FileText },
    { value: '95%', label: 'Customer Satisfaction', icon: Star },
    { value: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <PublicLayout>
      <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-0 px-4 py-2">
                <Zap className="h-3 w-3 mr-2" />
                AI-Powered Business Automation for Pakistan
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Run Your Business
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pb-2">
                  On Autopilot
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The complete B2B automation platform built specifically for Pakistani traders and distributors. 
                Manage everything from one powerful dashboard - CRM, invoices, inventory, and WhatsApp automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => router.push('/signup')}>
                  Start Free 14-Day Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => router.push('/contact')}>
                  Schedule a Demo
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-muted-foreground">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-muted-foreground">Setup in 5 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-muted-foreground">Cancel anytime</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={IMAGES.hero.dashboard}
                    alt="AutoBiz Dashboard - Business Automation Platform"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
                </div>
                
                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">+35%</div>
                      <div className="text-xs text-muted-foreground">Revenue Growth</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">20hrs</div>
                      <div className="text-xs text-muted-foreground">Time Saved/Week</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold mb-2">Trusted by Pakistani Businesses</h2>
            <p className="text-muted-foreground">Secure, reliable, and built for you</p>
          </motion.div>
          <TrustBadges />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Demo Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4">WhatsApp Automation</Badge>
              <h2 className="text-4xl font-bold mb-4">
                Automate Customer Communication
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Send order confirmations, payment reminders, and delivery updates automatically via WhatsApp. 
                Support both English and Urdu messages.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Auto-reply to customer queries</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Bulk message broadcasting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Order confirmation & tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Payment reminders</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <WhatsAppDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white dark:bg-gray-950 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading businesses across Pakistan</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">🏢</div>
              <p className="text-sm font-semibold">Trading Companies</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">🏪</div>
              <p className="text-sm font-semibold">Distributors</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">🏨</div>
              <p className="text-sm font-semibold">Hotels & Restaurants</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">🛒</div>
              <p className="text-sm font-semibold">Retail Chains</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Complete Solution</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six powerful modules working together to automate every aspect of your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" onClick={() => router.push('/features')}>
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Loved by Business Owners Across Pakistan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how AutoBiz is helping traders and distributors grow their businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-muted-foreground/20 mb-4" />
                  
                  <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PaymentMethods />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
              <div className="relative p-12 lg:p-16 text-center text-white">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Join 500+ Pakistani businesses already using AutoBiz to automate their operations and boost revenue
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-lg px-8 py-6"
                    onClick={() => router.push('/signup')}
                  >
                    Start Free 14-Day Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
                    onClick={() => router.push('/pricing')}
                  >
                    View Pricing Plans
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Setup in 5 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      </div>
    </PublicLayout>
  );
}
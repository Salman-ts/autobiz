'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function PricingPage() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: '9,999',
      annualPrice: '95,990',
      description: 'Perfect for small businesses starting their automation journey',
      features: [
        'Up to 100 clients',
        '500 invoices per month',
        'Basic inventory tracking',
        'WhatsApp integration',
        'Email support',
        '1 user account',
        'Mobile app access',
        'Basic analytics'
      ],
      notIncluded: [
        'AI assistant',
        'Advanced analytics',
        'Priority support',
        'Custom reports'
      ],
      cta: 'Start Free Trial',
      popular: false,
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Professional',
      monthlyPrice: '19,999',
      annualPrice: '191,990',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 500 clients',
        'Unlimited invoices',
        'Advanced inventory control',
        'WhatsApp automation',
        'Priority support',
        '5 user accounts',
        'Mobile app access',
        'Advanced analytics',
        'Custom reports',
        'AI assistant',
        'Low stock alerts',
        'Payment reminders',
        'API access'
      ],
      notIncluded: [
        'White-label options',
        'Dedicated support manager'
      ],
      cta: 'Start Free Trial',
      popular: true,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Enterprise',
      monthlyPrice: '39,999',
      annualPrice: '383,990',
      description: 'Complete solution for large-scale operations',
      features: [
        'Unlimited clients',
        'Unlimited invoices',
        'Full inventory suite',
        'Advanced WhatsApp automation',
        'Dedicated support manager',
        'Unlimited users',
        'Mobile app access',
        'Custom analytics',
        'White-label options',
        'Advanced AI features',
        'Multi-location support',
        'Custom integrations',
        'Full API access',
        'Training sessions',
        'Priority feature requests',
        'Custom development'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, bank transfers, and JazzCash/EasyPaisa for Pakistani customers.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time with no cancellation fees.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes! Annual billing saves you 20% compared to monthly billing.'
    },
    {
      question: 'Is training included?',
      answer: 'Basic training materials are included in all plans. Enterprise plans include personalized training sessions.'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6">Flexible Pricing</Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Simple, Transparent
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-muted rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full transition-all relative ${
                billingCycle === 'annual'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annual
              <Badge className="absolute -top-2 -right-2 bg-green-600 text-white border-0">
                Save 20%
              </Badge>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center z-10">
                  <Badge className={`bg-gradient-to-r ${plan.gradient} text-white border-0 px-4 py-2 shadow-lg`}>
                    <Sparkles className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`p-8 h-full flex flex-col relative overflow-hidden ${
                plan.popular ? 'border-2 border-primary shadow-2xl scale-105' : 'hover:shadow-xl transition-shadow'
              }`}>
                {plan.popular && (
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.gradient} opacity-10 blur-3xl`}></div>
                )}
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-lg">Rs</span>
                    <span className="text-5xl font-bold">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>

                  {billingCycle === 'annual' && (
                    <p className="text-sm text-green-600 dark:text-green-400 mb-6">
                      Save Rs {(parseInt(plan.monthlyPrice.replace(',', '')) * 12 - parseInt(plan.annualPrice.replace(',', ''))).toLocaleString()} per year
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <li key={`not-${idx}`} className="flex items-start gap-3 opacity-40">
                      <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  variant={plan.popular ? 'default' : 'outline'}
                  className={`w-full ${plan.popular ? `bg-gradient-to-r ${plan.gradient}` : ''}`}
                  onClick={() => plan.name === 'Enterprise' ? router.push('/contact') : router.push('/signup')}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQs</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our pricing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <h3 className="font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <Card className="relative overflow-hidden border-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <div className="relative p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Still have questions?</h2>
              <p className="text-lg opacity-90 mb-6">
                Our team is here to help you choose the right plan for your business
              </p>
              <Button size="lg" variant="secondary" onClick={() => router.push('/contact')}>
                Contact Us
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

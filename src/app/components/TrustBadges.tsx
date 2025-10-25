'use client';

import { Shield, Award, Users, Zap } from 'lucide-react';
import { Card } from './ui/card';

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Secure & Encrypted',
      description: 'Bank-level security'
    },
    {
      icon: Award,
      title: 'Made in Pakistan',
      description: 'Built for local businesses'
    },
    {
      icon: Users,
      title: '500+ Businesses',
      description: 'Trust AutoBiz daily'
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description: 'Urdu & English'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
          <badge.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
          <h4 className="font-semibold text-sm mb-1">{badge.title}</h4>
          <p className="text-xs text-muted-foreground">{badge.description}</p>
        </Card>
      ))}
    </div>
  );
}

export function PaymentMethods() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-8">
      <div className="text-sm text-muted-foreground">We Accept:</div>
      <div className="flex items-center gap-4">
        <div className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800">
          <span className="font-semibold text-sm">💳 Visa/Master</span>
        </div>
        <div className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800">
          <span className="font-semibold text-sm">🏦 Bank Transfer</span>
        </div>
        <div className="px-4 py-2 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
          <span className="font-semibold text-sm text-green-700 dark:text-green-400">📱 JazzCash</span>
        </div>
        <div className="px-4 py-2 border rounded-lg bg-blue-50 dark:bg-blue-900/20 border-blue-200">
          <span className="font-semibold text-sm text-blue-700 dark:text-blue-400">💰 EasyPaisa</span>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { DollarSign, Clock, Users, Package, MessageCircle, Plus, FileText, Send } from 'lucide-react';
import { KpiCard } from '../components/dashboard/KpiCard';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { PaymentStatusChart } from '../components/dashboard/PaymentStatusChart';


export default function DashboardPage() {
  const router = useRouter();
  const [metrics, setMetrics] = useState({
    totalRevenue: 0,
    pendingPayments: 0,
    activeClients: 0,
    lowStockItems: 0,
    messagesSent: 0,
  });

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { text: 'Good Morning', emoji: '🌅' };
    if (hour < 17) return { text: 'Good Afternoon', emoji: '☀️' };
    if (hour < 21) return { text: 'Good Evening', emoji: '🌆' };
    return { text: 'Good Night', emoji: '🌙' };
  };

  const greeting = getGreeting();

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/make-server-244ac669/analytics/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMetrics(data);
      }
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Personalized Greeting */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {greeting.text}! {greeting.emoji}
            </h1>
            <p className="text-lg opacity-90">
              Welcome back! Here's your business overview for today
            </p>
          </div>
          <div className="hidden md:block text-6xl opacity-20">
            📊
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-4 md:grid-cols-4"
      >
        <QuickActionCard
          icon={Plus}
          title="Create Invoice"
          description="Generate new invoice"
          href="/invoices"
          color="blue"
        />
        <QuickActionCard
          icon={Users}
          title="Add Client"
          description="Register new client"
          href="/crm"
          color="purple"
        />
        <QuickActionCard
          icon={Send}
          title="Send WhatsApp"
          description="Message customers"
          href="/whatsapp"
          color="green"
        />
        <QuickActionCard
          icon={FileText}
          title="View Reports"
          description="Business analytics"
          href="/analytics"
          color="orange"
        />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <KpiCard
          title="Total Revenue"
          value={`Rs ${metrics.totalRevenue.toLocaleString()}`}
          change="+12.5%"
          icon={DollarSign}
          trend="up"
          delay={0.1}
        />
        <KpiCard
          title="Pending Payments"
          value={`Rs ${metrics.pendingPayments.toLocaleString()}`}
          change="-3.2%"
          icon={Clock}
          trend="down"
          delay={0.15}
        />
        <KpiCard
          title="Active Clients"
          value={metrics.activeClients}
          change="+5"
          icon={Users}
          trend="up"
          delay={0.2}
        />
        <KpiCard
          title="Low Stock Items"
          value={metrics.lowStockItems}
          icon={Package}
          delay={0.25}
        />
        <KpiCard
          title="Messages Sent"
          value={metrics.messagesSent}
          change="+28"
          icon={MessageCircle}
          trend="up"
          delay={0.3}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <PaymentStatusChart />
      </div>

      <div className="rounded-xl border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { text: 'New invoice created for ABC Traders', time: '5 minutes ago' },
            { text: 'Payment received from XYZ Company', time: '1 hour ago' },
            { text: 'Low stock alert: Rice Bags', time: '2 hours ago' },
            { text: 'WhatsApp message sent to 5 clients', time: '3 hours ago' },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-4 border-b last:border-0"
            >
              <p className="text-sm">{activity.text}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuickActionCard({ icon: Icon, title, description, href, color }: {
  icon: any;
  title: string;
  description: string;
  href: string;
  color: 'blue' | 'purple' | 'green' | 'orange';
}) {
  const router = useRouter();
  
  const colors = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => router.push(href)}
      className={`rounded-xl bg-gradient-to-br ${colors[color]} p-6 text-white text-left shadow-lg hover:shadow-xl transition-all`}
    >
      <Icon className="h-8 w-8 mb-3" />
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </motion.button>
  );
}

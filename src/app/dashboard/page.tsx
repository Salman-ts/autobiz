'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { DollarSign, Clock, Users, Package, MessageCircle } from 'lucide-react';
import { KpiCard } from '../components/dashboard/KpiCard';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { PaymentStatusChart } from '../components/dashboard/PaymentStatusChart';


export default function DashboardPage() {
  const [metrics, setMetrics] = useState({
    totalRevenue: 0,
    pendingPayments: 0,
    activeClients: 0,
    lowStockItems: 0,
    messagesSent: 0,
  });

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
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's your business overview
        </p>
      </div>

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

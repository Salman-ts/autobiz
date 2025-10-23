'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Users, Package, DollarSign, MessageCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function AnalyticsPage() {
  const [revenueData, setRevenueData] = useState<any[]>([]);
  const [clientGrowthData, setClientGrowthData] = useState<any[]>([]);
  const [productPerformance, setProductPerformance] = useState<any[]>([]);
  const [paymentStatus, setPaymentStatus] = useState<any[]>([]);
  const [messageActivity, setMessageActivity] = useState<any[]>([]);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    // Generate sample data - in production, this would come from your backend
    setRevenueData([
      { month: 'Jan', revenue: 45000, profit: 12000 },
      { month: 'Feb', revenue: 52000, profit: 15000 },
      { month: 'Mar', revenue: 48000, profit: 13500 },
      { month: 'Apr', revenue: 61000, profit: 18000 },
      { month: 'May', revenue: 55000, profit: 16500 },
      { month: 'Jun', revenue: 67000, profit: 20000 },
    ]);

    setClientGrowthData([
      { month: 'Jan', clients: 45 },
      { month: 'Feb', clients: 52 },
      { month: 'Mar', clients: 58 },
      { month: 'Apr', clients: 65 },
      { month: 'May', clients: 71 },
      { month: 'Jun', clients: 78 },
    ]);

    setProductPerformance([
      { name: 'Rice Bags', sales: 4500, revenue: 225000 },
      { name: 'Wheat Flour', sales: 3800, revenue: 190000 },
      { name: 'Cooking Oil', sales: 3200, revenue: 160000 },
      { name: 'Sugar', sales: 2900, revenue: 145000 },
      { name: 'Pulses', sales: 2100, revenue: 105000 },
    ]);

    setPaymentStatus([
      { name: 'Paid', value: 65 },
      { name: 'Pending', value: 25 },
      { name: 'Overdue', value: 10 },
    ]);

    setMessageActivity([
      { day: 'Mon', sent: 45, received: 32 },
      { day: 'Tue', sent: 52, received: 38 },
      { day: 'Wed', sent: 48, received: 35 },
      { day: 'Thu', sent: 61, received: 42 },
      { day: 'Fri', sent: 55, received: 39 },
      { day: 'Sat', sent: 38, received: 28 },
      { day: 'Sun', sent: 25, received: 18 },
    ]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics & Reports</h1>
        <p className="text-muted-foreground mt-1">
          Comprehensive business insights and performance metrics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold mt-1">Rs 328K</p>
                <div className="flex items-center gap-1 mt-2 text-emerald-500">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+12.5%</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/10">
                <DollarSign className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Client Growth</p>
                <p className="text-2xl font-bold mt-1">+78</p>
                <div className="flex items-center gap-1 mt-2 text-emerald-500">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+18.2%</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <Users className="h-6 w-6 text-emerald-500" />
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Products Sold</p>
                <p className="text-2xl font-bold mt-1">16,500</p>
                <div className="flex items-center gap-1 mt-2 text-emerald-500">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+8.3%</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Package className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Messages Sent</p>
                <p className="text-2xl font-bold mt-1">324</p>
                <div className="flex items-center gap-1 mt-2 text-red-500">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">-5.4%</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-orange-500/10">
                <MessageCircle className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="revenue" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-6">
          <div>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue & Profit Trends</h3>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorProfit)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Payment Status Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={paymentStatus}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {paymentStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Top Products by Revenue</h3>
              <div className="space-y-4">
                {productPerformance.map((product, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{product.name}</span>
                      <span className="text-sm text-muted-foreground">
                        Rs {product.revenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(product.revenue / 225000) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="clients">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Client Growth Over Time</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={clientGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="clients"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Product Performance</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={productPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Message Activity</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={messageActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sent" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="received" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

'use client';

import { motion } from 'motion/react';
import { MessageSquare, CheckCircle2, Clock } from 'lucide-react';
import { Card } from './ui/card';

export function WhatsAppDemo() {
  const messages = [
    { type: 'sent', text: 'Assalam o Alaikum! Your order #1234 has been confirmed.', time: '10:30 AM' },
    { type: 'received', text: 'Payment kab karni hai?', time: '10:32 AM' },
    { type: 'sent', text: 'Delivery ke waqt cash ya advance bank transfer.', time: '10:33 AM' },
    { type: 'received', text: 'Ok confirmed. Delivery kab hogi?', time: '10:35 AM' },
    { type: 'sent', text: 'Tomorrow 2-4 PM. Track: bit.ly/track1234', time: '10:36 AM' },
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 border-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
          <MessageSquare className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg">WhatsApp Automation</h3>
          <p className="text-sm text-muted-foreground">Live Demo</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.type === 'sent' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.5, duration: 0.3 }}
            className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-3 rounded-2xl ${
              msg.type === 'sent' 
                ? 'bg-green-500 text-white rounded-br-none' 
                : 'bg-gray-200 dark:bg-gray-700 rounded-bl-none'
            }`}>
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.type === 'sent' ? 'text-green-100' : 'text-muted-foreground'}`}>
                {msg.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle2 className="h-4 w-4" />
          <span>Auto-Reply Active</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Response: &lt;2 min</span>
        </div>
      </div>
    </Card>
  );
}

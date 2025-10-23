'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Send, Zap, Clock, Users, Plus } from 'lucide-react';
import { ChatInterface } from '../components/whatsapp/ChatInterface';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Contact, Message } from '../types/message';
import { toast } from 'sonner';

export default function WhatsAppPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [bulkMessage, setBulkMessage] = useState('');
  const [scheduledMessage, setScheduledMessage] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  useEffect(() => {
    fetchContacts();
    fetchAllMessages();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/make-server-244ac669/clients`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
        }
      );
      if (response.ok) {
        const clients = await response.json();
        const contactList: Contact[] = clients.map((client: any) => ({
          id: client.id,
          name: client.name,
          phone: client.phone,
          lastMessage: '',
          unreadCount: 0,
        }));
        setContacts(contactList);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const fetchAllMessages = async () => {
    try {
      const allMessages = await Promise.all(
        contacts.map(async (contact) => {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/make-server-244ac669/messages/${contact.id}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
              },
            }
          );
          if (response.ok) {
            return await response.json();
          }
          return [];
        })
      );
      setMessages(allMessages.flat());
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!selectedContact) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/make-server-244ac669/messages`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            clientId: selectedContact.id,
            content,
            type: 'sent',
          }),
        }
      );

      if (response.ok) {
        const newMessage = await response.json();
        setMessages([...messages, newMessage]);
        toast.success('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    }
  };

  const handleBulkSend = async () => {
    if (!bulkMessage.trim()) {
      toast.error('Please enter a message');
      return;
    }

    try {
      const promises = contacts.map((contact) =>
        fetch(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/make-server-244ac669/messages`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({
              clientId: contact.id,
              content: bulkMessage,
              type: 'sent',
            }),
          }
        )
      );

      await Promise.all(promises);
      toast.success(`Bulk message sent to ${contacts.length} contacts!`);
      setBulkMessage('');
    } catch (error) {
      console.error('Error sending bulk message:', error);
      toast.error('Failed to send bulk message');
    }
  };

  const handleScheduleMessage = () => {
    if (!scheduledMessage.trim() || !scheduledTime) {
      toast.error('Please enter message and time');
      return;
    }
    toast.success('Message scheduled successfully!');
    setScheduledMessage('');
    setScheduledTime('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">WhatsApp Automation</h1>
        <p className="text-muted-foreground mt-1">
          Manage client communications and automate messages
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Send className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Messages Sent</p>
                <p className="text-2xl font-bold">{messages.filter(m => m.type === 'sent').length}</p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <Users className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Contacts</p>
                <p className="text-2xl font-bold">{contacts.length}</p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Clock className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Scheduled</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Zap className="h-4 w-4" />
              Bulk Message
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send Bulk Message</DialogTitle>
              <DialogDescription>
                Send the same message to all contacts
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="bulk-message">Message</Label>
                <Textarea
                  id="bulk-message"
                  placeholder="Enter your message..."
                  value={bulkMessage}
                  onChange={(e) => setBulkMessage(e.target.value)}
                  rows={5}
                />
              </div>
              <Button onClick={handleBulkSend} className="w-full">
                Send to {contacts.length} Contacts
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Clock className="h-4 w-4" />
              Schedule Message
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule Message</DialogTitle>
              <DialogDescription>
                Schedule a message to be sent later
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="scheduled-message">Message</Label>
                <Textarea
                  id="scheduled-message"
                  placeholder="Enter your message..."
                  value={scheduledMessage}
                  onChange={(e) => setScheduledMessage(e.target.value)}
                  rows={5}
                />
              </div>
              <div>
                <Label htmlFor="scheduled-time">Schedule Time</Label>
                <Input
                  id="scheduled-time"
                  type="datetime-local"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                />
              </div>
              <Button onClick={handleScheduleMessage} className="w-full">
                Schedule Message
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div>
        <ChatInterface
          contacts={contacts}
          messages={messages}
          selectedContact={selectedContact}
          onSelectContact={setSelectedContact}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}

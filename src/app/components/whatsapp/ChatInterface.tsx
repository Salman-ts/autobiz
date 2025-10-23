'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import { Contact, Message } from '../../types/message';

interface ChatInterfaceProps {
  contacts: Contact[];
  messages: Message[];
  selectedContact: Contact | null;
  onSelectContact: (contact: Contact) => void;
  onSendMessage: (content: string) => void;
}

export function ChatInterface({
  contacts,
  messages,
  selectedContact,
  onSelectContact,
  onSendMessage,
}: ChatInterfaceProps) {
  const [messageText, setMessageText] = useState('');

  const handleSend = () => {
    if (messageText.trim()) {
      onSendMessage(messageText);
      setMessageText('');
    }
  };

  return (
    <div className="flex h-[calc(100vh-12rem)] gap-4">
      <div className="w-80 rounded-xl border bg-card">
        <div className="border-b p-4">
          <h3 className="font-semibold">Contacts</h3>
        </div>
        <ScrollArea className="h-[calc(100%-5rem)]">
          <div className="p-2">
            {contacts.map((contact) => (
              <motion.button
                key={contact.id}
                whileHover={{ x: 4 }}
                onClick={() => onSelectContact(contact)}
                className={`w-full rounded-lg p-3 text-left transition-colors ${
                  selectedContact?.id === contact.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm opacity-70 truncate">{contact.phone}</p>
                    {contact.lastMessage && (
                      <p className="text-xs opacity-60 truncate mt-1">
                        {contact.lastMessage}
                      </p>
                    )}
                  </div>
                  {contact.unreadCount > 0 && (
                    <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-xs text-white">
                      {contact.unreadCount}
                    </span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex-1 rounded-xl border bg-card flex flex-col">
        {selectedContact ? (
          <>
            <div className="border-b p-4">
              <h3 className="font-semibold">{selectedContact.name}</h3>
              <p className="text-sm text-muted-foreground">{selectedContact.phone}</p>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages
                  .filter((msg) => msg.clientId === selectedContact.id)
                  .map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-md rounded-2xl px-4 py-2 ${
                          message.type === 'sent'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-accent'
                        }`}
                      >
                        <p>{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select a contact to start messaging
          </div>
        )}
      </div>
    </div>
  );
}

export interface Message {
  id: string;
  clientId: string;
  content: string;
  type: 'sent' | 'received';
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  userId: string;
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount: number;
}

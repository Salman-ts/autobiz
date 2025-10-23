export type UserRole = 'admin' | 'trader' | 'employee';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phone?: string;
  company?: string;
  createdAt: string;
}

export interface UserSettings {
  theme: 'light' | 'dark';
  language: 'en' | 'ur';
  whatsappApiKey?: string;
  gmailApiKey?: string;
  notifications: boolean;
}

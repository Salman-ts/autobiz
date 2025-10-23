export interface Client {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  address: string;
  totalInvoices: number;
  pendingAmount: number;
  lastContact: string;
  createdAt: string;
  userId: string;
}

export interface ClientFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  address: string;
}

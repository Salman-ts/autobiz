import { useState, useEffect } from 'react';
import { Invoice, InvoiceFormData } from '../types/invoice';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const DEMO_INVOICES: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-1001',
    clientName: 'ABC Traders',
    amount: 125000,
    status: 'paid',
    dueDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    invoiceNumber: 'INV-1002',
    clientName: 'XYZ Company',
    amount: 85000,
    status: 'pending',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    invoiceNumber: 'INV-1003',
    clientName: 'Best Distributors',
    amount: 95000,
    status: 'overdue',
    dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export function useInvoices() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInvoices = async () => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/invoices`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setInvoices(data);
      } else {
        setInvoices(DEMO_INVOICES);
      }
    } catch (error) {
      console.error('Error fetching invoices, using demo data:', error);
      setInvoices(DEMO_INVOICES);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const addInvoice = async (invoiceData: InvoiceFormData) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/invoices`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(invoiceData)
      });
      if (response.ok) {
        await fetchInvoices();
        return { success: true };
      }
      return { success: false, error: 'Failed to add invoice' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };

  const updateInvoice = async (id: string, invoiceData: Partial<InvoiceFormData>) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/invoices/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(invoiceData)
      });
      if (response.ok) {
        await fetchInvoices();
        return { success: true };
      }
      return { success: false, error: 'Failed to update invoice' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };

  const deleteInvoice = async (id: string) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/invoices/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      if (response.ok) {
        await fetchInvoices();
        return { success: true };
      }
      return { success: false, error: 'Failed to delete invoice' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };

  return { invoices, loading, addInvoice, updateInvoice, deleteInvoice, refresh: fetchInvoices };
}

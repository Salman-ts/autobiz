import { useState, useEffect } from 'react';
import { Invoice, InvoiceFormData } from '../types/invoice';
import { projectId, publicAnonKey } from '../utils/supabase/info';

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
      }
    } catch (error) {
      console.error('Error fetching invoices:', error);
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

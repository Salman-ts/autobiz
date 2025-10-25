import { useState, useEffect } from 'react';
import { Client, ClientFormData } from '../types/client';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const DEMO_CLIENTS: Client[] = [
  {
    id: '1',
    name: 'Ahmed Khan',
    company: 'ABC Traders',
    email: 'ahmed@abctraders.pk',
    phone: '+92 300 1234567',
    address: 'Karachi, Pakistan',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Fatima Ali',
    company: 'XYZ Company',
    email: 'fatima@xyzcompany.pk',
    phone: '+92 321 7654321',
    address: 'Lahore, Pakistan',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Hassan Raza',
    company: 'Best Distributors',
    email: 'hassan@bestdist.pk',
    phone: '+92 333 9876543',
    address: 'Islamabad, Pakistan',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
];

export function useClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/clients`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setClients(data);
      } else {
        setClients(DEMO_CLIENTS);
      }
    } catch (error) {
      console.error('Error fetching clients, using demo data:', error);
      setClients(DEMO_CLIENTS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const addClient = async (clientData: ClientFormData) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(clientData)
      });
      if (response.ok) {
        await fetchClients();
        return { success: true };
      }
      return { success: false, error: 'Failed to add client' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };

  const updateClient = async (id: string, clientData: Partial<ClientFormData>) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/clients/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(clientData)
      });
      if (response.ok) {
        await fetchClients();
        return { success: true };
      }
      return { success: false, error: 'Failed to update client' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };

  const deleteClient = async (id: string) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/clients/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      if (response.ok) {
        await fetchClients();
        return { success: true };
      }
      return { success: false, error: 'Failed to delete client' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };

  return { clients, loading, addClient, updateClient, deleteClient, refresh: fetchClients };
}

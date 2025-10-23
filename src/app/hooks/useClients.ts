import { useState, useEffect } from 'react';
import { Client, ClientFormData } from '../types/client';
import { projectId, publicAnonKey } from '../utils/supabase/info';

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
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
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

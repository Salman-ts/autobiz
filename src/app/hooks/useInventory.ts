import { useState, useEffect } from 'react';
import { InventoryItem, InventoryFormData } from '../types/inventory';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function useInventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInventory = async () => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/inventory`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setInventory(data);
      }
    } catch (error) {
      console.error('Error fetching inventory:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const addItem = async (itemData: InventoryFormData) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/inventory`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(itemData)
      });
      if (response.ok) {
        await fetchInventory();
        return { success: true };
      }
      return { success: false, error: 'Failed to add item' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };

  const updateItem = async (id: string, itemData: Partial<InventoryFormData>) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/inventory/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(itemData)
      });
      if (response.ok) {
        await fetchInventory();
        return { success: true };
      }
      return { success: false, error: 'Failed to update item' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-244ac669/inventory/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      if (response.ok) {
        await fetchInventory();
        return { success: true };
      }
      return { success: false, error: 'Failed to delete item' };
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };

  return { inventory, loading, addItem, updateItem, deleteItem, refresh: fetchInventory };
}

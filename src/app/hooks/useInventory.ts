import { useState, useEffect } from 'react';
import { InventoryItem, InventoryFormData } from '../types/inventory';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const DEMO_INVENTORY: InventoryItem[] = [
  {
    id: '1',
    productName: 'Rice Bags (50kg)',
    sku: 'RICE-50KG',
    category: 'Grains',
    quantity: 15,
    alertLevel: 20,
    price: 5500,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    productName: 'Flour Bags (40kg)',
    sku: 'FLOUR-40KG',
    category: 'Grains',
    quantity: 45,
    alertLevel: 30,
    price: 3200,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    productName: 'Cooking Oil (5L)',
    sku: 'OIL-5L',
    category: 'Oil',
    quantity: 80,
    alertLevel: 50,
    price: 1800,
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    productName: 'Sugar Bags (50kg)',
    sku: 'SUGAR-50KG',
    category: 'Sweeteners',
    quantity: 12,
    alertLevel: 25,
    price: 6500,
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    productName: 'Pulses Mix (25kg)',
    sku: 'PULSES-25KG',
    category: 'Pulses',
    quantity: 35,
    alertLevel: 20,
    price: 4200,
    createdAt: new Date().toISOString(),
  },
];

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
      } else {
        setInventory(DEMO_INVENTORY);
      }
    } catch (error) {
      console.error('Error fetching inventory, using demo data:', error);
      setInventory(DEMO_INVENTORY);
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

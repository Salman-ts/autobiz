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
    unitPrice: 5500,
    alertLevel: 20,
    supplier: 'ABC Suppliers',
    lastUpdated: new Date().toISOString(),
    userId: 'demo-user',
  },
  {
    id: '2',
    productName: 'Flour Bags (40kg)',
    sku: 'FLOUR-40KG',
    category: 'Grains',
    quantity: 45,
    unitPrice: 3200,
    alertLevel: 30,
    supplier: 'XYZ Traders',
    lastUpdated: new Date().toISOString(),
    userId: 'demo-user',
  },
  {
    id: '3',
    productName: 'Cooking Oil (5L)',
    sku: 'OIL-5L',
    category: 'Oil',
    quantity: 80,
    unitPrice: 1800,
    alertLevel: 50,
    supplier: 'Best Oils Ltd',
    lastUpdated: new Date().toISOString(),
    userId: 'demo-user',
  },
  {
    id: '4',
    productName: 'Sugar Bags (50kg)',
    sku: 'SUGAR-50KG',
    category: 'Sweeteners',
    quantity: 12,
    unitPrice: 6500,
    alertLevel: 25,
    supplier: 'Sweet Supply Co',
    lastUpdated: new Date().toISOString(),
    userId: 'demo-user',
  },
  {
    id: '5',
    productName: 'Pulses Mix (25kg)',
    sku: 'PULSES-25KG',
    category: 'Pulses',
    quantity: 35,
    unitPrice: 4200,
    alertLevel: 20,
    supplier: 'Pulse Distributors',
    lastUpdated: new Date().toISOString(),
    userId: 'demo-user',
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

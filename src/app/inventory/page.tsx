'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Search, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { InventoryTable } from '../components/inventory/InventoryTable';
import { useInventory } from '../hooks/useInventory';
import { InventoryItem } from '../types/inventory';
import { toast } from 'sonner';

export default function InventoryPage() {
  const { inventory, loading, deleteItem } = useInventory();
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      const result = await deleteItem(id);
      if (result.success) {
        toast.success('Item deleted successfully');
      } else {
        toast.error('Failed to delete item');
      }
    }
  };

  const handleEdit = (item: InventoryItem) => {
    toast.info(`Editing ${item.productName}`);
  };

  const lowStockItems = inventory.filter((item) => item.quantity <= item.alertLevel);

  const filteredInventory = inventory.filter(
    (item) =>
      item.productName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Inventory</h1>
          <p className="text-muted-foreground mt-1">
            Track and manage your product inventory
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {lowStockItems.length > 0 && (
        <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20 p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <div>
              <p className="font-medium text-red-900 dark:text-red-100">
                Low Stock Alert
              </p>
              <p className="text-sm text-red-700 dark:text-red-300">
                {lowStockItems.length} {lowStockItems.length === 1 ? 'item is' : 'items are'} running low on stock
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products by name, SKU, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" className="w-full sm:w-auto">Export</Button>
      </div>

      <div>
        {loading ? (
          <div className="text-center py-12">Loading inventory...</div>
        ) : (
          <InventoryTable
            items={filteredInventory}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

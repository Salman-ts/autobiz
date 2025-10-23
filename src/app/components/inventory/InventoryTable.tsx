'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Edit, Trash2, AlertTriangle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { InventoryItem } from '../../types/inventory';

interface InventoryTableProps {
  items: InventoryItem[];
  onEdit: (item: InventoryItem) => void;
  onDelete: (id: string) => void;
}

export function InventoryTable({ items, onEdit, onDelete }: InventoryTableProps) {
  return (
    <div className="rounded-xl border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Total Value</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => {
            const quantity = item.quantity ?? 0;
            const unitPrice = item.unitPrice ?? 0;
            const alertLevel = item.alertLevel ?? 0;
            const isLowStock = quantity <= alertLevel;
            const totalValue = quantity * unitPrice;

            return (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`group hover:bg-accent/50 ${isLowStock ? 'bg-red-50 dark:bg-red-950/20' : ''}`}
              >
                <TableCell>{item.productName || 'N/A'}</TableCell>
                <TableCell className="font-mono text-sm">{item.sku || 'N/A'}</TableCell>
                <TableCell>{item.category || 'N/A'}</TableCell>
                <TableCell>
                  <span className={isLowStock ? 'text-red-500' : ''}>
                    {quantity}
                  </span>
                </TableCell>
                <TableCell>Rs {unitPrice.toLocaleString()}</TableCell>
                <TableCell>Rs {totalValue.toLocaleString()}</TableCell>
                <TableCell>
                  {isLowStock ? (
                    <Badge className="bg-red-500/10 text-red-500">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Low Stock
                    </Badge>
                  ) : (
                    <Badge className="bg-emerald-500/10 text-emerald-500">
                      In Stock
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit(item)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDelete(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </motion.tr>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

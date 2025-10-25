'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Upload, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { InvoiceTable } from '../components/invoices/InvoiceTable';
import { useInvoices } from '../hooks/useInvoices';
import { Invoice } from '../types/invoice';
import { toast } from 'sonner';

export default function InvoicesPage() {
  const { invoices, loading, deleteInvoice } = useInvoices();
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this invoice?')) {
      const result = await deleteInvoice(id);
      if (result.success) {
        toast.success('Invoice deleted successfully');
      } else {
        toast.error('Failed to delete invoice');
      }
    }
  };

  const handleEdit = (invoice: Invoice) => {
    toast.info(`Editing invoice ${invoice.invoiceNumber}`);
  };

  const handleFileUpload = () => {
    toast.info('File upload feature - will connect to AI parser backend');
  };

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.clientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4 sm:space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Invoices</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track all your invoices
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button variant="outline" onClick={handleFileUpload} className="w-full sm:w-auto min-h-[44px]">
            <Upload className="h-4 w-4 mr-2" />
            Upload PDF
          </Button>
          <Button className="w-full sm:w-auto min-h-[44px]">
            <Plus className="h-4 w-4 mr-2" />
            Create Invoice
          </Button>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="relative flex-1 max-w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search invoices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto min-h-[44px]">Filter</Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <Upload className="h-5 w-5 text-blue-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                AI Invoice Parser
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                Upload PDF invoices to automatically extract data using AI
              </p>
            </div>
            <Button size="sm" variant="outline" onClick={handleFileUpload}>
              Try Now
            </Button>
          </div>
        </div>
      </div>

      <div>
        {loading ? (
          <div className="text-center py-12">Loading invoices...</div>
        ) : (
          <InvoiceTable
            invoices={filteredInvoices}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

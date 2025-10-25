'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ClientTable } from '../components/crm/ClientTable';
import { ClientFormModal } from '../components/crm/ClientFormModal';
import { useClients } from '../hooks/useClients';
import { Client, ClientFormData } from '../types/client';
import { toast } from 'sonner';

export default function CRMPage() {
  const { clients, loading, addClient, updateClient, deleteClient } = useClients();
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAdd = () => {
    setSelectedClient(null);
    setShowModal(true);
  };

  const handleEdit = (client: Client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const handleSave = async (data: ClientFormData) => {
    if (selectedClient) {
      const result = await updateClient(selectedClient.id, data);
      if (result.success) {
        toast.success('Client updated successfully');
      } else {
        toast.error('Failed to update client');
      }
    } else {
      const result = await addClient(data);
      if (result.success) {
        toast.success('Client added successfully');
      } else {
        toast.error('Failed to add client');
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this client?')) {
      const result = await deleteClient(id);
      if (result.success) {
        toast.success('Client deleted successfully');
      } else {
        toast.error('Failed to delete client');
      }
    }
  };

  const handleView = (client: Client) => {
    toast.info(`Viewing details for ${client.name}`);
  };

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.includes(searchQuery)
  );

  return (
    <div className="space-y-4 sm:space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">CRM</h1>
          <p className="text-muted-foreground mt-1">
            Manage your clients and relationships
          </p>
        </div>
        <Button onClick={handleAdd} className="w-full sm:w-auto min-h-[44px]">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative flex-1 max-w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clients by name, company, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div>
        {loading ? (
          <div className="text-center py-12">Loading clients...</div>
        ) : (
          <ClientTable
            clients={filteredClients}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        )}
      </div>

      <ClientFormModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        client={selectedClient}
      />
    </div>
  );
}

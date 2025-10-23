import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'jsr:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', cors());
app.use('*', logger(console.log));

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Helper function to get authenticated user
async function getAuthenticatedUser(request: Request) {
  const accessToken = request.headers.get('Authorization')?.split(' ')[1];
  if (!accessToken) return null;
  
  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  if (error || !user) return null;
  
  return user;
}

// ============ AUTH ROUTES ============

app.post('/make-server-244ac669/signup', async (c) => {
  try {
    const { email, password, name, role } = await c.req.json();

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name, role: role || 'trader' },
      email_confirm: true, // Auto-confirm since email server not configured
    });

    if (error) {
      console.error('Signup error:', error);
      return c.json({ error: error.message }, 400);
    }

    // Store user profile
    await kv.set(`profile:${data.user.id}`, {
      id: data.user.id,
      email,
      name,
      role: role || 'trader',
      createdAt: new Date().toISOString(),
    });

    return c.json({ success: true, user: data.user });
  } catch (error) {
    console.error('Signup error:', error);
    return c.json({ error: 'Signup failed' }, 500);
  }
});

app.get('/make-server-244ac669/profile/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    const profile = await kv.get(`profile:${userId}`);
    
    if (!profile) {
      return c.json({ error: 'Profile not found' }, 404);
    }

    return c.json(profile);
  } catch (error) {
    console.error('Profile fetch error:', error);
    return c.json({ error: 'Failed to fetch profile' }, 500);
  }
});

// ============ CLIENTS ROUTES ============

app.get('/make-server-244ac669/clients', async (c) => {
  try {
    const clients = await kv.getByPrefix('client:');
    return c.json(clients || []);
  } catch (error) {
    console.error('Fetch clients error:', error);
    return c.json({ error: 'Failed to fetch clients' }, 500);
  }
});

app.post('/make-server-244ac669/clients', async (c) => {
  try {
    const data = await c.req.json();
    const id = crypto.randomUUID();
    
    const client = {
      id,
      ...data,
      totalInvoices: 0,
      pendingAmount: 0,
      lastContact: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      userId: 'demo-user',
    };

    await kv.set(`client:${id}`, client);
    return c.json(client);
  } catch (error) {
    console.error('Create client error:', error);
    return c.json({ error: 'Failed to create client' }, 500);
  }
});

app.put('/make-server-244ac669/clients/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const data = await c.req.json();
    const existing = await kv.get(`client:${id}`);

    if (!existing) {
      return c.json({ error: 'Client not found' }, 404);
    }

    const updated = { ...existing, ...data };
    await kv.set(`client:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error('Update client error:', error);
    return c.json({ error: 'Failed to update client' }, 500);
  }
});

app.delete('/make-server-244ac669/clients/:id', async (c) => {
  try {
    const id = c.req.param('id');
    await kv.del(`client:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error('Delete client error:', error);
    return c.json({ error: 'Failed to delete client' }, 500);
  }
});

// ============ INVOICES ROUTES ============

app.get('/make-server-244ac669/invoices', async (c) => {
  try {
    const invoices = await kv.getByPrefix('invoice:');
    return c.json(invoices || []);
  } catch (error) {
    console.error('Fetch invoices error:', error);
    return c.json({ error: 'Failed to fetch invoices' }, 500);
  }
});

app.post('/make-server-244ac669/invoices', async (c) => {
  try {
    const data = await c.req.json();
    const id = crypto.randomUUID();
    const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;
    
    const amount = data.items.reduce((sum: number, item: any) => sum + item.total, 0);
    
    const invoice = {
      id,
      invoiceNumber,
      ...data,
      amount,
      status: 'pending',
      createdAt: new Date().toISOString(),
      userId: 'demo-user',
    };

    await kv.set(`invoice:${id}`, invoice);
    return c.json(invoice);
  } catch (error) {
    console.error('Create invoice error:', error);
    return c.json({ error: 'Failed to create invoice' }, 500);
  }
});

app.put('/make-server-244ac669/invoices/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const data = await c.req.json();
    const existing = await kv.get(`invoice:${id}`);

    if (!existing) {
      return c.json({ error: 'Invoice not found' }, 404);
    }

    const updated = { ...existing, ...data };
    await kv.set(`invoice:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error('Update invoice error:', error);
    return c.json({ error: 'Failed to update invoice' }, 500);
  }
});

app.delete('/make-server-244ac669/invoices/:id', async (c) => {
  try {
    const id = c.req.param('id');
    await kv.del(`invoice:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error('Delete invoice error:', error);
    return c.json({ error: 'Failed to delete invoice' }, 500);
  }
});

// ============ INVENTORY ROUTES ============

app.get('/make-server-244ac669/inventory', async (c) => {
  try {
    const inventory = await kv.getByPrefix('inventory:');
    return c.json(inventory || []);
  } catch (error) {
    console.error('Fetch inventory error:', error);
    return c.json({ error: 'Failed to fetch inventory' }, 500);
  }
});

app.post('/make-server-244ac669/inventory', async (c) => {
  try {
    const data = await c.req.json();
    const id = crypto.randomUUID();
    
    const item = {
      id,
      ...data,
      lastUpdated: new Date().toISOString(),
      userId: 'demo-user',
    };

    await kv.set(`inventory:${id}`, item);
    return c.json(item);
  } catch (error) {
    console.error('Create inventory item error:', error);
    return c.json({ error: 'Failed to create inventory item' }, 500);
  }
});

app.put('/make-server-244ac669/inventory/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const data = await c.req.json();
    const existing = await kv.get(`inventory:${id}`);

    if (!existing) {
      return c.json({ error: 'Inventory item not found' }, 404);
    }

    const updated = { ...existing, ...data, lastUpdated: new Date().toISOString() };
    await kv.set(`inventory:${id}`, updated);
    return c.json(updated);
  } catch (error) {
    console.error('Update inventory item error:', error);
    return c.json({ error: 'Failed to update inventory item' }, 500);
  }
});

app.delete('/make-server-244ac669/inventory/:id', async (c) => {
  try {
    const id = c.req.param('id');
    await kv.del(`inventory:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error('Delete inventory item error:', error);
    return c.json({ error: 'Failed to delete inventory item' }, 500);
  }
});

// ============ MESSAGES ROUTES ============

app.get('/make-server-244ac669/messages/:clientId', async (c) => {
  try {
    const clientId = c.req.param('clientId');
    const allMessages = await kv.getByPrefix('message:');
    const clientMessages = allMessages.filter((msg: any) => msg.clientId === clientId);
    return c.json(clientMessages || []);
  } catch (error) {
    console.error('Fetch messages error:', error);
    return c.json({ error: 'Failed to fetch messages' }, 500);
  }
});

app.post('/make-server-244ac669/messages', async (c) => {
  try {
    const data = await c.req.json();
    const id = crypto.randomUUID();
    
    const message = {
      id,
      ...data,
      timestamp: new Date().toISOString(),
      status: 'sent',
      userId: 'demo-user',
    };

    await kv.set(`message:${id}`, message);
    return c.json(message);
  } catch (error) {
    console.error('Create message error:', error);
    return c.json({ error: 'Failed to create message' }, 500);
  }
});

// ============ ANALYTICS ROUTES ============

app.get('/make-server-244ac669/analytics/dashboard', async (c) => {
  try {
    const clients = await kv.getByPrefix('client:');
    const invoices = await kv.getByPrefix('invoice:');
    const inventory = await kv.getByPrefix('inventory:');
    const messages = await kv.getByPrefix('message:');

    const totalRevenue = invoices.reduce((sum: number, inv: any) => 
      inv.status === 'paid' ? sum + inv.amount : sum, 0
    );
    
    const pendingPayments = invoices.reduce((sum: number, inv: any) => 
      inv.status === 'pending' ? sum + inv.amount : sum, 0
    );

    const lowStockItems = inventory.filter((item: any) => 
      item.quantity <= item.alertLevel
    ).length;

    return c.json({
      totalRevenue,
      pendingPayments,
      activeClients: clients.length,
      lowStockItems,
      messagesSent: messages.filter((m: any) => m.type === 'sent').length,
    });
  } catch (error) {
    console.error('Fetch analytics error:', error);
    return c.json({ error: 'Failed to fetch analytics' }, 500);
  }
});

// ============ SEED DATA ROUTE (for demo purposes) ============

app.post('/make-server-244ac669/seed-demo-data', async (c) => {
  try {
    // Sample clients
    const sampleClients = [
      { name: 'ABC Traders', email: 'abc@traders.com', phone: '+92 300 1234567', address: 'Karachi', status: 'active' },
      { name: 'XYZ Company', email: 'info@xyz.com', phone: '+92 321 7654321', address: 'Lahore', status: 'active' },
      { name: 'Best Distributors', email: 'best@dist.com', phone: '+92 333 9876543', address: 'Islamabad', status: 'active' },
    ];

    for (const client of sampleClients) {
      const id = crypto.randomUUID();
      await kv.set(`client:${id}`, {
        id,
        ...client,
        totalInvoices: 0,
        pendingAmount: 0,
        lastContact: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        userId: 'demo-user',
      });
    }

    // Sample inventory items
    const sampleInventory = [
      { name: 'Rice Bags (50kg)', sku: 'RICE-50', quantity: 150, unit: 'bags', costPrice: 4500, sellingPrice: 5000, alertLevel: 20 },
      { name: 'Wheat Flour (20kg)', sku: 'FLOUR-20', quantity: 200, unit: 'bags', costPrice: 1800, sellingPrice: 2000, alertLevel: 30 },
      { name: 'Cooking Oil (5L)', sku: 'OIL-5L', quantity: 80, unit: 'bottles', costPrice: 1200, sellingPrice: 1400, alertLevel: 15 },
      { name: 'Sugar (50kg)', sku: 'SUGAR-50', quantity: 100, unit: 'bags', costPrice: 4000, sellingPrice: 4500, alertLevel: 20 },
      { name: 'Pulses Mix (10kg)', sku: 'PULSE-10', quantity: 15, unit: 'bags', costPrice: 2000, sellingPrice: 2300, alertLevel: 20 },
    ];

    for (const item of sampleInventory) {
      const id = crypto.randomUUID();
      await kv.set(`inventory:${id}`, {
        id,
        ...item,
        lastUpdated: new Date().toISOString(),
        userId: 'demo-user',
      });
    }

    return c.json({ success: true, message: 'Demo data seeded successfully' });
  } catch (error) {
    console.error('Seed demo data error:', error);
    return c.json({ error: 'Failed to seed demo data' }, 500);
  }
});

Deno.serve(app.fetch);

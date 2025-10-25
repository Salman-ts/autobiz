# Backend Integration Guide

## 🎯 Overview

AutoBiz frontend is **production-ready** and designed to seamlessly connect with your backend API. The application currently runs in **demo mode** with fallback data and will automatically switch to live data once the backend is connected.

## 🔌 Backend Connection Status

The app displays a real-time connection indicator:
- 🟢 **Backend Connected**: Live data from API
- 🟠 **Demo Mode**: Using fallback demo data

## 📡 API Endpoints Required

### Base URL
```
${NEXT_PUBLIC_SUPABASE_URL}/functions/v1/make-server-244ac669
```

### 1. Health Check
```
GET /health
Response: { status: "ok" }
```

### 2. Dashboard Analytics
```
GET /analytics/dashboard
Response: {
  totalRevenue: number,
  pendingPayments: number,
  activeClients: number,
  lowStockItems: number,
  messagesSent: number
}
```

### 3. Clients (CRM)
```
GET    /clients              - Get all clients
POST   /clients              - Create new client
PUT    /clients/:id          - Update client
DELETE /clients/:id          - Delete client

Client Schema: {
  id: string,
  name: string,
  company: string,
  email: string,
  phone: string,
  address: string,
  status: 'active' | 'inactive',
  createdAt: string (ISO date)
}
```

### 4. Invoices
```
GET    /invoices             - Get all invoices
POST   /invoices             - Create new invoice
PUT    /invoices/:id         - Update invoice
DELETE /invoices/:id         - Delete invoice

Invoice Schema: {
  id: string,
  invoiceNumber: string,
  clientName: string,
  amount: number,
  status: 'paid' | 'pending' | 'overdue',
  dueDate: string (ISO date),
  createdAt: string (ISO date)
}
```

### 5. Inventory
```
GET    /inventory            - Get all inventory items
POST   /inventory            - Create new item
PUT    /inventory/:id        - Update item
DELETE /inventory/:id        - Delete item

Inventory Schema: {
  id: string,
  productName: string,
  sku: string,
  category: string,
  quantity: number,
  alertLevel: number,
  price: number,
  createdAt: string (ISO date)
}
```

### 6. WhatsApp Messages
```
GET    /messages/:clientId   - Get messages for a client
POST   /messages             - Send new message

Message Schema: {
  id: string,
  clientId: string,
  content: string,
  type: 'sent' | 'received',
  timestamp: string (ISO date)
}
```

## 🔐 Authentication Headers

All API requests include:
```javascript
headers: {
  'Authorization': `Bearer ${NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json'
}
```

## 🛠️ Environment Variables

Create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 📦 Demo Data Fallback

Each module has built-in demo data that displays when:
- Backend is not connected
- API returns error
- Network request fails

This ensures the app is always functional for testing and demos.

## 🚀 Integration Steps

### Step 1: Set Environment Variables
```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Update with your backend URLs
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 2: Implement Backend Endpoints
Implement all required endpoints listed above with matching schemas.

### Step 3: Test Connection
1. Start your backend server
2. Run the frontend: `npm run dev`
3. Check the connection indicator (bottom-right)
4. Verify data loads from your API

### Step 4: Deploy
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## 🔄 Data Flow

```
Frontend Component
    ↓
Custom Hook (useClients, useInvoices, etc.)
    ↓
API Fetch Request
    ↓
Backend API Endpoint
    ↓
Database (Supabase KV Store)
```

## 📝 Custom Hooks

All data fetching is handled by custom hooks:

- `useClients()` - CRM data
- `useInvoices()` - Invoice data
- `useInventory()` - Inventory data
- Dashboard metrics - Direct fetch in component

Each hook includes:
- ✅ Loading states
- ✅ Error handling
- ✅ Demo data fallback
- ✅ CRUD operations
- ✅ Auto-refresh after mutations

## 🎨 Features Ready for Backend

### ✅ Fully Functional
- Dashboard with KPI cards and charts
- CRM with add/edit/delete clients
- Invoice management
- Inventory tracking with low-stock alerts
- WhatsApp messaging interface
- Analytics with multiple chart types
- Settings with profile/security/notifications
- Search functionality
- Dark/Light mode
- Responsive design (mobile-first)

### 🔌 Awaiting Backend Connection
- Real-time data sync
- File upload (PDF invoice parsing)
- WhatsApp API integration
- Email notifications
- Scheduled messages
- Advanced search/filtering
- Export functionality
- Two-factor authentication

## 🧪 Testing

### Test Demo Mode
```bash
# Run without backend
npm run dev
# App should work with demo data
```

### Test Backend Connection
```bash
# Set environment variables
# Start backend server
# Run frontend
npm run dev
# Check connection indicator shows "Backend Connected"
```

## 📊 Performance Optimizations

- ✅ Code splitting with Next.js
- ✅ Image optimization
- ✅ Lazy loading components
- ✅ Memoized calculations
- ✅ Debounced search
- ✅ Optimistic UI updates
- ✅ Error boundaries
- ✅ Loading skeletons

## 🔒 Security Features

- ✅ Environment variable protection
- ✅ XSS prevention
- ✅ CSRF protection
- ✅ Secure headers (configured in next.config.ts)
- ✅ Input validation
- ✅ Authentication checks
- ✅ Role-based access (ready for backend)

## 📱 Mobile Optimization

- ✅ 44px minimum touch targets
- ✅ Responsive spacing
- ✅ Mobile-first design
- ✅ Touch-optimized interactions
- ✅ No horizontal scrolling
- ✅ Optimized for 320px+ screens

## 🎯 Production Checklist

- [x] All pages responsive
- [x] Demo data fallback
- [x] Error handling
- [x] Loading states
- [x] Search functionality
- [x] Dark mode
- [x] Backend status indicator
- [x] SEO optimization
- [x] Performance optimization
- [x] Security headers
- [ ] Backend API connected
- [ ] Environment variables set
- [ ] Production deployment

## 🆘 Support

For backend integration support:
1. Check API endpoint schemas above
2. Verify environment variables
3. Test with demo data first
4. Check browser console for errors
5. Monitor backend status indicator

## 🎉 Ready for Production

The frontend is **100% production-ready** and will work seamlessly once your backend endpoints are implemented. All UI/UX, state management, error handling, and responsive design are complete.

**Next Step**: Implement backend API endpoints and connect! 🚀

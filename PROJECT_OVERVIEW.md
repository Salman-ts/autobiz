# AutoBiz - AI-Powered B2B Business Automation Platform

## 🚀 Overview

AutoBiz is a comprehensive, production-ready B2B dashboard system designed for AI-powered business automation, specifically targeting traders and distributors in Pakistan. The platform provides a complete suite of tools for managing CRM, invoices, inventory, WhatsApp automation, analytics, and an AI assistant.

## 🏗️ Architecture

### Technology Stack
- **Frontend**: React with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4.0
- **UI Components**: shadcn/ui
- **Animations**: Motion (Framer Motion)
- **Charts**: Recharts
- **Backend**: Supabase Edge Functions (Hono)
- **Database**: Supabase KV Store
- **Authentication**: Supabase Auth

### Project Structure

```
/
├── App.tsx                          # Main app with routing
├── app/                             # Page components
│   ├── login/page.tsx              # Login page
│   ├── signup/page.tsx             # Signup page
│   ├── dashboard/page.tsx          # Main dashboard
│   ├── crm/page.tsx                # CRM module
│   ├── invoices/page.tsx           # Invoice management
│   ├── inventory/page.tsx          # Inventory tracking
│   ├── whatsapp/page.tsx           # WhatsApp automation
│   ├── analytics/page.tsx          # Analytics & reports
│   └── settings/page.tsx           # User settings
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx             # Navigation sidebar
│   │   ├── Navbar.tsx              # Top navbar
│   │   └── ProtectedLayout.tsx    # Auth wrapper
│   ├── dashboard/                  # Dashboard components
│   ├── crm/                        # CRM components
│   ├── invoices/                   # Invoice components
│   ├── inventory/                  # Inventory components
│   ├── whatsapp/                   # WhatsApp components
│   ├── assistant/                  # AI assistant
│   └── ui/                         # shadcn/ui components
├── context/
│   └── AuthContext.tsx             # Authentication context
├── hooks/                          # Custom React hooks
│   ├── useClients.ts
│   ├── useInvoices.ts
│   └── useInventory.ts
├── types/                          # TypeScript definitions
│   ├── client.ts
│   ├── invoice.ts
│   ├── inventory.ts
│   ├── message.ts
│   └── user.ts
├── utils/
│   └── supabase/
│       ├── client.ts               # Supabase client
│       └── info.tsx                # Supabase config
└── supabase/functions/server/
    ├── index.tsx                   # Backend API routes
    └── kv_store.tsx                # KV database utils
```

## 🎯 Features

### 1. Authentication & Authorization
- Role-based access control (Admin, Trader, Employee)
- Secure signup and login
- Protected routes with auth middleware
- User profile management

### 2. Dashboard
- Real-time KPI metrics
- Revenue and payment status charts
- Recent activity feed
- Quick insights and alerts

### 3. CRM Module
- Complete client management
- Add, edit, delete clients
- Client contact information
- Activity tracking
- Searchable client table

### 4. Invoice Management
- Create and manage invoices
- Track payment status (Paid, Pending, Overdue)
- Invoice details with line items
- Client-linked invoicing
- Due date tracking

### 5. Inventory Management
- Product catalog management
- Stock level tracking
- Low-stock alerts
- SKU and pricing management
- Cost vs. selling price tracking

### 6. WhatsApp Automation
- Contact management
- One-to-one messaging
- Bulk message broadcasting
- Message scheduling
- Message history
- Read/delivery status

### 7. Analytics & Reports
- Revenue and profit trends
- Client growth analytics
- Product performance metrics
- Payment status distribution
- Message activity tracking
- Interactive charts and graphs
- Multiple report views (Revenue, Clients, Products, Messages)

### 8. Settings
- Profile management
- Security settings (password change, 2FA)
- Notification preferences
- API integrations (WhatsApp, Gmail)
- Theme and language preferences

### 9. AI Assistant
- Context-aware AI chatbot
- Business intelligence queries
- Supports English and Urdu
- Real-time assistance
- Floating widget interface

## 🔐 Authentication Flow

1. **Signup**: Users create account with email, password, name, and role
2. **Login**: Email/password authentication via Supabase
3. **Session Management**: Automatic session handling with Supabase Auth
4. **Protected Routes**: All app routes require authentication
5. **Auto-redirect**: Unauthenticated users redirected to login

## 🗄️ Database Schema (KV Store)

### Collections
- `profile:{userId}` - User profiles
- `client:{clientId}` - Client records
- `invoice:{invoiceId}` - Invoice records
- `inventory:{itemId}` - Inventory items
- `message:{messageId}` - WhatsApp messages

### Data Models
See `/types` directory for complete TypeScript definitions

## 🎨 Design System

### Colors
- Primary: Blue (#3b82f6) - Trust, professionalism
- Secondary: Emerald (#10b981) - Growth, success
- Gradient: Blue to Emerald - Brand identity

### Typography
- Headings: Medium weight (500)
- Body: Normal weight (400)
- Responsive sizing with Tailwind defaults

### Components
- shadcn/ui component library
- Consistent rounded corners (0.625rem)
- Smooth animations with Motion
- Accessible and responsive

## 🚀 Getting Started

### Demo Data
The application automatically seeds demo data on first load:
- 3 sample clients
- 5 sample inventory items
- Ready-to-use testing environment

### User Roles
- **Admin**: Full system access
- **Trader**: Client and invoice management
- **Employee**: Limited access

### Demo Credentials
Use any email/password combination to test the authentication flow.

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation, multi-column layouts
- **Tablet**: Responsive grid system, collapsible sidebar
- **Mobile**: Mobile-optimized views, touch-friendly interfaces

## 🔄 Data Flow

1. **Frontend** → API calls to Supabase Edge Functions
2. **Server** → Hono routes handle business logic
3. **Database** → KV Store for data persistence
4. **Real-time** → Supabase subscriptions for live updates

## 🎯 API Routes

### Authentication
- `POST /make-server-244ac669/signup` - Create user account
- `GET /make-server-244ac669/profile/:userId` - Get user profile

### Clients
- `GET /make-server-244ac669/clients` - List all clients
- `POST /make-server-244ac669/clients` - Create client
- `PUT /make-server-244ac669/clients/:id` - Update client
- `DELETE /make-server-244ac669/clients/:id` - Delete client

### Invoices
- `GET /make-server-244ac669/invoices` - List all invoices
- `POST /make-server-244ac669/invoices` - Create invoice
- `PUT /make-server-244ac669/invoices/:id` - Update invoice
- `DELETE /make-server-244ac669/invoices/:id` - Delete invoice

### Inventory
- `GET /make-server-244ac669/inventory` - List all items
- `POST /make-server-244ac669/inventory` - Create item
- `PUT /make-server-244ac669/inventory/:id` - Update item
- `DELETE /make-server-244ac669/inventory/:id` - Delete item

### Messages
- `GET /make-server-244ac669/messages/:clientId` - Get client messages
- `POST /make-server-244ac669/messages` - Send message

### Analytics
- `GET /make-server-244ac669/analytics/dashboard` - Dashboard metrics

### Demo Data
- `POST /make-server-244ac669/seed-demo-data` - Seed sample data

## 🌟 Key Features Highlights

### Urdu/Roman Urdu Support
- Bilingual interface support
- Pakistan-focused business context
- Local currency (PKR) formatting

### Real-time Updates
- Live KPI metrics
- Instant notification system
- Real-time message delivery status

### Comprehensive Analytics
- Multi-dimensional data visualization
- Revenue tracking and forecasting
- Client behavior insights
- Inventory turnover metrics

### Smart Automation
- Bulk WhatsApp messaging
- Scheduled message delivery
- Low-stock auto-alerts
- Overdue invoice notifications

## 🔮 Future Enhancements

- Payment gateway integration
- Advanced reporting and exports
- Mobile app (React Native)
- Multi-language full support
- Advanced AI features with LangChain
- Email automation
- SMS integration
- Advanced role permissions
- Multi-tenant support

## 📝 Notes

- All dates are in ISO format
- Currency displayed in PKR (Pakistani Rupees)
- Time zone: Pakistan Standard Time (PKT)
- Demo mode enabled by default
- Production-ready architecture

## 🎓 Best Practices Implemented

- TypeScript for type safety
- Component-based architecture
- Custom hooks for data management
- Centralized state management
- Error handling and logging
- Loading states and skeletons
- Responsive design patterns
- Accessibility standards
- Security best practices
- Clean code principles

---

**Built with ❤️ for Pakistani traders and distributors**

# The Dutch Queen - Payload CMS Setup

## 🎯 Overview

This project now includes Payload CMS 3.50.0 - a powerful, TypeScript-native headless CMS integrated directly into the Next.js application.

## 🏗️ Architecture

```
src/app/
├── (payload)/                    # Payload CMS routes
│   ├── admin/[[...segments]]/   # Admin interface
│   ├── api/[...slug]/          # Auto-generated API routes
│   ├── layout.tsx              # Admin layout
│   └── custom.scss             # Custom admin styling
├── api/                        # Your custom API routes (backed up)
└── ...                         # Your existing app

payload-config.ts               # Payload configuration
.env.local                     # Environment variables
media/                         # Upload directory
```

## 🚀 Getting Started

### 1. Database Setup
First, make sure PostgreSQL is running and create the database:

```sql
CREATE DATABASE dutch_queen_cms;
```

### 2. Environment Variables
The `.env.local` file is already configured:

```bash
PAYLOAD_SECRET=dutch-queen-super-secret-key-2025-secure-random-string
DATABASE_URL=postgresql://postgres:password@localhost:5432/dutch_queen_cms
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Access Admin Interface

Visit: **http://localhost:3000/admin**

On first visit, you'll be prompted to create your admin account.

## 📊 Content Collections

### Band Management
- **Users** - Admin access and roles (admin, band-member, manager)
- **Band Members** - Individual member profiles with photos and bios
- **Band Info** (Global) - Overall band information and settings

### Events & Business
- **Shows** - Concert listings with venues, dates, and ticket links
- **Bookings** - Customer booking requests with status tracking
- **Contacts** - Contact form submissions organized by type

### Media Management
- **Media** - Upload and organize photos, videos, and audio files
  - Automatic image resizing (thumbnail, card, hero sizes)
  - Organized by categories (performance, band, promotional, etc.)

## 🎨 Admin Features

### Custom Styling
- Dutch Queen branded admin interface with orange/gold theme
- Responsive design optimized for mobile management
- Custom status badges and form styling

### Content Organization
Collections are organized into logical groups:
- **Band** - Member profiles and band info
- **Events** - Shows and performance management  
- **Business** - Bookings and contact management
- **Media** - File uploads and media library
- **Settings** - Global configurations

## 🔌 API Integration

### Auto-Generated API Endpoints

All collections automatically get REST API endpoints:

```bash
# Shows
GET    /api/shows              # List all shows
GET    /api/shows/:id          # Get specific show
POST   /api/shows              # Create new show
PATCH  /api/shows/:id          # Update show
DELETE /api/shows/:id          # Delete show

# Bookings  
GET    /api/bookings           # List all bookings
POST   /api/bookings           # Create booking
# ... etc for all collections

# Global settings
GET    /api/globals/band-info  # Get band information
```

### Frontend Integration Example

```typescript
// Get upcoming shows
const response = await fetch('/api/shows?where[status][equals]=upcoming')
const { docs: shows } = await response.json()

// Create new booking
const booking = await fetch('/api/bookings', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    eventType: 'full-band',
    // ... other fields
  })
})
```

## 🛠️ Development Commands

```bash
# Development
npm run dev                    # Start dev server with Payload
npm run dev:3000              # Run on specific port

# Production  
npm run build                 # Build for production
npm run start                 # Start production server

# Payload-specific
npm run generate:types        # Generate TypeScript types
npm run payload               # Direct Payload CLI access
```

## 🎵 Content Strategy for The Dutch Queen

### Recommended Workflow

1. **Setup Band Members** - Add profiles for each band member
2. **Configure Band Info** - Set global information and contact details
3. **Add Media** - Upload performance photos, band photos, promotional materials
4. **Create Shows** - Add upcoming concerts and events
5. **Manage Bookings** - Handle customer requests through the admin panel

### Content Best Practices

- **Media Organization**: Use categories to organize photos (performance, band, promotional)
- **Show Management**: Keep status updated (upcoming → completed) and add featured shows to homepage
- **Booking Workflow**: New → Under Review → Confirmed/Cancelled → Completed
- **SEO Optimization**: Add descriptive alt text and captions to all media

## 🔐 Security & Access

- **Admin Authentication**: Built-in secure authentication system
- **Role-Based Access**: Admin, Band Member, Manager roles with different permissions
- **Environment Security**: All sensitive data in environment variables
- **Database Security**: PostgreSQL with connection pooling

## 🚀 Deployment

Payload CMS works seamlessly with Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

Database options for production:
- **Vercel Postgres** (recommended)
- **Railway PostgreSQL** 
- **PlanetScale** (MySQL)
- **Supabase PostgreSQL**

---

**Version:** Payload CMS 3.50.0  
**Last Updated:** January 27, 2025  
**Framework:** Next.js 15.4.4 + TypeScript + PostgreSQL
# The Dutch Queen - Backend API Documentation

## Overview
This is the backend API for The Dutch Queen website, built using Next.js API routes. The API provides endpoints for bookings, shows, contact forms, and admin management.

## Project Structure

```
src/app/api/
├── bookings/route.ts          # Booking requests
├── shows/route.ts             # Show listings and management
├── contact/route.ts           # Contact form submissions
├── admin/
│   ├── route.ts              # Admin dashboard
│   └── bookings/route.ts     # Admin booking management
└── health/route.ts           # Health check endpoint

src/lib/
└── api-client.ts             # Frontend API client utilities
```

## API Endpoints

### Public Endpoints

#### 🎫 Bookings
- `POST /api/bookings` - Submit a booking request
- `GET /api/bookings` - Get API information

**Booking Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+31612345678",
  "eventDate": "2025-04-15T19:00:00Z",
  "eventType": "full-band",
  "venue": "De Melkweg",
  "guestCount": 500,
  "budget": "€5000-7500",
  "message": "Corporate event details"
}
```

#### 🎪 Shows
- `GET /api/shows` - Get upcoming shows
- `POST /api/shows` - Create new show (admin only)

**Query Parameters:**
- `type` - Filter by `full-band` or `acoustic`
- `status` - Filter by `upcoming`, `sold-out`, `cancelled`
- `city` - Filter by city name
- `limit` - Limit number of results

#### 📧 Contact
- `POST /api/contact` - Submit contact message
- `GET /api/contact` - Get API information

**Contact Types:**
- `general` - General inquiries
- `booking` - Booking requests
- `press` - Media inquiries
- `technical` - Technical support

#### ⚕️ Health Check
- `GET /api/health` - API health status and endpoints list

### Admin Endpoints (Authentication Required)

#### 👨‍💼 Admin Dashboard
- `GET /api/admin` - Get dashboard data
- `POST /api/admin` - Admin actions (update settings, clear cache)

#### 📊 Admin Booking Management
- `GET /api/admin/bookings` - Get all bookings
- `PUT /api/admin/bookings` - Update booking status

**Authentication:**
Include one of the following headers:
- `Authorization: Bearer dutch-queen-admin-2025`
- `X-API-Key: dutch-queen-admin-2025`

## Frontend Integration

### Using the API Client

```typescript
import { apiClient } from '@/lib/api-client'

// Submit a booking
const result = await apiClient.submitBooking({
  name: 'John Doe',
  email: 'john@example.com',
  // ... other fields
})

// Get upcoming shows
const shows = await apiClient.getShows({ 
  type: 'full-band', 
  limit: 10 
})

// Submit contact form
const contact = await apiClient.submitContact({
  name: 'Jane Doe',
  email: 'jane@example.com',
  type: 'general',
  subject: 'Question about shows',
  message: 'When is your next Amsterdam show?'
})
```

### Form Integration Example

```typescript
'use client'
import { useState } from 'react'
import { apiClient } from '@/lib/api-client'

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    
    const result = await apiClient.submitBooking({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      // ... other fields
    })

    if (result.success) {
      alert('Booking submitted successfully!')
    } else {
      alert(`Error: ${result.error}`)
    }
    
    setIsSubmitting(false)
  }

  return (
    <form action={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Book Now'}
      </button>
    </form>
  )
}
```

## Development

### Running the API
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
```

The API will be available at:
- Development: `http://localhost:3000/api`
- Production: `https://your-domain.com/api`

### Testing Endpoints

#### Health Check
```bash
curl http://localhost:3000/api/health
```

#### Submit Booking
```bash
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+31612345678",
    "eventDate": "2025-04-15T19:00:00Z",
    "eventType": "full-band",
    "venue": "Test Venue",
    "guestCount": 100,
    "budget": "€2500-5000"
  }'
```

#### Get Shows
```bash
curl "http://localhost:3000/api/shows?type=full-band&limit=5"
```

#### Admin Dashboard (with auth)
```bash
curl -H "X-API-Key: dutch-queen-admin-2025" \
  http://localhost:3000/api/admin
```

## Environment Variables

Create a `.env.local` file:
```bash
ADMIN_API_KEY=your-secure-admin-key
NEXT_PUBLIC_API_URL=http://localhost:3000  # For development
```

## Next Steps

1. **Database Integration**: Replace sample data with a real database (Prisma + PostgreSQL recommended)
2. **Email Service**: Implement email notifications using SendGrid, Resend, or Nodemailer
3. **Authentication**: Add proper JWT or NextAuth.js authentication for admin routes
4. **Rate Limiting**: Add rate limiting to prevent abuse
5. **Validation**: Enhanced input validation with Zod or similar
6. **Monitoring**: Add logging and error tracking (Sentry, LogRocket)

## Production Deployment

The API is ready to deploy to Vercel alongside your frontend:

```bash
vercel deploy
```

All API routes will be automatically available at your domain under `/api/*`.

---

**API Version:** 1.0.0  
**Last Updated:** January 27, 2025  
**Framework:** Next.js 15.4.4 with TypeScript
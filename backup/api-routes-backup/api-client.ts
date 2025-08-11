// API client utilities for The Dutch Queen backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

interface BookingRequest {
  name: string
  email: string
  phone: string
  eventDate: string
  eventType: 'full-band' | 'acoustic'
  venue: string
  guestCount: number
  budget: string
  message?: string
}

interface ContactRequest {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  type: 'general' | 'booking' | 'press' | 'technical'
}

class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}/api${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'API request failed')
      }

      return data
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Booking methods
  async submitBooking(booking: BookingRequest): Promise<ApiResponse> {
    return this.request('/bookings', {
      method: 'POST',
      body: JSON.stringify(booking)
    })
  }

  // Shows methods
  async getShows(params?: {
    type?: 'full-band' | 'acoustic'
    status?: 'upcoming' | 'sold-out' | 'cancelled'
    city?: string
    limit?: number
  }): Promise<ApiResponse> {
    const searchParams = new URLSearchParams()
    
    if (params?.type) searchParams.append('type', params.type)
    if (params?.status) searchParams.append('status', params.status)
    if (params?.city) searchParams.append('city', params.city)
    if (params?.limit) searchParams.append('limit', params.limit.toString())

    const queryString = searchParams.toString()
    const endpoint = `/shows${queryString ? `?${queryString}` : ''}`

    return this.request(endpoint)
  }

  // Contact methods
  async submitContact(contact: ContactRequest): Promise<ApiResponse> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(contact)
    })
  }

  // Admin methods (require authentication)
  async getAdminDashboard(apiKey: string): Promise<ApiResponse> {
    return this.request('/admin', {
      headers: {
        'X-API-Key': apiKey
      }
    })
  }

  async getAdminBookings(apiKey: string, params?: {
    status?: 'pending' | 'confirmed' | 'cancelled'
    limit?: number
  }): Promise<ApiResponse> {
    const searchParams = new URLSearchParams()
    
    if (params?.status) searchParams.append('status', params.status)
    if (params?.limit) searchParams.append('limit', params.limit.toString())

    const queryString = searchParams.toString()
    const endpoint = `/admin/bookings${queryString ? `?${queryString}` : ''}`

    return this.request(endpoint, {
      headers: {
        'X-API-Key': apiKey
      }
    })
  }

  async updateBookingStatus(
    apiKey: string,
    bookingId: string,
    status: 'pending' | 'confirmed' | 'cancelled',
    notes?: string
  ): Promise<ApiResponse> {
    return this.request('/admin/bookings', {
      method: 'PUT',
      headers: {
        'X-API-Key': apiKey
      },
      body: JSON.stringify({ bookingId, status, notes })
    })
  }

  // Health check
  async healthCheck(): Promise<ApiResponse> {
    return this.request('/health')
  }
}

export const apiClient = new ApiClient()
export type { BookingRequest, ContactRequest, ApiResponse }
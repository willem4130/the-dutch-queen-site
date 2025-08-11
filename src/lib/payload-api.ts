/**
 * Payload CMS API Client
 * Utilities for fetching data from Payload CMS REST API
 */

const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001';

/**
 * Base API fetch function with error handling
 */
async function payloadFetch<T>(endpoint: string): Promise<T | null> {
  try {
    const url = `${PAYLOAD_API_URL}/api${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache revalidation for production
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.error(`Payload API error: ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Payload API fetch error:', error);
    return null;
  }
}

/**
 * Type definitions for Payload collections
 * These will be updated once payload-types.ts is generated
 */

// Site Settings Types
export interface SiteSettings {
  general: {
    siteName: string;
    tagline: string;
    metaDescription: string;
  };
  heroSection: {
    acousticImage?: Media;
    fullBandImage?: Media;
    heroTitle: string;
    heroSubtitle: string;
  };
  aboutSection: {
    mainHeading: string;
    introText: string;
    storyHeading: string;
    storyContent: any; // RichText
    storyImage?: Media;
    stats: Array<{
      label: string;
      value: string;
      icon?: string;
    }>;
  };
  contactSection: {
    pricingGuide: Array<{
      service: string;
      priceRange: string;
    }>;
    locationInfo: {
      baseLocation: string;
      serviceAreas: string;
    };
    socialFollowText: string;
  };
}

// Performance Types
export interface PerformanceType {
  id: string;
  name: string;
  slug: string;
  description: string;
  idealFor: Array<{ item: string }>;
  features: Array<{ feature: string }>;
  songList: Array<{ song: string }>;
  heroImage?: Media;
  imageTitle?: string;
  imageDescription?: string;
  colorTheme: 'red' | 'yellow';
  layoutReverse?: boolean;
  displayOrder: number;
}

export interface Show {
  id: string;
  title: string;
  date: string;
  venue: string;
  city: string;
  country?: string;
  eventType: 'full-band' | 'acoustic';
  status: 'upcoming' | 'sold-out' | 'cancelled' | 'completed';
  ticketUrl?: string;
  price?: string;
  description?: any; // RichText
  featuredImage?: Media;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BandMember {
  id: string;
  name: string;
  role: string;
  bio?: any; // RichText
  photo?: Media;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Media {
  id: string;
  alt?: string;
  caption?: string;
  category?: 'performance' | 'band' | 'behind-scenes' | 'promotional' | 'audio' | 'video';
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: MediaSize;
    card?: MediaSize;
    hero?: MediaSize;
  };
  url?: string;
  createdAt: string;
  updatedAt: string;
}

interface MediaSize {
  url?: string;
  width?: number;
  height?: number;
  mimeType?: string;
  filesize?: number;
  filename?: string;
}

export interface BandInfo {
  id: string;
  bandName?: string;
  tagline?: string;
  description?: any; // RichText
  contactInfo?: {
    email?: string;
    phone?: string;
    bookingEmail?: string;
  };
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
  updatedAt: string;
  createdAt: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: 'general' | 'booking' | 'press' | 'technical';
  status: 'new' | 'in-progress' | 'resolved';
  createdAt: string;
  updatedAt: string;
}

/**
 * Shows API functions
 */
export async function getShows() {
  const response = await payloadFetch<{docs: Show[]}>('/shows?sort=-date');
  return response?.docs || [];
}

export async function getFeaturedShows() {
  const response = await payloadFetch<{docs: Show[]}>('/shows?where[featured][equals]=true&sort=-date');
  return response?.docs || [];
}

export async function getUpcomingShows() {
  const response = await payloadFetch<{docs: Show[]}>('/shows?where[status][equals]=upcoming&sort=date');
  return response?.docs || [];
}

/**
 * Band Members API functions
 */
export async function getBandMembers() {
  const response = await payloadFetch<{docs: BandMember[]}>('/band-members?sort=createdAt');
  return response?.docs || [];
}

export async function getFeaturedBandMembers() {
  const response = await payloadFetch<{docs: BandMember[]}>('/band-members?where[featured][equals]=true&sort=createdAt');
  return response?.docs || [];
}

/**
 * Media API functions
 */
export async function getMedia(category?: string) {
  const categoryQuery = category ? `?where[category][equals]=${category}` : '';
  const response = await payloadFetch<{docs: Media[]}>(`/media${categoryQuery}&sort=-createdAt`);
  return response?.docs || [];
}

export async function getPerformancePhotos() {
  return getMedia('performance');
}

export async function getBandPhotos() {
  return getMedia('band');
}

/**
 * Globals API functions
 */
export async function getBandInfo() {
  const response = await payloadFetch<BandInfo>('/globals/band-info');
  return response;
}

export async function getSiteSettings() {
  const response = await payloadFetch<SiteSettings>('/globals/site-settings');
  return response;
}

/**
 * Performance Types API functions
 */
export async function getPerformanceTypes() {
  const response = await payloadFetch<{docs: PerformanceType[]}>('/performance-types?sort=displayOrder');
  return response?.docs || [];
}

export async function getPerformanceType(slug: string) {
  const response = await payloadFetch<{docs: PerformanceType[]}>(`/performance-types?where[slug][equals]=${slug}&limit=1`);
  return response?.docs?.[0] || null;
}

/**
 * Contact form submission
 */
export async function submitContact(contactData: Omit<Contact, 'id' | 'createdAt' | 'updatedAt' | 'status'>) {
  try {
    const url = `${PAYLOAD_API_URL}/api/contacts`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...contactData,
        status: 'new',
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit contact: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}

/**
 * Helper function to get optimized image URL
 */
export function getOptimizedImageUrl(media: Media | undefined, size: 'thumbnail' | 'card' | 'hero' = 'card'): string {
  if (!media) return '/placeholder-image.jpg';
  
  // Return the optimized size if available, otherwise fallback to original URL
  const sizedImage = media.sizes?.[size];
  if (sizedImage?.url) {
    return `${PAYLOAD_API_URL}${sizedImage.url}`;
  }
  
  if (media.url) {
    return `${PAYLOAD_API_URL}${media.url}`;
  }
  
  return '/placeholder-image.jpg';
}
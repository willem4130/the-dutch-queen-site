import { useState, useEffect } from 'react';
import { getBandInfo, type BandInfo } from '../lib/payload-api';

interface BandInfoHook {
  bandInfo: BandInfo | null;
  loading: boolean;
  error: string | null;
}

export function useBandInfo(): BandInfoHook {
  const [bandInfo, setBandInfo] = useState<BandInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBandInfo = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const info = await getBandInfo();
        setBandInfo(info);
        
      } catch (err) {
        console.error('Error fetching band info:', err);
        setError('Failed to load band information');
      } finally {
        setLoading(false);
      }
    };

    fetchBandInfo();
  }, []);

  return {
    bandInfo,
    loading,
    error
  };
}

// Helper functions to get contact information with fallbacks
export function getBandName(bandInfo: BandInfo | null): string {
  return bandInfo?.bandName || 'The Dutch Queen';
}

export function getTagline(bandInfo: BandInfo | null): string {
  return bandInfo?.tagline || 'Premium Queen tribute band from the Netherlands';
}

export function getContactEmail(bandInfo: BandInfo | null): string {
  return bandInfo?.contactInfo?.email || 'booking@thedutchqueen.com';
}

export function getBookingEmail(bandInfo: BandInfo | null): string {
  return bandInfo?.contactInfo?.bookingEmail || bandInfo?.contactInfo?.email || 'booking@thedutchqueen.com';
}

export function getContactPhone(bandInfo: BandInfo | null): string {
  return bandInfo?.contactInfo?.phone || '+31 6 1234 5678';
}

export function getSocialLinks(bandInfo: BandInfo | null) {
  const fallbackLinks = {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    spotify: '#'
  };
  
  return {
    facebook: bandInfo?.socialLinks?.facebook || fallbackLinks.facebook,
    instagram: bandInfo?.socialLinks?.instagram || fallbackLinks.instagram,
    youtube: bandInfo?.socialLinks?.youtube || fallbackLinks.youtube,
    spotify: bandInfo?.socialLinks?.spotify || fallbackLinks.spotify
  };
}
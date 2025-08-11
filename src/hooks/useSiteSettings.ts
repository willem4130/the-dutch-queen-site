import { useState, useEffect } from 'react';
import { getSiteSettings, type SiteSettings } from '../lib/payload-api';

interface SiteSettingsHook {
  siteSettings: SiteSettings | null;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

export function useSiteSettings(): SiteSettingsHook {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSiteSettings = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const settings = await getSiteSettings();
      setSiteSettings(settings);
      
    } catch (err) {
      console.error('Error fetching site settings:', err);
      setError('Failed to load site settings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSiteSettings();
  }, []);

  const refresh = () => {
    fetchSiteSettings();
  };

  return {
    siteSettings,
    loading,
    error,
    refresh
  };
}

// Helper functions to get specific sections with fallbacks
export function getHeroSettings(siteSettings: SiteSettings | null) {
  return {
    acousticImage: siteSettings?.heroSection?.acousticImage || null,
    fullBandImage: siteSettings?.heroSection?.fullBandImage || null,
    heroTitle: siteSettings?.heroSection?.heroTitle || 'Experience Queen Like Never Before',
    heroSubtitle: siteSettings?.heroSection?.heroSubtitle || 'From intimate acoustic sessions to full stadium productions'
  };
}

export function getAboutSettings(siteSettings: SiteSettings | null) {
  return {
    mainHeading: siteSettings?.aboutSection?.mainHeading || 'About The Dutch Queen',
    introText: siteSettings?.aboutSection?.introText || 'From the heart of the Netherlands comes a tribute to the greatest rock band of all time.',
    storyHeading: siteSettings?.aboutSection?.storyHeading || 'Our Story',
    storyContent: siteSettings?.aboutSection?.storyContent,
    storyImage: siteSettings?.aboutSection?.storyImage || null,
    stats: siteSettings?.aboutSection?.stats || [
      { label: 'Years Active', value: '5+', icon: '🎸' },
      { label: 'Shows Performed', value: '150+', icon: '🎤' },
      { label: 'Happy Clients', value: '100+', icon: '⭐' },
      { label: 'Countries', value: '3', icon: '🌍' }
    ]
  };
}

export function getContactSettings(siteSettings: SiteSettings | null) {
  return {
    pricingGuide: siteSettings?.contactSection?.pricingGuide || [
      { service: 'Acoustic Sessions', priceRange: '€2,500 - €5,000' },
      { service: 'Full Band Shows', priceRange: '€7,500 - €15,000' }
    ],
    baseLocation: siteSettings?.contactSection?.locationInfo?.baseLocation || 'Based in Amsterdam',
    serviceAreas: siteSettings?.contactSection?.locationInfo?.serviceAreas || 'Performing throughout the Netherlands & Europe',
    socialFollowText: siteSettings?.contactSection?.socialFollowText || 'Follow Our Journey'
  };
}

export function getGeneralSettings(siteSettings: SiteSettings | null) {
  return {
    siteName: siteSettings?.general?.siteName || 'The Dutch Queen',
    tagline: siteSettings?.general?.tagline || 'Premium Queen tribute band from the Netherlands',
    metaDescription: siteSettings?.general?.metaDescription || 'The Dutch Queen - Premium Queen tribute band from the Netherlands. Book us for your event!'
  };
}
import { useState, useEffect } from 'react';
import { getPerformancePhotos, getOptimizedImageUrl, type Media } from '../lib/payload-api';

interface PerformanceMediaHook {
  fullBandImage: Media | null;
  acousticImage: Media | null;
  loading: boolean;
  error: string | null;
}

export function usePerformanceMedia(): PerformanceMediaHook {
  const [fullBandImage, setFullBandImage] = useState<Media | null>(null);
  const [acousticImage, setAcousticImage] = useState<Media | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerformanceMedia = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const performancePhotos = await getPerformancePhotos();
        
        // Find images based on alt text or filename patterns
        const fullBand = performancePhotos.find(
          photo => 
            photo.alt?.toLowerCase().includes('full band') ||
            photo.alt?.toLowerCase().includes('full-band') ||
            photo.filename?.toLowerCase().includes('full-band') ||
            photo.filename?.toLowerCase().includes('band-performance')
        );
        
        const acoustic = performancePhotos.find(
          photo => 
            photo.alt?.toLowerCase().includes('acoustic') ||
            photo.filename?.toLowerCase().includes('acoustic') ||
            photo.filename?.toLowerCase().includes('acoustic-performance')
        );
        
        // Fallback to first available images if specific ones not found
        if (!fullBand && performancePhotos.length > 0) {
          setFullBandImage(performancePhotos[0]);
        } else if (fullBand) {
          setFullBandImage(fullBand);
        }
        
        if (!acoustic && performancePhotos.length > 1) {
          setAcousticImage(performancePhotos[1]);
        } else if (acoustic) {
          setAcousticImage(acoustic);
        }
        
      } catch (err) {
        console.error('Error fetching performance media:', err);
        setError('Failed to load performance images');
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceMedia();
  }, []);

  return {
    fullBandImage,
    acousticImage,
    loading,
    error
  };
}

// Helper function to get performance image URL with fallback
export function getPerformanceImageUrl(
  media: Media | null, 
  fallbackUrl: string, 
  size: 'thumbnail' | 'card' | 'hero' = 'hero'
): string {
  if (media) {
    return getOptimizedImageUrl(media, size);
  }
  return fallbackUrl;
}
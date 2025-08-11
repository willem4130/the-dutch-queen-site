import { useState, useEffect } from 'react';
import { getPerformanceTypes, getPerformanceType, type PerformanceType } from '../lib/payload-api';

interface PerformanceTypesHook {
  performanceTypes: PerformanceType[];
  loading: boolean;
  error: string | null;
}

interface PerformanceTypeHook {
  performanceType: PerformanceType | null;
  loading: boolean;
  error: string | null;
}

export function usePerformanceTypes(): PerformanceTypesHook {
  const [performanceTypes, setPerformanceTypes] = useState<PerformanceType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerformanceTypes = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const types = await getPerformanceTypes();
        setPerformanceTypes(types);
        
      } catch (err) {
        console.error('Error fetching performance types:', err);
        setError('Failed to load performance types');
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceTypes();
  }, []);

  return {
    performanceTypes,
    loading,
    error
  };
}

export function usePerformanceType(slug: string): PerformanceTypeHook {
  const [performanceType, setPerformanceType] = useState<PerformanceType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerformanceType = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const type = await getPerformanceType(slug);
        setPerformanceType(type);
        
      } catch (err) {
        console.error('Error fetching performance type:', err);
        setError('Failed to load performance type');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPerformanceType();
    }
  }, [slug]);

  return {
    performanceType,
    loading,
    error
  };
}

// Helper functions to transform CMS data for frontend components
export function transformPerformanceTypeForComponent(performanceType: PerformanceType) {
  return {
    id: performanceType.slug as "full-band" | "acoustic", // Type assertion for compatibility
    title: performanceType.name,
    description: performanceType.description,
    idealFor: performanceType.idealFor.map(item => item.item),
    features: performanceType.features.map(feature => feature.feature),
    songs: performanceType.songList.map(song => song.song),
    imageUrl: '', // Will be handled by media optimization
    imageMedia: performanceType.heroImage,
    imageAlt: `${performanceType.name} performance`,
    imageTitle: performanceType.imageTitle || performanceType.name,
    imageDescription: performanceType.imageDescription || performanceType.description,
    colorTheme: performanceType.colorTheme,
    layoutReverse: performanceType.layoutReverse || false
  };
}

// Get performance types organized by slug for easy access
export function getPerformanceTypesBySlug(performanceTypes: PerformanceType[]) {
  const typesBySlug: Record<string, PerformanceType> = {};
  
  performanceTypes.forEach(type => {
    typesBySlug[type.slug] = type;
  });
  
  return typesBySlug;
}
import { useState, useEffect } from 'react';
import type { Trail } from '@/types';
import { trails as staticTrails } from '@/data/trails';

export function useTrails() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate async fetch — swap this for a real API call later
    const timer = setTimeout(() => {
      try {
        setTrails(staticTrails);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load trails');
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return { trails, loading, error };
}

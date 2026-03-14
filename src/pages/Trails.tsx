import { useTrails } from '@/hooks/useTrails';
import { TrailCard } from '@/components/TrailCard';

export function Trails() {
  const { trails, loading, error } = useTrails();

  return (
    <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Trails</h1>
      <p className="text-gray-500 mb-8">Discover hiking routes around Porto and beyond.</p>

      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {error && (
        <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-4">{error}</div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>
      )}
    </main>
  );
}

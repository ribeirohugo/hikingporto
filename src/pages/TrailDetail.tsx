import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, TrendingUp, Route } from 'lucide-react';
import { trails } from '@/data/trails';
import { MapView } from '@/components/MapView';
import { formatDistance, formatDuration, formatElevation, difficultyColor } from '@/utils/format';

export function TrailDetail() {
  const { slug } = useParams<{ slug: string }>();
  const trail = trails.find((t) => t.slug === slug);

  if (!trail) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center py-20 text-center px-4">
        <p className="text-4xl mb-4">🥾</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Trail not found</h2>
        <p className="text-gray-500 mb-6">We couldn't find the trail you're looking for.</p>
        <Link to="/trails" className="text-green-600 hover:underline flex items-center gap-1">
          <ArrowLeft size={16} /> Back to trails
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">
      <Link to="/trails" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-green-600 mb-6">
        <ArrowLeft size={14} /> All trails
      </Link>

      <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-900">{trail.name}</h1>
        <span className={`text-sm font-medium px-3 py-1 rounded-full capitalize ${difficultyColor(trail.difficulty)}`}>
          {trail.difficulty}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
        <span className="flex items-center gap-1"><MapPin size={14} />{trail.location}</span>
        <span className="flex items-center gap-1"><Route size={14} />{formatDistance(trail.distance)}</span>
        <span className="flex items-center gap-1"><TrendingUp size={14} />{formatElevation(trail.elevationGain)}</span>
        <span className="flex items-center gap-1"><Clock size={14} />{formatDuration(trail.duration)}</span>
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-8">{trail.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {trail.tags.map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      <MapView
        center={trail.coordinates}
        zoom={13}
        markers={[{ position: trail.coordinates, label: trail.name }]}
        className="w-full"
      />
    </main>
  );
}

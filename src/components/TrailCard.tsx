import { Link } from 'react-router-dom';
import { MapPin, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import type { Trail } from '@/types';
import { formatDistance, formatDuration, formatElevation, difficultyColor } from '@/utils/format';

interface TrailCardProps {
  trail: Trail;
}

export function TrailCard({ trail }: TrailCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="bg-linear-to-br from-green-400 to-emerald-600 h-40 flex items-center justify-center">
        <span className="text-white text-5xl">🥾</span>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight">{trail.name}</h3>
          <span
            className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full capitalize ${difficultyColor(trail.difficulty)}`}
          >
            {trail.difficulty}
          </span>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2">{trail.description}</p>

        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <MapPin size={13} className="shrink-0" />
          <span>{trail.location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <span className="flex items-center gap-1">
            <ArrowRight size={13} />
            {formatDistance(trail.distance)}
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp size={13} />
            {formatElevation(trail.elevationGain)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {formatDuration(trail.duration)}
          </span>
        </div>

        <Link
          to={`/trails/${trail.slug}`}
          className="mt-auto text-center text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg py-2 transition-colors"
        >
          View Trail
        </Link>
      </div>
    </div>
  );
}

export function formatDistance(km: number): string {
  return `${km.toFixed(1)} km`;
}

export function formatElevation(meters: number): string {
  return `${meters} m`;
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}min`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}min`;
}

export function difficultyColor(difficulty: 'easy' | 'moderate' | 'hard'): string {
  switch (difficulty) {
    case 'easy':
      return 'text-green-600 bg-green-100';
    case 'moderate':
      return 'text-yellow-700 bg-yellow-100';
    case 'hard':
      return 'text-red-600 bg-red-100';
  }
}

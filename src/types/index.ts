export interface Trail {
  id: string;
  name: string;
  slug: string;
  description: string;
  distance: number; // km
  elevationGain: number; // meters
  difficulty: 'easy' | 'moderate' | 'hard';
  duration: number; // minutes
  location: string;
  coordinates: [number, number]; // [lat, lng]
  imageUrl?: string;
  tags: string[];
  waypoints?: Waypoint[];
}

export interface Waypoint {
  name: string;
  coordinates: [number, number]; // [lat, lng]
  description?: string;
}

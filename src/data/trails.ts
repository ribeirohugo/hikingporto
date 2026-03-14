import type { Trail } from '@/types';

export const trails: Trail[] = [
  {
    id: '1',
    name: 'Serra do Pilar Loop',
    slug: 'serra-do-pilar-loop',
    description:
      'A scenic loop trail starting at the iconic Serra do Pilar monastery with panoramic views over Porto and the Douro River.',
    distance: 6.2,
    elevationGain: 180,
    difficulty: 'easy',
    duration: 90,
    location: 'Vila Nova de Gaia',
    coordinates: [41.1395, -8.6131],
    tags: ['river views', 'historic', 'loop'],
  },
  {
    id: '2',
    name: 'Parque de Serralves Nature Trail',
    slug: 'serralves-nature-trail',
    description:
      'Wander through the lush gardens and woodlands surrounding the Serralves Museum of Contemporary Art.',
    distance: 4.5,
    elevationGain: 60,
    difficulty: 'easy',
    duration: 60,
    location: 'Porto',
    coordinates: [41.1585, -8.6616],
    tags: ['park', 'art', 'family-friendly'],
  },
  {
    id: '3',
    name: 'Penafiel Forest Trail',
    slug: 'penafiel-forest-trail',
    description:
      'A challenging trail through dense eucalyptus and pine forests east of Porto, with rewarding summit views.',
    distance: 14.8,
    elevationGain: 520,
    difficulty: 'hard',
    duration: 240,
    location: 'Penafiel',
    coordinates: [41.2046, -8.2844],
    tags: ['forest', 'summit', 'challenging'],
  },
];

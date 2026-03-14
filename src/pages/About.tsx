import { Mountain } from 'lucide-react';

export function About() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-16 text-center">
      <div className="flex justify-center mb-6 text-green-600">
        <Mountain size={48} />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About Hiking Porto</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Hiking Porto is a community-driven guide to the best hiking trails in and around Porto,
        Portugal. Whether you're a local looking for your next weekend adventure or a visitor
        wanting to explore beyond the city, we've got a trail for you.
      </p>
      <p className="text-gray-500 leading-relaxed">
        All trails are described with distance, elevation, difficulty, and duration so you can
        plan your hike with confidence. Maps are powered by{' '}
        <a href="https://www.openstreetmap.org" className="text-green-600 hover:underline" target="_blank" rel="noreferrer">
          OpenStreetMap
        </a>
        .
      </p>
    </main>
  );
}

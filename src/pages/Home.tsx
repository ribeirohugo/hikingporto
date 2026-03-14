import { Link } from 'react-router-dom';
import { Mountain, Map, Wind, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-800 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Mountain size={56} className="opacity-90" />
          </div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Explore the Trails around Porto
          </h1>
          <p className="text-green-100 text-xl mb-8 max-w-xl mx-auto">
            Discover stunning hiking routes around Portugal's vibrant northern city — from riverside
            paths to forested mountain trails.
          </p>
          <Link
            to="/trails"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors"
          >
            Browse Trails <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-green-100 text-green-700 rounded-full p-4">
              <Map size={28} />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">Interactive Maps</h3>
            <p className="text-gray-500 text-sm">
              View every trail on an interactive OpenStreetMap with waypoints and elevation data.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-green-100 text-green-700 rounded-full p-4">
              <Mountain size={28} />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">Curated Routes</h3>
            <p className="text-gray-500 text-sm">
              Hand-picked trails for all skill levels, from easy riverside strolls to challenging
              mountain climbs.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-green-100 text-green-700 rounded-full p-4">
              <Wind size={28} />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">Trail Details</h3>
            <p className="text-gray-500 text-sm">
              Distance, elevation gain, estimated duration, and difficulty rating for every route.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

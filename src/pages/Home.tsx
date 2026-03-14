import { Link } from 'react-router-dom';
import { Mountain, Map, Wind, ArrowRight, Users } from 'lucide-react';

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/';

export function Home() {
  return (
    <main className="flex-1">
      {/* Section 1 — WhatsApp Community CTA */}
      <section className="bg-linear-to-br from-green-600 to-emerald-800 text-white min-h-[calc(100svh-4rem)] px-6 flex items-center justify-center text-center">
        <div className="max-w-2xl mx-auto py-20">
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 text-white rounded-full p-6">
              <Users size={56} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Join Hiking Porto
          </h1>
          <p className="text-green-100 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
            Connect with the community, share routes, organise group hikes,
            and get trail tips in our WhatsApp group.
          </p>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-9 py-4 rounded-full text-lg transition-colors shadow-md"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Join on WhatsApp
          </a>
        </div>
      </section>

      {/* Section 2 — Explore the Trails hero */}
      <section className="bg-white py-24 px-6 text-center border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6 text-green-600">
            <Mountain size={56} />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Explore the Trails around Porto
          </h2>
          <p className="text-gray-500 text-xl mb-8 max-w-xl mx-auto">
            Discover stunning hiking routes around Portugal's vibrant northern city — from riverside
            paths to forested mountain trails.
          </p>
          <Link
            to="/trails"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Browse Trails <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Section 3 — Features */}
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

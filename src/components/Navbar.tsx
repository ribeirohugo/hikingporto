import { NavLink } from 'react-router-dom';
import { Mountain, Map, Info } from 'lucide-react';

export function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-green-700 bg-green-50'
        : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-green-700 text-lg">
          <Mountain size={24} />
          <span>Hiking Porto</span>
        </NavLink>

        <nav className="flex items-center gap-1">
          <NavLink to="/trails" className={linkClass}>
            <Map size={16} />
            Trails
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            <Info size={16} />
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

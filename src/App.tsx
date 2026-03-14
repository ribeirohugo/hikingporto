import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <Outlet />
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Hiking Porto · Built with React & OpenStreetMap
      </footer>
    </div>
  );
}

export default App;

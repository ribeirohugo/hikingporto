import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { Home } from '@/pages/Home';
import { Trails } from '@/pages/Trails';
import { TrailDetail } from '@/pages/TrailDetail';
import { About } from '@/pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'trails', element: <Trails /> },
      { path: 'trails/:slug', element: <TrailDetail /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

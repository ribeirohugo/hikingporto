# Hiking Porto

A modern web app to discover and explore hiking trails around Porto, Portugal.

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Framework  | React 19 + TypeScript             |
| Build tool | Vite 8                            |
| Styling    | Tailwind CSS v4                   |
| Routing    | React Router v7                   |
| Maps       | Leaflet + React-Leaflet           |
| Icons      | Lucide React                      |
| HTTP       | Axios (ready for API integration) |

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Folder Structure

```
src/
├── components/     # Reusable UI (Navbar, TrailCard, MapView)
├── data/           # Static trail fixtures (swap for API later)
├── hooks/          # Custom hooks (useTrails)
├── pages/          # Route-level views (Home, Trails, TrailDetail, About)
├── services/       # API / data-fetching logic
├── types/          # Shared TypeScript interfaces (Trail, Waypoint)
├── utils/          # Helper functions (format distance, elevation, duration)
├── App.tsx         # Root layout (Navbar + Outlet + Footer)
├── router.tsx      # createBrowserRouter configuration
└── main.tsx        # Entry point
```

## Routes

| Path            | Page                   |
|-----------------|------------------------|
| `/`             | Home (hero + features) |
| `/trails`       | Trail listing          |
| `/trails/:slug` | Trail detail + map     |
| `/about`        | About page             |

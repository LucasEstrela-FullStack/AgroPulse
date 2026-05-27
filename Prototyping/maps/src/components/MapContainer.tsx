// # src/components/MapContainer.tsx Exemple for aplication
'use client'

import Map from 'react-map-gl';

export default function MapContainer() {
  return (
    <div className="w-full h-screen rounded-2xl overflow-hidden">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -56.0979,
          latitude: -15.6014,
          zoom: 4
        }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      />
    </div>
  )
}
'use client';

import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import('@/components/leaflet/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export const Map: React.FC<{ position: [number, number] }> = ({ position }) => <LazyMap position={position} />;

export default Map;

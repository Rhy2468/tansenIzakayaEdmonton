// googleMapsAPI.tsx
"use client"; // This directive marks the component as a Client Component

import { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB6S3hISqhVGCkw3Uq1fbbWHm2JR-1cehI`;
        document.head.appendChild(script);
        script.onload = () => initMap();
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: {lat: 53.51826429237438, lng: -113.51737713892895}, // Coordinates for Edmonton
          zoom: 15,
        });

        // Create a marker and set its position
        const marker = new google.maps.Marker({
          position: {lat: 53.51826429237438, lng: -113.51737713892895},
          map: map,
          title: "Tansen Izakaya",
        });
      }
    };

    loadGoogleMaps();
  }, []);

  return <div ref={mapRef} className="map" />;
};

export default GoogleMap;


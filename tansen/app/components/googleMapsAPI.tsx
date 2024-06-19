"use client"; // This directive marks the component as a Client Component
import { useEffect, useRef } from 'react';

//Icon
import tansenLogo from '../assets/tansenLogo.png';


const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
        document.head.appendChild(script);
        script.onload = () => initMap();
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: {lat: 53.51841880329726, lng: -113.51734477739068}, // Coordinates for Edmonton
          zoom: 13,
          zoomControl: false
        });
        
        const image = tansenLogo
        // Create a marker and set its position
        const marker = new google.maps.Marker({
          position: {lat: 53.51841880329726, lng: -113.51734477739068},
          map: map,
        });
      }
    };

    loadGoogleMaps();
  }, []);

  return <div ref={mapRef} className="map" />;
};

export default GoogleMap;


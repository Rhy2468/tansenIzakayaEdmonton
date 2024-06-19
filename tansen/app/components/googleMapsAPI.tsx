"use client"; // This directive marks the component as a Client Component
import { useEffect, useRef } from 'react';

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

        const infoWindow = new google.maps.InfoWindow({
          content: '<div>' +
                      "<h1 class='aria-label-name'> Tansen Izakaya Edmonton</h1>"  +
                      "<h1 class='aria-label'> 11044 82 Ave NW, Edmonton, AB T6G 0T2</h1>"  +
                      '<h1>Opening Hours\n Sun-Thur: 11:30am - 10:00pm\n Fri-Sat: 11:30am - 12:00am</h1>' +
                      "</div>"
        });

        // Create a marker and set its position
        const marker = new google.maps.Marker({
          position: {lat: 53.51841880329726, lng: -113.51734477739068},
          animation: google.maps.Animation.DROP,
          map: map,
          title: '11044 82 Ave NW, Edmonton, AB T6G 0T2'
        });

        marker.setIcon({
          url:"/tansenLogo.ico",
          scaledSize: new google.maps.Size(75, 75)
        });
        
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.open(marker.getMap(), marker);
        });
        
        marker.setAnimation(google.maps.Animation.BOUNCE)
        
      }
    };

    loadGoogleMaps();
  }, []);

  return <div ref={mapRef} className="map" />;
};

export default GoogleMap;


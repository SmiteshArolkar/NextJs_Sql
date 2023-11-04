import React, { useEffect } from 'react';
import { createClient } from '@google/maps';

const Map = ({ apiKey, latitude, longitude }) => {
  useEffect(() => {
    // Initialize the Google Maps client
    const googleMapsClient = createClient({ key: apiKey });

    // Load the Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Create a map instance
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 12,
      });

      // Create a marker
      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
      });
    };

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, [apiKey, latitude, longitude]);

  return (
    <div id="map" className="w-full  h-96 rounded-md">
      {/* Google Maps will be rendered here */}
    </div>
  );
};

export default Map;

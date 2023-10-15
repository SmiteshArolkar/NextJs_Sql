import React, { useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Icon } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

const OpenLayersMap = ({ latitude, longitude }) => {
  useEffect(() => {
    // Create a map with a default view centered at the given latitude and longitude
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([longitude, latitude]),
        zoom: 13, // Adjust the initial zoom level as needed
      }),
    });

    // Create a marker feature
    const marker = new Feature({
      geometry: new Point(fromLonLat([longitude, latitude])),
    });

    // Define a style for the marker
    marker.setStyle(
      new Style({
        image: new Icon({
          src: '/marker.png',
          scale: 0.007, // Adjust the scale as needed
        }),
      })
    );

    // Create a vector layer to display the marker
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    map.addLayer(vectorLayer);

    // Create a popup overlay for the marker
    const popup = new Overlay({
      element: document.getElementById('popup'),
      positioning: 'bottom-center',
      offset: [0, -30], // Adjust the offset to position the popup above the marker
    });
    map.addOverlay(popup);

    // Add a click event to the marker to display the popup
    map.on('click', (event) => {
      const feature = map.forEachFeatureAtPixel(event.pixel, (feature) => feature);
      if (feature === marker) {
        const coordinate = feature.getGeometry().getCoordinates();
        popup.setPosition(coordinate);

        // Create a link to an external map service (Google Maps in this example)
        const mapLink = document.createElement('a');
        mapLink.href = `https://www.google.com/maps?q=${latitude},${longitude}`;
        mapLink.target = '_blank';
        mapLink.textContent = 'Open in Google Maps';

        // Clear any previous content and append the link to the popup
        const popupContent = document.getElementById('popup-content');
        popupContent.innerHTML = '';
        popupContent.appendChild(mapLink);
      }
    });

    return () => {
      // Cleanup when the component is unmounted
      map.setTarget(null);
    };
  }, [latitude, longitude]);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
      <div id="popup" className="ol-popup">
        <div id="popup-content"></div>
      </div>
    </div>
  );
};

export default OpenLayersMap;

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const defaultCoordinates = [40.7128, -74.0059]; // New York City coordinates
const defaultZoomLevel = 13;

const Map = ({ selectedLocation }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      console.error("Map container is not available");
      return;
    }

    // Initialize the map only once
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView(defaultCoordinates, defaultZoomLevel);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstanceRef.current);
    }

    // Update map center and marker
    const newLat = selectedLocation?.latitude || defaultCoordinates[0];
    const newLng = selectedLocation?.longitude || defaultCoordinates[1];
    mapInstanceRef.current.setView([newLat, newLng], defaultZoomLevel);

    if (markerRef.current) {
      markerRef.current.setLatLng([newLat, newLng]);
    } else {
      markerRef.current = L.marker([newLat, newLng]).addTo(mapInstanceRef.current);
    }

    if (selectedLocation?.name) {
      markerRef.current.bindPopup(`<p>${selectedLocation.name}</p>`).openPopup();
    }
  }, [selectedLocation]); // Dependency on selectedLocation

  return <div ref={mapRef} id="map" style={{ width: '100%', height: '600px'}} aria-label="Map displaying selected location" />;
};

export default Map;
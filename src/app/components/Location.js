'use client'
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Location = ({ address }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        // Function to perform geocoding
        const fetchCoordinates = async () => {
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
            const response = await fetch(url);
            const data = await response.json();
            if (data[0]) {
                return [data[0].lat, data[0].lon];
            } else {
                return null;
            }
        };

        const initMap = async () => {
            const coordinates = await fetchCoordinates();
            if (coordinates) {
                if (!mapRef.current) {
                    mapRef.current = L.map('map').setView(coordinates, 15);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                        maxZoom: 18,
                    }).addTo(mapRef.current);
                } else {
                    mapRef.current.setView(coordinates, 15);
                }
                // Create a custom icon
                const customIcon = L.icon({
                    iconUrl: '/pin.svg',
                    iconSize: [30, 30], // Size of the icon
                    iconAnchor: [15, 30], // Point of the icon which will correspond to marker's location
                    popupAnchor: [0, -30] // Point from which the popup should open relative to the iconAnchor
                });

                L.marker(coordinates, { icon: customIcon }).addTo(mapRef.current);
            }
        };

        initMap();

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [address]);

    const redirectToGoogleMaps = () => {
        const formattedAddress = encodeURIComponent(address);
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${formattedAddress}`;
        if (window)
            window.open(googleMapsUrl, '_blank');
    };

    return (
        <div className="flex flex-col">
            <div id="map" className="w-full md:h-80 h-44 bg-background-flat kf-border-dark-hard mb-4"></div>
            <div>
                <button className="noStyle gap-4 items-center inline-flex hover:scale-105" onClick={redirectToGoogleMaps}>
                    <h3 className="text-text-flat-inverted">Veibeskrivelse</h3>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse opacity="0.2" cx="18.0011" cy="18.0037" rx="18.0002" ry="18.0008" transform="rotate(-90 18.0011 18.0037)" fill="#FFFBF8" />
                        <path d="M11.9996 18H23.9996" stroke="#FFFBF8" strokeWidth="2.57143" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.0007 12.0039L24.0007 18.0039L18.0007 24.0039" stroke="#FFFBF8" strokeWidth="2.57143" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Location;
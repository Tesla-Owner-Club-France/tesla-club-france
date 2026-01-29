"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Partner } from "@/types";

// Fix for default marker icons in Leaflet with webpack
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom Tesla red marker
const teslaIcon = L.divIcon({
  html: `
    <div style="
      width: 32px;
      height: 32px;
      background: #E82127;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <span style="
        transform: rotate(45deg);
        color: white;
        font-weight: bold;
        font-size: 14px;
      ">T</span>
    </div>
  `,
  className: "tesla-marker",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface MapClientProps {
  partners: Partner[];
  onPartnerSelect: (partner: Partner) => void;
  selectedPartnerId?: string | null;
}

export function MapClient({ partners, onPartnerSelect, selectedPartnerId }: MapClientProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Create map centered on France
    const map = L.map(containerRef.current, {
      center: [46.603354, 1.888334], // Center of France
      zoom: 6,
      scrollWheelZoom: true,
      zoomControl: true,
    });

    // Add tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    // Cleanup
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update markers when partners change
  useEffect(() => {
    if (!mapRef.current) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Add new markers
    partners.forEach((partner) => {
      const marker = L.marker([partner.latitude, partner.longitude], {
        icon: teslaIcon,
        title: partner.name,
      });

      marker.on("click", () => {
        onPartnerSelect(partner);
      });

      marker.addTo(mapRef.current!);
      markersRef.current.push(marker);
    });

    // Fit bounds if we have partners
    if (partners.length > 0) {
      const bounds = L.latLngBounds(
        partners.map((p) => [p.latitude, p.longitude] as [number, number])
      );
      mapRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
    }
  }, [partners, onPartnerSelect]);

  // Highlight selected marker
  useEffect(() => {
    if (!mapRef.current || !selectedPartnerId) return;

    const partner = partners.find((p) => p.id === selectedPartnerId);
    if (partner) {
      mapRef.current.setView([partner.latitude, partner.longitude], 12, {
        animate: true,
      });
    }
  }, [selectedPartnerId, partners]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ minHeight: "400px" }}
    />
  );
}

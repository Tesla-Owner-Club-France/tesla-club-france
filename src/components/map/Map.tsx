"use client";

import dynamic from "next/dynamic";
import type { Partner } from "@/types";

// Loading skeleton for the map
function MapSkeleton() {
  return (
    <div className="w-full h-full bg-surface animate-pulse flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-border flex items-center justify-center">
          <svg
            className="w-8 h-8 text-text-muted animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
        <p className="text-text-muted">Chargement de la carte...</p>
      </div>
    </div>
  );
}

// Dynamic import of the map client component (no SSR)
const MapClient = dynamic(
  () => import("./MapClient").then((mod) => mod.MapClient),
  {
    ssr: false,
    loading: () => <MapSkeleton />,
  }
);

interface MapProps {
  partners: Partner[];
  onPartnerSelect: (partner: Partner) => void;
  selectedPartnerId?: string | null;
}

export function Map({ partners, onPartnerSelect, selectedPartnerId }: MapProps) {
  return (
    <MapClient
      partners={partners}
      onPartnerSelect={onPartnerSelect}
      selectedPartnerId={selectedPartnerId}
    />
  );
}

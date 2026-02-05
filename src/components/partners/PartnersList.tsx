"use client";

import { PartnerCard } from "./PartnerCard";
import type { Partner } from "@/types";

interface PartnersListProps {
  partners: Partner[];
  selectedPartnerId?: string | null;
  onPartnerSelect: (partner: Partner) => void;
}

export function PartnersList({ partners, selectedPartnerId, onPartnerSelect }: PartnersListProps) {
  if (partners.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-border p-8 text-center">
        <div className="text-4xl mb-4">🔍</div>
        <h4 className="font-semibold text-text-primary mb-2">Aucun partenaire trouvé</h4>
        <p className="text-sm text-text-muted">
          Essayez de modifier vos filtres pour voir plus de résultats.
        </p>
      </div>
    );
  }
  console.log(partners);

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <div className="p-3 border-b border-border bg-surface">
        <h3 className="text-sm font-medium text-text-secondary">
          {partners.length} partenaire{partners.length > 1 ? "s" : ""}
        </h3>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        <div className="p-2 space-y-2">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              isSelected={partner.id === selectedPartnerId}
              onClick={() => onPartnerSelect(partner)}
              compact
            />
          ))}
        </div>
      </div>
    </div>
  );
}

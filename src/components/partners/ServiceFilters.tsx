"use client";

import { cn } from "@/lib/utils";
import { SERVICES, type ServiceType } from "@/types";

interface ServiceFiltersProps {
  selectedServices: ServiceType[];
  onServiceToggle: (service: ServiceType) => void;
  onClearAll: () => void;
  partnersCount: number;
  totalCount: number;
}

export function ServiceFilters({
  selectedServices,
  onServiceToggle,
  onClearAll,
  partnersCount,
  totalCount,
}: ServiceFiltersProps) {
  const hasFilters = selectedServices.length > 0;

  return (
    <div className="bg-white rounded-xl border border-border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-text-primary">Filtrer par service</h3>
        {hasFilters && (
          <button
            onClick={onClearAll}
            className="text-sm text-primary hover:underline"
          >
            Réinitialiser
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {SERVICES.map((service) => {
          const isSelected = selectedServices.includes(service.code);
          return (
            <button
              key={service.code}
              onClick={() => onServiceToggle(service.code)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                isSelected
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface text-text-secondary hover:bg-border hover:text-text-primary"
              )}
            >
              <span>{service.icon}</span>
              <span>{service.label}</span>
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-sm text-text-muted">
          {hasFilters ? (
            <>
              <span className="font-semibold text-primary">{partnersCount}</span>
              {" "}partenaire{partnersCount > 1 ? "s" : ""} sur {totalCount}
            </>
          ) : (
            <>
              <span className="font-semibold text-text-primary">{totalCount}</span>
              {" "}partenaire{totalCount > 1 ? "s" : ""}
            </>
          )}
        </p>
      </div>
    </div>
  );
}

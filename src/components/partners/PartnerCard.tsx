"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui";
import { SERVICES, type Partner } from "@/types";

interface PartnerCardProps {
  partner: Partner;
  isSelected?: boolean;
  onClick?: () => void;
  compact?: boolean;
}

export function PartnerCard({ partner, isSelected, onClick, compact = false }: PartnerCardProps) {
  const serviceLabels = partner.services
    .map((code) => SERVICES.find((s) => s.code === code))
    .filter(Boolean);

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left bg-white rounded-xl border transition-all duration-200",
        compact ? "p-3" : "p-4",
        isSelected
          ? "border-primary shadow-md ring-2 ring-primary/20"
          : "border-border hover:border-primary/50 hover:shadow-sm"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Logo placeholder */}
        <div
          className={cn(
            "flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center",
            compact ? "w-10 h-10" : "w-12 h-12"
          )}
        >
          <span className={cn("font-bold text-primary", compact ? "text-lg" : "text-xl")}>
            {partner.name.charAt(0)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className={cn("font-semibold text-text-primary truncate", compact ? "text-sm" : "text-base")}>
            {partner.name}
          </h4>
          <p className={cn("text-text-muted truncate", compact ? "text-xs" : "text-sm")}>
            {partner.city} ({partner.postalCode.slice(0, 2)})
          </p>
        </div>
      </div>

      {/* Services */}
      {!compact && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {serviceLabels.slice(0, 3).map((service) => (
            <Badge key={service!.code} variant="secondary" className="text-xs">
              {service!.icon} {service!.label}
            </Badge>
          ))}
          {serviceLabels.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{serviceLabels.length - 3}
            </Badge>
          )}
        </div>
      )}
    </button>
  );
}

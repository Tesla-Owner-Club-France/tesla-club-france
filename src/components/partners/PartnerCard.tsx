"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui";
import { getCategoryMeta, type Partner } from "@/types";

interface PartnerCardProps {
  partner: Partner;
  isSelected?: boolean;
  onClick?: () => void;
  compact?: boolean;
}

export function PartnerCard({ partner, isSelected, onClick, compact = false }: PartnerCardProps) {
  const categoryMeta = getCategoryMeta(partner.category);
  const hasBenefits = Boolean(partner.membersBenefits);

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left bg-white rounded-xl border transition-all duration-200 relative",
        compact ? "p-3" : "p-4",
        isSelected
          ? "border-primary shadow-md ring-2 ring-primary/20"
          : "border-border hover:border-primary/50 hover:shadow-sm",
        // Bordure verte subtile si avantage membre
        hasBenefits && !isSelected && "border-l-4 border-l-green-400"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Logo placeholder */}
        <div
          className={cn(
            "flex-shrink-0 rounded-lg flex items-center justify-center relative",
            compact ? "w-10 h-10" : "w-12 h-12",
            hasBenefits ? "bg-green-100" : "bg-primary/10"
          )}
        >
          <span className={cn("font-bold", compact ? "text-lg" : "text-xl", hasBenefits ? "text-green-600" : "text-primary")}>
            {partner.name.charAt(0)}
          </span>
          {/* Indicateur avantage en mode compact */}
          {compact && hasBenefits && (
            <span className="absolute -top-1 -right-1 text-xs">🎁</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className={cn("font-semibold text-text-primary truncate", compact ? "text-sm" : "text-base")}>
            {partner.name}
          </h4>
          <p className={cn("text-text-muted truncate", compact ? "text-xs" : "text-sm")}>
            {partner.city ? `${partner.city}${partner.postalCode ? ` (${partner.postalCode.slice(0, 2)})` : ""}` : partner.country || "France"}
          </p>
        </div>
      </div>

      {/* Category & Benefits - Mode normal */}
      {!compact && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {categoryMeta && (
            <Badge variant="secondary" className="text-xs">
              {categoryMeta.icon} {categoryMeta.label}
            </Badge>
          )}
          {hasBenefits && (
            <Badge variant="outline" className="text-xs text-green-600 border-green-200 bg-green-50">
              🎁 Avantage membre
            </Badge>
          )}
        </div>
      )}
    </button>
  );
}

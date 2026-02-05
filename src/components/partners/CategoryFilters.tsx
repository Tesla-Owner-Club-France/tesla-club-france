"use client";

import { cn } from "@/lib/utils";
import { CATEGORIES, type CategoryType } from "@/types";
import type { CategoryMeta } from "@/types";

interface CategoryFiltersProps {
  selectedCategories: CategoryType[];
  onCategoryToggle: (category: CategoryType) => void;
  onClearAll: () => void;
  partnersCount: number;
  totalCount: number;
  /** Catégories actives (qui ont au moins un partenaire) */
  activeCategories?: CategoryType[];
  /** Filtre avantages adhérents */
  showOnlyWithBenefits?: boolean;
  onToggleBenefitsFilter?: () => void;
  benefitsCount?: number;
}

export function CategoryFilters({
  selectedCategories,
  onCategoryToggle,
  onClearAll,
  partnersCount,
  totalCount,
  activeCategories,
  showOnlyWithBenefits = false,
  onToggleBenefitsFilter,
  benefitsCount = 0,
}: CategoryFiltersProps) {
  const hasFilters = selectedCategories.length > 0 || showOnlyWithBenefits;

  // Filtre pour n'afficher que les catégories actives si fourni
  const categoriesToShow: CategoryMeta[] = activeCategories
    ? CATEGORIES.filter((c) => activeCategories.includes(c.code))
    : CATEGORIES;

  return (
    <div className="bg-white rounded-xl border border-border p-4">
      {/* Filtre avantages adhérents */}
      {onToggleBenefitsFilter && (
        <div className="mb-4 pb-4 border-b border-border">
          <button
            onClick={onToggleBenefitsFilter}
            className={cn(
              "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
              showOnlyWithBenefits
                ? "bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 shadow-sm"
                : "bg-surface hover:bg-border border-2 border-transparent"
            )}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🎁</span>
              <span className={cn(
                "font-medium",
                showOnlyWithBenefits ? "text-green-700" : "text-text-secondary"
              )}>
                Avantages adhérents
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full",
                showOnlyWithBenefits 
                  ? "bg-green-200 text-green-800" 
                  : "bg-border text-text-muted"
              )}>
                {benefitsCount}
              </span>
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                showOnlyWithBenefits 
                  ? "border-green-500 bg-green-500" 
                  : "border-border"
              )}>
                {showOnlyWithBenefits && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          </button>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-text-primary">Filtrer par catégorie</h3>
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
        {categoriesToShow.map((category) => {
          const isSelected = selectedCategories.includes(category.code);
          return (
            <button
              key={category.code}
              onClick={() => onCategoryToggle(category.code)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                isSelected
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface text-text-secondary hover:bg-border hover:text-text-primary"
              )}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
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

"use client";

import { useState, useMemo, useCallback } from "react";
import { Container, Drawer } from "@/components/ui";
import { Map } from "@/components/map";
import { CategoryFilters, PartnersList, PartnerDetail } from "@/components/partners";
import { getPartners, getActiveCategories } from "@/lib/data/partners";
import type { Partner, CategoryType } from "@/types";
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  // State
  const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>([]);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [showOnlyWithBenefits, setShowOnlyWithBenefits] = useState(false);

  // Get all partners and active categories
  const allPartners = useMemo(() => getPartners(), []);
  const activeCategories = useMemo(() => getActiveCategories(), []);
  
  // Count partners with benefits
  const partnersWithBenefitsCount = useMemo(() => 
    allPartners.filter((p) => p.membersBenefits).length,
    [allPartners]
  );

  // Filter partners based on selected categories and benefits filter
  const filteredPartners = useMemo(() => {
    let result = allPartners;
    
    // Filter by benefits
    if (showOnlyWithBenefits) {
      result = result.filter((partner) => partner.membersBenefits);
    }
    
    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter((partner) =>
        selectedCategories.includes(partner.category)
      );
    }
    
    return result;
  }, [allPartners, selectedCategories, showOnlyWithBenefits]);

  // Handlers
  const handleCategoryToggle = useCallback((category: CategoryType) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  }, []);

  const handleClearFilters = useCallback(() => {
    setSelectedCategories([]);
    setShowOnlyWithBenefits(false);
  }, []);

  const handleToggleBenefitsFilter = useCallback(() => {
    setShowOnlyWithBenefits((prev) => !prev);
  }, []);

  const handlePartnerSelect = useCallback((partner: Partner) => {
    setSelectedPartner(partner);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedPartner(null);
  }, []);

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-surface">
      <Container className="py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
            Nos Partenaires
          </h1>
          <p className="text-text-secondary text-lg">
            Trouvez un professionnel partenaire du club près de chez vous
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-6">
          {/* Sidebar */}
          <div className="space-y-4 order-2 lg:order-1">
            {/* Filters */}
            <CategoryFilters
              selectedCategories={selectedCategories}
              onCategoryToggle={handleCategoryToggle}
              onClearAll={handleClearFilters}
              partnersCount={filteredPartners.length}
              totalCount={allPartners.length}
              activeCategories={activeCategories}
              showOnlyWithBenefits={showOnlyWithBenefits}
              onToggleBenefitsFilter={handleToggleBenefitsFilter}
              benefitsCount={partnersWithBenefitsCount}
            />

            {/* Partners List - Desktop */}
            <div className="hidden lg:block">
              <PartnersList
                partners={filteredPartners}
                selectedPartnerId={selectedPartner?.id}
                onPartnerSelect={handlePartnerSelect}
              />
            </div>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2">
            <div
              className="bg-white rounded-xl border border-border overflow-hidden"
              style={{ height: "calc(100vh - 12rem)" }}
            >
              <Map
                partners={filteredPartners}
                onPartnerSelect={handlePartnerSelect}
                selectedPartnerId={selectedPartner?.id}
              />
            </div>
          </div>
        </div>

        {/* Mobile Partners List */}
        <div className="lg:hidden mt-6">
          <PartnersList
            partners={filteredPartners}
            selectedPartnerId={selectedPartner?.id}
            onPartnerSelect={handlePartnerSelect}
          />
        </div>
      </Container>

      {/* Drawer pour afficher les détails du partenaire */}
      <Drawer
        isOpen={selectedPartner !== null}
        onClose={handleCloseDetail}
        title={selectedPartner?.name || "Détails du partenaire"}
        position="left"
        width="420px"
      >
        {selectedPartner && (
          <PartnerDetail
            partner={selectedPartner}
            hideHeader
          />
        )}
      </Drawer>

      <Analytics />
    </div>
  );
}

"use client";

import { useState, useMemo, useCallback } from "react";
import { Container } from "@/components/ui";
import { Map } from "@/components/map";
import { ServiceFilters, PartnersList, PartnerDetail } from "@/components/partners";
import { getActivePartners } from "@/lib/data/partners-mock";
import type { Partner, ServiceType } from "@/types";

export default function HomePage() {
  // State
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  // Get all partners
  const allPartners = useMemo(() => getActivePartners(), []);

  // Filter partners based on selected services
  const filteredPartners = useMemo(() => {
    if (selectedServices.length === 0) return allPartners;
    
    return allPartners.filter((partner) =>
      // OR logic: partner has at least one of the selected services
      partner.services.some((service) => selectedServices.includes(service))
    );
  }, [allPartners, selectedServices]);

  // Handlers
  const handleServiceToggle = useCallback((service: ServiceType) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  }, []);

  const handleClearFilters = useCallback(() => {
    setSelectedServices([]);
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
            Trouvez un professionnel certifié près de chez vous
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-6">
          {/* Sidebar */}
          <div className="space-y-4 order-2 lg:order-1">
            {/* Filters */}
            <ServiceFilters
              selectedServices={selectedServices}
              onServiceToggle={handleServiceToggle}
              onClearAll={handleClearFilters}
              partnersCount={filteredPartners.length}
              totalCount={allPartners.length}
            />

            {/* Partners List - Desktop */}
            <div className="hidden lg:block">
              <PartnersList
                partners={filteredPartners}
                selectedPartnerId={selectedPartner?.id}
                onPartnerSelect={handlePartnerSelect}
              />
            </div>

            {/* Partner Detail */}
            {selectedPartner && (
              <div className="hidden lg:block">
                <PartnerDetail
                  partner={selectedPartner}
                  onClose={handleCloseDetail}
                />
              </div>
            )}
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

        {/* Mobile Partner Detail (Bottom Sheet) */}
        {selectedPartner && (
          <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 animate-slide-up">
            <div className="bg-white rounded-t-2xl shadow-xl border-t border-border max-h-[70vh] overflow-y-auto">
              {/* Handle */}
              <div className="sticky top-0 bg-white pt-3 pb-2">
                <div className="w-12 h-1.5 bg-border rounded-full mx-auto" />
              </div>
              <div className="px-4 pb-6">
                <PartnerDetail
                  partner={selectedPartner}
                  onClose={handleCloseDetail}
                />
              </div>
            </div>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/30 -z-10"
              onClick={handleCloseDetail}
            />
          </div>
        )}

        {/* Mobile Partners List */}
        <div className="lg:hidden mt-6">
          <PartnersList
            partners={filteredPartners}
            selectedPartnerId={selectedPartner?.id}
            onPartnerSelect={handlePartnerSelect}
          />
        </div>
      </Container>
    </div>
  );
}

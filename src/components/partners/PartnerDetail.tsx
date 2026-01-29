"use client";

import { Badge } from "@/components/ui";
import { SERVICES, type Partner } from "@/types";

interface PartnerDetailProps {
  partner: Partner;
  onClose: () => void;
}

export function PartnerDetail({ partner, onClose }: PartnerDetailProps) {
  const serviceLabels = partner.services
    .map((code) => SERVICES.find((s) => s.code === code))
    .filter(Boolean);

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-bold text-text-primary">Détail du partenaire</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-surface transition-colors"
          aria-label="Fermer"
        >
          <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Logo & Name */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="font-bold text-primary text-2xl">
              {partner.name.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="text-lg font-bold text-text-primary">{partner.name}</h4>
            <p className="text-sm text-text-muted">
              {partner.city} ({partner.postalCode})
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-4">
          <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
            Services
          </p>
          <div className="flex flex-wrap gap-1.5">
            {serviceLabels.map((service) => (
              <Badge key={service!.code} variant="secondary">
                {service!.icon} {service!.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        {partner.description && (
          <div className="mb-4">
            <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
              Description
            </p>
            <p className="text-sm text-text-secondary">{partner.description}</p>
          </div>
        )}

        {/* Address */}
        <div className="mb-4">
          <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
            Adresse
          </p>
          <p className="text-sm text-text-secondary">
            {partner.address}
            <br />
            {partner.postalCode} {partner.city}
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          {partner.phone && (
            <a
              href={`tel:${partner.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 p-3 bg-surface rounded-lg hover:bg-border transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-muted">Téléphone</p>
                <p className="text-sm font-medium text-text-primary">{partner.phone}</p>
              </div>
            </a>
          )}

          {partner.email && (
            <a
              href={`mailto:${partner.email}`}
              className="flex items-center gap-3 p-3 bg-surface rounded-lg hover:bg-border transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-muted">Email</p>
                <p className="text-sm font-medium text-text-primary">{partner.email}</p>
              </div>
            </a>
          )}

          {partner.website && (
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-surface rounded-lg hover:bg-border transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-text-muted">Site web</p>
                <p className="text-sm font-medium text-primary truncate">{partner.website.replace(/^https?:\/\//, "")}</p>
              </div>
              <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";
import { SITE_CONFIG } from "@/types";
import {Logo} from "@/components/layout/Logo";

// Base URL du site principal
const MAIN_SITE_URL = "club-tesla.fr";
const MAIN_SITE_URL_WITH_PROTOCOLE=`https://www.${MAIN_SITE_URL}`

const navigation = [
  { name: "Accueil", href: `https://www.${MAIN_SITE_URL}/site/`, external: true },
  { name: "Le Club", href: `https://www.${MAIN_SITE_URL}/site/Le_Club-54`, external: true },
  { name: "Partenaires", href: "/" },
  { name: "Événements", href: `https://events.${MAIN_SITE_URL}/events`, external: true },
  { name: "Actualités", href: `https://www.${MAIN_SITE_URL}/site/Actualites-70`, external: true },
  { name: "Forum", href: `https://community.${MAIN_SITE_URL}/`, external: true },
  { name: "Contact", href: `https://www.${MAIN_SITE_URL}/site/Contact-69`, external: true },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - pointe vers le site principal */}
          <a href={MAIN_SITE_URL_WITH_PROTOCOLE} className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
              <Logo />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-text-primary text-sm lg:text-base leading-tight">
                Tesla Owners Club
              </p>
              <p className="text-text-muted text-xs lg:text-sm">France</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = !item.external && pathname === item.href;
              return item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
                >
                  {item.name}
                  <svg
                    className="w-3 h-3 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href={SITE_CONFIG.links.membership}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Devenir membre
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => {
                const isActive = !item.external && pathname === item.href;
                return item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface rounded-lg transition-colors flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <svg
                      className="w-4 h-4 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-border">
                <a
                  href={SITE_CONFIG.links.membership}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 text-center text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Devenir membre
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

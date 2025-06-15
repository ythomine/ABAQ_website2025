"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Cabinet ABAQ Logo" 
              className="h-10 w-auto max-w-[200px] object-contain"
              style={{ maxHeight: '40px' }}
              onError={(e) => {
                console.error('Logo failed to load from /logo.png');
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div 
              className="bg-primary-yellow text-secondary-dark font-bold text-xl px-3 py-1 rounded hidden"
              style={{ display: 'none' }}
            >
              CA
            </div>
            <span className="text-xl font-semibold text-secondary-dark">
              Cabinet ABAQ
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-secondary-gray hover:text-primary-yellow transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="text-secondary-gray hover:text-primary-yellow transition-colors">
              Services
            </Link>
            <Link href="/certifications" className="text-secondary-gray hover:text-primary-yellow transition-colors">
              Certifications
            </Link>
            <Link href="/realisations" className="text-secondary-gray hover:text-primary-yellow transition-colors">
              Réalisations
            </Link>
            <Link href="/actualites" className="text-secondary-gray hover:text-primary-yellow transition-colors">
              Actualités
            </Link>
            <Link href="/a-propos" className="text-secondary-gray hover:text-primary-yellow transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-secondary-gray hover:text-primary-yellow transition-colors">
              Contact
            </Link>
          </div>

          <button
            className="md:hidden text-secondary-gray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block py-2 text-secondary-gray hover:text-primary-yellow transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="block py-2 text-secondary-gray hover:text-primary-yellow transition-colors">
              Services
            </Link>
            <Link href="/certifications" className="block py-2 text-secondary-gray hover:text-primary-yellow transition-colors">
              Certifications
            </Link>
            <Link href="/realisations" className="block py-2 text-secondary-gray hover:text-primary-yellow transition-colors">
              Réalisations
            </Link>
            <Link href="/actualites" className="block py-2 text-secondary-gray hover:text-primary-yellow transition-colors">
              Actualités
            </Link>
            <Link href="/a-propos" className="block py-2 text-secondary-gray hover:text-primary-yellow transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="block py-2 text-secondary-gray hover:text-primary-yellow transition-colors">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
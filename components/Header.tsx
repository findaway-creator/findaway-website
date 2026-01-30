'use client';

import { useState, useEffect, startTransition } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { colors } from '@/lib/colors';
import { navLinks } from '@/lib/navigation';

interface HeaderProps {
  /** When true, background is transparent until scrolled (for homepage hero) */
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      startTransition(() => {
        setScrolled(window.scrollY > 50);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2.5 shadow-lg' : 'py-4'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(253, 248, 243, 0.95)' : (transparent ? 'transparent' : colors.cream),
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img src="/logos/logo.svg" alt="Find A Way" className="h-8 transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link font-body text-sm font-medium transition-colors leading-none"
              style={{ color: colors.navy }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full font-body text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-md"
            style={{ backgroundColor: `${colors.navy}dd` }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: colors.navy, position: 'relative', top: '-1px' }}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 p-6 shadow-xl"
          style={{ backgroundColor: colors.warmWhite }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-lg font-medium py-2"
                style={{ color: colors.navy }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn-primary px-5 py-3 rounded-full font-body text-center font-medium text-white mt-2"
              style={{ backgroundColor: colors.navy }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

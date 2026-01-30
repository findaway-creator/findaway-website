'use client';

import { useState, useEffect, useMemo, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, List, X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { colors } from '@/lib/colors';

// Hoisted regex patterns (js-hoist-regexp)
const SLUG_REPLACE_PATTERN = /[^a-z0-9]+/g;
const SLUG_TRIM_PATTERN = /(^-|-$)/g;

/** Generates a URL-safe ID from a title string */
function generateId(title: string): string {
  return title
    .toLowerCase()
    .replace(SLUG_REPLACE_PATTERN, '-')
    .replace(SLUG_TRIM_PATTERN, '');
}

interface InnerPageLayoutProps {
  /** Page title (required) */
  title: string;
  /** Page subtitle (optional) */
  subtitle?: string;
  /** Back link destination */
  backHref?: string;
  /** Back link text */
  backLabel?: string;
  /** Array of section titles for table of contents */
  toc?: string[];
  /** Page content using Section components */
  children: ReactNode;
}

export default function InnerPageLayout({
  title,
  subtitle,
  backHref = '/',
  backLabel = 'Back to Home',
  toc = [],
  children,
}: InnerPageLayoutProps) {
  const [activeSection, setActiveSection] = useState('');
  const [tocOpen, setTocOpen] = useState(false);

  // Memoize sections to prevent useEffect re-runs (rerender-dependencies)
  const sections = useMemo(
    () => toc.map((sectionTitle) => ({
      id: generateId(sectionTitle),
      title: sectionTitle,
    })),
    [toc]
  );

  // Track active section with IntersectionObserver
  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Memoize scroll handler (rerender-functional-setstate)
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTocOpen(false);
    }
  }, []);

  const hasTOC = sections.length > 1;

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: colors.cream }}>
      <Header />

      {/* Page Header - Full width on cream background */}
      <header className="pt-40 pb-10 px-6 relative overflow-hidden">
        {/* Subtle decorative element */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] -translate-y-1/2 translate-x-1/3"
          style={{ backgroundColor: colors.sage }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.02] translate-y-1/2 -translate-x-1/3"
          style={{ backgroundColor: colors.coral }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto relative">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 mb-6 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: colors.coral }}
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>

          <h1
            className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
            style={{ color: colors.navy }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-lg md:text-xl max-w-2xl"
              style={{ color: `${colors.navy}80` }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">
            {/* Content Card - Left side on desktop */}
            <main
              id="main-content"
              className="flex-1 min-w-0 rounded-2xl px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 order-2 lg:order-1"
              style={{
                backgroundColor: colors.warmWhite,
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              }}
            >
              <article className="max-w-[640px] inner-page-content">
                {children}
              </article>
            </main>

            {/* Desktop TOC - Right sidebar */}
            {hasTOC && (
              <aside className="hidden lg:block w-72 flex-shrink-0 order-2">
                <nav
                  className="sticky top-32 rounded-xl p-5"
                  style={{ backgroundColor: `${colors.warmWhite}` }}
                  aria-label="Table of contents"
                >
                  <h2
                    className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 pb-3 flex items-center gap-2"
                    style={{
                      color: `${colors.navy}60`,
                      borderBottom: `1px solid ${colors.navy}10`,
                    }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    On this page
                  </h2>
                  <ul className="space-y-1">
                    {sections.map(({ id, title: sectionTitle }) => {
                      const isActive = activeSection === id;
                      return (
                        <li key={id}>
                          <button
                            onClick={() => scrollToSection(id)}
                            className={`text-left text-[13px] leading-snug w-full py-2 px-3 rounded-lg transition-all relative ${
                              isActive ? '' : 'toc-button-hover'
                            }`}
                            style={{
                              color: isActive ? colors.sage : `${colors.navy}90`,
                              fontWeight: isActive ? 600 : 400,
                              backgroundColor: isActive ? `${colors.sage}12` : 'transparent',
                              borderLeft: isActive ? `2px solid ${colors.sage}` : '2px solid transparent',
                            }}
                          >
                            {sectionTitle}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </aside>
            )}
          </div>
        </div>
      </div>

      {/* Mobile TOC Toggle Button */}
      {hasTOC && (
        <button
          onClick={() => setTocOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-40 transition-transform hover:scale-105"
          style={{ backgroundColor: colors.navy, color: 'white' }}
          aria-label="Open table of contents"
        >
          <List className="w-5 h-5" />
        </button>
      )}

      {/* Mobile TOC Overlay */}
      {hasTOC && tocOpen && (
        <div className="lg:hidden fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setTocOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl p-6 pb-10 max-h-[70vh] overflow-auto"
            style={{ backgroundColor: colors.warmWhite }}
            aria-label="Table of contents"
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-lg font-bold"
                style={{ color: colors.navy }}
              >
                Contents
              </h2>
              <button
                onClick={() => setTocOpen(false)}
                className="p-2 -mr-2 rounded-lg hover:bg-black/5"
                aria-label="Close table of contents"
              >
                <X className="w-5 h-5" style={{ color: colors.navy }} />
              </button>
            </div>
            <ul className="space-y-1">
              {sections.map(({ id, title: sectionTitle }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-left w-full py-3 px-4 rounded-xl transition-colors hover:bg-black/[0.03]"
                    style={{ color: colors.navy }}
                  >
                    {sectionTitle}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <Footer />
    </div>
  );
}

interface SectionProps {
  /** Section heading title */
  title: string;
  children: ReactNode;
}

/** Section - Main content section with H2 heading */
export function Section({ title, children }: SectionProps) {
  const id = generateId(title);

  return (
    <section id={id} className="scroll-mt-28 mb-14 last:mb-0">
      <h2
        className="text-2xl md:text-[1.65rem] font-bold mb-5 tracking-tight"
        style={{ color: colors.navy }}
      >
        {title}
      </h2>
      <div className="section-content space-y-4">{children}</div>
    </section>
  );
}

interface SubsectionProps {
  /** Subsection heading title */
  title: string;
  children: ReactNode;
}

/** Subsection - Nested content with H3 heading (not in TOC) */
export function Subsection({ title, children }: SubsectionProps) {
  return (
    <div className="mt-8 first:mt-0">
      <h3
        className="text-lg md:text-xl font-semibold mb-3"
        style={{ color: colors.navy }}
      >
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

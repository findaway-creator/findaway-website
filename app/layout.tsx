import { ReactNode } from 'react';
import { Inter, Fraunces } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  title: {
    default: 'Find A Way CIC | Family Psychology Services in Yorkshire',
    template: '%s | Find A Way CIC',
  },
  description: 'Supporting families through early years challenges with expert psychological services. Video Interaction Guidance, consultations, and training across Yorkshire.',
  metadataBase: new URL('https://findaway.org'),
  openGraph: {
    title: 'Find A Way CIC | Family Psychology Services',
    description: 'Supporting families through early years challenges with expert psychological services.',
    url: 'https://findaway.org',
    siteName: 'Find A Way CIC',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find A Way CIC | Family Psychology Services',
    description: 'Supporting families through early years challenges with expert psychological services.',
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

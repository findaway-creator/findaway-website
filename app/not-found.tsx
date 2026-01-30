import Link from 'next/link';
import { colors } from '@/lib/colors';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.cream }}>
      <Header />

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p
            className="font-body text-8xl font-bold mb-4"
            style={{ color: `${colors.sage}30` }}
          >
            404
          </p>

          <h1
            className="font-body text-2xl font-bold mb-3"
            style={{ color: colors.navy }}
          >
            Page not found
          </h1>

          <p
            className="font-body mb-8"
            style={{ color: `${colors.navy}80` }}
          >
            Sorry, we couldn't find the page you're looking for. It might have been moved or no longer exists.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium transition-all hover:scale-105"
            style={{ backgroundColor: colors.coral, color: 'white' }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { colors } from '@/lib/colors';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="text-center max-w-md">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: `${colors.coral}15` }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke={colors.coral}
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1
          className="font-body text-2xl font-bold mb-3"
          style={{ color: colors.navy }}
        >
          Something went wrong
        </h1>

        <p
          className="font-body mb-8"
          style={{ color: `${colors.navy}80` }}
        >
          We're sorry, but something unexpected happened. Please try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full font-body font-medium transition-all hover:scale-105"
            style={{ backgroundColor: colors.coral, color: 'white' }}
          >
            Try again
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-full font-body font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: 'transparent',
              color: colors.navy,
              border: `2px solid ${colors.navy}20`,
            }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

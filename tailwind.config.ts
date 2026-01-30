import type { Config } from 'tailwindcss';
import { colors } from './lib/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: colors.cream,
        warmWhite: colors.warmWhite,
        peach: colors.peach,
        coral: colors.coral,
        sage: colors.sage,
        navy: colors.navy,
        gold: colors.gold,
        softPink: colors.softPink,
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

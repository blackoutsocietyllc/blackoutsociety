import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          light: '#0A0A0A',
          panel: '#141414',
        },
        ink: {
          DEFAULT: '#F5F5F5',
          soft: '#CFCFCF',
        },
        blood: {
          DEFAULT: '#E10600',
          dark: '#B00500',
          glow: '#FF1A0F',
        },
      },
      fontFamily: {
        display: ['var(--font-clash)', 'sans-serif'],
        body: ['var(--font-satoshi)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      clipPath: {
        angled: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(245,245,245,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(245,245,245,0.05) 1px, transparent 1px)',
      },
      boxShadow: {
        'red-glow': '0 0 40px rgba(225, 6, 0, 0.35)',
        'red-glow-lg': '0 0 80px rgba(225, 6, 0, 0.45)',
      },
      keyframes: {
        'laser-sweep': {
          '0%': { transform: 'translateX(-120%) skewX(-15deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(120%) skewX(-15deg)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'laser-sweep': 'laser-sweep 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

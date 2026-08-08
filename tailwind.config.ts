import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './config/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A192F',
          50: '#EAF0F7',
          100: '#CBD9E8',
          200: '#9FB8D1',
          300: '#6E90B3',
          400: '#3E6996',
          500: '#1E3A5F',
          600: '#152D4A',
          700: '#0F2138',
          800: '#0A192F',
          900: '#060F1D',
        },
        blue: {
          DEFAULT: '#1E3A5F',
        },
        teal: {
          DEFAULT: '#4ECDC4',
          light: '#9AE6E0',
          dark: '#2FA79E',
        },
        offwhite: '#F8F9FA',
        orange: {
          DEFAULT: '#FF6B35',
          dark: '#E5501C',
        },
        ink: {
          DEFAULT: '#101820',
          soft: '#425466',
          muted: '#6B7A8F',
        },
        border: {
          DEFAULT: '#E4E9EF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.8125rem', { lineHeight: '1.2', letterSpacing: '0.08em' }],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10, 25, 47, 0.04), 0 8px 24px rgba(10, 25, 47, 0.06)',
        card: '0 1px 3px rgba(10, 25, 47, 0.06), 0 12px 32px -8px rgba(10, 25, 47, 0.12)',
        lift: '0 20px 48px -12px rgba(10, 25, 47, 0.28)',
      },
      maxWidth: {
        content: '1200px',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'grow-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'grow-line': 'grow-line 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}

export default config

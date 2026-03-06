/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          DEFAULT: '#f97316',
          light: '#fdba74',
          dark: '#ea580c',
        },
        paper: '#f0f4ff',
        foreground: {
          DEFAULT: '#0f172a',
          muted: '#475569',
          light: '#94a3b8',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-lg': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
        'heading-md': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 6rem)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px rgba(37, 99, 235, 0.18)',
        property: '0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(37, 99, 235, 0.10)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #172554 0%, #1e3a8a 60%, #1d4ed8 100%)',
        'card-overlay': 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.85) 100%)',
        'accent-gradient': 'linear-gradient(90deg, #f97316, #ef4444)',
      },
    },
  },
  plugins: [],
}

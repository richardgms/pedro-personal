/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#33E3FF',
          500: '#00D4FF',
          600: '#00B8E0',
          700: '#009BC1',
        },
        secondary: {
          400: '#1E293B',
          500: '#0F172A',
          600: '#020617',
          700: '#000000',
        },
        accent: {
          400: '#22D3EE',
          500: '#00D4FF',
          600: '#0891B2',
          700: '#0E7490',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00D4FF 0%, #009BC1 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0F172A 0%, #020617 100%)',
        'gradient-hero': 'linear-gradient(135deg, #00D4FF 0%, #22D3EE 50%, #009BC1 100%)',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-up': {
          '0%': { 
            transform: 'translateY(100%)'
          },
          '100%': { 
            transform: 'translateY(0)'
          },
        },
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B2D5B', // Espresso Brown
        secondary: '#3E6FB5', // Brushed Gold
        accent: '#CBD5E1', // Sand Beige
        background: '#0B2D5B',
        dark: '#0B2D5B',
        espresso: {
          DEFAULT: '#0B2D5B',
          dark: '#071F40',
          medium: '#12396E',
          light: '#1A4580',
          card: '#12396E',
        },
        cocoa: {
          DEFAULT: '#12396E',
          dark: '#0B2D5B',
          light: '#1A4580',
        },
        taupe: {
          DEFAULT: '#64748B',
          light: '#8392A8',
          dark: '#475569',
        },
        bronze: {
          DEFAULT: '#2F5E9E',
          light: '#6B93CC',
          dark: '#1E4C8C',
        },
        gold: {
          DEFAULT: '#3E6FB5',
          light: '#A9C1E3',
          bright: '#CBD5E1',
          dark: '#2F5E9E',
          muted: '#64748B',
        },
        sand: {
          DEFAULT: '#CBD5E1',
          light: '#F1F5F9',
          dark: '#94A3B8',
        },
        charcoal: {
          DEFAULT: '#2A2A2A',
          dark: '#1F1F1F',
          light: '#3A3A3A',
        },
        forest: {
          DEFAULT: '#0B2D5B',
          dark: '#071F40',
          medium: '#12396E',
          light: '#1A4580',
          card: '#12396E',
        },
        cream: {
          DEFAULT: '#CBD5E1',
          light: '#F1F5F9',
          medium: '#B6C2D2',
          dark: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
        serif: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -15px rgba(11, 45, 91, 0.12)',
        gold: '0 10px 40px -10px rgba(62, 111, 181, 0.4)',
        deep: '0 30px 80px -20px rgba(7, 31, 64, 0.6)',
        card: '0 12px 32px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #A9C1E3 0%, #3E6FB5 50%, #2F5E9E 100%)',
        'forest-gradient': 'linear-gradient(180deg, #0B2D5B 0%, #071F40 100%)',
        'espresso-gradient': 'linear-gradient(180deg, #12396E 0%, #0B2D5B 100%)',
        'cream-gradient': 'linear-gradient(180deg, #F1F5F9 0%, #CBD5E1 100%)',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'kenburns': {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '50%': { transform: 'scale(1.12) translate(0.8%, -0.8%)' },
          '100%': { transform: 'scale(1) translate(0,0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 16s linear infinite',
        'kenburns': 'kenburns 14s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

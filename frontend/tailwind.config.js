/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B1220',
          soft: '#0E1526',
        },
        primary: {
          DEFAULT: '#7C5CFC',
          soft: '#A690FF',
          dark: '#5A3FF5'
        },
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      }
    },
  },
  plugins: [],
}

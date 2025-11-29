/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#a3e635', // lime-400
          dark: '#0B0F19',
          gray: '#F3F4F6',
        }
      }
    },
  },
  plugins: [],
}
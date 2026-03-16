/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sport: {
          green: '#22c55e',
          dark: '#14532d',
        }
      }
    },
  },
  plugins: [],
}
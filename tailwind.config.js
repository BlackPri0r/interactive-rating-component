/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        white: 'hsl(0, 0%, 100%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'grey': 'hsl(216, 18%, 54%)',
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        overpass: ['Overpass']
      }
    },
  },
  plugins: [],
}
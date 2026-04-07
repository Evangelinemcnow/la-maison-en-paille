/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fredericka: ['var(--font-fredericka)'],
        raleway: ['Raleway', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'header-bg': '#3d1a0e',
        'terra': '#8b3a2a',
        'terra-light': '#c4613a',
        'paille-bg': '#c8824a',
        'card-paille': '#c8a040',
        'card-terre': '#c06030',
        'card-photo': '#6a8e9a',
        'footer-bg': '#c4613a',
      },
    },
  },
  plugins: [],
}
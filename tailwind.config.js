/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itim: ['Itim', "cursive"],
      },
      backgroundColor: {
        radialGradient: "radial-gradient(101.11% 2047.5% at -1.11% 59.38%, #F78CA2 0%, rgba(247, 140, 162, 0.666579) 25%, rgba(247, 140, 162, 0.44) 50%, rgba(247, 140, 162, 0.593243) 75%, #F78CA2 100%)"
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}
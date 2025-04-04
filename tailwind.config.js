/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#3C206A',
        yellow: '#FFE55F',
        violet: '#C9B7E7'
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 48px rgba(0, 0, 0, .25)',
      }
    },
  },
  plugins: [],
}


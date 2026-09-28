/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C1714',
        cream: '#F4EFE7',
        linen: '#E8DED0',
        moss: '#596452',
        clay: '#A35D42',
        sand: '#C8AD8D',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -30px rgb(28 23 20 / 0.35)',
      },
      letterSpacing: {
        editorial: '0.16em',
      },
    },
  },
  plugins: [],
}

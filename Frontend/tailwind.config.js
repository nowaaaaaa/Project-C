/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        roboto: "'RobotoCondensed', serif"
      },
      colors: {
        vBlue:'#009fe3',
        vBlueHover: '#0281B7',
        vLogoBlue:'#03ACEE'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

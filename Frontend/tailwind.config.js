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
      },
    },
  },
  plugins: [],
}

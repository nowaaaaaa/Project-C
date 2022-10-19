/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
      },
      colors: {
        vBlue:'#009fe3',
      },
    },
  },
  plugins: [],
}

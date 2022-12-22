/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
  require("daisyui"),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/typography'),
],
}
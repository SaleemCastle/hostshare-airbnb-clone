/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
        'xs': '540px',
        ...defaultTheme.screens,
    },
    extend: {
        fontFamily: {
            circular: 'circular'
        }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
  darkMode: 'class'
}


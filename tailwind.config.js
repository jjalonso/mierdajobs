/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#444',
      white: '#FFF',
      primary: {
        tint: '#F2EEFF',
        light: '#9374F3',
        DEFAULT: "#8663F3",
        dark: "#7052CE"
      },
      gray: {
        tint: '#ECECEC',
        light: "#e4e4e7",
        DEFAULT: "#909090",
        dark: '#616161'
      },
    },
    extend: {},
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
}
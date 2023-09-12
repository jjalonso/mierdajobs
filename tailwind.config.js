/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#333',
      white: '#FFF',
      primary: {
        light: '#F2EEFF',
        DEFAULT: "#8663F3",
        dark: "#5D44AB"
      },
      gray: {
        light: '#F0F3F3',
        DEFAULT: "#D7DBDC",
        dark: '#929596'
      },
      purple: {
        100: '#faf7ff'
      },
      shade: {
        light: "rgba(255, 255, 255, 0.1)",
        dark: "rgba(0, 0, 0, 0.1)",
      }
    },
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}
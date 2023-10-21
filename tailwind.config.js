/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#343434",
      white: "#FFF",
      primary: {
        light: "#FFAED8",
        DEFAULT: "#cc5994",
        dark: "#780C43"
      },
      secondary: {
        light: "#BEA0E7",
        DEFAULT: "#732fd3",
        dark: "#400692"
      },
      gray: {
        tint: "#F3F3F3",
        light: "#DDDDE0",
        DEFAULT: "#909090",
        dark: "#616161"
      },
      error: {
        DEFAULT: "#F50057"
      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    require("@tailwindcss/forms")
  ]
}
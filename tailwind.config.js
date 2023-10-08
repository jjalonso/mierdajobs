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
      black: "#444",
      white: "#FFF",
      primary: {
        tint: "#F2EEFF",
        light: "#9374F3",
        DEFAULT: "#8663F3",
        dark: "#7052CE"
      },
      gray: {
        tint: "#F3F3F3",
        light: "#E4E4E7",
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
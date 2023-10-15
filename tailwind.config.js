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
        tint: "#F2EEFF",
        light: "#9374F3",
        DEFAULT: "#6F50D0",
        dark: "#7052CE"
      },
      gray: {
        tint: "#F3F3F3",
        light: "#E4E4E7",
        DEFAULT: "#909090",
        dark: "#5A42A6"
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
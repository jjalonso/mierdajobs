/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {
      backgroundImage: {
        "purple-shapes": "url('/backgrounds/purple-shapes.png')",
      },
    },
    colors: {
      transparent: "transparent",
      black: "#343434",
      white: "#FFF",
      primary: {
        light: "#BEA0E7",
        DEFAULT: "#5b21b6",
        dark: "#400692"
      },
      secondary: {
        light: "#FAAEC5",
        DEFAULT: "#C86B87",
        dark: "#83344C"
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
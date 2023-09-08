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
    // colors: {
    //   transparent: 'transparent',
    //   black: '#000',
    //   white: '#fff',
    //   brand: {
    //     purple: '#8663F3',
    //   },
    // },
    extend: {},
  },
  plugins: [require("daisyui")],
}
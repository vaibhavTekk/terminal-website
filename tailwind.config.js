/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        andromedablack: "#000000",
        andromedared: "#cd3131",
        andromedagreen: "#05bc79",
        andromedayellow: "#e5e512",
        andromedablue: "#2472c8",
        andromedapurple: "#bc3fbc",
        andromedacyan: "#0fa8cd",
        andromedawhite: "#e5e5e5",
        andromedabrightBlack: "#666666",
        andromedabrightRed: "#cd3131",
        andromedabrightGreen: "#05bc79",
        andromedabrightYellow: "#e5e512",
        andromedabrightBlue: "#2472c8",
        andromedabrightPurple: "#bc3fbc",
        andromedabrightCyan: "#0fa8cd",
        andromedabrightWhite: "#e5e5e5",
        andromedabackground: "#262a33",
        andromedaforeground: "#e5e5e5",
        andromedaselectionBackground: "#5a5c62",
        andromedacursorColor: "#f8f8f0",
      },
    },
  },
  plugins: [],
};

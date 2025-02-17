/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEFF05",
        primary1: "#E5E608",
        primary2: "#FFD63C",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        atkinson: ["Atkinson Hyperlegible", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

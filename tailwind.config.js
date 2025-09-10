/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffd63c",
        primary1: "#ffd63c",
        primary2: "#ffd63c",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        glacial: ["Glacial Indifference", "sans-serif"],
        ibmPlex: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

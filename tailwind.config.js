/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#147487",
        primary2: "#0A3A44",
        secondary1: "#A9D5DD",
        secondary2: "#F7F7F7",
        accent1: "#C9E8FF",
        accent2: "#B2D1E6",
      },
    },
  },
  plugins: [],
};

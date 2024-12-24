/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        desktop: 1450,
      },
      colors: {
        main: "#f7f9fc",
        sidenav: "#233044",
        sidenav2: "#202c3f",
        primary1: "#147487",
        primary2: "#0A3A44",
        secondary1: "#A9D5DD",
        secondary2: "#F7F7F7",
        accent1: "#C9E8FF",
        accent2: "#B2D1E6",
      },
      fontSize: {
        md: "0.8rem",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#fefefe",
        darkSky: "#4b6a9b",
      },
      backgroundColor: {
        bodyDarkMode: "rgb(20, 29, 47)",
        bodyLightMode: "rgb(246, 248, 255)",
        semiDark: "#1e2a47;",
        electric: "#0079ff",
        dark: "#141d2f",
        lightBg: "#f6f8ff",
      },
      boxShadow: {
        cardShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
      },
    },
  },
  plugins: [],
};

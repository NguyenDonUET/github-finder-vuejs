/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        bodyDarkMode: "rgb(20, 29, 47)",
        bodyLightMode: "rgb(246, 248, 255)",
      },
    },
  },
  plugins: [],
};

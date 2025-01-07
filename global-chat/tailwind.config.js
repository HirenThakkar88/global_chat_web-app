/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', "sans-serif"],
      },
      colors: {
        gradientStart: "#7209b7",
        gradientEnd: "#4361ee",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGray: "#222222",
        mediumGray: "#C1C1C1",
        lightGray: "#F2F2F2",
        thinborderGray: "#808080",
        primaryGreen: "#006200",
      },
    },
  },
  plugins: [],
};

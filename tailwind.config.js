/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#151616",
        "selected-text": "#A3A3FF",
        theme: "#3F3FFF",
        "theme-highlight": "#A3A3FF",
      },
      fontFamily: {
        header: "var(--header-font)",
        hero: "var(--hero-font)",
      },
    },
  },
  plugins: [],
};

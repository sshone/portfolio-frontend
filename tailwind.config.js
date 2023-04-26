/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#151616",
        "selected-text": "#A3A3FF",
        theme: "#3F3FFF",
        "theme-highlight": "#A3A3FF",
        element: "#3f32e4"
      },
      fontFamily: {
        header: "var(--poppins-font)",
        standard: "var(--inter-font)",
      },
    },
  },
  plugins: [],
};

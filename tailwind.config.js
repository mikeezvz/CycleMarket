/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cycle: {
          50: "#ecfbf1",
          100: "#cff6dd",
          300: "#8ee6ac",
          500: "#2fbf78",
          700: "#1e9b68",
          900: "#0f5d3a",
        },
        beige: {
          50: "#f9f7f3",
          100: "#f3efe6",
          200: "#e8dfcc",
          300: "#dbc8a8",
          500: "#c9ad80",
          700: "#a8895f",
        },
      },
    },
  },
  plugins: [],
};

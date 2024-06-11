/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        comic: ['"Comic Neue"', "cursive"],
        dynalight: ["Dynalight", "cursive"],
      },
      letterSpacing: {
        "6px": "3px",
      },
      boxShadow: {
        bottom: "0 4px 0 rgba(204, 153, 51, 1)",
        card: "0px 10px 100px 8px #00000040",
      },
    },
  },
  plugins: [],
};

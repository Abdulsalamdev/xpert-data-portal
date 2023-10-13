/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      nunito: ["Nunito Sans", "sans - serif"],
    },
    fontSize: {
      16: "16px",
      60: "clamp(30px,3.75vw,60px)",
    },
    screens: {
      sm: "425px",
      md: "725px",
      lg: "980px",
      xl: "1440px",
    },
    colors: {
      "SKY-CAPTAIN": "#252735",
      "SCRIPT-INK": "#5E606A",
      "LIQUID-DENIM": "283A9D",
      "PARTRIDGE-GREY": "#8F9198",
      "BLUE-SASH": "#4A4C58",
      "MOTE-OF-DUST": "#C1C2C6",
      "RED-INFERNO": "#BF2018",
      "KIKORANGI-BLUE": "#3045BC",
      bgdark: "#1A212E",
      "": "",
    },
  },
  plugins: [],
};

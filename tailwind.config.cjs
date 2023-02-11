/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        blueCrayola: "hsl(227, 13%, 73%)",
        yellowRed: "hsl(41, 95%, 61%)",
        seaGreen: "hsl(142, 43%, 54%)",
        blueCrayola_10: "hsla(222, 100%, 61%, 0.05)",
        smockyBlack_30: "hsla(0, 0%, 6%, 0.3)",
        eerieBlack_1: "rgb(10, 16, 23)",
        eerieBlack_2: "rgb(7, 17, 27)",
        raisinBlack: "hsl(225, 15%, 16%)",
        blueCrayola: "hsl(222, 100%, 61%)",
        romanSilver: "hsl(223, 10%, 52%)",
        presianRed: "hsl(0, 64%, 52%)",
        gunmetal_50: "hsla(230, 16%, 22%, 0.5)",
        gainsboro: "hsl(0, 0%, 85%)",
        cultured: "hsl(0, 0%, 93%)",
        white_50: "hsla(0, 0%, 100%, 0.5)",
        white_30: "hsla(0, 0%, 100%, 0.3)",
        white_10: "hsla(0, 0%, 100%, 0.1)",
        black_10: "hsla(0, 0%, 0%, 0.1)",
        white: "hsl(0, 0%, 100%)",
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
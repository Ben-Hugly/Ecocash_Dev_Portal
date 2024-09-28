/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Example: Include all files in the 'src' directory
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //old colors
        primary: "#00162A",
        secondary: "#08081B",
        bgWhite: "#F2F8FF",
        textBlue: "#1E92FB",
        textBlueSecond: "#035AA9",
        textBlueThird: "#035DAF",
        borderBlue: "#02437D",
        borderBlueSecond: "#82C2FD",
        textRed: "#EC2125",
        blue: "#7FB7F2",
        dimBlue: "#02437D",
        lightBlue: "#C5E3FF",

        //Dark Theme Colors
        backgroundDark: "#08081B",
        componentsBackgroundDark: "#00162A",
        successDark: "#88DF52",
        dangerDark: "#F62447",
        warningDark: "#ffe68c",
        darkBgHover: "#061F35",
        darkBgComponents: "#00162A",

        //Light Theme Colors
        backgroundLight: "#FFFFFF",
        componentsBackgroundLight: "#F2F8FF",
        successLight: "#88DF52",
        dangerLight: "#E31A1C",
        warningLight: "#FEAF58",
        buttonBluePastelLight: "#C5E3FF",
        headerTextLight: "#035DAF",
        borderLight: "#D8ECFF",
        lightBgHover: "#f3f4f6",

        //Universal colors
        buttonBlue: "#035AA9",
        textDimBlue: "#035DAF",
        textBrightBlue: "#1E92FB", // also text heading dor dark mode
        textWhite: "#F2F8FF",
        textBlack: "#232323",
        pearlBlue: " #7FB7F2",
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

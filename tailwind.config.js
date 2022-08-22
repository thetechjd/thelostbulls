const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '1000px',
        'xs': '540px'
      },
      fontFamily: {
        "josefin": ["Josefin Sans", ...defaultTheme.fontFamily.mono],
        "inter": ["Inter", ...defaultTheme.fontFamily.mono],
        "orion": ["Orion", "cursive"],
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        comfortaa: ["'Comfortaa', cursive"],
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: "#0f1033",
        secondary: "#7d08ff",
        // primary: "var(--primary)",
        // secondary: "var(--secondary)",
        // main: "var(--main)",
        // background: "var(--background)",
        // header: "var(--header)",
        // accent: "var(--accent)",
        light: 'var(--clr-light)',
        purplee: 'var(--clr-purple)',
        pinkk: 'var(--clr-pink)',
        lightpink: '#ffb4db',
        fuschia: '#9f2daa',
        teal: '#04c5c8',
        yelloww: 'var(--clr-yellow)',
        brightyellow: '#fcf003',
        bluee: 'var(--clr-blue)',
        greenn: 'var(--clr-green)',
        lime: '#00ff77',
        titanium: '#878681',
        aqua: '#31cadc',
        background: 'var(--clr-background)'
      },
    },
  },
  plugins: [],
}

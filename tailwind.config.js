const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "*.vue"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.green,
      },
      fontFamily: {
        sans: ["Poppins"],
      },
      padding: {
        desktop: "200px",
      },
    },
  },
  plugins: [],
};

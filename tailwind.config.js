/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

function withVar(variable) {
  return `var(${variable})`;
}
module.exports = {
  important: true,
  content: ["./**/*.{vue,js,ts,jsx,tsx}"],
  purge: [
    "./assets/**/*.scss",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./*.{vue,js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacityValue("--color-primary-rgb"),
        "el-primary": withVar("--el-color-primary"),
        cultured: withOpacityValue("--color-cultured-rgb"),
        eerieBlack: withOpacityValue("--color-eerie-black-rgb"),
        darkLavender: withOpacityValue("--color-dark-lavender-rgb"),
        darkSilver: withOpacityValue("--color-dark-silver-rgb"),
        red: withOpacityValue("--color-red-rgb"),
        flashWhite: withOpacityValue("--color-flash-white-rgb"),
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      fontFamily: {
        title: ["Dosis", "sans-serif"],
      },
    },
    screens: {
      ssm: { min: "300px", max: "639px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};

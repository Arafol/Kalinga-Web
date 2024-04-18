/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: "",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      scrollbar: {
        default: {
          size: "spacing.1",
          track: { background: "lightgray" },
          thumb: { background: "gray" },
          hover: { background: "darkgray" },
        },
        thin: {
          size: "2px",
          track: { background: "lightgray" },
          thumb: { background: "gray" },
          hover: { background: "darkgray" },
        },
        primary: {
          size: "1rem",
          track: { background: "#FFD1D7" },
          thumb: { background: "#eb90ac" },
          hover: { background: "#E60965" },
        },
        secondary: {
          size: ".5rem",
          track: { background: "#FFD1D7" },
          thumb: { background: "#eb90ac" },
          hover: { background: "#E60965" },
        },
      },
      fontFamily: {
        kurale: ["Kurale", "serif"],
      },
      colors: {
        primary: {
          default: "#E60965",
          variant: "#F94892",
        },
        secondary: {
          default: "#eb90ac",
          variant: "#FFD1D7",
        },
        neutral: {
          primary: "#212B36",
          secondary: "#5E738A",
          800: "#333F4D",
          700: "#425263",
          600: "#516579",
          300: "#8D9DAE",
          200: "#ADB9C6",
          100: "#CCD5DE",
          50: "#F4F6F8",
        },
      },
    },
  },
  daisyui: {
    themes: false,
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: false,
    themes: [
      {
        mytheme: {
          primary: "#FFB6C1",
          secondary: "#FF45AA",
          accent: "#FF7086",
          neutral: "#FF1493",
          "base-100": " #FAF7F7",
          info: "#248EF2",
          success: "#39B54A",
          warning: "#FFB400",
          error: "#FF0000",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("@gradin/tailwindcss-scrollbar"),
    require("tailwindcss-autofill"),
    require("tailwindcss-debug-screens"),
    require("tailwind-scrollbar-hide"),
    require("daisyui"),
  ],
};
